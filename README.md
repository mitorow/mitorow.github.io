# mitorow.com

個人サイト(ブログ + 作品置き場)。[Astro](https://astro.build/) で作っています。

## 開発

```bash
npm install       # 最初の1回だけ
npm run dev       # http://localhost:4321 でプレビュー
npm run build     # dist/ に本番用ファイルを出力
```

main ブランチに push すると GitHub Actions が自動でビルドして公開します。

## 中身の書き換え方

### 文章・リンクなどの設定

| ファイル | 中身 |
| --- | --- |
| `src/data/profile.yml` | 自己紹介、キャッチコピー、ヒーロー画像、AA |
| `src/data/links.yml` | トップに並ぶリンクカード |
| `src/data/skills.yml` | Skills のタイル |
| `src/data/tag_colors.yml` | タグごとの色 |

### 記事・作品を追加する

Markdown ファイルを置くだけで一覧に出ます。

| 置き場所 | 出る場所 |
| --- | --- |
| `src/content/blog/` | Blog |
| `src/content/works/` | Works → Service |
| `src/content/arts/` | Works → Arts |
| `src/content/games/` | Works → Games |

ブログ記事の例(`src/content/blog/hello.md` → `/blog/hello/`):

```markdown
---
title: 記事のタイトル
date: 2026-07-26
tags: [開発]
---

本文をここに書きます。
```

作品の例(`src/content/works/my-app.md` → `/works/my-app/`):

```markdown
---
title: 作品名
tags: [Web]
thumbnail: /assets/img/my-app.png   # 省略可
links:
  - label: サイトを見る
    url: https://example.com
images:                              # 省略可
  - /assets/img/my-app-1.png
---

紹介文をここに書きます。

## 使い方

使い方をここに書きます。
```

### 画像

`public/assets/img/` に置くと `/assets/img/ファイル名` で参照できます。

### 色を変えたい

`src/styles/site.css` の先頭にある `:root` の変数(`--brand`、`--page-bg` など)を書き換えます。
