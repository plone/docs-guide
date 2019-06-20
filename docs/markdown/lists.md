# Lists

::: tip Key Point
:bulb: How to uses lists.
:::

## Unordered marker

Use dashes `-` marker.

> remark-lint: [unordered-list-marker-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- Winter
- Snow
- Frost
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
* Winter
* Snow
* Frost
```

```markdown
+ Winter
+ Snow
+ Frost
```

## Ordered marker

Use continuous numerating marker for ordered list items.

This increases the readability and overview and allows to refer to items by their number in the same markdown file or externally.

It also allows to create sub-items which is not possible if the same number will be used for all top-level items.

The marker character must be a dot (`.`), characters like a closing brace (`)`) are not allowed since they are only supported in CommonMark.

The only disadvantage is that references break when a new list item is added.

<!--lint disable-->

This problem can be reduced by

- Using an unordered list until the final structure and layout has been determined.
- Keeping references close to the list to avoind forgetting to update them.
- Always specify an specific version of the markdown file when referring from an external document.

> remark-lint: [ordered-list-marker-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style "Link to remarkjs docs")
and [remark-lint-ordered-list-marker-value](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-value "Link to remarkjs docs")

<!--lint enable-->

**:thumbsup: Correct** code for this rule:

```markdown
1. Winter
2. Snow
  2.1 Snowflakes
3. Frost
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
1. Winter
1. Snow
  1.1 Snowflakes
1. Frost
```

```markdown
1) Winter
1) Snow
  1.1) Snowflakes
1) Frost
```

```markdown
1) Winter
2) Snow
  2.1) Snowflakes
3) Frost
```

## No content before

Make sure that there are no other characters (including whitespaces) in front of each list item.

> remark-lint: [list-item-bullet-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-bullet-indent "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- Winter
- Snow
  - Snowflakes
- Frost
```

```markdown
1. Winter
2. Snow
  2.1 Snowflakes
3. Frost
```

**:thumbsdown: Incorrect** code for this rule:

::: tip Note
The `·` character represents a whitespace character.
:::

```markdown
x- Winter
 - Snow
  .- Snowflakes
"- Frost
·- Frost
```

```markdown
x1. Winter
 2. Snow
  .2.1 Snowflakes
"3. Frost
·3. Frost
```

## Continuous indentation

Use two (2) whitespaces for continuous indentation of nested items and their content.
<!--lint disable-->
> remark-lint: [list-item-content-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-content-indent "Link to remarkjs docs")
and [list-item-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-indent "Link to remarkjs docs")
<!--lint enable-->

**:thumbsup: Correct** code for this rule:

```markdown
- Winter
  - Snow
- Snowflakes
  - Frost
- Arctic
  - Sparkling
    - Frozen
```

```markdown
- Winter
  Sparkling and frozen!
- Snowflakes
  Made of snow!
- Snow
  Falls down!
  Arctic beauty
```

`````markdown
- Winter
  ```js
  import React, { PureComponent } from "react";
  class Frost extends PureComponent {
    // ...
  }
  export default Frost;
  ```
  - Snow
    ```java
    import winter.Snow;
    String[] flakes = Snow.getFlakes();
    ```
    - Frost
      > Sparkling and frozen!
`````

**:thumbsdown: Incorrect** code for this rule:

```markdown
- Winter
    - Snow
- Snowflakes
 - Frost
- Arctic
   - Sparkling
           - Frozen
```

```markdown
- Winter
    Sparkling and frozen!
- Snowflakes
 Made of snow!
- Snow
   Falls down!
       Arctic beauty
```

`````markdown
- Winter
        ```js
        import React, { PureComponent } from "react";
        class Frost extends PureComponent {
          // ...
        }
        export default Frost;
        ```
   - Snow
    ```java
    import static winter.Snow;
    String[] flakes = Snow.getFlakes();
    ```
 - Frost
   > Sparkling and frozen!
`````

## Empty lines

A list must not contain blank lines between each list item.

> remark-lint: [list-item-spacing](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-spacing "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- Winter
- Snow
  - Snowflakes
- Frost
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
- Winter

- Snow

  - Snowflakes

- Frost
```

## Empty lines before and after

Always surround lists by a single empty line except at the beginning of the file.

**:thumbsup: Correct** code for this rule:

```markdown
... snowflakes are falling.

- Winter
- Snow
  - Snowflakes
- Frost

Sparkling and frozen...
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
... snowflakes are falling.
- Winter
- Snow
  - Snowflakes
- Frost
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


- Winter
- Snow
  - Snowflakes
- Frost


Sparkling and frozen...
```

## Letter case

Use upper cases for enumerations because most of the time the content is a noun, proper name, code snippet or standalone sentence.

When the list items are meant to be imaginary concatenated with the sentence that comes before the list, adapt to the same case as the context.

**:thumbsup: Correct** code for this rule:

```markdown
The winter has

- Many snowflakes that are falling down.
- Sparkling and frozen elements!
- A lot of beautiful animals like snowy owls, arctic foxes, and grizzly bears.
```

Enumerations or context-dependent:

```markdown
The winter has

- **Snowflakes** - They are falling down.
- **Elements** - They are sparkling and frozen!
- **Beautiful animals** - e.g a lot of snowy owls, arctic foxes, and grizzly bears.
```

Proper names or code snippets:

```markdown
A list for

- React
- `String`
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
The winter has

- many snowflakes that are falling down.
- sparkling and frozen elements!
- a lot of beautiful animals like snowy owls, arctic foxes, and grizzly bears.
```

Enumerations or context-dependent:

```markdown
The winter has

- **snowflakes** - They are falling down.
- **elements** - They are sparkling and frozen!
- **beautiful animals** - Like e.g a lot of snowy owls, arctic foxes, and grizzly bears.
```

Proper names or code snippets:

```markdown
A list for

- react
- `string`
```
## Punctuation after items

Use punctuation at the end of a list item when it contains a sentence that starts with an upper case letter or multiple sentences or paragraphs.

Omit the punctuation for single words.

**:thumbsup: Correct** code for this rule:

```markdown
- Winter
- Snow
- Frost
```

```markdown
The Winter is

- Sparkling and frozen.
- Cold and snowy.
- Bright and enlightened.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
- Winter.
- Snow.
- Frost.
```

```markdown
The Winter is

- sparkling and frozen
- cold and snowy
- bright and enlightened
```

## Checkbox character style

Use `x` for ticked checkboxes and a single space ` ` for non ticked checkboxes.

> remark-lint: [checkbox-character-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-checkbox-character-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
- [x] Winter
- [ ] Snow
- [x] Frost
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
- [!] Winter
- [~] Snow
- [»] Frost
```

```markdown
* [] Winter
* [  ] Snow
* [     ] Frost
```
