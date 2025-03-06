# HTML (HyperText Markup Language)
HTML is a markup language that tells web browsers how to structure the web pages

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Web Page</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home</h2>
            <p>This is the home section.</p>
        </section>
        <section id="about">
            <h2>About</h2>
            <p>This is the about section.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>This is the contact section.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Web Page</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
```

# HTML Elements
HTML elements are the building blocks of HTML documents. They consist of a start tag, content, and an end tag.

## Basic HTML Elements

### Document Structure
- `<!DOCTYPE>`: Defines the document type and version of HTML.
- `<html>`: The root element of an HTML document.
- `<head>`: Contains meta-information about the document.
- `<body>`: Contains the content of the document.

### Metadata
- `<title>`: Defines the title of the document.
- `<meta>`: Provides metadata such as character set, description, keywords, author.
- `<link>`: Links to external resources like stylesheets.
- `<style>`: Contains internal CSS.
- `<base>`: Sets the base URL for all relative URLs in the document.

### Content Sectioning
- `<header>`: Represents introductory content.
- `<nav>`: Defines navigation links.
- `<main>`: Specifies the main content of the document.
- `<section>`: Defines sections in a document.
- `<article>`: Represents a self-contained composition.
- `<aside>`: Contains content related to the main content.
- `<footer>`: Represents the footer of a document or section.

### Text Content
- `<h1>` to `<h6>`: Defines HTML headings.
- `<p>`: Defines a paragraph.
- `<hr>`: Represents a thematic break (horizontal rule).
- `<br>`: Inserts a line break.
- `<pre>`: Represents preformatted text.
- `<blockquote>`: Defines a block of quoted text.
- `<ol>`: Defines an ordered list.
- `<ul>`: Defines an unordered list.
- `<li>`: Defines a list item.
- `<dl>`: Defines a description list.
- `<dt>`: Defines a term in a description list.
- `<dd>`: Describes the term in a description list.

### Inline Text Semantics
- `<a>`: Defines a hyperlink.
- `<strong>`: Defines important text.
- `<em>`: Defines emphasized text.
- `<mark>`: Highlights text.
- `<small>`: Defines smaller text.
- `<del>`: Represents deleted text.
- `<ins>`: Represents inserted text.
- `<sub>`: Defines subscripted text.
- `<sup>`: Defines superscripted text.
- `<span>`: Defines a section in a document.
- `<b>`: Defines bold text.
- `<i>`: Defines italic text.
- `<u>`: Defines underlined text.
- `<code>`: Defines a piece of computer code.
- `<kbd>`: Defines keyboard input.
- `<samp>`: Defines sample output from a computer program.
- `<var>`: Defines a variable.

### Multimedia Elements
- `<img>`: Embeds an image.
- `<audio>`: Embeds sound content.
- `<video>`: Embeds video content.
- `<source>`: Defines multiple media resources for `<video>` and `<audio>`.
- `<track>`: Defines text tracks for `<video>` and `<audio>`.
- `<embed>`: Embeds external content.
- `<object>`: Embeds an external resource.
- `<param>`: Defines parameters for `<object>`.

### Embedded Content
- `<iframe>`: Embeds another HTML page within the current page.
- `<canvas>`: Used for drawing graphics on the fly via scripting (e.g., JavaScript).
- `<svg>`: Defines vector-based graphics.

### Scripting
- `<script>`: Defines client-side JavaScript.
- `<noscript>`: Defines an alternate content for users that do not support scripts.

### Forms
- `<form>`: Defines an HTML form for user input.
- `<input>`: Defines an input control.
- `<textarea>`: Defines a multi-line text input control.
- `<button>`: Defines a clickable button.
- `<select>`: Defines a drop-down list.
- `<option>`: Defines an option in a drop-down list.
- `<optgroup>`: Defines a group of related options in a drop-down list.
- `<label>`: Defines a label for an `<input>` element.
- `<fieldset>`: Groups related elements in a form.
- `<legend>`: Defines a caption for a `<fieldset>`.
- `<datalist>`: Specifies a list of pre-defined options for an `<input>` element.
- `<output>`: Represents the result of a calculation.

### Tables
- `<table>`: Defines a table.
- `<caption>`: Defines a table caption.
- `<thead>`: Groups the header content in a table.
- `<tbody>`: Groups the body content in a table.
- `<tfoot>`: Groups the footer content in a table.
- `<tr>`: Defines a row in a table.
- `<th>`: Defines a header cell in a table.
- `<td>`: Defines a cell in a table.

### Interactive Elements
- `<details>`: Defines additional details that the user can view or hide.
- `<summary>`: Defines a visible heading for the `<details>` element.
- `<dialog>`: Defines a dialog box or window.

### Web Components
- `<template>`: Defines a template for client-side content.
- `<slot>`: Acts as a placeholder inside web components.

### Semantic HTML Elements
Semantic elements provide meaning to the web content they enclose. They describe the type of content they contain and help browsers and search engines understand the structure and significance of the content. This improves accessibility and SEO (Search Engine Optimization).
example:
- `<header>`
- `<main>`
- `<nav>`
- `<article>`

# HTML Attributes
HTML attributes provide additional information about HTML elements. They are always included in the opening tag and usually come in name/value pairs like `name="value"`.

## Common HTML Attributes

### Global Attributes
These attributes can be used on any HTML element.

- **class**: Specifies one or more class names for an element (used for styling with CSS).
- **id**: Specifies a unique id for an element.
- **style**: Specifies an inline CSS style for an element.
- **title**: Provides additional information about an element (displayed as a tooltip).
- **data-***: Used to store custom data private to the page or application.

### Standard Attributes
These attributes are used for specific HTML elements.

#### For `<a>`, `<area>`, `<base>`, `<link>`, `<form>`
- **href**: Specifies the URL of the linked document.
- **target**: Specifies where to open the linked document (e.g., `_blank`, `_self`, `_parent`, `_top`).
- **rel**: Specifies the relationship between the current document and the linked document.

#### For `<img>`, `<script>`, `<iframe>`, `<embed>`, `<audio>`, `<video>`, `<source>`
- **src**: Specifies the URL of the media file.
- **alt**: Provides alternative text for an image.
- **width**: Sets the width of the element.
- **height**: Sets the height of the element.

#### For `<form>`, `<input>`, `<button>`, `<select>`, `<textarea>`
- **name**: Specifies the name of the element.
- **value**: Specifies the initial value of the element.
- **placeholder**: Provides a short hint that describes the expected value of the input field.
- **required**: Specifies that the input field must be filled out before submitting the form.
- **readonly**: Specifies that the input field is read-only.
- **disabled**: Specifies that the element should be disabled.
- **type**: Specifies the type of input element (e.g., text, password, submit, radio, checkbox).
- **action**: Specifies where to send the form data when the form is submitted.
- **method**: Specifies the HTTP method to use when sending form data (get or post).
- **maxlength**: Specifies the maximum number of characters allowed in an input field.
- **pattern**: Specifies a regular expression that the input field's value is checked against.

#### For `<table>`, `<col>`, `<colgroup>`, `<td>`, `<th>`
- **colspan**: Specifies the number of columns a cell should span.
- **rowspan**: Specifies the number of rows a cell should span.
- **headers**: Specifies the list of header cells that provide header information for the cell.

### Event Attributes
These attributes are used to trigger JavaScript code when certain events occur.

- **onclick**: Triggers JavaScript when the element is clicked.
- **onchange**: Triggers JavaScript when the value of the element is changed.
- **onmouseover**: Triggers JavaScript when the mouse pointer is moved over the element.
- **onmouseout**: Triggers JavaScript when the mouse pointer is moved out of the element.
- **onkeydown**: Triggers JavaScript when a key is pressed down.
- **onkeyup**: Triggers JavaScript when a key is released.
- **onsubmit**: Triggers JavaScript when a form is submitted.
- **onload**: Triggers JavaScript when the page or an image is fully loaded.
- **onfocus**: Triggers JavaScript when the element gains focus.
- **onblur**: Triggers JavaScript when the element loses focus.

### ARIA (Accessible Rich Internet Applications) Attributes
These attributes are used to improve the accessibility of web pages.

- **aria-label**: Defines a string that labels the current element.
- **aria-hidden**: Indicates whether the element is hidden or not.
- **aria-live**: Indicates that an element will be updated and describes the types of updates users can expect.
- **aria-checked**: Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
- **aria-expanded**: Indicates whether an element, or another grouping element it controls, is currently expanded or collapsed.

These attributes help define the behavior and presentation of HTML elements, making your web pages more functional and accessible.

# The `<head>` Tag in HTML

The `<head>` tag in an HTML document contains metadata, links to external resources, and other information that isn't displayed directly on the webpage. The metadata can include things like the title of the document, character set declarations, style sheets, scripts, and other meta-information.

The `<head>` tag typically includes:

### Document Title
- **`<title>`**: Defines the title of the document, which is displayed in the browser's title bar or tab.

### Meta Information
- **`<meta>`**: Provides metadata about the HTML document, such as the character set, author, description, and keywords.

### Stylesheets
- **`<link>`**: Links to external CSS files.

### Scripts
- **`<script>`**: Can include or reference JavaScript files.

### Icons
- **`<link>`**: Can reference favicon and other icons.

### Base URL
- **`<base>`**: Specifies the base URL for relative URLs in the document.

# Metadata in HTML

## What is Metadata?

Metadata is data that describes other data. In HTML, metadata is information about the web page that is not displayed directly on the page but is crucial for various functions, including Search Engine Optimization (SEO). 

## Purpose of Metadata

- **SEO**: Helps search engines understand and rank your web page.
- **Browser Behavior**: Affects how the browser handles and displays the content.
- **Document Information**: Provides essential details about the document such as character encoding and author information.

## Key Metadata Elements

- **`<meta charset="UTF-8">`**: Specifies the character encoding for the document.
- **`<meta name="description" content="Description of the page">`**: Provides a brief description of the page for search engines.
- **`<meta name="keywords" content="keyword1, keyword2, keyword3">`**: Lists keywords relevant to the page for search engines.
- **`<meta name="author" content="Author Name">`**: Specifies the author of the document.
- **`<meta name="robots" content="index, follow">`**: Directs search engines on how to index and follow links on the page.

Metadata helps search engines index and rank your web page better and provides information to browsers and other web services.


# Hyperlinks

Hyperlinks allow us to link documents to other documents or resources, link to specific parts of documents, or make apps available at a web address.

Example:
```html
<a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>
```
# `<iframe>` Element

The `<iframe>` element in HTML is used to embed another HTML document within the current document. It creates an inline frame, allowing you to display content from another source, such as a different webpage, within a specific area of your page. This is useful for including external content, such as videos, maps, or other web pages, without requiring users to navigate away from your page.

## Attributes of iframe

### `src`
- **Description**: Specifies the URL of the page to display within the iframe.
- **Example**: `src="https://www.example.com"`

### `title`
- **Description**: Provides a title for the iframe, improving accessibility and user experience.
- **Example**: `title="Secure Example"`

### `sandbox`
- **Description**: Restricts what the iframe can do, which helps mitigate security risks. You can use various values to control permissions:
  - `allow-same-origin`: Allows the iframe content to be treated as being from the same origin.
  - `allow-scripts`: Allows the iframe to run scripts.
  - `allow-forms`: Allows the iframe to submit forms.
- **Example**: `sandbox="allow-same-origin allow-scripts"`

### `loading`
- **Description**: Controls when the iframe content should be loaded. The value can be:
  - `lazy`: Loads content only when it's needed (lazy loading).
  - `eager`: Loads content immediately.
- **Example**: `loading="lazy"`

## Example

```html
<iframe src="https://www.example.com" 
        title="Secure Example" 
        sandbox="allow-same-origin allow-scripts" 
        loading="lazy">
</iframe>
```

# Types of Lists in HTML

## 1. Unordered List (`<ul>`)
This type of list displays items in a bullet-point format. Each item within the list is defined using the `<li>` (list item) element.

Example:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## 2.Ordered List (`<ol>`)
This type of list displays items in a numbered format.
Each item within the list is defined using the <li> (list item) element.

Example:
```html
 <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
```

## Description List (`<dl>`)
This type of list is used to display name/value pairs, such as terms and definitions.
It contains `<dt> `(definition term) elements for the terms and `<dd>` (definition description) elements for the descriptions.

Example:
```html
  <dl>
      <dt>HTML</dt>
      <dd>HyperText Markup Language</dd>
      <dt>CSS</dt>
      <dd>Cascading Style Sheets</dd>
    </dl>
```
# HTML Forms

HTML forms are used to collect user input and submit it to a server for processing. Forms are defined using the `<form>` element, and various form controls like input fields, buttons, and select menus are used to create the form's user interface.

## The `<form>` Element

The `<form>` element is the container for all the form controls and has several important attributes:

- **action**: Specifies the URL to which the form data will be sent when the form is submitted.
- **method**: Specifies the HTTP method to use when sending form data (GET or POST).
- **enctype**: Specifies the encoding type when submitting form data (used when uploading files).
- **name**: Specifies the name of the form.
- **target**: Specifies where to display the response after submitting the form.

## Types of Input

- **text**: Single-line text input
- **password**: Password input (masked characters)
- **email**: Email address input
- **url**: URL input
- **tel**: Telephone number input
- **number**: Numeric input with optional min, max, and step attributes
- **range**: Slider control for selecting a value between a specified range
- **date**: Date input
- **month**: Month and year input
- **week**: Week and year input
- **time**: Time input
- **datetime-local**: Date and time input (without timezone)
- **color**: Color picker input
- **checkbox**: Checkbox input for selecting one or more options
- **radio**: Radio button input for selecting one option from a group
- **file**: File upload input
- **hidden**: Hidden input (not visible to the user)
- **image**: Image as a submit button
- **button**: Generic button (use with JavaScript for custom functionality)
- **submit**: Submit button for form submission
- **reset**: Reset button to clear form fields

## Example Form

Here’s a complete example of a form with various controls:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Form</title>
</head>
<body>
    <form action="/submit-form" method="post" enctype="multipart/form-data">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="1" max="100">
        </div>
        <div>
            <label for="gender">Gender:</label>
            <input type="radio" id="male" name="gender" value="male"> Male
            <input type="radio" id="female" name="gender" value="female"> Female
        </div>
        <div>
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
            </select>
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50"></textarea>
        </div>
        <div>
            <label for="file">Upload a file:</label>
            <input type="file" id="file" name="file">
        </div>
        <div>
            <input type="checkbox" id="subscribe" name="subscribe">
            <label for="subscribe">Subscribe to newsletter</label>
        </div>
        <div>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </div>
    </form>
</body>
</html>
```

# HTML TABLE

HTML tables are used to display tabular data in rows and columns. The `<table>` element is the container for all table-related elements. Here’s a detailed explanation of HTML tables, including the most common elements and attributes.

## Basic Structure of an HTML Table

A basic HTML table includes the following elements:

- `<table>`: The container element for the table.
- `<tr>`: Defines a row in the table.
- `<th>`: Defines a header cell in the table.
- `<td>`: Defines a standard data cell in the table.

## Table Attributes

### 1. border
The border attribute specifies the width of the border around the table.

example:
```html
<table border="1">
    <!-- Table content -->
</table>
```
### 2. cellpadding and cellspacing
The cellpadding attribute specifies the space between the cell content and the cell border, while cellspacing specifies the space between cells.

example:
```html
<table cellpadding="10" cellspacing="5">
    <!-- Table content -->
</table>
```

### 3. width and height
The width and height attributes specify the width and height of the table.

example:
```html
<table width="100%" height="200">
    <!-- Table content -->
</table>
```
### Merging Cells

#### 1. colspan
The colspan attribute allows a cell to span multiple columns.

example:
```html
<tr>
    <td colspan="2">Spans two columns</td>
</tr>
```
#### 2. rowspan
The rowspan attribute allows a cell to span multiple rows.

example:
```html
<tr>
    <td rowspan="2">Spans two rows</td>
    <td>Data 1</td>
</tr>
<tr>
    <td>Data 2</td>
</tr>
```


**example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprehensive HTML Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">Spans two rows</td>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
            <tr>
                <td>Data 3</td>
                <td>Data 4</td>
            </tr>
            <tr>
                <td>Data 5</td>
                <td colspan="2">Spans two columns</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Footer 1</td>
                <td>Footer 2</td>
                <td>Footer 3</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```
# DEFER attribute
The `defer` attribute is used to load a script asynchronously but ensures that the script is executed only after the HTML document has been completely parsed.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="script1.js" defer></script>
  <script src="script2.js" defer></script>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```
Both `script1.js` and `script2.js` will be fetched in parallel, but `script1.js` will execute before `script2.js` once the HTML parsing is complete.