# Quick Start Guide

Get started with claude-code-plugin-demo in 5 minutes!

## Step 1: Install (30 seconds)

**Option A: Install from GitHub (Recommended)**
```bash
# In Claude Code, add the marketplace (this clones from GitHub)
/plugin marketplace add yasun1/claude-code-plugin-demo

# Install my-first-plugin
/plugin install my-first-plugin@yasun1/claude-code-plugin-demo

# Restart Claude Code
```

**Option B: Install from Local Directory**
```bash
# If you cloned the repository locally
/plugin marketplace add /path/to/claude-code-plugin-demo

# Install my-first-plugin
/plugin install my-first-plugin@local-marketplace-name

# Restart Claude Code
```

**What happens:**
- The `username/repository` format tells Claude Code to clone from GitHub
- Marketplace is cloned to `~/.claude/plugins/marketplaces/yasun1-claude-code-plugin-demo/`
- Plugin is installed from the cloned marketplace

## Step 2: Test Commands (1 minute)

```bash
# Test the hello command
/my-first-plugin:hello

# Analyze your code
/my-first-plugin:analyze-code

# Get project stats
/my-first-plugin:project-stats
```

## Step 3: Try Skills (1 minute)

```bash
# Use code reviewer
Use the code-reviewer skill to review this file

# Generate documentation
Use the doc-generator skill to document this code
```

## Step 4: Launch Agents (1 minute)

```bash
# Find and fix bugs
Launch the bug-hunter agent to find bugs in this codebase

# Improve code quality
Run the refactor-master agent to refactor this code
```

## Step 5: Setup MCP Server (2 minutes)

### Install Dependencies

**IMPORTANT:** Run `npm install` in the **marketplace clone directory**, not the installed plugin folder.

**For GitHub installs:**
```bash
cd ~/.claude/plugins/marketplaces/yasun1-claude-code-plugin-demo/my-first-plugin/mcp-server
npm install
```

**For local installs:**
```bash
cd /path/to/your/clone/claude-code-plugin-demo/my-first-plugin/mcp-server
npm install
```

### Configure MCP Server

Add to your `.claude/settings.json`:

**For GitHub installs:**
```json
{
  "mcpServers": {
    "my-first-plugin": {
      "command": "node",
      "args": ["~/.claude/plugins/marketplaces/yasun1-claude-code-plugin-demo/my-first-plugin/mcp-server/index.js"]
    }
  }
}
```

**For local installs:**
```json
{
  "mcpServers": {
    "my-first-plugin": {
      "command": "node",
      "args": ["/path/to/your/clone/claude-code-plugin-demo/my-first-plugin/mcp-server/index.js"]
    }
  }
}
```

**💡 Key Points:**
- MCP Server runs from the marketplace clone (where `node_modules` exists)
- NOT from `~/.claude/plugins/` (which is just a reference copy)
- Use the full absolute path in settings.json

### Test MCP Tools

```bash
# Calculate
Calculate 15 * 8 using the my-first-plugin server

# Generate UUID
Generate 3 UUIDs

# Get timestamp
Get current timestamp in readable format

# Base64 encode
Encode "Hello World" to base64

# Base64 decode
Decode "SGVsbG8gV29ybGQ=" from base64
```

## Step 6: Enable Hooks (Optional)

### Configure Hooks

Add to `.claude/settings.json`:

```json
{
  "hooks": {
    "preEdit": "my-first-plugin/hooks/pre-edit.sh",
    "postWrite": "my-first-plugin/hooks/post-write.sh",
    "userPromptSubmit": "my-first-plugin/hooks/user-prompt-submit.sh"
  }
}
```

### Verify Hooks Work

```bash
# Edit a file - should trigger pre-edit hook
Edit this file

# Create a new file - should trigger post-write hook
Create a new file test.js

# Submit this prompt - triggers user-prompt-submit hook
(This prompt itself triggers the hook!)
```

## What's Next?

### Learn More

- Read [my-first-plugin/README.md](my-first-plugin/README.md) for complete documentation
- Check [README.md](README.md) for marketplace overview
- Explore the source code to understand implementation

### Create Your Own Plugin

1. Study the structure in `my-first-plugin/`
2. Copy and modify for your needs
3. Update `plugin.json` with your metadata
4. Test thoroughly
5. Share with others!

## Quick Reference

### All Commands
- `/my-first-plugin:hello` - Greeting
- `/my-first-plugin:analyze-code` - Code analysis
- `/my-first-plugin:project-stats` - Project statistics

### All Skills
- `code-reviewer` - Code review
- `doc-generator` - Documentation generation

### All Agents
- `bug-hunter` - Find and fix bugs
- `refactor-master` - Improve code quality

### All MCP Tools
- `calculate` - Math calculations
- `uuid_generate` - Generate UUIDs
- `timestamp` - Get timestamps
- `base64_encode` - Encode to base64
- `base64_decode` - Decode from base64

### All Hooks
- `pre-edit.sh` - Before file edits
- `post-write.sh` - After file writes
- `user-prompt-submit.sh` - When prompts submitted

## Troubleshooting

### Commands don't work
- Restart Claude Code after installation
- Use full command name: `/my-first-plugin:command-name`

### MCP server doesn't respond
- Check `npm install` was run
- Verify absolute path in settings.json
- Test: `cd mcp-server && npm start`

### Hooks don't run
- Make scripts executable: `chmod +x my-first-plugin/hooks/*.sh`
- Check paths in settings.json
- Verify Claude Code has permissions

## Need Help?

- Read the [full documentation](README.md)
- Check [my-first-plugin README](my-first-plugin/README.md)
- Review source code comments
- Visit [Claude Code docs](https://docs.claude.com/claude-code)

Happy coding! 🚀
