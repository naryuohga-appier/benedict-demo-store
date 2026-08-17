# BENEDICT — Demo Storefront（アウトドアバックパック セレクトショップ）

BotBonnie / Service Agent デモ用の静的プロトタイプサイトです。
BENEDICT は複数ブランドを取り扱う小売店という設定で、商品はブランド名つきで掲載しています。

- 1ページ構成の静的サイト（フレームワークなし）
- BotBonnie WebChat 組み込み済み（Page ID: `page-86eb853ff64e474aba0bb2c1`）
- レスポンシブ対応：1440 / 1024 / 768 / 390px 検証済み
- 公開URL: https://naryuohga-appier.github.io/benedict-demo-store/
- 取扱ブランド: GREGORY（17点）/ karrimor（9点）+ その他ブランドはお取り寄せ設定
- 商品カードにブランド名を表示。Shopはタブ（ランキング/新着/セール/アウトドア向け）×ブランド絞り込み

## ファイル構成

```
index.html      トップページ
styles.css      スタイル
script.js       商品データ・スライダー・レール・ドロワー
assets/         ロゴ（PNG）と各種画像
.nojekyll       GitHub Pages で Jekyll 処理をスキップ
```

## ブランド仕様

| 項目 | 値 |
|---|---|
| ブランドカラー | `#1a3b2b` |
| ブランド名フォント | Montserrat Bold（letter-spacing 0.12em） |
| タグラインフォント | Lato Regular |
| タグライン | Crafted to Fit, Built to Roam. |

## 画像の追加方法

必要な画像35枚の仕様・ファイル名・生成プロンプトは、このリポジトリの外にある
`../tools/IMAGE_SPEC.md` にまとめています。生成は `../tools/generate_images.py` で一括実行できます。

```bash
cd ..                                              # BENEDICT/ へ
python3 tools/generate_images.py --only product-01  # 基準の1枚
python3 tools/generate_images.py                    # 残りすべて
python3 tools/generate_images.py --install          # Github-IO/assets/ へ配置
```

指定のファイル名で `assets/` に置くだけで反映されます。
未配置の画像はブランドカラーのプレースホルダーが自動表示されます。

## GitHub Pages

`Settings > Pages > Deploy from a branch > main > / (root)` で公開しています。
push から1〜2分で反映されます。

## 注意

本サイトはデモンストレーション用のプロトタイプであり、実在の企業・ブランドとは一切関係がありません。
カート・会員・決済機能は動作しません。API トークンや秘密鍵は含まれていません。
