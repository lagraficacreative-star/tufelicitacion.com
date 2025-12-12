import os

root_dir = "sectores"

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        # Check for both composed and decomposed 'ñ'
        if "ñ" in filename or "ñ" in filename:
            new_filename = filename.replace("ñ", "n").replace("ñ", "n")
            old_path = os.path.join(dirpath, filename)
            new_path = os.path.join(dirpath, new_filename)
            
            print(f"Renaming: {old_path} -> {new_path}")
            os.rename(old_path, new_path)
