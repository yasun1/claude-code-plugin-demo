# Claude Code Plugin Demo

A marketplace demonstrating all types of Claude Code plugins in one comprehensive example.

## About This Marketplace

This repository serves as both documentation and a working example of how to create Claude Code plugins. It contains one complete plugin (`my-first-plugin`) that showcases all five plugin types:

- **Commands** - Quick slash commands
- **Skills** - Reusable capabilities
- **Agents** - Autonomous task executors
- **Hooks** - Event-driven automation
- **MCP Servers** - Custom tools and resources

**🆕 New to Claude Code plugins?** Read [PLUGIN_TYPES_EXPLAINED.md](PLUGIN_TYPES_EXPLAINED.md) for a beginner-friendly introduction to all plugin types!

## Quick Start

### Install the Marketplace

**Option 1: Install from GitHub (Recommended)**
```bash
# In Claude Code - this will clone the marketplace from GitHub
/plugin marketplace add yasun1/claude-code-plugin-demo
```

**Option 2: Install from Local Directory**
```bash
# If you've cloned the repository locally
/plugin marketplace add /path/to/your/clone/claude-code-plugin-demo
```

**Note:**
- The `username/repository` format tells Claude Code to clone from GitHub at `https://github.com/yasun1/claude-code-plugin-demo`
- GitHub installs are cloned to `~/.claude/plugins/marketplaces/`
- Local installs use the path you provide directly

### Install the Plugin

```bash
/plugin install my-first-plugin@yasun1/claude-code-plugin-demo
```

### Restart Claude Code

After installation, restart Claude Code to load the plugin.

### Try It Out

```bash
# Test a command
/my-first-plugin:hello

# Use a skill
Use the code-reviewer skill to analyze this code

# Launch an agent
Run the bug-hunter agent to find bugs
```

### Setup MCP Server (Optional)

To use the MCP server tools, you need to:

1. **Find your marketplace clone path:**

   After installing from GitHub, the marketplace is cloned to:
   ```bash
   ~/.claude/plugins/marketplaces/yasun1-claude-code-plugin-demo/
   ```

   For local installs, it's the path you specified.

2. **Install dependencies in the marketplace clone:**

   **IMPORTANT:** Run `npm install` in the **marketplace clone**, not in the installed plugin folder.

   ```bash
   # For GitHub installs:
   cd ~/.claude/plugins/marketplaces/yasun1-claude-code-plugin-demo/my-first-plugin/mcp-server
   npm install

   # For local installs:
   cd /your/local/path/claude-code-plugin-demo/my-first-plugin/mcp-server
   npm install
   ```

3. **Configure in `.claude/settings.json`:**

   Use the **same marketplace clone path** in your configuration:

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

   **For local installs, use your local path:**
   ```json
   {
     "mcpServers": {
       "my-first-plugin": {
         "command": "node",
         "args": ["/your/local/path/claude-code-plugin-demo/my-first-plugin/mcp-server/index.js"]
       }
     }
   }
   ```

4. **Restart Claude Code**

**Why use the marketplace clone path?**
- MCP Server needs the `node_modules` folder created by `npm install`
- The installed plugin folder (in `~/.claude/plugins/`) is just a reference copy
- The marketplace clone is where you should run `npm install` and where MCP Server runs from

For detailed setup instructions, see [QUICKSTART.md](QUICKSTART.md).

## What's Included

### my-first-plugin

A complete demonstration plugin containing:

- **3 Commands:**
  - `/my-first-plugin:hello` - Friendly greeting
  - `/my-first-plugin:analyze-code` - Code quality analysis
  - `/my-first-plugin:project-stats` - Project statistics

- **2 Skills:**
  - `code-reviewer` - Comprehensive code review
  - `doc-generator` - Documentation generation

- **2 Agents:**
  - `bug-hunter` - Find and fix bugs autonomously
  - `refactor-master` - Improve code quality

- **3 Hooks:**
  - `pre-edit.sh` - Validate before editing
  - `post-write.sh` - Auto-format after writing
  - `user-prompt-submit.sh` - Log and validate prompts

- **MCP Server** with 5 tools:
  - `calculate` - Math calculations
  - `uuid_generate` - UUID generation
  - `timestamp` - Timestamp formatting
  - `base64_encode` - Base64 encoding
  - `base64_decode` - Base64 decoding

See [my-first-plugin/README.md](my-first-plugin/README.md) for complete documentation.

## Using the Marketplace

### Install

```bash
/plugin marketplace add yasun1/claude-code-plugin-demo
/plugin install my-first-plugin@yasun1/claude-code-plugin-demo
```

### Update

```bash
/plugin marketplace update claude-code-plugin-demo
```

### List Installed Plugins

```bash
/plugin list
```

## Learning from This Demo

This repository is designed for learning. Each plugin type is implemented with:

- Clear, well-commented code
- Best practices and patterns
- Real-world use cases
- Complete documentation

### For Plugin Developers

Use this as a reference when creating your own plugins:

1. Study the structure in `my-first-plugin/`
2. Look at `.claude-plugin/marketplace.json` for marketplace setup
3. Check `my-first-plugin/.claude-plugin/plugin.json` for plugin metadata
4. Examine each plugin type's implementation
5. Read the inline documentation

### Plugin Types Explained

#### Commands
Simple prompts triggered by `/command-name`. Great for:
- Quick, single-purpose tasks
- Frequently used operations
- Simple information retrieval

See: `my-first-plugin/commands/`

#### Skills
Reusable, context-aware capabilities. Great for:
- Complex, multi-step processes
- Consistent methodologies (code review, documentation)
- Tasks that can be triggered automatically

See: `my-first-plugin/skills/`

#### Agents
Autonomous entities that execute complex tasks. Great for:
- Multi-file operations
- Investigative work (bug hunting)
- Long-running refactoring

See: `my-first-plugin/agents/`

#### Hooks
Scripts that run on specific events. Great for:
- File validation
- Auto-formatting
- Security checks
- Logging

See: `my-first-plugin/hooks/`

#### MCP Servers
Custom tools and resources via Model Context Protocol. Great for:
- External API integration
- Custom computations
- Data transformations
- Accessing external resources

See: `my-first-plugin/mcp-server/`

## Creating Your Own Marketplace

Want to create your own marketplace like this? Here's how:

### 1. Repository Structure

```
your-marketplace/
├── .claude-plugin/
│   └── marketplace.json       # Marketplace definition
├── your-plugin-name/
│   ├── .claude-plugin/
│   │   └── plugin.json        # Plugin metadata
│   ├── commands/               # Optional
│   ├── skills/                 # Optional
│   ├── agents/                 # Optional
│   ├── hooks/                  # Optional
│   ├── mcp-server/             # Optional
│   ├── README.md
│   └── OWNERS
└── README.md
```

### 2. Create marketplace.json

```json
{
  "name": "your-marketplace-name",
  "owner": {
    "name": "Your Name",
    "email": "your@email.com"
  },
  "plugins": [
    {
      "name": "your-plugin-name",
      "source": "./your-plugin-name",
      "description": "What your plugin does"
    }
  ]
}
```

### 3. Create plugin.json

```json
{
  "name": "your-plugin-name",
  "version": "1.0.0",
  "description": "Detailed plugin description",
  "author": {
    "name": "Your Name",
    "email": "your@email.com"
  }
}
```

### 4. Add Plugin Components

Add any combination of commands, skills, agents, hooks, or MCP servers to your plugin directory.

### 5. Publish

Push to GitHub and users can install with:
```bash
# The username/repository format automatically clones from GitHub
/plugin marketplace add github-username/repository-name

# Alternative: use full Git URL
/plugin marketplace add https://github.com/github-username/repository-name.git
```

**How it works:**
- Claude Code recognizes the `username/repository` format as a GitHub repository
- Automatically clones from `https://github.com/username/repository`
- Stores in `~/.claude/plugins/marketplaces/username-repository/`
- Plugins are then installed from the cloned marketplace

## Best Practices

### Commands
- Keep them simple and focused
- Use clear, descriptive names
- Provide helpful output

### Skills
- Make them reusable
- Document thoroughly
- Include examples

### Agents
- Define clear goals
- Set safety constraints
- Be specific about tools needed

### Hooks
- Keep execution fast (< 1 second)
- Handle errors gracefully
- Provide informative output

### MCP Servers
- Use clear tool names
- Provide detailed schemas
- Handle errors well
- Document all tools and resources

## Examples and Use Cases

### Development Workflow
```
1. /my-first-plugin:project-stats          # Understand codebase
2. Use code-reviewer skill                  # Review code quality
3. Launch bug-hunter agent                  # Find bugs
4. Run refactor-master agent                # Improve structure
5. Use doc-generator skill                  # Add docs
```

### Code Quality Session
```
1. /my-first-plugin:analyze-code           # Quick analysis
2. Use code-reviewer skill on specific files
3. Launch refactor-master agent on problem areas
4. Verify with /my-first-plugin:project-stats
```

### Documentation Sprint
```
1. Use doc-generator skill on main modules
2. Generate UUIDs for tracking doc tasks
3. Get timestamps for documentation updates
4. Use code-reviewer to verify doc coverage
```

## Requirements

- Claude Code (latest version recommended)
- Node.js 18+ (for MCP server)
- Git (optional, for hooks)

## Documentation

### Getting Started
- **[PLUGIN_TYPES_EXPLAINED.md](PLUGIN_TYPES_EXPLAINED.md)** - 🆕 Beginner's guide to plugin types
- **[QUICKSTART.md](QUICKSTART.md)** - 5-minute quick start guide
- **[DEMO_SCRIPT.md](DEMO_SCRIPT.md)** - Complete demonstration script
- **[DEMO_CHECKLIST.md](DEMO_CHECKLIST.md)** - Presentation checklist

### Reference
- [my-first-plugin README](my-first-plugin/README.md) - Complete plugin documentation
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Project overview and architecture

### External Resources
- [Claude Code Plugin Documentation](https://docs.claude.com/claude-code/plugins)
- [Plugin Marketplaces Documentation](https://docs.claude.com/claude-code/plugin-marketplaces)
- [Model Context Protocol](https://modelcontextprotocol.io)

## Contributing

This is a demonstration project, but improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues:
- Check the [my-first-plugin documentation](my-first-plugin/README.md)
- Review the inline code comments
- Consult [Claude Code documentation](https://docs.claude.com/claude-code)

## License

MIT

## Acknowledgments

This demo is inspired by the Claude Code plugin ecosystem and aims to help developers create their own plugins and marketplaces.
