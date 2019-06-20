# Whitespace

::: tip Key Point
:bulb: Guide about whitespaces.
:::

## Indentation character

Always use spaces where two (2) spaces are used for indentation.

**The usage of tab characters is disallowed**.

A tab could be a different number of columns depending on the environment, but a space is always one column.

Adhering to this rule increases the code readability and maintainability significantly.

> remark-lint: [no-tabs](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-tabs "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
  This line contains 2 space characters.
```

**:thumbsdown: Incorrect** code for this rule:

::: tip Note
The `»` character represents a tab.
:::

```markdown
The winter has sparkling and frozen elements!
 » This line contains a tab character.
```

```markdown
The winter has sparkling and frozen elements!
    This line contains 4 space characters.
```

```markdown
The winter has sparkling and frozen elements!
 This line contains only 1 space character.
```

## Before blocks

Always add one (1) blank line before blocks except the first line of the file.

<!--lint disable-->

> remark-lint: [no-consecutive-blank-lines](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines "Link to remarkjs docs")
and [no-missing-blank-lines](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-missing-blank-lines "Link to remarkjs docs")

<!--lint enable-->

::: tip Note
The `¬` character represents a line break.
:::

**:thumbsup: Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
¬
Many snowflakes are falling down.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
The winter has sparkling and frozen elements!
Many snowflakes are falling down.
```

## Maximum line length

In contrast to source code, where lines contain statements that can be almost always be broken up or indented,
this rule can not be applied to flowing text.

The author should be able to write sentences and text blocks without worrying about the line length.

This guide advices to **avoid using a character limit per line for flowing text**,
but try to use a maximum line length of 120 characters (including whitespaces) for all other document elements.

<!--lint disable-->

Instead of enforcing a maximum line length, users should use [soft line wrapping](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap "Link to Wikipedia"):

- **Soft wrapping allows line lengths to visually adjust automatically with adjustments to the width of the user's window** or margin settings.
- **Using hard wrap inserts actual line breaks in the text at wrap points causing the Markdown to not look like the rendered output** - With soft wrapping the actual text is still on the same line but will be rendered by the application like it's divided into several lines.
This **increases the readability** significantly and leads to the same visual result as if a maximum line length with hard line breaks for flowing text would have been used.
- **Less writer effort** - The author can focus on the content instead of formatting.

<!--lint enable-->

> remark-lint: [maximum-line-length](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-line-length "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
> The winter and all of its fascinating, sparkling and frozen elements and lively, diverse and beautiful wildlife.

Snowflakes are falling down. The winter has sparkling and frozen elements!
It is home for many beautiful animals like snowy owls, arctic foxes, and grizzly bears.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
> The winter and all of its fascinating, sparkling and
frozen elements and lively, diverse and beautiful wildlife.

Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
for many beautiful animals like snowy owls,
arctic foxes, and grizzly bears.
```

## Trailing

Do not use trailing whitespace to generate a line break, use flowing text style or a blank line to create a new paragraph.

> remark-lint: [hard-break-spaces](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-hard-break-spaces "Link to remarkjs docs")

::: tip Note
The `·` character represents a whitespace and the `¬` character represents a line break.
:::

**:thumbsup: Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements! Many snowflakes are falling down.
```

```markdown
The winter has sparkling and frozen elements!¬

Many snowflakes are falling down.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
The winter has sparkling and frozen elements!··¬
Many snowflakes are falling down.
```

```markdown
The winter has sparkling and frozen elements!¬
Many snowflakes are falling down.
```
