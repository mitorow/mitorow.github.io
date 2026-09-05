# 記事テンプレ置き場

このフォルダは Astro のビルド対象外（`src/content/` の外）なので、
ここに置いたファイルは**サイトには表示されない**。
版管理はしているので、clone すればテンプレも付いてくる。

新しい記事を書くときは、テンプレを `src/content/` 側にコピーして使う。

| テンプレ | コピー先 |
| --- | --- |
| `blog-sample.md` | `src/content/blog/<slug>.md` |
| `blog-diary.md`  | `src/content/blog/<slug>.md`（過去日付の記事用） |
| `art-sample.md`  | `src/content/arts/<slug>.md`（works / games も同じ形式） |

例:

```sh
cp templates/blog-sample.md src/content/blog/my-new-post.md
```

サンプル用の画像 `public/assets/img/Blog関連/SampleThumbnail.png` は
テンプレのプレビュー用に残してある。実記事では別の画像に差し替えること。
