# My First Plugin

A comprehensive demonstration plugin showcasing all Claude Code plugin types in one package.

## What's Included

This plugin demonstrates all five types of Claude Code plugins:

- **Commands** (3) - Slash commands for quick tasks
- **Skills** (2) - Reusable, context-aware capabilities
- **Agents** (2) - Autonomous multi-step task executors
- **Hooks** (3) - Event-driven automation
- **MCP Server** (1) - Custom tools and resources

## Commands

### `/my-first-plugin:hello`
Friendly greeting with current date/time and Claude Code tips.

### `/my-first-plugin:analyze-code`
Comprehensive code quality analysis including:
- Code quality issues
- Best practices violations
- Security vulnerabilities
- Actionable recommendations

### `/my-first-plugin:project-stats`
Project statistics including:
- File counts by type
- Lines of code
- Largest files
- Language breakdown

## Skills

### code-reviewer
Expert code review analyzing:
- Code quality and maintainability
- Performance issues
- Security vulnerabilities
- Best practices
- Test coverage

**Usage:**
```
Use the code-reviewer skill to review this code
```

### doc-generator
Comprehensive documentation generation:
- API documentation
- Inline comments
- README files
- Type definitions

**Usage:**
```
Use the doc-generator skill to document this project
```

## Agents

### bug-hunter
Autonomous bug-finding agent that:
- Searches for common bug patterns
- Analyzes root causes
- Applies fixes automatically
- Verifies results

**Usage:**
```
Launch the bug-hunter agent to find bugs
```

### refactor-master
Code quality improvement agent that:
- Identifies code smells
- Applies refactoring patterns
- Ensures tests still pass
- Documents changes

**Usage:**
```
Run the refactor-master agent to improve code quality
```

## Hooks

### pre-edit.sh
Runs before file edits:
- Checks git tracking status
- Warns about large files
- Validates file path

### post-write.sh
Runs after file writes:
- Auto-formats code (prettier, black, gofmt, rustfmt, etc.)
- Supports JS, TS, Python, Go, Rust, Java

### user-prompt-submit.sh
Runs when prompts are submitted:
- Logs prompt history
- Detects dangerous commands
- Provides helpful tips
- Warns about production operations

## MCP Server

Provides 5 utility tools:

### calculate
Perform safe mathematical calculations
```
Calculate 15 * 8 + 3
```

### uuid_generate
Generate random UUIDs
```
Generate 5 UUIDs
```

### timestamp
Get timestamps in various formats
```
Get current timestamp in unix format
```

### base64_encode
Encode text to base64
```
Encode "Hello World" to base64
```

### base64_decode
Decode base64 to text
```
Decode "SGVsbG8gV29ybGQ=" from base64
```

## Installation

### Via Marketplace

```bash
# Add the marketplace
/plugin marketplace add yasun1/claude-code-plugin-demo

# Install the plugin
/plugin install my-first-plugin@yasun1/claude-code-plugin-demo

# Restart Claude Code
```

### MCP Server Setup

1. Install dependencies:
```bash
cd my-first-plugin/mcp-server
npm install
```

2. Configure in your Claude Code settings (`.claude/settings.json`):
```json
{
  "mcpServers": {
    "my-first-plugin": {
      "command": "node",
      "args": ["/absolute/path/to/my-first-plugin/mcp-server/index.js"]
    }
  }
}
```

### Hooks Setup

Configure hooks in `.claude/settings.json`:
```json
{
  "hooks": {
    "preEdit": "my-first-plugin/hooks/pre-edit.sh",
    "postWrite": "my-first-plugin/hooks/post-write.sh",
    "userPromptSubmit": "my-first-plugin/hooks/user-prompt-submit.sh"
  }
}
```

## Quick Start

1. **Test a Command:**
```
/my-first-plugin:hello
```

2. **Use a Skill:**
```
Use the code-reviewer skill to review my code
```

3. **Launch an Agent:**
```
Run the bug-hunter agent on this codebase
```

4. **Try MCP Tools:**
```
Calculate 123 * 456
Generate a UUID
Get current timestamp
```

5. **Trigger Hooks:**
- Edit a file (triggers pre-edit hook)
- Write a file (triggers post-write hook)
- Submit this prompt (triggers user-prompt-submit hook)

## Examples

### Full Workflow
```
1. /my-first-plugin:project-stats
2. Use code-reviewer skill to analyze the codebase
3. Launch bug-hunter agent to find and fix bugs
4. Run refactor-master agent to improve quality
5. Use doc-generator skill to add documentation
```

### Development Session
```
1. Create new feature file
   (post-write hook auto-formats)
2. /my-first-plugin:analyze-code
3. Use code-reviewer skill for detailed review
4. Calculate test coverage percentage with MCP server
```

## Project Structure

```
my-first-plugin/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata
├── commands/                 # Slash commands
│   ├── hello.md
│   ├── analyze-code.md
│   └── project-stats.md
├── skills/                   # Reusable skills
│   ├── code-reviewer/
│   │   └── SKILL.md
│   └── doc-generator/
│       └── SKILL.md
├── agents/                   # Autonomous agents
│   ├── bug-hunter/
│   │   └── AGENT.md
│   └── refactor-master/
│       └── AGENT.md
├── hooks/                    # Event hooks
│   ├── pre-edit.sh
│   ├── post-write.sh
│   └── user-prompt-submit.sh
├── mcp-server/               # MCP server
│   ├── index.js
│   ├── package.json
│   └── README.md
├── README.md                 # This file
└── OWNERS                    # Maintainers
```

## Requirements

- Claude Code
- Node.js (for MCP server)
- Git (optional, for hooks)
- Code formatters (optional):
  - prettier (JS/TS)
  - black or autopep8 (Python)
  - gofmt (Go)
  - rustfmt (Rust)

## Troubleshooting

### Commands not working
- Ensure plugin is installed and Claude Code restarted
- Check command name includes plugin prefix: `/my-first-plugin:command-name`

### MCP Server not responding
- Verify `npm install` was run in mcp-server directory
- Check absolute path in settings.json
- Test server: `cd mcp-server && npm start`

### Hooks not executing
- Ensure hooks are executable: `chmod +x hooks/*.sh`
- Verify paths in settings.json are correct
- Check Claude Code has permissions

## Version History

- **1.0.0** - Initial release
  - 3 commands
  - 2 skills
  - 2 agents
  - 3 hooks
  - MCP server with 5 tools

## License

MIT

## Author

Demo Author (demo@example.com)
