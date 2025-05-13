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
┣ 📂 backend               # API & ロジック
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
 ┣━ 📦 etheria-backend
 ┃  ┣━ 📂 apps                                     # 各サービスアプリケーション
 ┃  ┃  ┣━ 📂 api                                   # Phoenix API (Elixir)
 ┃  ┃  ┃  ┣━ 📂 controllers                        # APIのコントローラー
 ┃  ┃  ┃  ┣━ 📂 models                             # DBモデル
 ┃  ┃  ┃  ┣━ 📂 serializers                        # APIレスポンスのシリアライザー
 ┃  ┃  ┃  ┣━ 📂 routers                            # ルーティングの設定
 ┃  ┃  ┃  ┣━ 📂 services                           # ビジネスロジック
 ┃  ┃  ┃  ┣━ 📂 workers                            # バックグラウンドジョブ（Exq, Obanなど）
 ┃  ┃  ┃  ┣━ 📜 config.exs                         # アプリケーションの設定ファイル
 ┃  ┃  ┃  ┗━ 📜 README.md                          # APIに関する詳細
 ┃  ┃  ┣━ 📂 ws                                    # WebSocket API (Elixir / Phoenix)
 ┃  ┃  ┃  ┣━ 📂 channels                           # WebSocketのチャンネル
 ┃  ┃  ┃  ┣━ 📂 consumers                          # 消費者（メッセージ受信と処理）
 ┃  ┃  ┃  ┣━ 📜 config.exs                         # WebSocketアプリケーション設定
 ┃  ┃  ┃  ┗━ 📜 README.md                          # WebSocket APIの詳細
 ┃  ┃  ┣━ 📂 ai                                    # AI & レコメンドシステム (R / Python)
 ┃  ┃  ┃  ┣━ 📂 models                             # 機械学習・AIモデル
 ┃  ┃  ┃  ┣━ 📂 services                           # AIロジック（レコメンド処理等）
 ┃  ┃  ┃  ┣━ 📜 config.yaml                        # AI設定ファイル
 ┃  ┃  ┃  ┗━ 📜 README.md                          # AIサービスの詳細
 ┃  ┃  ┣━ 📂 payments                              # 課金管理 (Node.js / Stripe)
 ┃  ┃  ┃  ┣━ 📂 controllers                        # 決済APIのコントローラー
 ┃  ┃  ┃  ┣━ 📂 services                           # 決済ロジック（Stripe APIとのやり取り）
 ┃  ┃  ┃  ┣━ 📜 config.js                          # 決済設定ファイル
 ┃  ┃  ┃  ┗━ 📜 README.md                          # 決済サービスの詳細
 ┃  ┃  ┣━ 📂 marketplace                           # NFT & 3Dアイテム (Node.js / Express)
 ┃  ┃  ┃  ┣━ 📂 controllers                        # マーケットプレイスAPIのコントローラー
 ┃  ┃  ┃  ┣━ 📂 models                             # マーケットアイテムのモデル
 ┃  ┃  ┃  ┣━ 📂 services                           # マーケットプレイスのロジック
 ┃  ┃  ┃  ┣━ 📜 config.js                          # マーケット設定ファイル
 ┃  ┃  ┃  ┗━ 📜 README.md                          # マーケットサービスの詳細
 ┃  ┃  ┗━ 📂 jobs                                  # 非同期ジョブ, Pulsar (Elixir / Go)
 ┃  ┃     ┣━ 📂 workers                            # バッチジョブのワーカー（Elixir）
 ┃  ┃     ┣━ 📂 pulsar_jobs                        # Pulsarで非同期処理
 ┃  ┃     ┣━ 📜 config.exs                         # ジョブ設定ファイル
 ┃  ┃     ┗━ 📜 README.md                          # ジョブの詳細
 ┃  ┣━ 📂 database                                 # データベース
 ┃  ┃  ┣━ 📂 migrations                            # データベースマイグレーション
 ┃  ┃  ┣━ 📂 seeders                               # シーディング（データの初期化）
 ┃  ┃  ┣━ 📂 seeds                                 # シードデータ
 ┃  ┃  ┣━ 📜 config.exs                            # DB接続設定
 ┃  ┃  ┗━ 📜 README.md                             # DB設定に関する詳細
 ┃  ┣━ 📂 scripts                                  # メンテナンススクリプト
 ┃  ┃  ┣━ 📂 db_cleanup                            # DBクリーニング
 ┃  ┃  ┣━ 📂 backups                               # バックアップ関連スクリプト
 ┃  ┃  ┣━ 📂 performance                           # パフォーマンス関連スクリプト
 ┃  ┃  ┣━ 📜 run_cleanup.sh                        # クリーニングスクリプト
 ┃  ┃  ┣━ 📜 run_backup.sh                         # バックアップスクリプト
 ┃  ┃  ┗━ 📜 README.md                             # スクリプトの説明
 ┃  ┣━ 📜 Dockerfile                               # バックエンド用 Docker 設定
 ┃  ┗━ 📜 README.md                                # バックエンド全体の説明
 ┣━ 📂 etheria-frontend
 ┃  ┣━ 📂 src
 ┃  ┃  ┣━ 📂 routes                                # ルーティング
 ┃  ┃  ┃  ┣━ 📂 actor                              # アクターごとのページ
 ┃  ┃  ┃  ┃  ┣━ 📂 initiator                       # イニシエータ関連ページ
 ┃  ┃  ┃  ┃  ┣━ 📂 fan                             # ファン関連ページ
 ┃  ┃  ┃  ┃  ┣━ 📂 creator                         # 管理者関連ページ
 ┃  ┃  ┃  ┃  ┗━ 📂 admin                           # ファン関連ページ
 ┃  ┃  ┃  ┣━ 📂 portal                             # ポータル (base, 2d, 3d, vr)
 ┃  ┃  ┃  ┃  ┣━ 📂 base                            # ベースレイアウト
 ┃  ┃  ┃  ┃  ┣━ 📂 2d                              # 2D関連ページ
 ┃  ┃  ┃  ┃  ┣━ 📂 3d                              # 3D関連ページ
 ┃  ┃  ┃  ┃  ┗━ 📂 vr                              # VR関連ページ
 ┃  ┃  ┃  ┗━ 📂 business                           # ビジネス・管理系ページ
 ┃  ┃  ┃     ┣━ 📂 projects                        # プロジェクト管理
 ┃  ┃  ┃     ┣━ 📂 constracts                      # 契約関連
 ┃  ┃  ┃     ┣━ 📂 reports                         # 帳票関連
 ┃  ┃  ┃     ┗━ 📂 chat                            # チャット関連
 ┃  ┃  ┣━ 📂 components                            # アトミックデザインのコンポーネント
 ┃  ┃  ┃  ┣━ 📂 atoms                              # 最小単位（ボタン、入力欄など）
 ┃  ┃  ┃  ┃  ┣━ 📜 Button.svelte                   # ボタン
 ┃  ┃  ┃  ┃  ┣━ 📜 InputField.svelte               # 入力フォーム
 ┃  ┃  ┃  ┃  ┣━ 📜 Icon.svelte                     # アイコン
 ┃  ┃  ┃  ┃  ┣━ 📜 Text.svelte                     # テキスト表示
 ┃  ┃  ┃  ┃  ┗━ 📜 Spinner.svelte                  # ローディングインジケーター
 ┃  ┃  ┃  ┣━ 📂 molecules                          # 複数のアトムを組み合わせたコンポーネント
 ┃  ┃  ┃  ┃  ┣━ 📜 Card.svelte                     # カード型レイアウト（データ表示）
 ┃  ┃  ┃  ┃  ┣━ 📜 SearchBar.svelte                # 検索バー
 ┃  ┃  ┃  ┃  ┣━ 📜 Dropdown.svelte                 # ドロップダウンメニュー
 ┃  ┃  ┃  ┃  ┣━ 📜 ProfileCard.svelte              # プロフィールカード（ユーザー情報表示）
 ┃  ┃  ┃  ┃  ┣━ 📜 Chart.svelte                    # D3.jsを使ったチャートコンポーネント
 ┃  ┃  ┃  ┃  ┗━ 📜 Modal.svelte                    # モーダルウィンドウ
 ┃  ┃  ┃  ┣━ 📂 organisms                          # ページを構成する大きなコンポーネント
 ┃  ┃  ┃  ┃  ┣━ 📜 NavigationBar.svelte            # ナビゲーションバー
 ┃  ┃  ┃  ┃  ┣━ 📜 Sidebar.svelte                  # サイドバー
 ┃  ┃  ┃  ┃  ┣━ 📜 Dashboard.svelte                # ダッシュボード（複数のチャートやカード）
 ┃  ┃  ┃  ┃  ┣━ 📜 Header.svelte                   # ヘッダー
 ┃  ┃  ┃  ┃  ┗━ 📜 Footer.svelte                   # フッター
 ┃  ┃  ┃  ┣━ 📂 templates                          # ページレイアウト
 ┃  ┃  ┃  ┃  ┣━ 📜 DashboardLayout.svelte          # ダッシュボードレイアウト
 ┃  ┃  ┃  ┃  ┣━ 📜 CreatorLayout.svelte            # クリエイター向けレイアウト
 ┃  ┃  ┃  ┃  ┗━ 📜 BusinessLayout.svelte           # ビジネス・管理系レイアウト
 ┃  ┃  ┃  ┣━ 📂 charts                             # チャート用コンポーネント
 ┃  ┃  ┃  ┃  ┣━ 📜 LineChart.svelte                # D3.jsで描画した折れ線グラフ
 ┃  ┃  ┃  ┃  ┣━ 📜 BarChart.svelte                 # D3.jsで描画した棒グラフ
 ┃  ┃  ┃  ┃  ┣━ 📜 PieChart.svelte                 # D3.jsで描画した円グラフ
 ┃  ┃  ┃  ┃  ┣━ 📜 RadarChart.svelte               # D3.jsで描画したレーダーチャート
 ┃  ┃  ┃  ┃  ┗━ 📜 ScatterPlot.svelte              # D3.jsで描画した散布図
 ┃  ┃  ┃  ┣━ 📂 forms                              # フォーム関連のコンポーネント
 ┃  ┃  ┃  ┃  ┣━ 📜 TextInput.svelte                # テキスト入力フォーム
 ┃  ┃  ┃  ┃  ┣━ 📜 Checkbox.svelte                 # チェックボックス
 ┃  ┃  ┃  ┃  ┣━ 📜 RadioButton.svelte              # ラジオボタン
 ┃  ┃  ┃  ┃  ┗━ 📜 Select.svelte                   # セレクトボックス（ドロップダウン）
 ┃  ┃  ┃  ┣━ 📂 layout                             # レイアウト用コンポーネント
 ┃  ┃  ┃  ┃  ┣━ 📜 Container.svelte                # ページ全体のコンテナ
 ┃  ┃  ┃  ┃  ┣━ 📜 Grid.svelte                     # グリッドレイアウト
 ┃  ┃  ┃  ┃  ┗━ 📜 Flex.svelte                     # フレックスボックスレイアウト
 ┃  ┃  ┃  ┣━ 📂 notification                       # 通知関連のコンポーネント
 ┃  ┃  ┃  ┃  ┣━ 📜 Toast.svelte                    # トースト通知
 ┃  ┃  ┃  ┃  ┗━ 📜 Alert.svelte                    # アラート通知
 ┃  ┃  ┃  ┗━ 📂 user                               # ユーザー関連のコンポーネント
 ┃  ┃  ┃     ┣━ 📜 UserCard.svelte                 # ユーザー情報カード
 ┃  ┃  ┃     ┗━ 📜 UserProfile.svelte              # ユーザープロフィールページ
 ┃  ┃  ┣━ 📂 lib                                   # ユーティリティ・API・アニメーション
 ┃  ┃  ┃  ┣━ 📂 services                           # APIから取得したデータの加工・統合
 ┃  ┃  ┃  ┣━ 📂 repositories                       # APIの呼び出しを行う
 ┃  ┃  ┃  ┣━ 📂 storage                            # ストレージ管理
 ┃  ┃  ┃  ┃  ┣━ 📜 cookie.ts                       # クッキー管理
 ┃  ┃  ┃  ┃  ┣━ 📜 sessionStorage.ts               # セッションストレージ管理
 ┃  ┃  ┃  ┃  ┗━ 📜 localStorage.ts                 # ローカルストレージ管理
 ┃  ┃  ┃  ┣━ 📂 utils                              # 汎用ユーティリティ関数
 ┃  ┃  ┃  ┗━ 📂 constants                          # 共通定数
 ┃  ┃  ┣━ 📂 styles                                # スタイル管理
 ┃  ┃  ┣━ 📂 assets                                # 静的ファイル（画像、フォントなど）
 ┃  ┃  ┣━ 📂 stores                                # 状態管理（Svelte Store）
 ┃  ┃  ┗━ 📂 types                                 # TypeScript の型定義
 ┃  ┣━ 📂 tests                                    # テスト
 ┃  ┣━ 📂 storybook                                # Storybook
 ┃  ┣━ 📂 docs                                     # ドキュメント
 ┃  ┣━ 📂 public                                   # パブリック
 ┃  ┣━ 📂 config                                   # コンフィグ
 ┃  ┃  ┣━ 📜 svelte.config.ts                      # SvelteKit 設定
 ┃  ┃  ┣━ 📜 biome.config.ts                       # biome 設定
 ┃  ┃  ┣━ 📜 tailwind.config.ts                    # Tailwind 設定
 ┃  ┃  ┣━ 📜 playwright.config.json                # Playwright 設定
 ┃  ┃  ┗━ 📜 tsconfig.json                         # TypeScript 設定
 ┃  ┣━ 📜 package.json                             # 依存関係
 ┃  ┗━ 📜 README.md                                # プロジェクト説明│
 ┣━ 📦 etheria-services                            # インフラ & DevOps
 ┃  ┣━ 📂 k8s                                      # Kubernetes構成
 ┃  ┃  ┣━ 📂 manifests                             # Kubernetes マニフェストファイル
 ┃  ┃  ┃  ┣━ 📂 deployments                        # 各種リソースのデプロイメント（Pod, Deployment, ReplicaSet など）
 ┃  ┃  ┃  ┣━ 📂 services                           # サービス設定（Service, Ingressなど）
 ┃  ┃  ┃  ┣━ 📂 configmaps                         # ConfigMap（設定ファイル）
 ┃  ┃  ┃  ┣━ 📂 secrets                            # Secret情報（パスワード、APIキーなど）
 ┃  ┃  ┃  ┣━ 📂 persistent_volumes                 # 永続ボリューム（PVC, PVなど）
 ┃  ┃  ┃  ┣━ 📂 network_policies                   # ネットワークポリシー（ポッド間の通信制御）
 ┃  ┃  ┃  ┣━ 📂 namespaces                         # Kubernetesの名前空間設定（prod, dev, stagingなど）
 ┃  ┃  ┣━ 📂 helm                                  # Helm チャート（Kubernetes設定テンプレート）
 ┃  ┃  ┃  ┣━ 📂 charts                             # Helmチャートのテンプレート
 ┃  ┃  ┃  ┣━ 📂 values                             # Helmチャートの値設定ファイル（環境ごと）
 ┃  ┃  ┣━ 📂 configs                               # Kubernetes ConfigMap や Secretsなど
 ┃  ┃  ┗━ 📜 README.md                             # Kubernetes 設定の概要と運用方法
 ┃  ┣━ 📂 terraform                                # Infrastructure as Code (Terraform)
 ┃  ┃  ┣━ 📂 modules                               # Terraform モジュール（再利用可能なリソース定義）
 ┃  ┃  ┃  ┣━ 📂 compute                            # EC2インスタンスやVMに関するリソース定義
 ┃  ┃  ┃  ┣━ 📂 networking                         # VPC, サブネット、NATゲートウェイなどネットワーク関連
 ┃  ┃  ┃  ┣━ 📂 storage                            # S3バケットやRDS、DynamoDBの定義
 ┃  ┃  ┃  ┣━ 📂 security                           # IAM、セキュリティグループ、VPCピアリング
 ┃  ┃  ┣ 📂 environments                           # 環境ごとの設定（dev, prod, stagingなど）
 ┃  ┃  ┃  ┣━ 📂 dev                                # 開発環境のTerraform設定
 ┃  ┃  ┃  ┣━ 📂 prod                               # 本番環境のTerraform設定
 ┃  ┃  ┃  ┣━ 📂 staging                            # ステージング環境の設定
 ┃  ┃  ┣━ 📂 state                                 # Terraform 状態ファイル（S3等に格納）
 ┃  ┃  ┗━ 📜 README.md                             # Terraform 設定の概要と実行方法
 ┃  ┣━ 📂 monitoring                               # 監視 & ロギング
 ┃  ┃  ┣━ 📂 prometheus                            # Prometheus 設定（メトリクス収集）
 ┃  ┃  ┃  ┣━ 📂 scrape_configs                     # メトリクスのスクレイピング設定
 ┃  ┃  ┃  ┗━ 📂 rules                              # アラートルール（Prometheus Alertmanager）
 ┃  ┃  ┣━ 📂 grafana                               # Grafana 設定（ダッシュボード作成）
 ┃  ┃  ┃  ┣━ 📂 dashboards                         # ダッシュボード設定
 ┃  ┃  ┃  ┗━ 📂 datasources                        # データソース設定（Prometheus、Elasticsearch等）
 ┃  ┃  ┣━ 📂 alerting                              # アラート設定（Prometheus AlertmanagerやPagerDutyなど）
 ┃  ┃  ┣━ 📂 logging                               # ロギング設定（ELKスタックやFluentd）
 ┃  ┃  ┃  ┣━ 📂 logstash                           # Logstash 設定（ログの収集・変換）
 ┃  ┃  ┃  ┣━ 📂 fluentd                            # Fluentd 設定（ログの収集・転送）
 ┃  ┃  ┃  ┣━ 📂 elasticsearch                      # Elasticsearch 設定（ログの格納）
 ┃  ┃  ┃  ┗━ 📂 kibana                             # Kibana 設定（ログの可視化）
 ┃  ┃  ┗━ 📜 README.md                             # 監視・ロギング設定の概要
 ┃  ┣━ 📂 cdn                                      # Cloudflare設定
 ┃  ┃  ┣━ 📂 rules                                 # Cloudflare キャッシュルール、セキュリティルール
 ┃  ┃  ┣━ 📂 edge_configs                          # Cloudflare Workers（エッジコンピューティング）
 ┃  ┃  ┣━ 📂 dns                                   # DNS設定（ドメイン管理やDNSレコード）
 ┃  ┃  ┗━ 📜 README.md                             # CDN設定の概要
 ┃  ┗━ 📜 README.md                                # サービス全体の概要
 ┣━ 📂 docs                                        # 全体設計ドキュメント
 ┗━ README.md