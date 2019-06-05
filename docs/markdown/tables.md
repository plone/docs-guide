# Tables

## Prefer Lists

Prefer lists and only use tables for small, non-complex and single line content.

Complex, large tables are difficult to read in source and most importantly, a pain to modify, indent and also read later for example when using

- Line breaks within rows
- Very long sentences that must be wrapped
- Document elements like [code blocks][code-blocks] or [blockquotes][blockquotes]
- Inline links with long URLs

Lists and subheadings usually suffice to present the same information in a slightly less compact, though much more edit-friendly and more elegant way.

### Examples

**Correct** code for this rule:

```markdown
## Elements

### Snow

- [Wikipedia](http://this-is-a-very-long-url-for-information-about-snow.com)
- It falls down in winter!
- Attributes:
  - Soft
  - Damp
  - Crystal-like

### Frost

- [Knowledge Base](http://this-is-a-very-long-url-for-information-about-frost-and-the-winter-season.com)
- Sparkling and frozen!
- Attributes:
  - Cold
  - Grainy
```

For small, non-complex and single line content:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling |
| Ice     | Frozen    |
```

**Incorrect** code for this rule:

```markdown
| Element  | URL | Note | Attributes | Types |
| :------: | --- | ---- | ---------- | ----- |
| Snow     | [Wikipedia](http://this-is-a-very-long-url-for-information-about-snowflakes.com) | It falls down in winter! | soft, damp, crystal-like | powder snow, wet snow, lazy snow |
| Frost    | [Wikipedia](http://this-is-a-very-long-url-for-information-about-frost-and-the-winter-season.com) | Sparkling and frozen! | cold, grainy | permafrost, hard rime, ground frost |
```

## Empty Lines Before And After

Always surround tables by a single empty line except at the beginning of the file.

### Examples

**Correct** code for this rule:

```markdown
... snowflakes are falling.

| Element | Attribute |
| ------- | --------- |
| Snow    | Falling   |
| Frost   | Sparkling |
| Ice     | Cold      |

Sparkling and frozen...
```

**Incorrect** code for this rule:

```markdown
... snowflakes are falling.
| Element | Attribute |
| ------- | --------- |
| Snow    | Falling   |
| Frost   | Sparkling |
| Ice     | Cold      |
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


| Element | Attribute |
| ------- | --------- |
| Snow    | Falling   |
| Frost   | Sparkling |
| Ice     | Cold      |


Sparkling and frozen...
```

## Content Spacing

Surround the content of headers and cells with at least one (1) single whitespace.

### Examples

**Correct** code for this rule:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling |
```

**Incorrect** code for this rule:

```markdown
|Element|Attribute|
| ----- | ------- |
|Frost|Sparkling  |
```

```markdown
|  Element           |  Attribute    |
|  -------           |  ---------    |
|  Frost             |  Sparkling    |
```

## Header Delimiter Row Spacing

The delimiter row must only consist of cells whose only content are hyphens (`-`) surrounded by a single whitespace,
and optionally, a leading or trailing colon (`:`), or both, to indicate left, right, or center alignment respectively.

> remark-lint: [table-cell-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-cell-padding) and [table-pipe-alignment](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipe-alignment)

### Examples

**Correct** code for this rule:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
| :-----: | --------: |
| Frost   | Sparkling |
```

**Incorrect** code for this rule:

```markdown
| Element | Attribute |
|---------|-----------|
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
|---------|-----------|
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
|---      | ---       |
| Frost   | Sparkling |
```

```markdown
| Element | Attribute |
|:-------:|----------:|
| Frost   | Sparkling |
```

## Minimum Column Width

The minimum column width is determined by the cell with the longest content in the column.

> remark-lint: [table-pipe-alignment](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipe-alignment)

### Examples

**Correct** code for this rule:

```markdown
| Element | Attribute             |
| ------- | ---------             |
| Frost   | Sparkling and frozen! |
| Snow    | Falling down!         |
```

**Incorrect** code for this rule:

```markdown
| Element | Attribute |
| ------- | --------- |
| Frost   | Sparkling and frozen! |
| Snow    | Falling down! |
```

## Alignment

Always align tables vertically.

Unaligned tables are easier to write, but tables with aligned border pipes (`|`) are more readable.
Preceding pipes make it easier to determine where a table starts and ends.

Trailing pipes make it look better because of symmetry.

> remark-lint: [table-pipes](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipes)

### Examples

**Correct** code for this rule:

```markdown
| Element | Attribute                                    |
| ------- | ---------                                    |
| Frost   | Sparkling and frozen!                        |
| Snow    | Falling down!                                |
| Ice     | Everything is smooth and slippery in winter! |
```

**Incorrect** code for this rule:

```markdown
| Element | Attribute |
| --- | --- |
| Frost | Sparkling and frozen! |
| Snow | Falling down! |
| Ice | Everything is smooth and slippery in winter! |
```

## No Indentation

Never indent tables.

> remark-lint: [no-table-indentation](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-table-indentation)

### Examples

**Correct** code for this rule:

```markdown
| Element | Attribute             |
| ------- | ---------             |
| Frost   | Sparkling and frozen! |
| Snow    | Falling down!         |
```

**Incorrect** code for this rule:

::: tip Note
The `·` character represents a whitespace.
:::

```markdown
·| Element | Attribute             |
·| ------- | ---------             |
·| Frost   | Sparkling and frozen! |
·| Snow    | Falling down!         |
```

```markdown
··| Element | Attribute             |
··| ------- | ---------             |
··| Frost   | Sparkling and frozen! |
··| Snow    | Falling down!         |
```

```markdown
·········| Element | Attribute             |
·········| ------- | ---------             |
·········| Frost   | Sparkling and frozen! |
·········| Snow    | Falling down!         |
```
