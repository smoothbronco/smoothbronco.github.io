---
title: 'Pythonのパッケージ管理メモ'
excerpt: '複数人でPythonのパッケージ管理するために色々調べたまとめ'
date: '2023-02-25'
tags:
  - 'Python'
  - 'pip'
---

## 概要

いつも研究で使ってるPythonのパッケージ管理について整理してみた。

## pipとvenv

pipはPython3.4以降に標準で付属しているパッケージ管理ツール。

venvはパッケージ管理のための仮想環境構築ツール。こちらも標準で付属している。

## 仮想環境を作る

仮想環境を作りたいディレクトリで、以下のコマンドを実行したらできる。
```bash
python -m venv .venv
```

実行後は、
```
.venv/bin, .venv/include, .venv/lib, .venv/pyvenv.cfg
```
というふうにディレクトリとファイルが構成される。

binとlibには文字通りバイナリとライブラリが入り、pyvenv.cfgにはPythonのバージョンなどの記載がされる。

## 仮想環境の起動と停止

起動
```bash
source .venv/bin/activate
```

停止
```bash
deactivate
```

## requirements.txtを使って依存関係をチームで管理する

requirements.txtは、仮想環境内で使っているライブラリの名前とバージョンが記載されたもの。
node.jsでいうところのpackage.jsonに近い。

たとえば、numpyをインストールしたあとに`pip list`した結果は以下のようになる。
```
Package    Version
---------- -------
numpy      1.24.2
pip        22.0.4
setuptools 58.1.0
```

続けてコマンドを叩くと、これらの情報がrequirements.txtに書き込まれる。
```bash
pip freeze > ./requirements.txt
```

requirements.txtの中身はこんな感じ。
```
numpy==1.24.2
```

他の環境で作業するときは、`pip install -r requirements.txt`とコマンドを叩くと、環境を再現できる。

## 細かい点

### requirements.txt更新の自動化

requirements.txtは、`pip install`しただけで更新されない。
毎度`pip freeze`するのは手間だし忘れやすいので、自分はgit hooksを使って以下のスクリプトを走らせている。
```bash
#!/bin/bash

cd $(git rev-parse --show-toplevel) # リポジトリのrootディレクトリに移動
source .venv/bin/activate

pip freeze > ./requirements.txt
git add requirements.txt
```

なお、git hooksの設定は[この記事](https://astatsuya.medium.com/githooks%E3%81%AEpre-push%E3%82%92%E5%85%B1%E6%9C%89%E3%81%97%E3%81%A6%E3%83%AC%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%82%92%E5%81%A5%E5%85%A8%E3%81%AB%E4%BF%9D%E3%81%A4-7156def39b64)が参考になった。


### pip freeze --all

`pip freeze --all`を実行すると、自らインストールしたライブラリが依存しているパッケージのバージョンについても書き出される。
node.jsでいうpackage-lock.jsonに近い。

`pip freeze`をそのまま実行するよりも依存関係を厳密に管理できる。
