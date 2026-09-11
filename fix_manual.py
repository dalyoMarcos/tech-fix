import re

def fix_manual_bug():
    with open("script.js", "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update GameScene init to reset/read buffs
    old_init = r"(this\.currentCustomer = this\.todaysCustomers\[this\.customerIndex\];\s+this\.waitingForNext = false;)"
    new_init = r"\1\n        this.buffCoffee = data.buffCoffee || false;\n        this.buffExtraLife = data.buffExtraLife || false;\n        this.manualUsed = data.manualUsed || false;"
    content = re.sub(old_init, new_init, content)

    # 2. Update WorkbenchScene backBtn to pass buffs back
    old_back = r"todaysCustomers: this\.todaysCustomers \n\s+\}\);"
    new_back = r"todaysCustomers: this.todaysCustomers,\n                      buffCoffee: this.buffCoffee,\n                      buffExtraLife: this.buffExtraLife,\n                      manualUsed: this.manualUsed\n                  });"
    content = re.sub(old_back, new_back, content)

    with open("script.js", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    fix_manual_bug()
