const vscode = require('vscode');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

/**z
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const disposable = vscode.commands.registerCommand('pixelpress.compressImage', async (uri) => {
    try {
      const config = vscode.workspace.getConfiguration('pixelpress');

      /** @type {number} */
      const quality = config.get('quality', 70);

      /** @type {string} */
      const saveModeRaw = config.get('saveMode', 'suffix');
      const saveMode = (typeof saveModeRaw === 'string' && (saveModeRaw === 'overwrite' || saveModeRaw === 'suffix'))
        ? saveModeRaw
        : 'suffix'; // fallback（安全策）

      const inputPath = uri.fsPath;
      const ext = path.extname(inputPath);
      const outputPath = saveMode === 'overwrite'
        ? inputPath
        : inputPath.replace(ext, `_compressed${ext}`);

      const buffer = await fs.readFile(inputPath);

      // 拡張子に応じて処理を切り替える（今は JPEG固定）
      const compressed = await sharp(buffer)
        .jpeg({ quality })
        .toBuffer();

      await fs.writeFile(outputPath, compressed);

      vscode.window.showInformationMessage(
        `Compressed image ${saveMode === 'overwrite' ? 'overwritten' : 'saved to'}: ${path.basename(outputPath)}`
      );
    } catch (err) {
      vscode.window.showErrorMessage(`Compression failed: ${err.message}`);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
