# BENEDICT デモサイト｜必要画像リスト＆生成プロンプト

- **合計：35枚（必須）＋ 4枚（任意）**
- 保存先：`assets/` 直下。**ファイル名は下記のとおり**にすればコード修正なしで反映されます。
- 形式：写真は `.jpg`（品質80〜85、sRGB）。商品カットアウトのみ白背景 `.jpg` でOK（透過が欲しい場合は `.png` でも可・その際は拡張子の変更をお知らせください）。
- ブランド：BENEDICT（ベネディクト）／日本のアウトドア＆ライフスタイル・バックパックブランド
- ブランドカラー：ディープフォレストグリーン `#274535`
- タグライン：Crafted to Fit, Built to Roam.

---

## 共通のスタイル指定（全カットに付ける）

```
Photography style: natural daylight, documentary / editorial lifestyle look,
muted earthy palette with deep forest green accents, soft realistic shadows,
fine film grain, shallow-to-medium depth of field, 35mm or 50mm lens feel,
authentic Japanese urban and mountain settings, no heavy color grading.
```

## 共通のネガティブプロンプト（全カット）

```
no logos, no brand names, no text, no watermark, no signature,
no distorted hands or faces, no extra straps or buckles, no floating objects,
not a 3D render, not illustration, not cartoon, no HDR halos,
no lens flare, no oversaturation, no plastic skin
```

---

## A. ヒーロースライダー｜3枚｜**2400 × 1000 px**（2.4:1・横長）

全幅表示・左側にテキストが重なるため、**画面左 1/3 は被写体を置かず余白**にしてください。

| # | ファイル名 | 内容 |
|---|---|---|
| A-1 | `hero-01-roam.jpg` | 街を歩く20代男性、デイパックを背負う（ROAMコレクション） |
| A-2 | `hero-02-outset.jpg` | 休日の街／公園、20〜30代女性がショルダーバッグを提げる |
| A-3 | `hero-03-summit.jpg` | 稜線を歩く登山者、大型バックパック |

**A-1**
```
Wide cinematic lifestyle photo, 2400x1000, a Japanese man in his 20s with curly hair
walking along a modern city street in the morning, wearing a plain dark green backpack,
casual beige shirt and dark trousers, glass office buildings reflecting soft light behind him,
subject positioned on the right two-thirds of the frame, left third is clean empty background
for text overlay, natural daylight, documentary editorial style, muted earthy palette, film grain
```

**A-2**
```
Wide cinematic lifestyle photo, 2400x1000, a Japanese woman in her late 20s walking
through a sunny park path with a small dark shoulder bag across her body, relaxed weekend outfit,
green trees softly blurred behind, subject on the right side, left third clean and uncluttered
for text overlay, natural daylight, documentary editorial style, muted earthy palette, film grain
```

**A-3**
```
Wide cinematic outdoor photo, 2400x1000, a hiker seen from behind walking on a mountain ridge
with a large 70L expedition backpack, early morning light, distant peaks and low clouds,
subject on the right side, left third is open sky for text overlay,
natural daylight, documentary editorial style, muted earthy palette, film grain
```

---

## B. スタイルから選ぶ｜4枚｜**800 × 1066 px**（3:4・縦長）

下端にラベル帯が重なるため、**下 15% は暗めで被写体の重要部分を置かない**でください。

| # | ファイル名 | 内容 |
|---|---|---|
| B-1 | `style-01-daypack.jpg` | デイパックを背負う人（背面〜斜め後ろ） |
| B-2 | `style-02-shoulder.jpg` | ショルダーバッグを肩掛けした人 |
| B-3 | `style-03-waist.jpg` | ウエストバッグを腰／斜め掛けした人 |
| B-4 | `style-04-tote.jpg` | トートバッグを手に持つ人 |

**B-1**
```
Vertical 3:4 lifestyle photo, a person seen from behind wearing a black daypack,
walking on a tree-lined city sidewalk, waist-up to three-quarter body framing,
bag clearly visible and centered, soft afternoon light, bottom of the frame slightly darker,
natural daylight, documentary editorial style, muted earthy palette, film grain
```

**B-2**
```
Vertical 3:4 lifestyle photo, a young woman with a compact black shoulder bag worn crossbody,
standing on a city street, three-quarter body framing, the bag is the clear focal point,
soft overcast light, bottom of the frame slightly darker,
natural daylight, documentary editorial style, muted earthy palette, film grain
```

**B-3**
```
Vertical 3:4 lifestyle photo, a person wearing a compact waist pack across the chest,
walking on a riverside path, three-quarter body framing, the waist pack is the clear focal point,
soft golden hour light, bottom of the frame slightly darker,
natural daylight, documentary editorial style, muted earthy palette, film grain
```

**B-4**
```
Vertical 3:4 lifestyle photo, a person carrying a small dark canvas tote bag by the handles,
walking through a quiet neighbourhood street, three-quarter body framing,
the tote is the clear focal point, soft daylight, bottom of the frame slightly darker,
natural daylight, documentary editorial style, muted earthy palette, film grain
```

---

## C. エディトリアル（2カラム）｜2枚｜**1440 × 940 px**（約3:2）

C-2 は**右半分に濃いグラデーションと白文字**が重なります。右側は情報量の少ない構図にしてください。

| # | ファイル名 | 内容 |
|---|---|---|
| C-1 | `editorial-01.jpg` | 街中でデイパックを背負う人（引きの構図） |
| C-2 | `editorial-02.jpg` | デイパックのディテール（生地・ジッパー・ハーネス） |

**C-1**
```
Editorial lifestyle photo 1440x940, a person with a black daypack standing on a city street
lined with plants and low buildings, medium-wide framing, relaxed natural posture,
soft afternoon light, natural daylight, documentary editorial style, muted earthy palette, film grain
```

**C-2**
```
Editorial detail photo 1440x940, close-up of a dark green backpack showing ballistic nylon
fabric texture, zipper pull and padded shoulder harness, shallow depth of field,
subject on the left half of the frame, right half is simple soft-focus background for text overlay,
natural window light, documentary editorial style, muted earthy palette, film grain
```

---

## D. 商品カットアウト｜17枚｜**1000 × 1000 px**（1:1・白背景）

**共通テンプレート**（`[]` を各行の内容に置換）

```
Studio e-commerce product photo, 1000x1000 square, a [ITEM] in [COLOR],
three-quarter front view, standing upright, centered with about 8% margin on all sides,
pure white seamless background #FFFFFF, soft even studio lighting, subtle natural contact shadow,
crisp technical fabric texture, sharp focus edge to edge, catalog style,
no logos, no text, no watermark, not a 3D render
```

| # | ファイル名 | ITEM | COLOR |
|---|---|---|---|
| D-01 | `product-01-ridge-daypack-dsp.jpg` | 26L teardrop-shaped daypack with two side pockets | black |
| D-02 | `product-02-fineday-v2.jpg` | 18L slim daypack with narrow shoulder harness | ballistic black |
| D-03 | `product-03-easyday.jpg` | 18L compact rounded daypack with top handle | black |
| D-04 | `product-04-allday.jpg` | 22L daypack with front and side pockets | black |
| D-05 | `product-05-campus-day-m.jpg` | 22L school daypack with padded shoulder straps | black |
| D-06 | `product-06-roam-22.jpg` | 22L modern commuter backpack with air-mesh back panel | carbon black |
| D-07 | `product-07-classic-sacoche-m.jpg` | 1.5L flat sacoche shoulder pouch with front mesh pocket | black |
| D-08 | `product-08-quick-pocket-m.jpg` | 2L small utility pouch with detachable strap | black |
| D-09 | `product-09-padded-shoulder-pouch-m.jpg` | fully padded small shoulder pouch for devices | black |
| D-10 | `product-10-harbor-tote-s.jpg` | 7L small canvas tote bag with detachable shoulder strap | black |
| D-11 | `product-11-crest-30.jpg` | 30L hiking daypack with trail harness and laptop sleeve | ballistic black |
| D-12 | `product-12-trace-8.jpg` | 8L single-strap sling pack | silver grey |
| D-13 | `product-13-ridgeline-35.jpg` | 35L hiking backpack with ventilated suspension | bright sky blue |
| D-14 | `product-14-summit-70w.jpg` | 70L women's expedition backpack with hip belt | fog grey |
| D-15 | `product-15-summit-75.jpg` | 75L expedition backpack with adjustable harness | obsidian black |
| D-16 | `product-16-voyage-25.jpg` | 25L carry-on travel backpack with luggage pass-through | total black |
| D-17 | `product-17-raincover-50-80.jpg` | packed rain cover for a 50–80L backpack, seam-taped | bright red |

> **重要**：17点は「同じブランドの一貫したデザイン言語」に見える必要があります。まず D-01 を確定させ、その画像を参照（image-to-image／スタイル参照）にして残り16点を生成すると破綻しにくいです。

---

## E. ニュース｜1枚｜**1200 × 900 px**（4:3）

下部に「BENEDICT WEEK 10% OFF SPECIAL COUPON」の白文字が重なります。**下 1/3 は暗め・情報量少なめ**に。
（ニュース2枚目・3枚目はロゴ表示のため画像不要です）

| # | ファイル名 | 内容 |
|---|---|---|
| E-1 | `news-01-campaign.jpg` | キャンペーン用ビジュアル（街並み or 旅先の風景＋バッグ） |

```
Campaign lifestyle photo 1200x900, a warm European-style street scene with stone buildings
in late afternoon light, a person with a backpack walking away from camera in the middle distance,
lower third of the frame is darker and uncluttered for a white text overlay,
natural daylight, documentary editorial style, muted earthy palette, film grain
```

---

## F. EXPLORER（UGC風グリッド）｜8枚｜**1000 × 1000 px**（1:1）

「ユーザーが投稿した写真」の雰囲気。スタジオ品質より**やや素朴でスナップらしく**。

| # | ファイル名 | 内容 |
|---|---|---|
| F-1 | `explorer-01.jpg` | 自転車の横でデイパックを背負う人 |
| F-2 | `explorer-02.jpg` | 花柄／柄物のショルダーバッグのクローズアップ |
| F-3 | `explorer-03.jpg` | 通勤中の後ろ姿（駅・ホーム） |
| F-4 | `explorer-04.jpg` | キャンプサイトに置かれたバックパック |
| F-5 | `explorer-05.jpg` | カフェのテーブル横に置かれたトートバッグ |
| F-6 | `explorer-06.jpg` | 山頂で休憩する登山者と大型パック |
| F-7 | `explorer-07.jpg` | 雨の日、レインカバーを掛けたバックパック |
| F-8 | `explorer-08.jpg` | 旅先の空港／駅でキャリーに載せたトラベルパック |

```
Square 1:1 casual user-generated style photo, [上表の内容を英語で記述],
shot on a phone, natural available light, slightly imperfect composition, authentic everyday moment,
muted earthy palette, subtle grain, no logos, no text
```

---

## 任意（あると良い）

| # | ファイル名 | サイズ | 内容 |
|---|---|---|---|
| G-1 | `og-image.jpg` | 1200 × 630 | SNSシェア用。ロゴ＋バッグのビジュアル |
| G-2〜4 | `hero-01-roam-sp.jpg` ほか | 1080 × 1350 | ヒーローのスマホ用縦構図（A-1〜A-3と同シーン） |

---

## 配置後の反映方法

1. 生成した画像を上記ファイル名にリネーム
2. `assets/` フォルダに入れる（既存のロゴPNGと同じ場所）
3. `index.html` をブラウザで開く

画像が未配置の箇所は、ブランドカラーのプレースホルダーが自動表示されます（壊れた画像アイコンは出ません）。
