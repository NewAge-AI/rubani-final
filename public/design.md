---
version: alpha
name: Rubani
description: Rubani's public design system. Editorial enterprise style on warm paper surfaces, near-black ink actions, navy brand accents, rounded media cards, a single midnight feature band, Switzer (a Swiss neo-grotesk) for display and UI type, and JetBrains Mono metadata.
colors:
  paper: "#FAFAF7"
  stone: "#F1F0EB"
  ink: "#17171C"
  midnight: "#0C1720"
  brand: "#1B3A6B"
  brand-soft: "#DFE7F5"
  coral: "#E5683F"
  lilac: "#D9CFF5"
  primary: "#17171C"
  primary-hover: "#000000"
  primary-foreground: "#FFFFFF"
  primary-border: "color-mix(in oklab, var(--primary) 12%, transparent)"
  background: "#FAFAF7"
  foreground: "#17171C"
  card: "#FFFFFF"
  card-foreground: "#17171C"
  popover: "hsl(0 0% 100%)"
  popover-foreground: "hsl(0 0% 9%)"
  secondary: "#F1F0EB"
  secondary-foreground: "hsl(0 0% 9%)"
  muted: "#F1F0EB"
  muted-foreground: "hsl(0 0% 45.1%)"
  accent: "#F1F0EB"
  accent-foreground: "hsl(0 0% 9%)"
  border: "hsl(0 0% 89.8%)"
  input: "hsl(0 0% 89.8%)"
  ring: "#1B3A6B"
  destructive: "hsl(0 84.2% 60.2%)"
  destructive-foreground: "hsl(0 0% 98%)"
  logo-blue: "#00318C"
  logo-ink: "#1C1814"
  logo-cream: "#EDEBE4"
  dark-background: "hsl(233 7% 8%)"
  dark-foreground: "hsl(0 0% 98%)"
  dark-primary-foreground: "oklch(0.985 0 0)"
  dark-card: "hsl(240 6% 10%)"
  dark-card-foreground: "hsl(0 0% 98%)"
  dark-popover: "hsl(233 7% 8%)"
  dark-popover-foreground: "hsl(0 0% 98%)"
  dark-secondary: "hsl(0 0% 14.9%)"
  dark-secondary-foreground: "hsl(0 0% 98%)"
  dark-muted: "hsl(0 0% 14.9%)"
  dark-muted-foreground: "hsl(0 0% 63.9%)"
  dark-accent: "hsl(0 0% 14.9%)"
  dark-accent-foreground: "hsl(0 0% 98%)"
  dark-border: "hsl(0 1% 17%)"
  dark-input: "hsl(0 0% 14.9%)"
  dark-destructive: "hsl(358 100% 50%)"
  dark-destructive-foreground: "hsl(0 0% 99%)"
  chart-1: "oklch(0.646 0.222 41.116)"
  chart-2: "oklch(0.6 0.118 184.704)"
  chart-3: "oklch(0.398 0.07 227.392)"
  chart-4: "oklch(0.828 0.189 84.429)"
  chart-5: "oklch(0.769 0.188 70.08)"
typography:
  display-serif-80:
    fontFamily: Switzer
    fontSize: 80px
    fontWeight: 400
    lineHeight: 96px
    letterSpacing: 0
  display-serif-52:
    fontFamily: Switzer
    fontSize: 52px
    fontWeight: 400
    lineHeight: 62px
    letterSpacing: 0
  heading-56:
    fontFamily: Switzer
    fontSize: 56px
    fontWeight: 600
    lineHeight: 64px
    letterSpacing: -1.4px
  heading-48:
    fontFamily: Switzer
    fontSize: 48px
    fontWeight: 600
    lineHeight: 60px
    letterSpacing: -1.2px
  heading-36:
    fontFamily: Switzer
    fontSize: 36px
    fontWeight: 600
    lineHeight: 44px
    letterSpacing: -0.9px
  heading-30:
    fontFamily: Switzer
    fontSize: 30px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: -0.75px
  heading-24:
    fontFamily: Switzer
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.6px
  heading-20:
    fontFamily: Switzer
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.4px
  heading-18:
    fontFamily: Switzer
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
  copy-20:
    fontFamily: Switzer
    fontSize: 20px
    fontWeight: 500
    lineHeight: 32px
  copy-18:
    fontFamily: Switzer
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  copy-16:
    fontFamily: Switzer
    fontSize: 16px
    fontWeight: 400
    lineHeight: 28px
  copy-14:
    fontFamily: Switzer
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
  copy-13:
    fontFamily: Switzer
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  label-14:
    fontFamily: Switzer
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  label-13:
    fontFamily: Switzer
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
  label-12:
    fontFamily: Switzer
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  code-13:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  32: 128px
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 14px
  squircle: "16px with corner-shape: round"
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    hoverBackgroundColor: "{colors.primary-hover}"
    typography: "{typography.label-13}"
    rounded: "{rounded.squircle}"
    padding: "0 24px"
    height: 40px
  button-primary-large:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    hoverBackgroundColor: "{colors.primary-hover}"
    typography: "{typography.label-14}"
    rounded: "{rounded.squircle}"
    padding: "0 40px"
    height: 48px
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    borderColor: "{colors.border}"
    typography: "{typography.label-13}"
    rounded: "{rounded.squircle}"
    padding: "0 24px"
    height: 40px
  button-secondary-large:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    borderColor: "{colors.border}"
    typography: "{typography.label-14}"
    rounded: "{rounded.squircle}"
    padding: "0 40px"
    height: 48px
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    borderColor: "{colors.input}"
    typography: "{typography.copy-14}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: 40px
  input-large:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    borderColor: "{colors.input}"
    typography: "{typography.copy-16}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: 48px
  badge:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.label-12}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  segmented-control:
    backgroundColor: "color-mix(in oklab, var(--primary) 10%, transparent)"
    textColor: "{colors.muted-foreground}"
    activeBackgroundColor: "{colors.card}"
    activeTextColor: "{colors.primary}"
    borderColor: "color-mix(in oklab, var(--primary) 8%, transparent)"
    typography: "{typography.label-13}"
    rounded: "{rounded.full}"
    padding: 2px
    height: 32px
  nav-island:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    borderColor: "rgba(0,0,0,0.05)"
    rounded: "{rounded.xl}"
    shadow: "0 10px 30px rgba(0,0,0,0.08), inset 0 1px rgba(255,255,255,0.9)"
  menu-card:
    backgroundColor: "rgba(250,250,250,0.7)"
    textColor: "{colors.foreground}"
    borderColor: "rgba(0,0,0,0.08)"
    typography: "{typography.copy-14}"
    rounded: "{rounded.xl}"
    padding: 16px
  marketing-section:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    borderColor: "{colors.border}"
    typography: "{typography.copy-16}"
    padding: "64px 24px"
  section-heading:
    textColor: "{colors.foreground}"
    typography: "{typography.heading-48}"
  product-frame:
    backgroundColor: "{colors.card}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    shadow: "0 0 0 1px rgba(0,0,0,0.08)"
  pricing-card:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    borderColor: "{colors.border}"
    typography: "{typography.copy-14}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    borderColor: "{colors.primary-border}"
    typography: "{typography.copy-14}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  brand-card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    borderColor: "color-mix(in oklab, var(--border) 70%, transparent)"
    typography: "{typography.copy-14}"
    rounded: "{rounded.xl}"
    padding: 24px
  prose:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.copy-16}"
    rounded: "{rounded.none}"
  hatch-pattern:
    background: "repeating-linear-gradient(45deg, var(--color-border) 0px, var(--color-border) 1px, transparent 1px, transparent 16px)"
    opacity: 0.6
  hero-gradient:
    background: "radial-gradient(125% 125% at 50% 90%, var(--background) 40%, var(--primary) 100%)"
    height: 100vh
---

# Rubani

## Overview

Rubani is the sovereign AI platform for African enterprise. The public design language follows the editorial enterprise-AI style of sites like Cohere: warm paper surfaces, generous whitespace, light-weight grotesk display type, near-black ink actions, and large rounded media cards carrying floating product UI. Switzer, a Swiss neo-grotesk in the tradition of Neue Haas Grotesk and Söhne, sets everything from display to UI; JetBrains Mono is reserved for uppercase eyebrows, labels, and technical metadata.

## Color Use

`paper` is the default page surface and `stone` alternates sections. `ink` is the action color: primary buttons are ink pills, secondary actions are underlined text links. `midnight` is used for exactly one feature band per page (the principles bento) and `ink` for the stats band and footer.

`brand` navy is the Rubani identity accent: eyebrow dots, check marks, icon tiles (on `brand-soft`), and the "Built for Africa" chip. `coral` is a scarce warm highlight for active states and eyebrows on dark surfaces. `lilac`, `brand`, and `coral` together form the glassy gradient shapes used only in the closing CTA.

Logo colors are separate from UI colors. `logo-blue`, `logo-ink`, and `logo-cream` are for the Rubani mark, wordmark, and brand asset presentation.

## Typography Use

Switzer (Indian Type Foundry, ITF Free Font License, self-hosted from `src/fonts/switzer`) is the single brand typeface. Page heroes use weight 300 at 44-76px with -0.045em tracking; section headings use weight 400 with -0.035em tracking and a muted second line (`ink` at 40% opacity). Body copy uses weight 400 at 15-20px with relaxed leading at 60-65% ink. Eyebrows use JetBrains Mono, 11px, uppercase, 0.14em tracking, preceded by a small dot.

## Layout

Content sits in an 80rem container with 20px (mobile) / 32px (desktop) gutters. Sections use 80-112px vertical padding and alternate `paper`, `stone`, and one `midnight` band.

Page templates:

- **Home**: centred hero with media cards, stats band, product rows, principles bento, solutions tabs, comparison, security, FAQ, CTA.
- **Platform overview** (`/platform`): hero with layered architecture diagram, product cards, comparison, integrations, rollout steps, CTA.
- **Product** (`/platform/[slug]`): split hero (copy + art card with floating product UI), capability grid, dark "how it works" steps, specs table, related industries, other products, CTA.
- **Industry** (`/solutions/[slug]`): full-bleed photographic hero with audience chips, numbered challenges, use-case grid, dark outcomes, platform components, other industries, CTA.
- **Trust** (`/security`): photographic hero, commitments, sticky-nav controls catalogue, deployment-model table, regulatory alignment, disclosure cards.
- **Company, Pricing, Contact, Legal**: text-led hero; pricing tiers with the middle tier inverted; contact as a split layout with next steps and a form card; legal as a sidebar plus prose column.

Navigation uses mega menus for Platform and Solutions: overview column, described links, and a featured art card.

## Elevation and Shape

Media cards and panels use `rounded-2xl` (16px); the CTA panel uses 24px. Buttons, chips, and tags are full pills. Depth comes from photography, hairline borders (ink at 8-10%), and soft long shadows on floating UI overlays. Avoid hard grid borders and hatch textures.

## Imagery

Brand graphics are rendered 3D scenes in the brand palette: glass and satin forms, soft studio lighting, coral emissive accents, and a midnight or paper background. Heroes use ultra-wide variants (`*-wide.webp`) with the subject in the right third so headlines sit on clear space; cards use 16:9 or 5:4 variants with the subject centred.

## Voice

Copy should be concrete, short, and product-specific. Avoid generic AI marketing language such as "revolutionize", "unlock", "supercharge", "seamless", and "effortless".

## Do's and Don'ts

- Use the tokens in this file before inventing new visual values.
- Keep primary actions ink, and pair each with one underlined text link at most.
- Keep navy and coral scarce and role-based.
- Use JetBrains Mono only for eyebrows, metadata, and technical context.
- Use content-specific 3D renders from `public/landing/art/` (Africa edge network, labelled orchestration router, data fabric, industry still lifes, security shield) or clean photography as visual proof. Each graphic should depict the subject of its page. Never use watermarked or unlicensed stock imagery.
- Use gradient shapes for the closing CTA, the 404, and product art panels only.
- Do not nest cards inside cards.
- Do not center long-form prose.
- Do not remove visible focus states.
