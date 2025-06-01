# pixelpress

Compress image files (`.jpg`, `.jpeg`, `.png`) directly inside VSCode via right-click.

## Features

- ✅ Right-click to compress any image file
- 🛠 Adjustable compression quality (1–100)
- 💾 Choose whether to overwrite or save as a new file
- ⚡ Powered by the fast and efficient [`sharp`](https://github.com/lovell/sharp) library

## How to Use

1. Right-click on any `.jpg` or `.png` file in the Explorer
2. Select **"Compress Image"**
3. A compressed image will be saved in the same directory

You can configure:
- `pixelpress.quality`
- `pixelpress.saveMode` (overwrite or suffix)

## Settings

| Setting                  | Description                            | Default     |
|--------------------------|----------------------------------------|-------------|
| `pixelpress.quality` | Compression quality (1–100)            | `70`        |
| `pixelpress.saveMode` | `overwrite` or `suffix` mode           | `"suffix"`  |

## Marketplace

You can install this extension from the Visual Studio Marketplace:  
👉 [PixelPress on Marketplace](https://marketplace.visualstudio.com/items?itemName=takuanporipori.pixelpress)

---

### 🚀 Start compressing images without leaving your editor!
