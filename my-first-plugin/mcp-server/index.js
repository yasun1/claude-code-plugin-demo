#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "my-first-plugin-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "calculate",
        description: "Perform mathematical calculations safely",
        inputSchema: {
          type: "object",
          properties: {
            expression: {
              type: "string",
              description: "Mathematical expression (e.g., '2 + 2', '10 * 5 + 3')",
            },
          },
          required: ["expression"],
        },
      },
      {
        name: "uuid_generate",
        description: "Generate one or more random UUIDs",
        inputSchema: {
          type: "object",
          properties: {
            count: {
              type: "number",
              description: "Number of UUIDs to generate (default: 1, max: 100)",
              minimum: 1,
              maximum: 100,
              default: 1,
            },
          },
        },
      },
      {
        name: "timestamp",
        description: "Get current timestamp in various formats",
        inputSchema: {
          type: "object",
          properties: {
            format: {
              type: "string",
              description: "Output format: 'unix', 'iso', 'readable', or 'all'",
              enum: ["unix", "iso", "readable", "all"],
              default: "iso",
            },
          },
        },
      },
      {
        name: "base64_encode",
        description: "Encode text to base64",
        inputSchema: {
          type: "object",
          properties: {
            text: {
              type: "string",
              description: "Text to encode",
            },
          },
          required: ["text"],
        },
      },
      {
        name: "base64_decode",
        description: "Decode base64 to text",
        inputSchema: {
          type: "object",
          properties: {
            encoded: {
              type: "string",
              description: "Base64 encoded string",
            },
          },
          required: ["encoded"],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "calculate": {
        // Safe evaluation using Function (for demo purposes)
        // In production, use a proper math parser library
        const sanitized = args.expression.replace(/[^0-9+\-*/().\s]/g, '');
        const result = Function(`'use strict'; return (${sanitized})`)();

        return {
          content: [
            {
              type: "text",
              text: `Result: ${result}\nExpression: ${args.expression}`,
            },
          ],
        };
      }

      case "uuid_generate": {
        const count = Math.min(Math.max(args.count || 1, 1), 100);
        const uuids = [];
        for (let i = 0; i < count; i++) {
          uuids.push(crypto.randomUUID());
        }
        return {
          content: [
            {
              type: "text",
              text: uuids.join("\n"),
            },
          ],
        };
      }

      case "timestamp": {
        const format = args.format || "iso";
        const now = new Date();
        let result;

        switch (format) {
          case "unix":
            result = Math.floor(now.getTime() / 1000).toString();
            break;
          case "iso":
            result = now.toISOString();
            break;
          case "readable":
            result = now.toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              timeZoneName: "short",
            });
            break;
          case "all":
            result = `Unix: ${Math.floor(now.getTime() / 1000)}\nISO: ${now.toISOString()}\nReadable: ${now.toLocaleString()}`;
            break;
          default:
            result = now.toISOString();
        }

        return {
          content: [
            {
              type: "text",
              text: result,
            },
          ],
        };
      }

      case "base64_encode": {
        const encoded = Buffer.from(args.text, "utf-8").toString("base64");
        return {
          content: [
            {
              type: "text",
              text: encoded,
            },
          ],
        };
      }

      case "base64_decode": {
        const decoded = Buffer.from(args.encoded, "base64").toString("utf-8");
        return {
          content: [
            {
              type: "text",
              text: decoded,
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "demo://info",
        name: "Plugin Information",
        mimeType: "text/plain",
        description: "Information about my-first-plugin MCP server",
      },
      {
        uri: "demo://examples",
        name: "Usage Examples",
        mimeType: "text/markdown",
        description: "Examples of using the MCP server tools",
      },
      {
        uri: "demo://tools-reference",
        name: "Tools Reference",
        mimeType: "text/markdown",
        description: "Complete reference for all available tools",
      },
    ],
  };
});

// Handle resource reads
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  switch (uri) {
    case "demo://info":
      return {
        contents: [
          {
            uri,
            mimeType: "text/plain",
            text: `my-first-plugin MCP Server v1.0.0

This MCP server provides utility tools for:
- Mathematical calculations
- UUID generation
- Timestamp formatting
- Base64 encoding/decoding

Part of the claude-code-plugin-demo marketplace.

Tools: 5
Resources: 3

Built with @modelcontextprotocol/sdk`,
          },
        ],
      };

    case "demo://examples":
      return {
        contents: [
          {
            uri,
            mimeType: "text/markdown",
            text: `# Usage Examples

## Calculate Tool
\`\`\`
calculate("2 + 2")           // Returns: 4
calculate("10 * 5 + 3")      // Returns: 53
calculate("(100 - 20) / 4")  // Returns: 20
\`\`\`

## UUID Generate Tool
\`\`\`
uuid_generate()              // Returns: 1 UUID
uuid_generate(count: 5)      // Returns: 5 UUIDs
uuid_generate(count: 10)     // Returns: 10 UUIDs
\`\`\`

## Timestamp Tool
\`\`\`
timestamp()                        // Returns: ISO format (default)
timestamp(format: "unix")          // Returns: 1735689600
timestamp(format: "iso")           // Returns: 2024-12-31T12:00:00.000Z
timestamp(format: "readable")      // Returns: Tuesday, December 31, 2024...
timestamp(format: "all")           // Returns: All formats
\`\`\`

## Base64 Encode Tool
\`\`\`
base64_encode("Hello, World!")     // Returns: SGVsbG8sIFdvcmxkIQ==
base64_encode("Claude Code")       // Returns: Q2xhdWRlIENvZGU=
\`\`\`

## Base64 Decode Tool
\`\`\`
base64_decode("SGVsbG8sIFdvcmxkIQ==")  // Returns: Hello, World!
base64_decode("Q2xhdWRlIENvZGU=")      // Returns: Claude Code
\`\`\`
`,
          },
        ],
      };

    case "demo://tools-reference":
      return {
        contents: [
          {
            uri,
            mimeType: "text/markdown",
            text: `# Tools Reference

## calculate
**Description:** Perform mathematical calculations safely

**Parameters:**
- \`expression\` (string, required): Mathematical expression

**Supported Operations:** +, -, *, /, ()

**Examples:**
- \`"2 + 2"\`
- \`"10 * (5 + 3)"\`
- \`"100 / 4 - 10"\`

---

## uuid_generate
**Description:** Generate random UUIDs (v4)

**Parameters:**
- \`count\` (number, optional): Number of UUIDs (1-100, default: 1)

**Output:** Newline-separated UUIDs

---

## timestamp
**Description:** Get current timestamp in various formats

**Parameters:**
- \`format\` (string, optional): "unix", "iso", "readable", or "all" (default: "iso")

**Formats:**
- \`unix\`: Seconds since epoch
- \`iso\`: ISO 8601 format
- \`readable\`: Human-readable format
- \`all\`: All formats combined

---

## base64_encode
**Description:** Encode text to base64

**Parameters:**
- \`text\` (string, required): Text to encode

**Output:** Base64 encoded string

---

## base64_decode
**Description:** Decode base64 to text

**Parameters:**
- \`encoded\` (string, required): Base64 string to decode

**Output:** Decoded text
`,
          },
        ],
      };

    default:
      throw new Error(`Unknown resource: ${uri}`);
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("my-first-plugin MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
