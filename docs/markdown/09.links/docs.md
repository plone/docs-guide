# Links

## Prefer Inline Links

Always use inline links instead of [reference](https://github.github.com/gfm/#reference-link).

### Examples

**Correct** code for this rule:

```markdown
[Winter](https://the-winter-is-sparkling-and-frozen.io)
```

**Incorrect** code for this rule:

```markdown
[Winter](#winter)

## Winter
```

```markdown
[Winter][winter-info]

[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## No ID Inner Spacing

Do not use inner spaces within link IDs.

> remark-lint: [no-inline-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-inline-padding)

### Examples

**Correct** code for this rule:

```markdown
The [Winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen!

[Snowflakes](https://in-the-winter-many-snowflakes-are-falling.io) are falling.
```

**Incorrect** code for this rule:

```markdown
The [Winter]( https://the-winter-is-sparkling-and-frozen.io ) is sparkling and frozen!

[Snowflakes](    https://in-the-winter-many-snowflakes-are-falling.io     ) are falling.
```

## No Trailing Or Leading Title Spaces

Do not use trailing or leading spaces in link titles.

Add necessary spaces before or after the brackets/braces (`[]`, `()`) to format links within flowing text.

### Examples

**Correct** code for this rule:

```markdown
The [Winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen! [Snowflakes](https://in-the-winter-many-snowflakes-are-falling.io) are falling.
```

**Incorrect** code for this rule:

```markdown
The[ Winter ](https://the-winter-is-sparkling-and-frozen.io)is sparkling and frozen![ Snowflakes ](https://in-the-winter-many-snowflakes-are-falling.io) are falling.
```

## Autolink Protocol

Always add a valid protocol when using [autolinks](https://github.github.com/gfm/#autolinks).

> remark-lint: [no-auto-link-without-protocol](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol)

### Examples

**Correct** code for this rule:

```markdown
https://example.com

https://www.example.com

http://example.com

http://www.example.com.com
```

```markdown
mailto:code@example.com
```

**Incorrect** code for this rule:

```markdown
www.example.com

example.com
```

## Unique IDs

Reference link IDs must be unique within a document file.

> remark-lint: [no-duplicate-definitions](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions)

### Examples

**Correct** code for this rule:

```markdown
[snow](https://snow.io)
[snowflakes](https://snow.io/snowflakes)
```

**Incorrect** code for this rule:

```markdown
[snow](https://snow.io)
[snow](https://snow.io/snowflakes)
```

## No Empty URL

Do not use links or images with empty URLs.

> remark-lint: [no-empty-url](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-empty-url)

### Examples

**Correct** code for this rule:

```markdown
The [winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen!

![snowflake image](https://snow-is-falling-down.io/snowflake.png)
```

**Incorrect** code for this rule:

```markdown
The [winter]() is sparkling and frozen!

![snowflake image]()
```
