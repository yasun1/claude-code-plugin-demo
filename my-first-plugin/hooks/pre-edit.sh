#!/bin/bash
# Pre-edit hook: Validates file before editing

FILE_PATH="$1"

echo "🔍 Pre-edit check for: $FILE_PATH"

# Check if file exists
if [ -f "$FILE_PATH" ]; then
    # Check if tracked by git
    if git ls-files --error-unmatch "$FILE_PATH" &> /dev/null; then
        echo "✓ File is tracked by git"
    else
        echo "⚠️  Warning: File is not tracked by git"
        echo "   Consider adding it with: git add $FILE_PATH"
    fi

    # Check file size
    SIZE=$(wc -c < "$FILE_PATH" 2>/dev/null || echo 0)
    if [ "$SIZE" -gt 1000000 ]; then
        echo "⚠️  Warning: Large file ($(echo "scale=2; $SIZE/1024/1024" | bc)MB)"
        echo "   Consider if this should be edited"
    fi
else
    echo "ℹ️  New file will be created"
fi

exit 0
