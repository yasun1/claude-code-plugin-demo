# Demo Files

This directory contains example files for demonstrations, used to showcase various plugin features.

## File Descriptions

### buggy-code.js
JavaScript file containing multiple common bugs:
- Division by zero error (no check for divisor being 0)
- Array out of bounds (off-by-one error)
- Undefined variables
- Missing null checks
- Missing property existence checks

**Purpose:** Demonstrate how the bug-hunter agent finds and fixes bugs

**Demo command:**
```
Launch the bug-hunter agent to find and fix bugs in demo-files/buggy-code.js
```

### messy-code.js
JavaScript file containing multiple code smells:
- Magic numbers (hardcoded numbers)
- Long methods
- Deep nesting
- Duplicate code
- Long parameter lists

**Purpose:** Demonstrate how the refactor-master agent refactors code

**Demo command:**
```
Run the refactor-master agent to improve demo-files/messy-code.js
```

### unformatted-code.py
Python file with messy formatting:
- Inconsistent spacing
- Irregular indentation
- Non-standard naming

**Purpose:** Demonstrate the post-write hook's automatic formatting functionality

**Demo command:**
```
Edit demo-files/unformatted-code.py and make any change
```
Then observe the post-write hook automatically format the code

## Usage Recommendations

### Demo Flow

1. **First show the original code:**
   ```
   Show me the content of demo-files/buggy-code.js
   ```

2. **Run the appropriate tool:**
   ```
   Launch bug-hunter agent on this file
   ```

3. **View the fixed code:**
   ```
   Show me the updated code
   ```

4. **Explain what was fixed:**
   - Describe the issues found
   - Explain how they were fixed
   - Emphasize the value of automation

### Resetting Files

If you need to re-demo, you can use git:
```bash
git checkout demo-files/
```

Or manually restore the file contents.

## Adding More Demo Files

You can add more files to demonstrate other scenarios:

### Suggested Demo Files:

1. **security-issues.js** - Security vulnerability examples
   - SQL injection
   - XSS vulnerabilities
   - Hardcoded credentials

2. **performance-issues.js** - Performance problems
   - N+1 queries
   - Unnecessary loops
   - Memory leaks

3. **undocumented-code.js** - Missing documentation
   - Complex functions without comments
   - Missing JSDoc
   - No README

4. **test-coverage-low.js** - Low test coverage
   - Missing unit tests
   - Untested edge cases
   - Missing integration tests

## Demo Tips

1. **Show comparisons:**
   - First show problem code
   - Run tool
   - Show fixed code
   - Highlight improvements

2. **Explain process:**
   - Explain how the tool works
   - Explain why this fix is correct
   - Discuss possible alternatives

3. **Interactive demo:**
   - Ask audience what types of bugs they want to see
   - Create example code on the fly
   - Let audience suggest improvement directions

4. **Emphasize value:**
   - Time saved
   - Improved code quality
   - Reduced manual review burden
