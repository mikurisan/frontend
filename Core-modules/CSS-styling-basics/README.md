## Turoials and challenges

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
| | [Adding a class](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#adding_a_class) | 为 element 添加 `class` 属性, 随后在 CSS 中定位它. | |
| | [Styling things based on their location in a document](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#styling_things_based_on_their_location_in_a_document) | **descendant combinator**: 定位子 element<br>**next-sibling combinator**: 定位下一个同级 element | 子 element 空格分隔, 同级 element 加号分隔. |
| | [Styling things based on state](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#styling_things_based_on_state) | 基于 element 的 state 进行 render. | 比如 link 的 visited, hover 等. |
| | [Combining selectors and combinators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started#combining_selectors_and_combinators) | 上述几种定位 element 的方式可以结合使用. | |
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