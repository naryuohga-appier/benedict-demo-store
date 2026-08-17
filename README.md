# BENEDICT — Demo Storefront

BotBonnie / Service Agent デモ用の静的プロトタイプサイトです。

- 1ページ構成の静的サイト（フレームワークなし）
- BotBonnie WebChat 組み込み済み（Page ID: `page-86eb853ff64e474aba0bb2c1`）
- レスポンシブ対応：1440 / 1024 / 768 / 390px 検証済み

## ファイル構成

```
index.html      トップページ
styles.css      スタイル
script.js       商品データ・スライダー・レール・ドロワー
assets/         ロゴ（PNG）と各種画像
IMAGE_SPEC.md   必要画像35枚の一覧と生成プロンプト
.nojekyll       GitHub Pages で Jekyll 処理をスキップ
```

## 画像の追加方法

`IMAGE_SPEC.md` のファイル名どおりにリネームして `assets/` に置くだけで反映されます。
未配置の画像はブランドカラーのプレースホルダーが自動表示されます。

## GitHub Pages

`Settings > Pages > Deploy from a branch > main > / (root)` で公開できます。

## 注意

本サイトはデモンストレーション用のプロトタイプであり、実在の企業・ブランドとは一切関係がありません。
カート・会員・決済機能は動作しません。API トークンや秘密鍵は含まれていません。
