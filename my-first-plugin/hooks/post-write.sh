#!/bin/bash
# Post-write hook: Auto-format files after writing

FILE_PATH="$1"

echo "✨ Post-write processing: $FILE_PATH"

# Get file extension
EXT="${FILE_PATH##*.}"

# Format based on file type
case "$EXT" in
    js|jsx)
        if command -v prettier &> /dev/null; then
            echo "  Formatting JavaScript with prettier..."
            prettier --write "$FILE_PATH" 2>&1 || true
            echo "  ✓ Formatted"
        fi
        ;;
    ts|tsx)
        if command -v prettier &> /dev/null; then
            echo "  Formatting TypeScript with prettier..."
            prettier --write "$FILE_PATH" 2>&1 || true
            echo "  ✓ Formatted"
        fi
        ;;
    py)
        if command -v black &> /dev/null; then
            echo "  Formatting Python with black..."
            black -q "$FILE_PATH" 2>&1 || true
            echo "  ✓ Formatted"
        elif command -v autopep8 &> /dev/null; then
            echo "  Formatting Python with autopep8..."
            autopep8 --in-place "$FILE_PATH" 2>&1 || true
            echo "  ✓ Formatted"
        fi
        ;;
    go)
        if command -v gofmt &> /dev/null; then
            echo "  Formatting Go with gofmt..."
            gofmt -w "$FILE_PATH" 2>&1 || true
            echo "  ✓ Formatted"
        fi
        ;;
    rs)
        if command -v rustfmt &> /dev/null; then
            echo "  Formatting Rust with rustfmt..."
            rustfmt "$FILE_PATH" 2>&1 || true
            echo "  ✓ Formatted"
        fi
        ;;
    java)
        if command -v google-java-format &> /dev/null; then
            echo "  Formatting Java..."
            google-java-format -i "$FILE_PATH" 2>&1 || true
            echo "  ✓ Formatted"
        fi
        ;;
    *)
        echo "  No formatter configured for .$EXT files"
        ;;
esac

echo "✓ Post-write hook completed"
exit 0
