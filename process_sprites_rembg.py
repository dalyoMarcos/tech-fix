import os
import re
import base64
from io import BytesIO
from PIL import Image, ImageDraw
import rembg

def process_images():
    char1 = ['WhatsApp Image 2026-08-25 at 22.34.43 (1).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.42.jpeg', 'WhatsApp Image 2026-08-25 at 22.34.43 (2).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.43.jpeg']
    char2 = ['WhatsApp Image 2026-08-25 at 22.34.43 (4).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.43 (3).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44.jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44 (1).jpeg']
    char3 = ['WhatsApp Image 2026-08-25 at 22.34.44 (3).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44 (2).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.44 (4).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45.jpeg']
    char4 = ['WhatsApp Image 2026-08-25 at 22.34.45 (2).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45 (3).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45 (4).jpeg', 'WhatsApp Image 2026-08-25 at 22.34.45 (1).jpeg']
    
    chars = [char1, char2, char3, char4]
    base64_strings = []
    use_rembg = False
    
    for idx, c_group in enumerate(chars):
        frames = []
        for img_name in c_group:
            path = os.path.join('assets', img_name)
            try:
                img = Image.open(path).convert("RGBA")
                # Resize FIRST to avoid Out Of Memory errors with rembg on huge images
                img = img.resize((512, 512), Image.Resampling.LANCZOS)
                
                if use_rembg:
                    img = rembg.remove(img, session=session)
                else:
                    # Floodfill fallback (removes contiguous black)
                    ImageDraw.floodfill(img, xy=(0, 0), value=(0, 0, 0, 0), thresh=25)
                    w, h = img.size
                    points = [(w-1,0), (0,h-1), (w-1,h-1)]
                    for p in points:
                        ImageDraw.floodfill(img, xy=p, value=(0, 0, 0, 0), thresh=25)
                
                # Resize to 512x512
                img = img.resize((512, 512), Image.Resampling.LANCZOS)
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
"""
    if 'ASSET_CHAR1' in content:
        # replace existing
        content = re.sub(r'const ASSET_CHAR1 = ".*?";\n', f'const ASSET_CHAR1 = "{base64_strings[0]}";\n', content)
        content = re.sub(r'const ASSET_CHAR2 = ".*?";\n', f'const ASSET_CHAR2 = "{base64_strings[1]}";\n', content)
        content = re.sub(r'const ASSET_CHAR3 = ".*?";\n', f'const ASSET_CHAR3 = "{base64_strings[2]}";\n', content)
        content = re.sub(r'const ASSET_CHAR4 = ".*?";\n', f'const ASSET_CHAR4 = "{base64_strings[3]}";\n', content)
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
