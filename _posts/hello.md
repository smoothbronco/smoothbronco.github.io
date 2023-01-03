---
title: 'ブログを作った'
excerpt: 'Next.jsでブログを作った'
date: '2023-01-03'
tags:
  - 'React'
  - 'Next.js'
---

## 概要

タイトルの通り、ブログを作ってみました。
特に何か書いていこうという気概はそこまでないです。
Next.js を使って Markdown をパースするという最近流行り(?)の構成です。

## 作成の背景

僕は普段アルバイトやら学業やらでコードを書いているんですが、フロントエンドの経験が浅いので作りました。
アルバイトでたまに Vue2 系を書くだけで、Next.js どころか React もほぼ初心者です。

## 参考にしたもの

以下のテンプレートをガッツリ参考にしました。
少しググれば情報が手に入る世の中で本当に助かります。

[参考リポジトリ](https://github.com/sub-t/blog-template)

## 参考のものと違う点

ほとんど変えてないのですが、Next.js のアップデートに伴い`next/link`を使う部分に手を入れました。
入れ子になっている a タグが不要になっています。

変更前

```tsx
<Link href="/" passHref>
  <a className="foobar">foobar</a>
</Link>
```

変更後

```tsx
<Link href="/" passHref className="foobar">
  foobar
</Link>
```

なお、僕の環境だと a タグが残っていたままだとエラーを吐いていました。

`Error: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.`
`Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`

以下の記事で公式からも情報が出ています。

[公式ブログ](https://nextjs.org/blog/next-13)

v13.x から更新されたようで、アップグレードする際の対応策も記述があります。

`The next/link child can no longer be <a>.`
`Add the legacyBehavior prop to use the legacy behavior or remove the <a> to upgrade.`
`A codemod is available to automatically upgrade your code.`

素直に a タグを削除するなり、`legacyBehavior`プロパティを追加してあげるなりするといいみたいです。
