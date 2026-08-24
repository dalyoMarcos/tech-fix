import base64

def replace_hardware_base64():
    # Read the new image
    with open("assets/hardware.jpg", "rb") as f:
        hardware_b64 = base64.b64encode(f.read()).decode('utf-8')
    
    # Read the current assets.js
    with open("assets.js", "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    # Remove old ASSET_HARDWARE
    new_lines = []
    for line in lines:
        if not line.startswith("const ASSET_HARDWARE"):
            new_lines.append(line)
            
    # Add new ASSET_HARDWARE
    new_lines.append(f'\nconst ASSET_HARDWARE = "data:image/jpeg;base64,{hardware_b64}";\n')
    
    with open("assets.js", "w", encoding="utf-8") as f:
        f.writelines(new_lines)

if __name__ == "__main__":
    replace_hardware_base64()
