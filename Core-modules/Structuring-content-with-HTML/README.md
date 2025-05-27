### [Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)

| Section | Subsection | Description | Note |
|---|---|---|---|
| [What is HTML?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#what_is_html) | | 介绍 HTML 如何使用 tag 结构化 content. | [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) (HyperText Markup Language). tag 名称大小写不敏感. |
| [Anatomy of an HTML element](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_element) | | 图示说明 element 的基本构成. | 包括 opening tag, content 和 closing tag. |
| | [Nesting elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#nesting_elements) | element 可以嵌套使用. | 被包含的 element 要满足开闭规则. |
| | [Void elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#void_elements) | 没有 content 的一类 element, 通常用于 insert/embed 某些东西. | 例如 `<img src="xxx" />` . (最后的 `/` 不一定要添加, 只不过这样会符合 XML 规范)|
| [Attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#attributes) | | 在 elements 中添加 attributes. | 形式为 `attribute_name="attribute_value"` .|
| | [Boolean attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes) | 这类 attributes 直接显示使用而无需声明其 value. | 例如 `<input type="text" disabled />` 中的 `disabled` . |
| | [Omitting quotes around attribute values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#omitting_quotes_around_attribute_values) | 介绍如果在 attribute value 中不使用 quotes 是什么后果. | |
| | [Single or double quotes?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#single_or_double_quotes) | single 或者 double 都可以. | 在 value 中使用 quotes 时要转义, 比如 `&quote;` 是对 `"` 的转义. |
| [Anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document) | | 介绍一个 HTML document 最基本的结构. | 忘记了时常来看看. |
| | [Whitespace in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html) | 说明 HTML 如何处理 document 中的 whitespace. | 从 JS 中读取 element 的 [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) 时会保留所有的 whitespace. |
| [Character references: including special characters in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#character_references_including_special_characters_in_html) | | 在 HTML 使用一些特殊的 characters  时要转义. | 详情见 [character references](https://developer.mozilla.org/en-US/docs/Glossary/Character_reference) . |
| [HTML comments](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments) | | 如何在 HTML 中写注释. | 形式为 `<!-- xxx -->` . |

### [Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)

| Section | Subsection | Description | Note |
|---|---|---|---|
| [What is the HTML head?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#what_is_the_html_head) | | 即 [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) 中的内容, 并不会在页面上展示, 用于包含关于该 document 的 [metadata](https://developer.mozilla.org/en-US/docs/Glossary/Metadata) | |
| [Adding a title](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) | | 使用 [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) 给 document 添加 title. | 比如在添加 bookmark 时会有用. |
| [Metada:the `<meta>` element](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element) | | 使用 [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta) 添加 metadata. | 这里仅介绍一些常用的. |
| | [Specifying your document's character encoding](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding) | 使用 `charset` 属性定义 document 的 character encoding. | 一般用 `utf-8` 即可. |
| | [Adding an author and description](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_an_author_and_description) | 使用 `name` 和 `content` 属性来声明 document 的 author 和 description. | 可能对于 [SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO) 有用. |
| | [Other types of metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#other_types_of_metadata) | 其他各种专有的 metadata 以便于创作者获取其所需的信息. | 比如 Facebook 定义的 [Open Graph Data](https://ogp.me/). |
| [Adding custom icons to your site](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) | | 使用 [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) 为网站添加 **favicon**(favorites icon). | 为了兼容目的, 可能需要设置多个 favicon. 如果 favicon 无法 loading 可查阅 [img-src directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src). |
| [Applying CSS and JavaScript to HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#applying_css_and_javascript_to_html) | | 使用 [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) 引入 CSS 文件; 使用 [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) 引入 JS 脚本. | JS 脚本的 loading 策略可查阅 [Script loading strategies](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies). |
| [Setting the primay language of the document](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document) | | 使用 [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang) 属性注明 document 或 element 所使用的 language. | 这对于 SEO 或 Accessibility 是有用的. 语言代码由 [ISO 639-1](https://www.wikiwand.com/en/articles/ISO_639-1) 定义, 可从中查询. |

### [Heading and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)

使用 heading 和 paragraph 对应的 element 以强调 structural hierarchy 和 semantics 的意义和重要性.

### [Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

从 semantics 上介绍 emphasis, strong importance:

- emphasis: 斜体表示
- strong importance: 粗体表示

此外还有 italic, bold, underline 的表示方法.

### [Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)

介绍了 unordered lists, ordered lists 和 description lists.

### [Structuring documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)

介绍 site 的基本构成部分及对应的 semantic wrappers(elements):

- header
- navigation bar
- main content
- sidebar
- footer

随后介绍 non-semantic wrappers, 以及 line breaks 和 horizontal rules.

最后指导如何 planing a simple website.

### [Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)

一些其他 semantic text elements, 例如 quotations, abbreviations, contact details, superscript and subscript, computer code, times and dates.

### [Creating links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links)

创建 hyperlink 并设置相关 attribute, 不仅可以 link 到指定 file 也可以 link 到 document fragments. 随后是 email links 的介绍.

### [Images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)

如何使用 img 标签, 并介绍:

- 使用 alternative text 的必要性及如何优雅使用
- 设置 width 和 height 的必要性
- title 的不合理性
- 遵守和使用 license 
- 使用 figure 及 figcaption 为 img 添加 caption
- 使用 css 嵌入 background image 而不是 img

### [Video and audio](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)

如何插入 video 和 audio, 以及一些必要的属性, 然后是不同 source format 的 compatibility, 最后是添加不同类型的 video text tracks.

### [Table basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

如何创建 table, 学习 cell, row 和 head 的概念, 以及如何跨 row 和跨 column.

### [Table accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)

从以下方面为 table 增加 accessibility:

- 为 table 添加 caption
- 使用 tag 将 table 的结构划分为 head, body 和 foot
- 使用 scope 属性 指明 header 的 scope
- 使用 id 和 headers 属性更加精准的表示 cell, row, column, header 之间的关系

### [Forms and buttons](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)

简单介绍了 button 和 form 及其构成元素, 如 label 和 input. 然后是一些 control types:

- fieldset 和 legend
- radio buttons
- checkboxes
- drop-down menus
- multi-line text input fields

最后是 server-side 和 client-side 的 form validation 对比.


### [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)

使用 developer tools 查看浏览器如何处理了 bug. 使用 [Markup Validation Service](https://validator.w3.org/) 可以对 HTML 进行验证.