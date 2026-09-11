import os
import base64
from io import BytesIO
from PIL import Image
from rembg import remove

def process_images():
    # Mapeamento
    char1 = ['WhatsApp Image 2026-08-25 at 22.34.43 (1).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.42.jpeg', 'WhatsApp Image 2026-08-25 at 22.34.43 (2).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.43.jpeg']
    char2 = ['WhatsApp Image 2026-08-25 at 22.34.43 (4).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.43 (3).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44.jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44 (1).jpeg']
    char3 = ['WhatsApp Image 2026-08-25 at 22.34.44 (3).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44 (2).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44 (4).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45.jpeg']
    char4 = ['WhatsApp Image 2026-08-25 at 22.34.45 (2).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45 (3).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45 (4).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45 (1).jpeg']
    
    chars = [char1, char2, char3, char4]
    base64_strings = []
    
    for idx, c_group in enumerate(chars):
        frames = []
        for img_name in c_group:
            path = os.path.join('assets', img_name)
            with open(path, 'rb') as f:
                img_data = f.read()
            # remove background
            result_data = remove(img_data)
            img = Image.open(BytesIO(result_data)).convert("RGBA")
            # resize to 256x256
            img = img.resize((256, 256), Image.Resampling.LANCZOS)
            frames.append(img)
            
        # combine horizontally
        spritesheet = Image.new('RGBA', (1024, 256))
        for i, frame in enumerate(frames):
            spritesheet.paste(frame, (i * 256, 0))
            
        # save to buffer
        buf = BytesIO()
        spritesheet.save(buf, format="PNG")
        b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
        base64_strings.append(f"data:image/png;base64,{b64}")
        print(f"Char {idx+1} processed.")

    # Update assets.js
    with open('assets.js', 'r', encoding='utf-8') as f:
        content = f.read()

    import re
    # Remove old ASSET_MALE and ASSET_FEMALE declarations
    content = re.sub(r'const ASSET_MALE = ".*?";\n', '', content)
    content = re.sub(r'const ASSET_FEMALE = ".*?";\n', '', content)
    
    # Add new chars
    new_assets = f"""const ASSET_CHAR1 = "{base64_strings[0]}";
const ASSET_CHAR2 = "{base64_strings[1]}";
const ASSET_CHAR3 = "{base64_strings[2]}";
const ASSET_CHAR4 = "{base64_strings[3]}";
"""
    content = new_assets + content
    
    with open('assets.js', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("assets.js updated!")

if __name__ == "__main__":
    process_images()
