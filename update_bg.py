import base64
import re

def update_shop_bg():
    # Read the new image
    with open("assets/shop_bg.jpg", "rb") as f:
        bg_b64 = base64.b64encode(f.read()).decode('utf-8')
    
    # Read the current assets.js
    with open("assets.js", "r", encoding="utf-8") as f:
        content = f.read()
        
    # Replace the old ASSET_SHOP_BG string using regex
    pattern = r'const ASSET_SHOP_BG = ".*?";'
    replacement = f'const ASSET_SHOP_BG = "data:image/jpeg;base64,{bg_b64}";'
    
    if re.search(pattern, content):
        new_content = re.sub(pattern, replacement, content)
    else:
        # Fallback if it was declared differently
        new_content = content + f'\nconst ASSET_SHOP_BG = "data:image/jpeg;base64,{bg_b64}";\n'
    
    with open("assets.js", "w", encoding="utf-8") as f:
        f.write(new_content)

if __name__ == "__main__":
    update_shop_bg()
