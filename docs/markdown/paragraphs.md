# Paragraphs

## No Indentation

::: tip Key Point
:bulb: Never indent the content of paragraphs.
:::

> remark-lint: [no-paragraph-content-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-paragraph-content-indent "Link to remarkjs")

**:thumbsup: Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
Snowflakes are falling down.
```

::: tip Note
The `·` character represents a whitespace.
:::

**:thumbsdown: Incorrect** code for this rule:

```markdown
·The winter has sparkling and frozen elements!
·Snowflakes are falling down.
```

```markdown
······The winter has sparkling and frozen elements!
········Snowflakes are falling down.
```
