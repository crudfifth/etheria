```
/etheria-frontend
 ├── /src
 │    ├── /routes                         # ルーティング
 │    │    ├── /actor                     # アクターごとのページ
 │    │    │    ├── /initiator            # イニシエータ関連ページ
 │    │    │    ├── /fan                  # ファン関連ページ
 │    │    │    ├── /creator              # クリエイター関連ページ
 │    │    │    ├── /admin                # アドミン関連ページ
 │    │    ├── /portal                    # ポータル (base, 2d, 3d, vr)
 │    │    │    ├── /base                 # ベースレイアウト
 │    │    │    ├── /2d                   # 2D関連ページ
 │    │    │    ├── /3d                   # 3D関連ページ
 │    │    │    ├── /vr                   # VR関連ページ
 │    │    ├── /business                  # ビジネス・管理系ページ
 │    │         ├── /projects             # プロジェクト管理
 │    │         ├── /contracts            # 契約関連
 │    │         ├── /reports              # 帳票関連
 │    ├── /components                     # アトミックデザインのコンポーネント
 │    │    ├── /atoms                     # 最小単位（ボタン、入力欄など）
 │    │    ├── /molecules                 # Atoms を組み合わせたコンポーネント
 │    │    ├── /organisms                 # ページを構成する大きなコンポーネント
 │    │    ├── /templates                 # ページレイアウト（ダッシュボード、クリエイター）
 │    ├── /lib                            # ユーティリティ・API・アニメーション
 │    │    ├── /services                  # APIから取得したデータの加工・統合
 │    │    ├── /repositories              # APIの呼び出しを行う
 │    │    ├── /storage                   # ストレージ管理（sessionStorage, localStorage, cookie）
 │    │    │    ├── session.ts            # sessionStorage を管理
 │    │    │    ├── local.ts              # localStorage を管理
 │    │    │    ├── cookies.ts            # cookie を管理
 │    │    ├── /constants                 # 共通定数
 │    │    ├── /utils                     # 汎用ユーティリティ関数
 │    ├── /styles                         # スタイル管理
 │    ├── /assets                         # 静的ファイル（画像、フォントなど）
 │    ├── /stores                         # 状態管理（Svelte Store）
 │    ├── /types                          # TypeScript の型定義
 ├── /tests                               # テスト
 ├── /storybook                           # Storybook
 ├── /docs                                # ドキュメント
 ├── /public                              # パブリック
 ├── /config                              # コンフィグ
 │    ├── svelte.config.ts                # SvelteKit 設定
 │    ├── biome.config.ts                 # biome 設定
 │    ├── tailwind.config.ts              # Tailwind 設定
 │    ├── playwright.config.json          # Playwright 設定
 │    ├── tsconfig.json                   # TypeScript 設定
 ├── package.json                         # 依存関係
 ├── README.md                            # プロジェクト説明│

```

📦 project-root
┣ 📂 backend (API & ロジック)
┃  ┣ 📂 apps
┃  ┃  ┣ 📂 api             # Phoenix API (Elixir)
┃  ┃  ┣ 📂 ws              # WebSockets API (Elixir / Phoenix)
┃  ┃  ┣ 📂 ai              # レコメンド & AI API (R / Python)
┃  ┃  ┣ 📂 payments        # 課金管理 (Node.js / Stripe)
┃  ┃  ┣ 📂 marketplace     # NFT & 3Dアイテム (Node.js / Express)
┃  ┃  ┗ 📂 jobs            # 非同期ジョブ, Pulsar (Elixir / Go)
┃  ┣ 📂 database           # DBマイグレーション (CockroachDB / Redis)
┃  ┣ 📂 scripts            # メンテナンススクリプト (Node.js / Bash)
┃  ┗ 📜 Dockerfile         # バックエンド用 Docker 設定
┣ 📂 frontend (Web & 3D & VR)
┃  ┣ 📂 web                # SvelteKit (TypeScript / Svelte)
┃  ┣ 📂 vr                 # Wonderland Engine + WebXR (JavaScript)
┃  ┣ 📂 3d                 # Three.js + Babylon.js (JavaScript)
┃  ┣ 📂 components         # UI & 3Dコンポーネント (Svelte / React)
┃  ┣ 📂 assets             # 画像・3Dモデル・音声
┃  ┣ 📂 utils              # 共通ユーティリティ (TypeScript / JavaScript)
┃  ┣ 📂 animation          # GSAP, Lottie (JavaScript)
┃  ┣ 📜 package.json       # フロントエンド設定 (TypeScript / JavaScript)
┃  ┣ 📂 d3                 # D3.js グラフ描画 (JavaScript)
┣ 📂 services (インフラ & DevOps)
┃  ┣ 📂 k8s                # Kubernetes構成 (YAML / Helm)
┃  ┣ 📂 terraform          # Infrastructure as Code (Terraform)
┃  ┣ 📂 monitoring         # 監視 & ロギング (Prometheus / Grafana)
┃  ┗ 📂 cdn                # Cloudflare設定 (JSON / YAML)
┣ 📂 docs (ドキュメント & 設計)
┣ 📂 tests (E2E & CI/CD用テスト)
┣ 📜 docker-compose.yml    # 開発用コンテナ設定
┗ 📜 README.md            # プロジェクト説明

📦 etheria
 ┣━ 📂 etheria-backend
 ┃  ┣━ 📂 apps
 ┃  ┃  ┣━ 📂 api
 ┃  ┃  ┣━ 📂 ws
 ┃  ┃  ┣━ 📂 ai
 ┃  ┃  ┣━ 📂 payments
 ┃  ┃  ┣━ 📂 marketplace
 ┃  ┃  ┗━ 📂 jobs
 ┃  ┣━ 📂 database
 ┃  ┣━ 📂 scripts
 ┃  ┗━ 📜 Dockerfile
 ┣━ 📂 etheria-frontend
 ┃  ┣━ 📂 src
 ┃  ┃  ┣━📂 routes
 ┃  ┃  ┃  ┣━ 📂 actor
 ┃  ┃  ┃  ┃  ┣━ 📂 initiator
 ┃  ┃  ┃  ┃  ┣━ 📂 fan
 ┃  ┃  ┃  ┃  ┣━ 📂 creator
 ┃  ┃  ┃  ┃  ┗━ 📂 admin
 ┃  ┃  ┃  ┣━ 📂 portal
 ┃  ┃  ┃  ┃  ┣━ 📂 base
 ┃  ┃  ┃  ┃  ┣━ 📂 2d
 ┃  ┃  ┃  ┃  ┣━ 📂 3d
 ┃  ┃  ┃  ┃  ┗━ 📂 vr
 ┃  ┃  ┃  ┗━ 📂 business
 ┃  ┃  ┃     ┣━ 📂 projects
 ┃  ┃  ┃     ┣━ 📂 constracts
 ┃  ┃  ┃     ┣━ 📂 reports
 ┃  ┃  ┃     ┗━ 📂 chat
 ┃  ┃  ┣━ 📂 components
 ┃  ┃  ┃  ┣━ 📂 atoms
 ┃  ┃  ┃  ┣━ 📂 molecules
 ┃  ┃  ┃  ┣━ 📂 organisms
 ┃  ┃  ┃  ┗━ 📂 templates
 ┃  ┃  ┣━ 📂 lib
 ┃  ┃  ┃  ┣━ 📂 services
 ┃  ┃  ┃  ┣━ 📂 repositories
 ┃  ┃  ┃  ┣━ 📂 storage
 ┃  ┃  ┃  ┣━ 📂 utils
 ┃  ┃  ┃  ┗━ 📂 constants
 ┃  ┃  ┣━ 📂 styles
 ┃  ┃  ┣━ 📂 assets
 ┃  ┃  ┣━ 📂 stores
 ┃  ┃  ┗━ 📂 types
 ┃  ┣━ 📂 tests
 ┃  ┣━ 📂 storybook
 ┃  ┣━ 📂 docs
 ┃  ┣━ 📂 public
 ┃  ┣━ 📂 config
 ┃  ┃  ┣━ 📜 svelte.config.ts
 ┃  ┃  ┣━ 📜 biome.config.ts
 ┃  ┃  ┣━ 📜 tailwind.config.ts
 ┃  ┃  ┣━ 📜 playwright.config.json
 ┃  ┃  ┗━ 📜 tsconfig.json
 ┃  ┣━ 📜 package.json
 ┃  ┗━ 📜 README.md
 ┣━ 📂 etheria-services
 ┃  ┣━ 📂 k8s
 ┃  ┣━ 📂 terraform
 ┃  ┣━ 📂 monitoring
 ┃  ┗━ 📂 cdn
 ┗━ 📜 README.md