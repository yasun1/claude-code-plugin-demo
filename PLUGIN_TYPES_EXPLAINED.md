# Claude Code Plugin Types Explained

A complete guide for beginners, explaining what each plugin type is, why you need it, and how to use it.

---

## Table of Contents

1. [What are Claude Code Plugins?](#what-are-claude-code-plugins)
2. [Five Plugin Types Overview](#five-plugin-types-overview)
3. [Commands](#1-commands)
4. [Skills](#2-skills)
5. [Agents](#3-agents)
6. [Hooks](#4-hooks)
7. [MCP Servers](#5-mcp-servers)
8. [How to Choose Which Type to Use?](#how-to-choose-which-type-to-use)
9. [Plugin Type Comparison Table](#plugin-type-comparison-table)

---

## What are Claude Code Plugins?

### Simple Understanding

Claude Code plugins are like adding "skill packs" or "toolboxes" to Claude:

- 🎯 **Without plugins**: Claude can only help you through conversation
- ✨ **With plugins**: Claude can execute specific tasks, automate workflows, integrate external tools

### Analogy

Think of Claude Code as an assistant:

- **Default state**: Smart but can only talk
- **With plugins installed**: Besides talking, can operate tools, execute tasks, work automatically

---

## Five Plugin Types Overview

```
From simple to complex:

Commands    →  Skills    →  Hooks    →  MCP Servers  →  Agents
  ↓            ↓           ↓              ↓               ↓
Shortcuts   Reusable    Automation    Tool           Autonomous
            Abilities   Triggers      Extensions     Execution
```

### Quick Comparison

| Type | Complexity | Automation | Best For |
|------|------------|------------|----------|
| Commands | ⭐ | Manual | Quick tasks |
| Skills | ⭐⭐ | Manual/Auto | Repetitive work |
| Hooks | ⭐⭐ | Fully Auto | Event response |
| MCP Servers | ⭐⭐⭐ | On-demand | Tool integration |
| Agents | ⭐⭐⭐⭐ | Autonomous | Complex tasks |

---

## 1. Commands

### What is a Command?

A Command is the **simplest plugin type**, like creating shortcuts for Claude.

### Everyday Analogy

**Like shortcuts on your phone:**
- You create a "Open Music Player" shortcut on your phone's home screen
- One tap executes a predefined action
- Commands are the "shortcuts" in Claude Code

### How It Works

```
User input: /my-command
           ↓
Claude reads command definition (preset prompt)
           ↓
Claude executes this prompt
           ↓
Returns result
```

### Real Examples

#### Example 1: Hello Command
```markdown
---
description: Say hello to the user
---
Please greet the user and tell them the current time.
```

**Usage:**
```
/hello
```

**Effect:**
```
Hello! 👋 It's currently 2:30 PM on January 15, 2024.
How can I help you today?
```

#### Example 2: Project Statistics
```markdown
---
description: Show project statistics
---
Generate project statistics:
1. Count files by type
2. Total lines of code
3. Largest files
```

**Usage:**
```
/project-stats
```

**Effect:**
```
Project Statistics:
- JavaScript files: 45 (12,345 lines)
- Python files: 23 (5,678 lines)
- Largest file: src/main.js (890 lines)
```

### When to Use Commands?

✅ **Good for:**
- Frequently repeated simple tasks
- Fixed queries or analyses
- Quick information retrieval
- Standardized workflows

❌ **Not suitable for:**
- Complex logic decisions
- Multi-step execution
- Automatic triggering
- External tool integration

### Pros and Cons

**Pros:**
- 🟢 Extremely simple, learn in 5 minutes
- 🟢 Easy to use, one command does it all
- 🟢 Easy to share and maintain

**Cons:**
- 🔴 Limited functionality, only executes fixed processes
- 🔴 Cannot trigger automatically
- 🔴 Cannot call external tools

---

## 2. Skills

### What is a Skill?

A Skill is a **reusable capability**, more flexible and powerful than Commands.

### Everyday Analogy

**Like learning a skill:**
- After learning to "ride a bike," you can use it in different scenarios
- You can bike to work, bike shopping, bike for exercise
- Skills are Claude's "professional abilities"

### Difference from Commands

| Feature | Commands | Skills |
|---------|----------|--------|
| Invocation | `/command` | "Use the skill-name skill" |
| Flexibility | Fixed process | Adapts to context |
| Complexity | Simple | Medium to complex |
| Triggering | Manual only | Manual or automatic |

### How It Works

```
User or event trigger
       ↓
Skill is activated (with context)
       ↓
Claude works based on skill definition + current context
       ↓
Executes complex multi-step operations
       ↓
Returns result
```

### Real Examples

#### Example 1: Code Reviewer Skill

**Definition:**
```markdown
---
name: code-reviewer
description: Perform comprehensive code review
trigger: after_write  # Optional: auto-trigger after writing code
---

You are a code review expert. Review code for:
1. Code quality
2. Performance issues
3. Security vulnerabilities
4. Best practices
...
```

**Manual usage:**
```
Use the code-reviewer skill to review src/app.js
```

**Auto-trigger:**
```
# After you write code, this skill runs automatically
# No manual invocation needed
```

**Effect:**
```
Code Review Report for src/app.js:

🔴 Critical Issues (2):
  - Line 45: SQL injection vulnerability
  - Line 78: Division by zero not handled

⚠️ Warnings (5):
  - Line 12: Function too long (85 lines)
  - Line 33: Hardcoded API key
  ...
```

#### Example 2: Documentation Generator Skill

**Usage:**
```
Use the doc-generator skill to document the Calculator class
```

**Effect:**
```
Added documentation:
- JSDoc comments for all methods
- Parameter descriptions
- Return value documentation
- Usage examples
- README section
```

### When to Use Skills?

✅ **Good for:**
- Capabilities reused across different contexts
- Professional processes that can be standardized (code review, doc generation)
- Tasks that need automatic triggering
- Deep analysis or processing

❌ **Not suitable for:**
- One-time simple tasks (use Command)
- Fully autonomous decisions (use Agent)
- Calling external APIs (use MCP Server)

### Pros and Cons

**Pros:**
- 🟢 Reusable, adapts to different scenarios
- 🟢 Can trigger automatically
- 🟢 Supports complex logic
- 🟢 Maintains consistent working style

**Cons:**
- 🔴 More complex than Commands
- 🔴 Requires careful design
- 🔴 Cannot call external tools (need MCP)

---

## 3. Agents

### What is an Agent?

An Agent is an **autonomous task executor** that can think independently, make plans, and execute multi-step tasks.

### Everyday Analogy

**Like hiring a professional:**
- You tell an architect: "Design a house for me"
- The architect will: research, design, revise, refine on their own
- You don't need to tell them every step
- Agents are like these "professional workers"

### Difference from Skills

| Feature | Skills | Agents |
|---------|--------|--------|
| Autonomy | Works by instruction | Makes decisions |
| Working style | Executes predefined process | Creates and executes plan |
| Complexity | Medium | High |
| Use cases | Standardized tasks | Exploratory tasks |

### How It Works

```
User gives goal
       ↓
Agent analyzes task
       ↓
Agent creates plan
       ↓
Agent executes autonomously (may iterate multiple times)
   - Search code
   - Analyze problems
   - Apply fixes
   - Verify results
       ↓
Agent reports results
```

### Real Examples

#### Example 1: Bug Hunter Agent

**Usage:**
```
Launch the bug-hunter agent to find bugs in this codebase
```

**Agent's autonomous workflow:**

1. **Discovery phase** (Agent decides)
   - Scan all files
   - Search for common bug patterns
   - Identify suspicious code

2. **Analysis phase** (Agent analyzes)
   - Understand context
   - Determine root cause
   - Assess severity

3. **Fix phase** (Agent fixes)
   - Implement fix
   - Add comments
   - Consider edge cases

4. **Verification phase** (Agent verifies)
   - Check for new issues
   - Look for similar bugs
   - Run tests

**Effect:**
```
Bug Hunter Agent Report:

Found and fixed 5 bugs:

Bug #1: Division by Zero
  Location: utils.js:45
  Severity: Critical
  Fix: Added zero check before division
  Status: ✅ Fixed

Bug #2: Null Pointer
  Location: auth.js:78
  Severity: High
  Fix: Added null check and error handling
  Status: ✅ Fixed

...

Total time: 2 minutes
Files modified: 3
Tests passing: ✅ All passed
```

#### Example 2: Refactor Master Agent

**Usage:**
```
Run the refactor-master agent on the legacy code in src/old/
```

**Agent works autonomously:**

1. Identify code smells
   - Long methods
   - Duplicate code
   - Complex conditions

2. Create refactoring plan
   - Prioritization
   - Risk assessment

3. Gradual refactoring
   - Extract methods
   - Simplify logic
   - Rename variables

4. Verify and report
   - Ensure tests pass
   - Record improvements

### When to Use Agents?

✅ **Good for:**
- Tasks requiring exploration and discovery (finding bugs, optimizing performance)
- Multi-file, multi-step complex tasks
- Work requiring autonomous decisions
- Long-running background tasks

❌ **Not suitable for:**
- Simple, clear tasks (use Command)
- Precise control of each step (use Skill)
- Real-time interaction (Agents work in batch mode)

### Pros and Cons

**Pros:**
- 🟢 Highly autonomous, reduces manual intervention
- 🟢 Handles complex tasks
- 🟢 Intelligent decision-making
- 🟢 Comprehensive and thorough

**Cons:**
- 🔴 Longer execution time
- 🔴 Results may be unpredictable
- 🔴 Requires careful safety constraints
- 🔴 Difficult to debug

---

## 4. Hooks

### What is a Hook?

A Hook is an **event-triggered automation script** that runs automatically when specific events occur.

### Everyday Analogy

**Like automatic door sensors:**
- You approach the door → Door opens automatically
- You don't need to press a button
- Hooks are like these "automatic triggers"

**Or like a car's safety systems:**
- You don't buckle seatbelt → Alarm sounds automatically
- You reverse → Camera activates automatically
- You leave car → Doors lock automatically

### How It Works

```
Event occurs (edit file, commit code, etc.)
       ↓
Hook triggers automatically
       ↓
Executes predefined script
       ↓
Shows result or warning
       ↓
Continues original operation (or blocks it)
```

### Available Hook Types

Claude Code supports multiple hook events:

1. **pre-edit** - Before editing file
2. **post-write** - After writing file
3. **user-prompt-submit** - When user submits prompt
4. And more...

### Real Examples

#### Example 1: Pre-Edit Hook (Pre-Edit Check)

**Scenario:** Prevent editing important files

**Script:**
```bash
#!/bin/bash
FILE_PATH="$1"

# Check if production config
if echo "$FILE_PATH" | grep -q "production.config"; then
    echo "⚠️  WARNING: This is a production config file!"
    echo "   Please be extra careful."
fi

# Check file size
SIZE=$(wc -c < "$FILE_PATH")
if [ "$SIZE" -gt 1000000 ]; then
    echo "⚠️  Large file ($(($SIZE/1024))KB)"
fi
```

**Effect:**
```
# When you try to edit production.config
⚠️  WARNING: This is a production config file!
   Please be extra careful.

# Operation continues, but you received warning
```

#### Example 2: Post-Write Hook (Post-Write Formatting)

**Scenario:** Automatically format code

**Script:**
```bash
#!/bin/bash
FILE_PATH="$1"

case "$FILE_PATH" in
  *.js)
    prettier --write "$FILE_PATH"
    echo "✅ JavaScript formatted"
    ;;
  *.py)
    black "$FILE_PATH"
    echo "✅ Python formatted"
    ;;
esac
```

**Effect:**
```
# You created or modified app.js
# Hook runs automatically:
✅ JavaScript formatted with Prettier

# Your code is automatically formatted!
```

#### Example 3: User Prompt Submit Hook (On Prompt Submission)

**Scenario:** Security check and logging

**Script:**
```bash
#!/bin/bash
PROMPT="$1"

# Log it
echo "[$(date)] $PROMPT" >> .logs/prompt-history.log

# Check for dangerous operations
if echo "$PROMPT" | grep -qi "rm -rf /"; then
    echo "⛔ DANGER: Detected destructive command!"
    echo "   Please review carefully."
fi

# Check production environment
if echo "$PROMPT" | grep -qi "production"; then
    echo "⚠️  Production environment mentioned"
fi
```

**Effect:**
```
# You type: "Delete all files in production"
⛔ DANGER: Detected destructive command!
   Please review carefully.
⚠️  Production environment mentioned

# Prompt is logged, you receive warnings
```

### When to Use Hooks?

✅ **Good for:**
- Code formatting (maintain consistent code style)
- Security checks (prevent dangerous operations)
- Logging (track operation history)
- File validation (ensure files meet standards)
- Automate repetitive work

❌ **Not suitable for:**
- Complex logic needed (use Agent)
- User interaction needed (Hooks are automatic)
- Long-running tasks (Hooks should be fast)

### Pros and Cons

**Pros:**
- 🟢 Fully automated, no manual triggering
- 🟢 Ensures consistency (runs every time)
- 🟢 Prevents problems (before they occur)
- 🟢 Improves efficiency (automate repetitive work)

**Cons:**
- 🔴 Requires writing shell scripts
- 🔴 May slow down workflow (if too slow)
- 🔴 Harder to debug
- 🔴 May cause unexpected side effects

---

## 5. MCP Servers

### What is an MCP Server?

MCP (Model Context Protocol) Server is a **tool server that extends Claude's capabilities**, providing custom tools and resources.

### Everyday Analogy

**Like installing apps on your phone:**
- Phone has limited built-in features
- Install calculator app → Can calculate
- Install maps app → Can navigate
- MCP Server is like adding "apps" to Claude

**Or like a toolbox:**
- Carpenter has toolbox: saw, hammer, drill
- Different jobs need different tools
- MCP Server is Claude's "toolbox"

### Difference from Other Types

| Feature | Commands/Skills | MCP Servers |
|---------|-----------------|-------------|
| Capability source | Claude itself | External tools/APIs |
| Function type | Text processing, analysis | Computing, API calls, data processing |
| Implementation | Markdown prompts | Code implementation |
| Extensibility | Limited | Unlimited |

### How It Works

```
Claude needs to use tool
       ↓
Calls MCP Server
       ↓
MCP Server executes (calculation, API call, etc.)
       ↓
Returns result to Claude
       ↓
Claude continues working
```

### What Does MCP Server Provide?

1. **Tools** - Functions Claude can call
2. **Resources** - Data Claude can access

### Real Examples

#### Example 1: Calculator Tool

**Tool definition:**
```javascript
{
  name: "calculate",
  description: "Perform mathematical calculations",
  inputSchema: {
    expression: "string"  // e.g., "2 + 2"
  }
}
```

**Claude usage:**
```
User: Calculate (123 + 456) * 789
       ↓
Claude understands calculation needed
       ↓
Claude calls MCP tool: calculate("(123 + 456) * 789")
       ↓
MCP Server calculates: 456,831
       ↓
Claude responds: The result is 456,831
```

#### Example 2: UUID Generator Tool

**Usage:**
```
User: Generate 5 UUIDs for my database records
```

**Claude's work:**
```
Claude: I need to generate UUIDs
  ↓
Calls MCP tool: uuid_generate(count: 5)
  ↓
MCP returns:
  550e8400-e29b-41d4-a716-446655440000
  6ba7b810-9dad-11d1-80b4-00c04fd430c8
  ...
  ↓
Claude: Here are 5 UUIDs:
  1. 550e8400-e29b-41d4-a716-446655440000
  2. ...
```

#### Example 3: External API Integration

**Real scenario: Jira Integration**

```javascript
// MCP Server tool
{
  name: "jira_create_ticket",
  description: "Create a JIRA ticket",
  inputSchema: {
    title: "string",
    description: "string",
    priority: "string"
  }
}
```

**Usage:**
```
User: Create a JIRA ticket for the bug we just found
```

**Effect:**
```
Claude:
1. Understands user intent
2. Calls jira_create_ticket tool
3. MCP Server calls Jira API
4. Returns ticket number
5. Claude tells user: "Created ticket PROJ-123"
```

#### Example 4: Resources

**Resource definition:**
```javascript
{
  uri: "weather://current",
  name: "Current Weather",
  mimeType: "application/json"
}
```

**Claude access:**
```
User: What's the weather like?
  ↓
Claude reads weather://current resource
  ↓
MCP Server returns current weather data
  ↓
Claude: It's currently 72°F and sunny
```

### When to Use MCP Servers?

✅ **Good for:**
- Calling external APIs (GitHub, Jira, Database)
- Specialized computation (complex math, encryption, image processing)
- Accessing external resources (file system, database, network)
- Tool integration (CLI tools, SDKs)

❌ **Not suitable for:**
- Pure text processing (use Commands/Skills)
- No external capabilities needed (use other plugin types)

### Pros and Cons

**Pros:**
- 🟢 Unlimited extension of Claude's capabilities
- 🟢 Integrate any external tool or API
- 🟢 Reuse existing code and services
- 🟢 Standardized protocol (MCP)

**Cons:**
- 🔴 Requires programming implementation
- 🔴 Requires running additional service
- 🔴 Relatively complex debugging
- 🔴 Requires code maintenance

---

## How to Choose Which Type to Use?

### Decision Tree

```
Start
 ↓
Need external tools/APIs?
 ├─ Yes → MCP Server
 └─ No ↓

Need automatic triggering?
 ├─ Yes → Hook or Skill (with trigger)
 └─ No ↓

Need complex multi-step autonomous work?
 ├─ Yes → Agent
 └─ No ↓

Need to reuse across multiple scenarios?
 ├─ Yes → Skill
 └─ No → Command
```

### Scenario Matching Guide

#### Scenario 1: I want to quickly view project statistics
**Choose: Command** ✅
```
/project-stats
```
- Simple, quick, one-time task

#### Scenario 2: I want automatic code review after every code write
**Choose: Skill (with trigger)** ✅
```yaml
trigger: after_write
```
- Needs reuse
- Needs automatic triggering

#### Scenario 3: I want to find and fix all bugs
**Choose: Agent** ✅
```
Launch bug-hunter agent
```
- Complex multi-step task
- Needs search, analysis, decision-making

#### Scenario 4: I want to auto-format every time I save a file
**Choose: Hook** ✅
```bash
post-write hook: prettier --write
```
- Event-driven
- Automatic
- Must execute every time

#### Scenario 5: I want to call Jira API to create tickets
**Choose: MCP Server** ✅
```javascript
jira_create_ticket tool
```
- Needs external API
- Extends Claude's capabilities

---

## Plugin Type Comparison Table

### Feature Comparison

| Feature | Command | Skill | Agent | Hook | MCP |
|---------|---------|-------|-------|------|-----|
| Ease of learning | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Flexibility | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Automation | ❌ | Partial | ✅ | ✅ | On-demand |
| External integration | ❌ | ❌ | Limited | ✅ | ✅ |
| Autonomous decisions | ❌ | ❌ | ✅ | ❌ | ❌ |
| Implementation difficulty | Very simple | Simple | Complex | Medium | Complex |
| Execution speed | Fast | Fast | Slow | Fast | Fast |

### Use Case Comparison

| Scenario Type | Recommended Type |
|---------------|------------------|
| Quick query/info retrieval | Command |
| Standardized workflow | Skill |
| Automatic code formatting | Hook |
| Complex task automation | Agent |
| API/tool integration | MCP Server |
| Repetitive deep analysis | Skill |
| Exploratory tasks | Agent |
| Event response | Hook |

### Learning Path Recommendations

**Beginner path:**
```
1. Start with Commands (simplest)
   ↓
2. Learn Skills (add flexibility)
   ↓
3. Try Hooks (add automation)
   ↓
4. Learn MCP Servers (external integration)
   ↓
5. Finally master Agents (most complex)
```

**Time investment estimate:**
- Command: 30 minutes to learn
- Skill: 1-2 hours to master
- Hook: 2-3 hours (need to learn shell)
- MCP Server: 4-6 hours (need programming)
- Agent: 6-8 hours (need deep understanding)

---

## Practical Recommendations

### Where to Start?

**Week 1: Commands**
- Create 3-5 common commands
- Experience the value of shortcuts

**Week 2: Skills**
- Convert repetitive work into Skills
- Try automatic triggering

**Week 3: Hooks**
- Add code formatting
- Set up security checks

**Week 4: MCP Server**
- Integrate an external tool
- Create custom tools

**Week 5: Agents**
- Create a simple Agent
- Solve real problems

### Combined Usage

The power lies in **combining** different types:

**Example: Complete development workflow**

```
1. Hook (user-prompt-submit)
   → Log all operations

2. Command (/analyze-code)
   → Quick view of issues

3. Skill (code-reviewer)
   → Deep code review

4. Agent (bug-hunter)
   → Automatically fix issues

5. Hook (post-write)
   → Auto-format fixed code

6. MCP Server (jira_create_ticket)
   → Create tracking ticket

7. Skill (doc-generator)
   → Generate documentation
```

Each type plays to its strengths!

---

## Summary

### Remember This Pyramid

```
                Agent
               /    \
          Skill      MCP
            /          \
        Hook          Command

Bottom (simple, fast) → Top (complex, powerful)
```

### Core Points

1. **Command** = Shortcut
2. **Skill** = Reusable capability
3. **Agent** = Autonomous worker
4. **Hook** = Automatic trigger
5. **MCP** = Tool extension

### Next Steps

1. Read `QUICKSTART.md` to start practicing
2. View examples in `demo-files/`
3. Follow `DEMO_SCRIPT.md` for demo
4. Create your first plugin!

---

Still have questions? Check:
- `README.md` - Complete documentation
- `my-first-plugin/README.md` - Plugin details
- `DEMO_SCRIPT.md` - Practical demo

Happy learning!
