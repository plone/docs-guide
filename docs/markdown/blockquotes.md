# Blockquotes

## Indentation

Always separate the marker `>` from the actual content using a single whitespace.

> remark-lint: [blockquote-indentation](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-blockquote-indentation)

#### Examples

**Correct** code for this rule:

```markdown
> Winter
```

**Incorrect** code for this rule:

```markdown
>Winter
```

```markdown
>  Winter
```

## Multi Line

Use a `greater than` sign for every line, including wrapped.

> remark-lint: [no-blockquote-without-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker)

#### Examples

**Correct** code for this rule:

```markdown
> Winter
> Snow
```

```markdown
> Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
> for many beautiful animals like snowy owls,
> arctic foxes, and grizzly bears.
```

**Incorrect** code for this rule:

```markdown
> Winter
Snow
```

```markdown
> Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
for many beautiful animals like snowy owls,
arctic foxes, and grizzly bears.
```
