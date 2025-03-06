# CSS

CSS (Cascading Style Sheets) is used to style HTML elements. The basic syntax of a CSS rule consists of a selector and a declaration block.

**example**:

```css
selector {
  property: value;
  property: value;
}
```

# CSS Selectors

CSS selectors are used to target HTML elements that you want to style. Here are some common types of selectors

### 1. Universal Selector

Selects all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
}
```

### 2.Element Selector

Selects all elements of a specified type.

```css
h1 {
  color: green;
}
```

### 3. Class Selector

Selects all elements with a specified class attribute.

```css
.intro {
  font-size: 20px;
}
```

### 4. ID Selector

Selects the element with the specified ID

```css
header {
  background-color: lightblue;
}
```

### 5. Attribute Selector

Selects elements based on an attribute or attribute value.

```css
a[target="_blank"] {
  color: red;
}
```

### 6. Descendant Selector

Selects elements that are descendants of another element.

```css
div p {
  color: purple;
}
```

### 7. Child Selector

Selects elements that are direct children of another element.

```css
ul > li {
  list-style-type: none;
}
```

### 8. Sibling Selectors

**_Adjacent Sibling Selector_**: Selects an element that is immediately preceded by a specified element.

```css
h1 + p {
  margin-top: 0;
}
```

**_General Sibling Selector_**: Selects all elements that are preceded by a specified element.

```css
h1 ~ p {
color: gray;
}
```

### 9. Pseudo-class Selector

Selects elements based on their state or position.

```css
a:hover {
  color: orange;
}
```

### 10. Pseudo-element Selector

Selects a part of an element.

```css
p::first-line {
  font-weight: bold;
}
```

### 11.Combining Selectors

You can combine multiple selectors to target more specific elements.

```css
div.intro,
#main-content p {
  margin: 10px;
}
```


# CSS BOX MODEL

The CSS Box Model is a fundamental concept that describes how elements on a web page are structured and how space is allocated around them. It consists of four main components:

- `Content`
- `Padding`
- `Border`
- `Margin`

### 1. Content
This is the actual content of the box, such as text or an image. It's the innermost part of the box.

### 2. Padding
Padding is the space between the content and the border. It creates a transparent area inside the box around the content. You can set different padding values for each side of the box.

Example:
```css
div {
  padding: 10px; /* Applies 10px padding to all sides */
}
```
### 3. Border
The border surrounds the padding (if any) and the content. It can have various styles, widths, and colors.

Example:

```css
div {
  border: 1px solid black; /* 1px solid black border around the box */
}
```
### 4. Margin
Margin is the space outside the border. It creates a transparent area outside the box, separating it from other elements.

Example:

```css
div {
  margin: 15px; /* Applies 15px margin to all sides */
}
```

### Visual Representation

```lua
+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |      Border         |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  | +-----------+ |  |  |
|  |  | | Content   | |  |  |
|  |  | +-----------+ |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+

```

# Box Sizing

By default, the width and height properties apply to the content box. You can change this behavior using the box-sizing property.

**Content-box (default)**: width and height apply to the content only.
```css
div {
  box-sizing: content-box;
}
```
**Border-box**: width and height include content, padding, and border.
```css
div {
  box-sizing: border-box;
}
```

# CSS Text Styling Guide

## Font Properties

**font-family**: Specifies the typeface for the text.
```css
p {
  font-family: Arial, sans-serif;
}
```

**font-size**: Sets the size of the font.
```css
p {
  font-size: 16px;
}
```

**font-weight**: Defines the thickness of the font.
```css
p {
  font-weight: bold; /* or 400, 700, etc. */
}
```

**font-style**: Sets the style of the font (normal, italic, or oblique).
```css
p {
  font-style: italic;
}
```

**font-variant**: Controls the use of small caps and other font variations.
```css
p {
  font-variant: small-caps;
}
```

**font**: A shorthand property for setting multiple font properties at once.
```css
p {
  font: italic bold 16px Arial, sans-serif;
}
```

## Text Color

**color**: Sets the color of the text.
```css
p {
  color: #333; /* Dark gray color */
}
```

## Text Alignment

**text-align**: Aligns the text within its container (left, right, center, justify).
```css
p {
  text-align: center;
}
```

## Text Decoration

**text-decoration**: Adds decorations like underline, overline, or line-through.
```css
a {
  text-decoration: underline;
}
```

## Text Transform

**text-transform**: Controls the capitalization of text (uppercase, lowercase, capitalize).
```css
p {
  text-transform: uppercase;
}
```

## Text Indentation

**text-indent**: Sets the indentation of the first line of text.
```css
p {
  text-indent: 20px;
}
```

## Line Height

**line-height**: Sets the amount of space between lines of text.
```css
p {
  line-height: 1.5;
}
```

## Letter Spacing

**letter-spacing**: Adjusts the spacing between characters.
```css
p {
  letter-spacing: 2px;
}
```

## Word Spacing

**word-spacing**: Adjusts the spacing between words.
```css
p {
  word-spacing: 4px;
}
```

## Text Shadow

**text-shadow**: Adds shadow effects to text.
```css
h1 {
  text-shadow: 2px 2px 4px #666;
}
```

## White Space

**white-space**: Controls how whitespace inside an element is handled (normal, nowrap, pre, pre-wrap, pre-line).
```css
p {
  white-space: pre-wrap;
}
```

## Text Overflow

**text-overflow**: Controls how overflowed text is displayed (clip, ellipsis).
```css
p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

# FLEX BOX
Flex-box is a layout model that allows you to design complex layouts with ease, aligning items horizontally or vertically.

```css
.container {
  display: flex;
  justify-content: center; /* Align items horizontally */
  align-items: center;     /* Align items vertically */
}

.item {
  flex: 1; /* Grow and shrink items as needed */
}
```
# GRID 
CSS Grid Layout provides a two-dimensional grid-based layout system, allowing for more complex designs.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Create two equal columns */
  grid-gap: 10px; /* Space between grid items */
}

.item {
  grid-column: span 1; /* Specify how many columns an item should span */
}
```

# CSS POSITIONING
CSS positioning allows you to control the exact position of elements on a page.

## Types of Positioning
**`Static`**: Default positioning, flow of the document.
**`Relative`**: Positioned relative to its normal position.
**`Absolute`**: Positioned relative to its nearest positioned ancestor.
**`Fixed`**: Positioned relative to the viewport.
**`Sticky`**: Switches between relative and fixed, depending on scroll position.

```css
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

.absolute {
  position: absolute;
  top: 50px;
  right: 20px;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

# CSS Variables
CSS Variables (Custom Properties) allow you to define reusable values in your stylesheets.

```css
:root {
  --main-color: #3498db;
}

.element {
  color: var(--main-color);
}
```

# CSS TRANSITIONS
CSS transitions and animations are used to create dynamic visual effects and enhance the user experience by animating changes to CSS properties. Here’s a breakdown of each:

## Properties
- `property`: The CSS property you want to animate (e.g., background-color, width).
- `duration`: How long the transition takes (e.g., 0.5s, 200ms).
- `timing-function`: The speed curve of the transition (e.g., linear, ease, ease-in, ease-out, ease-in-out).
- `delay`: Delay before the transition starts (e.g., 0s, 1s).

## TRANSFORM
The transform property in CSS is used to apply various transformations to elements, such as scaling, rotating, translating, and skewing. This property allows you to change the appearance of an element without affecting its layout.

```css
selector {
  transform: transform-function;
}
```
### Transform Functions
**translate(x, y)**
Moves the element from its original position.
x: Horizontal movement (e.g., 10px, 50%).
y: Vertical movement (e.g., 20px, 30%).
```css
.translate-example {
  transform: translate(50px, 20px);
}
```
**rotate(angle)**

Rotates the element around its origin.
angle: The degree of rotation (e.g., 45deg, 1rad).
```css
.rotate-example {
  transform: rotate(45deg);
}
```
**scale(x, y)**

Scales the element in the horizontal and vertical directions.
x: Horizontal scale factor (e.g., 1.5 for 150%).
y: Vertical scale factor (e.g., 2 for 200%).
```css
.scale-example {
  transform: scale(1.5, 0.5);
}
```
**skew(x, y)**

Skews the element along the x and y axes.
x: Skew angle along the x-axis (e.g., 20deg).
y: Skew angle along the y-axis (e.g., 10deg).

```css
.skew-example {
  transform: skew(20deg, 10deg);
}
```
**matrix(a, b, c, d, e, f)**
Applies a 2D transformation using a matrix.
a, b, c, d, e, f: Values for the matrix transformation.

```css
.matrix-example {
  transform: matrix(1, 0.5, -0.5, 1, 0, 0);
}
```





# ANIMATION

CSS animations provide more control and complexity compared to transitions, allowing you to create keyframe-based animations.

```css
@keyframes animation-name {
  from {
    property: value;
  }
  to {
    property: value;
  }
}
```
## Properties
- `animation-name`: The name of the @keyframes animation.
- `animation-duration`: The duration of the animation (e.g., 2s, 500ms).
- `animation-timing-function`: The speed curve of the animation (e.g., linear, ease, ease-in, ease-out, ease-in-out).
- `animation-delay`: Delay before the animation starts (e.g., 0s, 1s).
- `animation-iteration-count`: How many times the animation should repeat (e.g., 1, infinite).
- `animation-direction`: The direction of the animation (e.g., normal, reverse, alternate, alternate-reverse).
- `animation-fill-mode`: The styles to apply before and after the animation (e.g., none, forwards, backwards, both).

example:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: fadeIn 2s ease-in-out;
}
```
# Z-INDEX
The z-index property in CSS controls the stacking order of positioned elements (those with a position value other than static). It determines which elements appear on top of others when they overlap.

```css
selector {
  z-index: value;
}
```
## Values

**Integer Values**:
- `Positive integers` (e.g., 1, 2, 10) bring the element closer to the front.
- `Negative integers` (e.g., -1, -10) push the element further behind other elements.
**Auto**:
The default value, which means the element will stack according to the document order and other positioning properties.

## Important Considerations

**Positioning**: For z-index to work, the element must have a position property set to relative, absolute, fixed, or sticky.
**Stacking Context**: z-index only affects stacking within the same stacking context. A new stacking context is created by elements with certain properties, such as position with a z-index value other than auto, opacity less than 1, transform, and others.
















