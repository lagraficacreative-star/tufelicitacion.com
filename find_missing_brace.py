
import re

def check_structure(filename):
    with open(filename, 'r') as f:
        lines = f.readlines()

    stack = []
    
    # Regex to capture strings, comments, and braces
    # This is a simple approximation
    
    in_block_comment = False
    
    for i, line in enumerate(lines):
        line_num = i + 1
        line = line.strip()
        
        # Simple finite state checking for block comments
        if '/*' in line and '*/' not in line:
            in_block_comment = True
        if '*/' in line:
            in_block_comment = False
            continue
        if in_block_comment:
            continue
            
        # Remove line comments
        if '//' in line:
            line = line.split('//')[0]
            
        # Remove strings (very naive, doesn't handle escaped quotes perfectly)
        line = re.sub(r'["\'].*?["\']', '', line)
        line = re.sub(r'`.*?`', '', line) # Template literals usually span lines, this is weak

        for char in line:
            if char == '{':
                stack.append(line_num)
                if 600 < line_num < 900:
                    print(f"DEBUG: Open at {line_num} (Stack depth: {len(stack)})")
            elif char == '}':
                if not stack:
                    print(f"Error: Unexpected closing brace at line {line_num}")
                else:
                    popped = stack.pop()
                    if 600 < line_num < 900:
                         print(f"DEBUG: Close at {line_num} matched Open at {popped} (Stack depth: {len(stack)})")

    if stack:
        print(f"Error: Unclosed brace(s) starting at line(s): {stack[-1]}")
        # print all unclosed for context
        print(f"All unclosed: {stack}")



files = ['app.js', 'products_data.js', 'presets_data.js']
for file in files:
    print(f"\\n--- Checking {file} ---")
    try:
        check_structure(file)
    except FileNotFoundError:
        print(f"File not found: {file}")

