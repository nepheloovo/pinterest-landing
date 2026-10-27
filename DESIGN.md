---
name: "Pinterest — Your next idea starts here"
description: "已批准的 Planes 方向在 Pinterest 灵感落地页中的实际设计系统。"
colors:
  bg: "#030a12"
  surface: "#0b1420"
  surface-raised: "#101d2d"
  fg: "#f8fafc"
  muted: "#b1b8c4"
  line: "#293441"
  white: "#ffffff"
  ink: "#0a0e16"
  red: "#e60023"
  blue: "#4280f7"
  blue-soft: "#8cc9ff"
  focus: "#b0dcff"
  outline: "#8d96a1"
  header-line: "#3b4552"
  header-floating: "#0b1420f5"
  scrim: "#030a1299"
  light-ambient: "#24578670"
  light-core: "#216bc9"
  light-ray: "#5cb3ff"
  footer-core: "#4280f76b"
  footer-edge: "#17386940"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "6.4365vw"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-.055em"
  display-tablet:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(56px, 8.5vw, 76px)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-.055em"
  display-mobile:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(46px, 13vw, 62px)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-.055em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(40px, 4.4vw, 64px)"
    fontWeight: 550
    lineHeight: 1.03
    letterSpacing: "-.045em"
  headline-strong:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(40px, 4.4vw, 64px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-.045em"
  title:
    fontFamily: "Geist, sans-serif"
    fontSize: "25px"
    fontWeight: 550
    lineHeight: 1.2
    letterSpacing: "-.035em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body-base:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  hero-body:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(16px, 1.52vw, 22px)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-.025em"
  button:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.2
  button-small:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
  save-label:
    fontFamily: "Geist, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
  nav:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.3
  brand:
    fontFamily: "Geist, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-.065em"
  wordmark:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(64px, 17vw, 244px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-.055em"
rounded:
  small: "10px"
  card: "16px"
  large: "24px"
  pill: "999px"
  hero-photo: "1.1vw"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  "32": "128px"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-signup:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.button-small}"
    rounded: "{rounded.small}"
    padding: "8px 16px"
  save-button:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.save-label}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  save-button-saved:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.save-label}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  text-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.nav}"
    padding: "8px 12px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
  filter-chip-selected:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
  navigation:
    textColor: "{colors.fg}"
    typography: "{typography.nav}"
  photo-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    typography: "{typography.caption}"
    rounded: "{rounded.card}"
  demo-board:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.large}"
    padding: "32px"
  faq-row:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "20px 0"
---

# Design System: Pinterest

## Overview

**Creative North Star: "Planes 已批准方向的 Pinterest 转译"**

以用户已经确认的深冷蓝黑背景、白色 Geist 紧字距、真实照片墙、红色保存动作、克制控件与蓝光为共同语言。Pinterest 的 P 与照片内容承担识别，冷蓝光让焦点集中，较大的留白让密集照片仍然可读。

正文、导航与辅助操作保持清楚而安静；大标题压紧行高与字距，照片以裁切、轻微旋转和错位提供质感。动效服务于出现、操作反馈与探索：入场只执行一次，持续运动可以暂停，减少动态效果时默认呈现静态内容。

**Key Characteristics:**
- 深冷蓝黑底上的白色层级与细线分隔。
- 单一 Geist 字体；大标题紧字距，辅助文字维持清楚的灰白对比。
- 照片是主要视觉材料；红色标记保存和品牌动作，蓝色提供环境光。
- 圆角照片、胶囊主行动与小圆角工具入口并存。
- 原生可用的内容与语义控件，逐步增强拖动、保存与光场。

本记录从最终 `pinterest-landing/dist/index.html`、`tokens.css` 及其共享样式和脚本提取；根目录文件是同内容镜像。既有证据为 `.impeccable/review/qa-report.json`、1440/1200/768/390/360px 与无脚本截图、`finish-review.md` 和 `verdict-pass.md`。本次仅记录系统，没有启动新的浏览器检查。照片细节与当前实际首屏均以用户已接受版本为准。

## Colors

前言颜色是运行时的原始 CSS 颜色值；角色来自当前成品，而非参考站的令牌表。

### Primary

- **Pinterest Red**（`red`）：品牌圆形 P、保存按钮和注册入口。保存完成后切到 `ink`，仍保留白色文字。

### Secondary

- **Cold Blue**（`blue`）：文字选区、App 预览背后的环境光与页脚局部蓝光的基础色。
- **Soft Blue**（`blue-soft`）：画板空状态线稿。
- **Focus Blue**（`focus`）：所有键盘可操作元素的可见焦点。
- **Ambient / Core / Ray Blue**（`light-ambient`、`light-core`、`light-ray`）：首屏环境渐层及真实 canvas 光场。
- **Footer Core / Edge**（`footer-core`、`footer-edge`）：页脚指针附近的局部光斑。它们保留源码中的透明度。

### Neutral

- **Cold Near Black**（`bg`）：整页底色与深色场。
- **Dark Surface / Raised Surface**（`surface`、`surface-raised`）：画板、移动菜单、图片后备底与手机外壳；通过微小亮度差区分层级。
- **Foreground / Pure White**（`fg`、`white`）：常规主文字和明亮品牌、白色主按钮。两者保留独立角色。
- **Muted Text**（`muted`）：说明、次级导航和演示披露。
- **Dark Ink**（`ink`）：浅色按钮文字、手机屏幕文字与已保存按钮。
- **Line / Outline / Header Line**（`line`、`outline`、`header-line`）：内容分隔、透明按钮边线与导航登录边线；边框宽度保持细线。
- **Floating Header / Scrim**（`header-floating`、`scrim`）：带透明度的浮动导航表面与照片移除按钮底。

**The Save Accent Rule.** 红色用于 Pinterest 品牌识别、保存动作与注册入口；蓝色用于光场、可见焦点和少量空状态提示。

侧车为面板生成的八阶 `tonalRamp` 只用于查看同色明度关系，不是网站已使用的色阶。组件预览包裹层与样例宽度也只负责面板排版，不新增运行时令牌。

## Typography

**Display Font:** Geist（后备 `sans-serif`）。
**Body Font:** Geist（同一自托管可变字体，100–900，`font-display: swap`）。

**Character:** 主标题与品牌字紧凑、直接；正文和控制标签较轻，通过大小与灰白对比退后。当前没有独立衬线、等宽、全大写标签或输入字体系统。

### Hierarchy

- **Display**：前言 `display`，用于桌面双行主标题；平板与手机分别使用 `display-tablet`、`display-mobile`。手机行高稍放宽。主标题字重为 600。
- **Headline**：发现与保存区使用 `headline`（550）；App、FAQ、收尾行动使用 `headline-strong`（600）。两者共享流动字号、紧字距与标题行高。
- **Title**：`title` 用于画板名称；平板以下收为源码中的 22px。
- **Body**：`body` 是主要说明，`body-base` 用于 FAQ 答案与手机正文；发现区说明宽约 34ch，保存区约 38ch，FAQ 答案最多 65ch。
- **Hero Body**：`hero-body` 仅用于桌面首屏说明；平板以下采用 18px / 1.5，手机为 16px / 1.5。
- **Button / Save Label**：主行动用 `button`，小注册按钮用 `button-small`；保存按钮用更小的 `save-label`，仍有独立的可触及命中区。
- **Navigation / Caption / Label**：`nav` 用于导航及工具文字，`caption` 用于照片标题，`label` 用于应用商店入口的辅助行。较小演示披露使用源码 12px / 1.6。
- **Brand / Wordmark**：顶部品牌用 `brand`，底部巨型字用 `wordmark`；均来自同一 Geist 字体。

**The Single Typeface Rule.** 所有实际文字角色使用同一 Geist 家族；层级来自字号、字重、行高、字距和灰白对比。

## Layout

共享内容容器最大宽度为 1200px；左右边距为 `clamp(20px, 3.52vw, 64px)`。间距以已实现的 4px 起步尺度展开；主要区块桌面纵向留白为 128px，900px 以下为 96px，600px 以下为 80px。图墙和画板的内部密度明显高于区块之间的留白。

首屏是独立的比例构图：桌面保持 1448 / 1086，标记、文案与照片按比例定位；900px 以下切为 950px 高，600px 以下为 900px 高。该首屏比例属于已批准表面，不作为所有新页面必须采用的构图。桌面导航在 900px 以下变成有展开菜单的 44px 控件。

发现区桌面标题与说明横向排列。图墙窗口桌面高 650px，900px 以下为 620px，600px 以下为 540px；内部桌面为五列、至少 1440px 宽，平板为 1120px / 四列，手机为 760px / 四列。超出部分属于可探索窗口，不造成整页横向溢出。列距桌面为 16px，手机为 12px。

保存区桌面使用 `1fr 1.05fr`、80px 间距；900px 以下为等宽双栏、32px 间距；600px 以下单列、40px 间距，并隐藏仅作补充的三张旋转照片。画板内部使用三列、8px 间距。

App 与 FAQ 在桌面分别为等宽双栏和 `.85fr 1.15fr`；默认间距 96px，1000px 以下缩为 48px，767px 以下单列。App 的文案在手机上先于手机预览；390px 以下商店入口隐藏图标，以保留文字宽度。

## Elevation & Depth

深度来自暗面之间的细微色阶、照片裁切与旋转、独立白色 P 的冷蓝光，以及少量真实浮起的表面。普通照片与画板没有普遍的投影；阴影只在手机预览和状态提示中使用。浮动导航使用带透明度的暗面、细线和 14px 背景模糊。

### Shadow Vocabulary

- **Floating surface**（`--shadow-float`）：手机预览与底部状态提示；精确值在侧车 `extensions.shadows`。
- **Brand mark glow**（`--filter-mark-glow`）：白色 P 的光晕滤镜，与 canvas 光场分开记录。

**The Photographic Depth Rule.** 照片错位、旋转和冷蓝光承担主要纵深；常规照片卡与画板依靠裁切、色阶或细线，不添加普遍的卡片阴影。

## Shapes

小控件、商店入口和画板缩略图使用 `small`；常规照片、探索窗口与手机内屏使用 `card`；大画板与手机外壳使用 `large`；主行动、保存、筛选与浮动导航使用 `pill`。首屏桌面照片按 `hero-photo` 相对视口缩放，900px 以下回到 `small`。

边框通常为 1px。照片保持有意义的 `object-fit: cover` 裁切；首屏与保存示例使用轻微角度旋转，探索墙照片本身保持直立。移除控件只在照片右上角出现，以暗色半透明底和左下小圆角贴合图片。

## Components

### Buttons

主行动明亮、简短，辅助行动通过细边线区分。白色与透明按钮共享胶囊形、12px / 32px 内边距和至少 52px 高度；小注册按钮使用小圆角、8px / 16px 内边距和至少 44px 高度。手机首屏按钮高度为 50px。悬停上移 2px，按下缩到 `.97`；位移用 150ms，透明度用 200ms。全局焦点为 3px 浅蓝外框、5px 外偏移。

### Save Actions

红色胶囊覆盖在照片右上角，内部为白底红 P 和 Save 标签；常规至少 70px 宽、44px 高、8px / 12px 内边距。`aria-pressed=true` 改为深墨色并同步已保存文字。首屏的视觉底为较矮红色伪元素，真实命中区仍为 44px；手机保留中心照片保存入口。当前没有独立的红色悬停色。

### Text Actions

暂停墙、清空画板使用透明背景的次级文字按钮，至少 44px 命中区，悬停加下划线。暂停图标为内联线稿 SVG，暂停与继续文字和 `aria-pressed` 一起更新。箭头文字链接沿用同一灰白语言，并保留 44px 高度。

### Filter Chips

未选中时为透明胶囊、细线、前景文字；选中时切为前景色实心与深墨文字。桌面为 8px / 20px 内边距、44px 最小高度，手机缩小横向内边距并保持最小命中区。悬停上移 2px，使用 200ms 控件缓动；状态由 `aria-pressed` 表达。

### Navigation

顶部为全宽、透明背景、左品牌右链接；导航文字保持 14px。滚动超过 `min(360px, hero height × .32)` 后成为最大 1100px 的居中胶囊，260ms 透明度与上移入场。手机菜单用暗面、细线、小圆角链接和 48px 行高；Esc 关闭并恢复菜单按钮焦点。

### Photo Cards & Inspiration Wall

照片本身是主体，卡片标题在图下方，保存按钮覆在右上角；照片悬停在 260ms 内缩放到 `1.025`。自动探索以横向 18px/s、纵向 11px/s 在有限范围内移动，到边折返。悬停、内部焦点、拖动、手动暂停会停止自动运动；键盘方向键每次平移 80px，Home / End 到范围两端。拖动可带受边界约束的惯性。离开视口或页面隐藏时停止调度。

### Demo Board

单个大圆角暗面，桌面 32px 内边距；900px 以下为 20px，600px 以下为 24px。画板名直接作为标题，计数在其下；三列照片或带线稿的空状态位于中间；演示范围说明与清空操作位于底部。保存、移除和清空同步所有入口，浏览器存储不可用时保留当次访问功能。辅助披露不另起标题上方标签。

### FAQ

原生 `details/summary`，上、下细线分行；每行最小 80px 高，纵向内边距 20px，右侧为 20px 线稿加号。打开时加号旋转 45°（200ms）；答案以 260ms 透明度和 `translateY(-6px)` 入场。面板采用原生展开，不对高度做动画。手机问题文字收为 16px。

### Entrance & Ambient Motion

标题两行从加载后 1600ms 起按行错开 120ms，用 1500ms 透明度、位移和模糊入场。说明与行动分别延迟 1900ms / 2100ms，入场均为 700ms。首屏照片为 900ms 入场，起始延迟为 900ms，加上每张 70ms 错开。后续标题首次进入视口用 700ms，其他被标记内容用 900ms。共同入场曲线为 `cubic-bezier(.16, 1, .3, 1)`；控制曲线为 `cubic-bezier(.2, .8, .2, 1)`。

蓝光为 5200ms 点亮，随后以 9000ms 周期呼吸；桌面指针只给光层轻微位移。用户首次操作会加快剩余首屏入场至约 350ms。减少动态效果时入场直接可见、呼吸与页脚指针光关闭、图墙默认暂停；仍可手动浏览和保存。

## Do's and Don'ts

### Do:
- **Do** 使用前言中的运行时原值，并沿用 Geist 的标题与正文层级。
- **Do** 使用真实照片文件和明确的裁切，保留照片卡的圆角与轻微错位。
- **Do** 为可操作目标保留至少 44px 命中区，以及浅蓝可见焦点。
- **Do** 让辅助文字、空状态与演示范围说明留在实际相关内容旁。
- **Do** 只对 transform、opacity、filter 编排动画；后续区块首次进入视口后即取消观察。
- **Do** 在减少动态效果时静态显示入场内容，默认暂停图墙，并保留所有核心操作。

### Don't:
- **Don't** 把未被运行代码引用的令牌或旧构图脚手架值当作既有规范。
- **Don't** 将红色保存按钮的悬停改写为未使用的红色色阶；当前反馈来自位移、按压和焦点。
- **Don't** 将这套有限边界、到边折返的图墙描述成无限平面。
- **Don't** 把实际两行错开的主标题描述为逐词动画。
- **Don't** 为这次没有输入框的页面补造表单或输入组件。

**Not canonized:** `subtle`、`red-hover` 与 `shadow-card` 仅在令牌文件定义，运行代码没有引用；旧构图脚手架中的 Ysabeau SC 字体值也未参与实际排版。它们未被收入规范，没有为文档修改成品。唯一被评分的标题上方披露标签已在最终版本移至画板底部；既有 verdict 的剩余项为 clear。
