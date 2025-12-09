
import re

def update_products_to_facecount():
    file_path = 'products_data.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        # Replace 'hasFace: true' with 'faceCount: 1'
        if 'hasFace: true' in line:
            new_lines.append(line.replace('hasFace: true', 'faceCount: 1'))
        # Replace 'hasFace: false' with 'faceCount: 0'
        elif 'hasFace: false' in line:
            new_lines.append(line.replace('hasFace: false', 'faceCount: 0'))
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
        
    print("Migrated products_data.js from hasFace (bool) to faceCount (int).")

if __name__ == "__main__":
    update_products_to_facecount()
