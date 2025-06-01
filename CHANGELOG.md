# Changelog

All notable changes to this project will be documented in this file.

---

## [0.0.2] - 2025-06-01

### Added
- 拡張機能名を `pixelpress` に変更し、よりオリジナリティある名前に刷新
- `icon.png` を追加し、Marketplace 上に拡張機能アイコンが表示されるようにした

### Fixed
- JavaScript 実装において型推論の警告が出る箇所を修正
- `package.json` に `"publisher"` フィールドを追加して `vsce publish` エラーを解消

---

## [0.0.1] - 2025-05-31

### Added
- `.jpg`, `.jpeg`, `.png` を VSCode 上で右クリックして圧縮できる機能を実装
- 圧縮画質（quality）と保存方式（overwrite / suffix）を設定で変更可能に
- `sharp` ライブラリを使用した高速・高品質な圧縮処理
- ユーザー設定によるカスタマイズに対応

