from PIL import Image
import os
import sys

def process_spritesheet(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    # Any pixel very close to white becomes transparent.
    for item in data:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)

    # Never overwrite the original spritesheet by accident.
    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    img.save(output_path, "PNG")


if __name__ == "__main__":
    # Optional usage:
    #   python process_bg.py input.png output.png
    # If no arguments are supplied, create separate processed copies.
    if len(sys.argv) == 3:
        process_spritesheet(sys.argv[1], sys.argv[2])
    elif len(sys.argv) == 1:
        process_spritesheet("assets/male.png", "assets/male_processed.png")
        process_spritesheet("assets/female.png", "assets/female_processed.png")
        print("Sprites processados: assets/male_processed.png e assets/female_processed.png")
    else:
        print("Uso: python process_bg.py [input.png output.png]")
        sys.exit(1)
