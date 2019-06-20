# Emphasis

::: tip Key Point
:bulb: How to use emphasis to highlight text
:::

## Italic

Use one (1) asterisk `*` marker to generate spans for italic formatted text.

> remark-lint: [emphasis-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-emphasis-marker "Lint to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
*Winter*
*Snow*
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
__Winter__
__Snow__
```

## Bold

Use two (2) asterisk `*` marker to generate spans for bold formatted text.

> remark-lint: [emphasis-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-emphasis-marker "Link to remarkjs docs") and [strong-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-strong-marker "Lint to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
**Winter**
**Snow**
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
*Winter*
```

## No header replacement

Do not use emphasis elements (bold or italics) to introduce a multi line named section.
Use headers instead which is exactly the semantic meaning of headers.

As a consequence, many implementations add useful behaviors to headers and not to emphasis elements, such as automatic ID generation (anchor)
to make it easier to refer to the header later on.

Use a level 6 header if the meaning of the header section should not stand out great.

> remark-lint: [no-emphasis-as-heading](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-emphasis-as-heading "Lint to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
## Winter

The winter has sparkling and frozen elements!

## Snow

Snow is falling down!
````

```markdown
###### Winter

The winter has sparkling and frozen elements!

###### Snow

Snow is falling down!
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
**Winter**

The winter has sparkling and frozen elements!

__Snow__

Snow is falling down!
```

## No inner spacing

Do not use inner spaces for any markers.

> remark-lint: [no-inline-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-inline-padding "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
**Winter**
*Snow*
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
** Winter **
* Snow *
```

```markdown
**      Winter **
* Snow            *
```
