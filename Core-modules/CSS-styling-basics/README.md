### [What is CSS?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)

简单介绍 CSS 是什么, 作用, syntax, 以及其如何应用到 HTML.

### [CSS getting started](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started)

| Section | Subsection | Description | Note |
|---|---|---|---|
| [Starting with some HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#starting_with_some_html) | | | |
| [Adding CSS to our document](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#adding_css_to_our_document) | [External stylesheets](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#external_stylesheets) | link 外部的 `.css` 文件. | |
| | [Internal stylesheets](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#internal_stylesheets) | 在 HTML 中写 CSS. | |
| | [Inline styles](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#inline_styles) | 在 element 的属性中写 CSS. | |
| [Using common selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#using_common_selectors) | [Selecting HTML elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#selecting_html_elements) | CSS 中 element selector (type selector) 的理解. | |
| | [Adding a class](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#adding_a_class) | 为 element 添加 `class` 属性, 随后在 CSS 中定位它. | 使用 `.class_value` 的形式. |
| | [Styling things based on their location in a document](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#styling_things_based_on_their_location_in_a_document) | **descendant combinator**: 定位子 element<br>**next-sibling combinator**: 定位下一个同级 element | 子 element 空格分隔, 同级 element 加号分隔. |
| | [Styling things based on state](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#styling_things_based_on_state) | 基于 element 的 state 进行 render. | 比如 link 的 visited, hover 等, 例如 `a:hover` 的形式. |
| | [Combining selectors and combinators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#combining_selectors_and_combinators) | 上述几种定位 element 的方式可以结合使用. | 例如 `h1 + p .special` 选择 `h1` 后 `p` 中的所有 `class` 为 `special` 的 elements |
| [Other CSS syntax features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#other_css_syntax_features) | [Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#other_css_syntax_features) | `calc()` 用于数值计算<br>`transform` 属性的支持 使用 function 用于变化. | 比如 `transform` 的 `totate()` 可以用于旋转 element. |
| | [@rules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#rules) | 指导 CSS 如何 behave. | 比如 `@media` 基于 conditional logic 来应用 CSS. |
| | [Shorthand properties](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#shorthand_properties) | 一些属性的 properties 可以写在一行里, 其中属性值的数量和 order 很重要. | 例如 `padding: 10px 15px 15px 5px;` . |
| | [CSS Comments](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#css_comments) | 使用 `/* */` 编写注释. | |
| | [White space in CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#white_space_in_css) | 额外的 white space 会被 ignored. | |

### [Basic CSS selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

| Section | Subsection | Description | Note |
|---|---|---|---|
| [What is a selector?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#what_is_a_selector) | | 简要介绍 selector 的概念. | |
| [Type selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#type_selectors) | | 也称 **tag name selector** 或 **element selector**, 既如何定位 element. | 直接使用 element 名称. |
| [Class selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#class_selectors) | | 定位含有指定 class 属性值的所有 element. | 使用 `.class_value` 的形式. |
| | [Targeting classes on particular elements]() | 定位含有指定 class 属性值的指定 element. | 使用 `element.class_value` . |
| | [Target an element if it has more than one class applied](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#target_an_element_if_it_has_more_than_one_class_applied) | 定位含有多个 class 属性值的 element. | class 属性值用 space 分隔, 使用 `.class_value.class_value` 定位, 这里的 `.` 理解为平级的意思, 而不是父子级. |
| [ID selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#id_selectors) | | 定位指定 id 属性的 element. | 使用 `#id_value` 的形式, id 值最好严格唯一. |
| [Selector lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#selector_lists) | | 将多个 selector 聚合当其 CSS 相同时 | 使用 `,` 分隔 selector 即可. |
| [The universal selector](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#the_universal_selector) | | 通用 selector, 其表示定位所有 element | 使用形式为 `*`, 一般基于具体场景使用 |
| | [Using the universal selector to make your selectors easier to read](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#using_the_universal_selector_to_make_your_selectors_easier_to_read) | 使用 `*` 提升 readability | 例如将 `article :first-child` 转换为 `article *:first-child` . |

### [Attribute selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) 

| Section | Subsection | Description | Note |
|---|---|---|---|
| [Presence and value selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors#presence_and_value_selectors) | | 根据 attribute 及其 value 进行 select. | 见下面示例. |
| [Substring matching selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors#substring_matching_selectors) | | 根据 attribute 的 substring 进行 select. | 见下面示例. |

**Presence and value selectors:**

| Selector | Example | Description |
|---|---|---|
| `[attr]` | `a[title]` | 匹配括号中指定的 *attr* 属性. 比如这里匹配包含 `<title>` 的 `<a>`. |
| `[attr=value]` | `a[href="https://example.com"]` | 匹配括号中指定的 *attr* 属性, 并且其 value 就是**等于** *value*. 比如这里匹配包含属性 `href`, 并且该属性值为 `https://example.com` 的 `<a>`. |
| `[attr~=value]` | `p[class~="special"]` | 匹配括号中指定的 *attr* 属性, 并且其 value **等于** *value* 或 以空格分隔的**包含** *value*  的 list. 比如这里匹配包含属性 `class` 并且其值包含 `special` 的 `<p>`. |
| `[attr\|=value]` | `div[lang\|="zh"]` | 匹配括号中指定的 *attr* 属性, 并且其 value 等于 *value* 或以 *value-* 开头. 比如这里匹配包含属性 `lang` 并且其值为 `zh` 的 `<div>`.  | 

**Substring matching selectors**

| Selector | Example | Description |
|---|---|---|
| `[attr^=value]` | `li[class^="box-"]` | 匹配 value 以 *value* 开头的 *attr* 属性. 比如这里匹配包含属性 `class` 并且其值以 `"box-"` 开头的 `<li>`. |
| `[attr$=value]` | `li[class$="-box"]` | 匹配 value 以 *value* 结尾的 *attr* 属性. 比如这里匹配包含属性 `class` 并且其值以 `"-box"` 结尾的 `<li>`. |
| `[attr*=value]` | `li[class*="box"]` | 匹配 value 包含 *value* 的 *attr* 属性. 比如这里匹配包含属性值 `class` 并且其值包含 `"box"` 的 `<li>`. |

### [Peudo-classes and pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

| Section | Subsection | Description | Note |
|---|---|---|---|
| [What is a pseudo-class?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#what_is_a_pseudo-class) | | 一种基于 elements 的 state 进行选择的 selector. | 这种 selector 可以减少 class 的使用, 但看起来好像你用了 class 一样, 因而是 *pseudo-class*. |
| | [Basic pseudo-class example](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#basic_pseudo-class_example) | 使用 [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) 对 `article` 的第一个 `p` 元素进行选择. | 其他: [`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child), [`:only-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child), [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid). |
| | [Use-action pseudo classes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#user-action_pseudo_classes) | 也称作 **dynamic pseudo-classes**. 当用户与 element 互动时 apply. | 比如: [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover), [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus). |
| [What is a pseudo-element?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#what_is_a_pseudo-element) | | 使用 `::first-line` 说明 `pseudo-element` 的作用. | 这种 selector 看起来好像你用了 element 一样, 因而是 *pseudo-element*. |
| [Combining pseudo-classes and pseudo-clements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#combining_pseudo-classes_and_pseudo-elements) | | | 例如 `article p:first-child::first-line`. |
| [Generating content with ::before and ::after](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after) | | 一种特殊的 *pseudo-elements*, 配合 [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content) 在 document 中插入 content. | 比如: [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before), [`::after`](https://developer.mozilla.org/en-US/docs/Web/CSS/::after).  因为 accessibility 的原因一般不用于插入问题, 而是插入空 string 用于其他样式目的. |

### [Combinators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators)

| Section | Subsection | Description | Note |
|---|---|---|---|
| [Descendant combinator](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#descendant_combinator) | | 使用 space ` ` charater 选取所有子孙 element. | 例如 `.box p` 选取属性为 `box` 的 element 下的所有 `<p>`. |
| [Child combinator](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#child_combinator) | | 使用 `>` 选取所有子级 element. | 例如 `ul > li` 选取 `<ul>` 的所有子级 `<li>`. |
| [Next-sibling combinator](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#next-sibling_combinator) | | 使用 `+` 选取下一个直接紧邻的同级 element. | 例如 `h1 + p` 选取紧接在 `<h1>` 后的同级元素 `<p>`. |
| [Subequent-sibling combinator](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#subsequent-sibling_combinator) | | 使用 `~` 选取后面所有的同级 element. | 例如 `h1 ~ p` 选取在 `<h1>` 后所有的同级元素 `<p>`. |
| [Creating complex selectors with nesting](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#creating_complex_selectors_with_nesting) | | 使用 [`&`](https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector) 编写多层嵌套的 selector. | 建议直接看示例. |
| [Combining combinators with selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators#combining_combinators_with_selectors) | | 任意的 selectors 都是可以 combine 的. | 属于是艺高人胆大的部分了. |

### [The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)

| Section | Subsection | Description | Note |
|---|---|---|---|
| [Block and inline boxes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes) | | 通过 [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 设置两种 box 类型 block 和 inline. | - `block` 会 break on to a new line. </br> - `block` 的 [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) 会被 respected. </br> - `inline` 垂直方向 space 的不会移动其他 inline boxes, 左右方向的会. |
| [Inner and outer display types](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#inner_and_outer_display_types) | | outer display types 影响周围 box 的 lay out. inner display types 影响内部 elements 的 layout. | `block` 和 `inline` 为 outer display types, [`flex`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) 和 [`grid`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids) 为 inner display types. |
| [Examples of different display types](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#examples_of_different_display_types) | | 一个关于 inner and outer display types 的 example. | 注意 `inline-flex` 等于 `inline flex`, 前者是旧写法, 为了兼容性. 意思是 outer 为 `inline`, inner 为 `flex`. |
| [What is the CSS box model?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) | | CSS box model 定义了一个 boxes 各个部分如何 work together. | 有 2 种 box model, standard 和 alternate. |
| | [Parts of a box](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) | box 从内到外由以下部分组成: </br> - **Content box**: content 占据的 area, 使用 [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) 进行 size. </br> - **Padding box**: Content box 周围的 space, 使用 [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) 进行 size. </br> - **Border box**: 围绕 content 和 padding 的部分, 使用 [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) 进行 size. </br> - **Margin box**: outermost layer, 围绕上面 3 个 box, 使用 [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) 进行 size.| [见图示](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/box-model.png).|
| | [The standard CSS box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#the_standard_css_box_model) | [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) 是指 content box 的范围, 整个 box 的 space 从 content 算到 border. | 浏览器默认方案, [见图示](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/standard-box-model.png). |
| | [The alternative CSS box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model) | [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) 是指 border box 的范围, 整个 box 的 space 从 content 算到 border. | 通过 `box-sizing: border-box;` 进行设置. 这种方式更符合直觉, 多数 developers 使用这种方式, [见图示](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/alternate-box-model.png). |
| [Playing with box models](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#playing_with_box_models) | | 对于 standard 和 alternative box model 的小测试. | |
| | [Using browser DevTools to view the box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#using_browser_devtools_to_view_the_box_model) | | [见图示](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/box-model-devtools.png). |
| [Margins, padding, and borders](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#margins_padding_and_borders) | | 介绍设置 margin, padding, border 的 **longhand** properties. | 设置各个 sides 的 properties. |
