# topcore.me
### ~~ 自分の好きな音楽アルバムをプロフィールカードとしてリンク生成できるアプリ ~~

- URL -> https://www.topcore.me/

<img width="700" alt="スクリーンショット 2025-06-24 0 16 44" src="https://github.com/user-attachments/assets/1e5ad3c8-9845-4f81-b852-016433844a2c" />

## 目次

## 🎵 サービス概要
"topcore.me"は、自分の中でも特に好きな音楽アルバムを並べて、それをプロフィールカードとしてリンク生成できるアプリです。
生成されたリンクはSNSなどに貼っておくことで、同じ音楽の好みを持つ人が見つかりやすくなります。

## 🎸 このサービスへの思い・作りたい理由
従来の音楽アルバムを並べて公開するアプリは「画像出力」のみ対応している状態であったため、以下の経験でフラストレーションを感じていました。

- 画像だとツイートやストーリーなどでしか公開できず、**公開してもすぐにタイムラインに流されてしまう**こと
- それを固定ツイートにしても、Xは１つしか固定ツイートに対応していないため、**他の固定にしたいツイートがある時に困った**こと
- 画像だけだと、**他の人の画像を見た時に気になったアルバムをすぐに聴けなかった**こと

これらの不満を解決したいというところからアイデアをスタートさせています。

私は音楽オタクとして「自分の好きな曲を好きな人と友達になりたい！」という欲求と「自分の好きな曲をもっと人に知ってもらいたい！！」という欲求がある傾向にあります。
そこで、生成されたリンクをSNSのプロフィールに貼って見てもらうのを待つことで、ぐいぐい自分の好きなものを他者に押し付けず、継続的にいろんな人に自分の好きな曲を見てもらえるようにしています。

## 🔧 機能一覧
- アルバム検索機能
- プロフィールカード作成機能
- リンク生成機能
- プロフィールカード詳細表示の機能

### ▶︎アルバム検索機能
https://github.com/user-attachments/assets/1bfbefd9-0a50-44c3-b9e3-b2c4ce1b56c4

### ▶︎プロフィールカード作成機能
#### 検索したアルバムの割り当て機能
https://github.com/user-attachments/assets/7aff1dce-7588-4377-ba99-9e91272f6cce

#### アルバムの入れ替え機能
https://github.com/user-attachments/assets/4dc2573d-cae0-4fe3-90e8-61a4b8605894

#### 背景色の変更機能
https://github.com/user-attachments/assets/d3749bcc-936b-440a-a4b9-c1448c580f1b

#### アバター画像の選択機能（クロップ）
https://github.com/user-attachments/assets/dc9224df-cf2d-4078-a770-5aac83010dc9

### ▶︎リンク生成機能
https://github.com/user-attachments/assets/554d6e20-8e59-4337-80f8-2c68ada2c0ac

#### クリップボードへのコピー機能
https://github.com/user-attachments/assets/f59f1971-f612-431f-83c3-a16fbbae452d

#### Xツイートでのリンクシェア機能
https://github.com/user-attachments/assets/69ae1bda-5e34-49bc-ac36-7eb05649a1d5



### ▶︎プロフィールカード詳細表示
https://github.com/user-attachments/assets/948aa7d8-7547-47d7-bbb6-cd39bccfc77b

#### アルバムをクリックするとSpotifyのアルバムページに遷移して音楽を聴ける機能
https://github.com/user-attachments/assets/c4ee0ec1-747f-439d-b60f-bc24aa671dc9



## 💻 使用技術
| カテゴリ  | 使用技術 |
| ------------- | ------------- |
| フロントエンド  | React/react-router v7(declarative mode)/TailwindCSS/shadcn-ui/dnd-kit |
| バックエンド  | Rails API 7.2.2 /Ruby 3.4.4 |
| データベース  | PostgreSQL  |
| ビルドツール  | Vite  |
| JS静的解析ツール  | ESLint  |
| 自動フォーマッター  | Prettier  |
| クラウドストレージサービス  | AWS S3 |
| 外部API  | Spotify Web API  |
| インフラ  | Render(Rails API), Vercel(React)  |
| 開発環境  | Docker  |

## ER図
![スクリーンショット 2025-06-24 1 49 00](https://github.com/user-attachments/assets/f6308df3-cc35-4fef-8050-fc9251d3a350)

## 画面遷移図
URL => https://www.figma.com/design/4UWd5cRv1wpNC2I3WmDc5o/topcore.me?t=l0ytua9whTPobQv5-1

![スクリーンショット 2025-06-24 1 50 43](https://github.com/user-attachments/assets/66dd21b7-e4ee-4dd0-9e54-5a6a6fe3b17f)
