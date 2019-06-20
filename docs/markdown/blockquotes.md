# Blockquotes

::: tip Key Point
:bulb: How to use blockquotes.
:::

## Indentation

Always separate the marker `>` from the actual content using a single whitespace.

> remark-lint: [blockquote-indentation](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-blockquote-indentation "Link to remarkjs docs" )

**:thumbsup: Correct** code for this rule:

```markdown
> Winter
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
>Winter
```

```markdown
>  Winter
```

## Multi line

Use a `greater than` sign (`>`) for every line, including wrapped.

> remark-lint: [no-blockquote-without-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
> Winter
> Snow
```

```markdown
> Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
> for many beautiful animals like snowy owls,
> arctic foxes, and grizzly bears.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
> Winter
Snow
```

```markdown
> Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
for many beautiful animals like snowy owls,
arctic foxes, and grizzly bears.
```
