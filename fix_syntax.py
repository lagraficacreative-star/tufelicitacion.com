
def fix_syntax():
    file_path = 'products_data.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    for i, line in enumerate(lines):
        # Check if this line is our inserted hasFace line
        if 'hasFace:' in line:
            # Look at previous line to ensure it has a comma
            prev_idx = len(new_lines) - 1
            while prev_idx >= 0 and new_lines[prev_idx].strip() == '':
                prev_idx -= 1
            
            if prev_idx >= 0:
                prev_line = new_lines[prev_idx].rstrip()
                if not prev_line.endswith(',') and not prev_line.endswith('{') and not prev_line.endswith('['):
                    new_lines[prev_idx] = prev_line + ',\n'
                    
        new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
        
    print("Fixed syntax in products_data.js (added missing commas).")

if __name__ == "__main__":
    fix_syntax()
