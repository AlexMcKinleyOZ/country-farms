# Country Farms — Claude Code テストプロジェクト

> これは、**Claude Code**（Anthropic社のAIコーディングアシスタント）を使って、ウェブサイトをどこまで自動構築できるかを検証するテストプロジェクトです。実在の企業やサービスではありません。

---

## このプロジェクトについて

架空の農地投資プラットフォーム「Country Farms」のウェブサイトを、**デザイン設計 → Figmaデザイン → コーディング → デプロイ**の一連の流れをすべてAIアシスタントと協力して進めることで、AIツールの実用性を検証しました。

**公開URL：** [https://country-farms.alex-mckinley.workers.dev/](https://country-farms.alex-mckinley.workers.dev/)

**Figmaデザインファイル：** [claudetofigmatest（Figma）](https://www.figma.com/design/nqZJaoSh5foWFhtNizQ4hd/claudetofigmatest?node-id=4-3&t=iFbBjyRTiTK5Rf3d-0)

---

## 制作の流れ

### ステップ 1 ― デザイン仕様書の作成（`DESIGN.md`）

まず、Claude Codeとの対話を通じて、サイト全体のデザイン方針をまとめた仕様書（`DESIGN.md`）を作成しました。この段階で決定した主な内容は以下のとおりです。

- **カラーパレット：** ウォームホワイト・テラコッタ・セージグリーンなど、農地の温かみを表現したカラーセット
- **タイポグラフィ：** 見出しにセリフ体の *Lora*、本文にサンセリフ体の *DM Sans* を採用
- **レイアウト・余白：** 8pxを基本単位とするグリッドシステム、最大幅1200px
- **コンポーネント定義：** ボタン、カード、ナビゲーション、フォームなどのスタイル仕様
- **レスポンシブ対応：** モバイル・タブレット・デスクトップの3段階ブレークポイント
- **アクセシビリティ：** WCAGのAAコントラスト基準への準拠
- **方針：** コーディング前にまずFigmaでデザインを完成させること

---

### ステップ 2 ― Figmaでのデザイン制作

`DESIGN.md` の仕様をもとに、Claude CodeのFigma連携（MCP）機能を使ってFigmaにデザインを書き出しました。

- ホームページなど複数のページのデザインをFigmaに生成
- ただし、**FigmaのMCP接続の利用上限に早い段階で達してしまったため、全ページのデザインは完成しませんでした**
- 完成したデザインは上記のFigmaリンクから確認できます

---

### ステップ 3 ― Astroによるサイト構築

FigmaのデザインとDESIGN.mdをもとに、Claude CodeがAstroプロジェクトとしてサイトを構築しました。

**技術スタック：**

| 項目 | 内容 |
|---|---|
| フレームワーク | [Astro](https://astro.build/)（静的サイト生成） |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) |
| 多言語対応 | i18n（日本語・英語の2言語） |
| フォント | Google Fonts（Lora・DM Sans） |

**構築の方針：**
- Figmaに存在するページはFigmaデザインを忠実に再現
- Figmaに存在しないページや要素は `DESIGN.md` の仕様に従って構築
- ページ構成：ホーム・仕組み・物件一覧・会社概要・お問い合わせ（各日英対応）

---

### ステップ 4 ― Cloudflareへのデプロイ

完成したサイトをCloudflare Workersの無料プランを使って公開しました。

- Astroのビルド出力をCloudflare Workersで配信
- 独自ドメインなし（Cloudflareが提供するサブドメインを使用）
- **公開URL：** [https://country-farms.alex-mckinley.workers.dev/](https://country-farms.alex-mckinley.workers.dev/)

---

## ローカルでの動かし方

```sh
# 依存パッケージのインストール
npm install

# 開発サーバーの起動（http://localhost:4321 でプレビュー）
npm run dev

# 本番ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

---

## まとめ・所感

このプロジェクトを通じて、Claude Codeを使うことで**デザイン仕様書の作成からFigmaデザイン、コーディング、デプロイまでの一連のワークフローをAIと協力して進められること**が確認できました。

FigmaのMCP連携は便利ですが、利用上限があるため大規模なデザイン生成には注意が必要です。また、`DESIGN.md` のような詳細な仕様書を事前に準備することが、AIへの指示品質を大きく高めることもわかりました。

---
---

# Country Farms — Claude Code Test Project

> This is a test project built to explore how far **Claude Code** (Anthropic's AI coding assistant) can take a website from concept to deployment. Country Farms is a fictional brand and does not represent a real company or service.

---

## About This Project

This project follows the full workflow of building a website for a fictional farmland investment platform — from design specification through Figma mockups, to code, to live deployment — all in collaboration with an AI assistant.

**Live site:** [https://country-farms.alex-mckinley.workers.dev/](https://country-farms.alex-mckinley.workers.dev/)

**Figma design file:** [claudetofigmatest (Figma)](https://www.figma.com/design/nqZJaoSh5foWFhtNizQ4hd/claudetofigmatest?node-id=4-3&t=iFbBjyRTiTK5Rf3d-0)

---

## How It Was Made

### Step 1 — Design Specification (`DESIGN.md`)

The first step was creating a detailed design document (`DESIGN.md`) through conversation with Claude Code. This document established:

- **Color palette** — a warm, earthy set including Warm White, Terracotta, and Sage Green
- **Typography** — *Lora* (serif) for headings, *DM Sans* (sans-serif) for body text
- **Layout & spacing** — 8px base grid, 1200px max content width
- **Component styles** — buttons, cards, navigation, forms
- **Responsive breakpoints** — mobile, tablet, and desktop
- **Accessibility** — WCAG AA contrast compliance
- **Process decision** — design in Figma first, then build from the design

---

### Step 2 — Figma Design

Using Claude Code's Figma MCP integration, the `DESIGN.md` specification was used to generate designs directly into Figma.

- Multiple pages were generated in Figma from the design spec
- However, **the Figma MCP usage limit was reached early**, so not all pages were completed in Figma
- The completed designs are available at the Figma link above

---

### Step 3 — Site Build with Astro

Claude Code built the full site as an Astro project, drawing from both the Figma designs and the `DESIGN.md` specification.

**Tech stack:**

| Item | Detail |
|---|---|
| Framework | [Astro](https://astro.build/) (static site output) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Internationalisation | i18n (Japanese & English) |
| Fonts | Google Fonts (Lora & DM Sans) |

**Build approach:**
- Pages with Figma designs were implemented faithfully from those designs
- Pages or elements missing from Figma were built from `DESIGN.md` directly
- Pages built: Home, How It Works, Properties, About, Contact — all in both languages

---

### Step 4 — Cloudflare Deployment

The finished site was deployed to Cloudflare Workers using the free hobby tier.

- Astro's static build output is served via Cloudflare Workers
- No custom domain — uses a Cloudflare-provided subdomain
- **Live URL:** [https://country-farms.alex-mckinley.workers.dev/](https://country-farms.alex-mckinley.workers.dev/)

---

## Running Locally

```sh
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Production build
npm run build

# Preview the build locally
npm run preview
```

---

## Takeaways

This project demonstrated that Claude Code can support the **entire workflow from design specification → Figma mockups → coded site → live deployment**. Key observations:

- A detailed upfront design document (`DESIGN.md`) significantly improves the quality of AI-generated code
- Figma MCP integration is powerful but has usage limits that constrain large-scale design generation
- Astro + Tailwind + Cloudflare Workers is a capable, zero-cost stack for static marketing sites
