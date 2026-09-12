import os
import re
import base64
from io import BytesIO
from PIL import Image, ImageDraw
import rembg

def process_images():
    char1 = ['WhatsApp Image 2026-08-25 at 22.34.43 (1).png', 'WhatsApp Image 2026-08-25 at 22.34.42.png', 'WhatsApp Image 2026-08-25 at 22.34.43 (2).png', 'WhatsApp Image 2026-08-25 at 22.34.43.png']
    char2 = ['WhatsApp Image 2026-08-25 at 22.34.43 (4).png', 'WhatsApp Image 2026-08-25 at 22.34.43 (3).png', 'WhatsApp Image 2026-08-25 at 22.34.44.png', 'WhatsApp Image 2026-08-25 at 22.34.44 (1).png']
    char3 = ['WhatsApp Image 2026-08-25 at 22.34.44 (3).png', 'WhatsApp Image 2026-08-25 at 22.34.44 (2).png', 'WhatsApp Image 2026-08-25 at 22.34.44 (4).png', 'WhatsApp Image 2026-08-25 at 22.34.45.png']
    char4 = ['WhatsApp Image 2026-08-25 at 22.34.45 (2).png', 'WhatsApp Image 2026-08-25 at 22.34.45 (3).png', 'WhatsApp Image 2026-08-25 at 22.34.45 (4).png', 'WhatsApp Image 2026-08-25 at 22.34.45 (1).png']
    char5 = ['WhatsApp Image 2026-08-25 at 22.34.47 (4).png', 'WhatsApp Image 2026-08-25 at 22.34.47 (5).png', 'WhatsApp Image 2026-08-25 at 22.34.47 (6).png', 'WhatsApp Image 2026-08-25 at 22.34.48 (5).png']
    char6 = ['WhatsApp Image 2026-08-25 at 22.34.48.png', 'WhatsApp Image 2026-08-25 at 22.34.49 (1).png', 'WhatsApp Image 2026-08-25 at 22.34.49 (2).png', 'WhatsApp Image 2026-08-25 at 22.34.49.png']
    
    chars = [char1, char2, char3, char4, char5, char6]
    base64_strings = []
    use_rembg = False
    
    for idx, c_group in enumerate(chars):
        frames = []
        for img_name in c_group:
            path = os.path.join('assets', img_name)
            try:
                img = Image.open(path).convert("RGBA")
                # Resize FIRST to avoid Out Of Memory errors
                img = img.resize((512, 512), Image.Resampling.LANCZOS)
                
                # Floodfill fallback (removes contiguous black)
                ImageDraw.floodfill(img, xy=(0, 0), value=(0, 0, 0, 0), thresh=25)
                w, h = img.size
                points = [(w-1,0), (0,h-1), (w-1,h-1)]
                for p in points:
                    ImageDraw.floodfill(img, xy=p, value=(0, 0, 0, 0), thresh=25)
                
                frames.append(img)
            except Exception as e:
                print(f"Error processing {path}: {e}")
                # Create empty transparent frame if missing
                frames.append(Image.new('RGBA', (512, 512), (0,0,0,0)))
            
        # combine horizontally
        spritesheet = Image.new('RGBA', (2048, 512))
        for i, frame in enumerate(frames):
            spritesheet.paste(frame, (i * 512, 0))
            
        # save to buffer
        buf = BytesIO()
        spritesheet.save(buf, format="PNG")
        b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
        base64_strings.append(f"data:image/png;base64,{b64}")
        print(f"Char {idx+1} processed.")

    # Update assets.js
    with open('assets.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Add new chars at the beginning
    new_assets = f"""const ASSET_CHAR1 = "{base64_strings[0]}";
const ASSET_CHAR2 = "{base64_strings[1]}";
const ASSET_CHAR3 = "{base64_strings[2]}";
const ASSET_CHAR4 = "{base64_strings[3]}";
const ASSET_CHAR5 = "{base64_strings[4]}";
const ASSET_CHAR6 = "{base64_strings[5]}";
"""
    if 'ASSET_CHAR1' in content:
        # replace existing
        content = re.sub(r'const ASSET_CHAR1 = ".*?";\n', f'const ASSET_CHAR1 = "{base64_strings[0]}";\n', content)
        content = re.sub(r'const ASSET_CHAR2 = ".*?";\n', f'const ASSET_CHAR2 = "{base64_strings[1]}";\n', content)
        content = re.sub(r'const ASSET_CHAR3 = ".*?";\n', f'const ASSET_CHAR3 = "{base64_strings[2]}";\n', content)
        content = re.sub(r'const ASSET_CHAR4 = ".*?";\n', f'const ASSET_CHAR4 = "{base64_strings[3]}";\n', content)
        content = re.sub(r'const ASSET_CHAR5 = ".*?";\n', f'const ASSET_CHAR5 = "{base64_strings[4]}";\n', content)
        content = re.sub(r'const ASSET_CHAR6 = ".*?";\n', f'const ASSET_CHAR6 = "{base64_strings[5]}";\n', content)
        # Check if 5 and 6 exist, if not, append them after 4
        if 'ASSET_CHAR5' not in content:
            content = content.replace(f'const ASSET_CHAR4 = "{base64_strings[3]}";\n', f'const ASSET_CHAR4 = "{base64_strings[3]}";\nconst ASSET_CHAR5 = "{base64_strings[4]}";\nconst ASSET_CHAR6 = "{base64_strings[5]}";\n')
    else:
        # remove old
        content = re.sub(r'const ASSET_MALE = ".*?";\n', '', content)
        content = re.sub(r'const ASSET_FEMALE = ".*?";\n', '', content)
        content = new_assets + content
    
    with open('assets.js', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("assets.js updated!")

if __name__ == "__main__":
    process_images()
