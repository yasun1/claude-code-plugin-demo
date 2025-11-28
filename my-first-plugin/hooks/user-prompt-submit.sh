#!/bin/bash
# User prompt submit hook: Logs and validates user prompts

PROMPT="$1"

# Create log directory if it doesn't exist
LOG_DIR=".claude-plugin/logs"
mkdir -p "$LOG_DIR"

# Log the prompt
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
LOG_FILE="$LOG_DIR/prompt-history.log"
echo "[$TIMESTAMP] $PROMPT" >> "$LOG_FILE"

# Check for potentially dangerous commands
if echo "$PROMPT" | grep -Eqi "(rm -rf /|format|delete all|drop database)"; then
    echo "⚠️  WARNING: Detected potentially destructive command!"
    echo "   Please review carefully before proceeding."
    echo ""
fi

# Check for git force operations
if echo "$PROMPT" | grep -Eqi "(git push.*--force|git reset --hard|git clean -fdx)"; then
    echo "⚠️  WARNING: Detected potentially destructive git operation!"
    echo "   Make sure you understand the consequences."
    echo ""
fi

# Check for production-related keywords
if echo "$PROMPT" | grep -Eqi "(production|prod|live environment)"; then
    echo "⚠️  CAUTION: Production environment mentioned"
    echo "   Double-check all operations on production systems."
    echo ""
fi

# Provide helpful tips for common patterns
if echo "$PROMPT" | grep -qi "create.*test"; then
    echo "💡 Tip: Consider using TDD - write tests first!"
    echo ""
fi

if echo "$PROMPT" | grep -qi "refactor"; then
    echo "💡 Tip: Make sure tests pass before and after refactoring"
    echo ""
fi

exit 0
