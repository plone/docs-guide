# Links

::: tip Key Point
:bulb: Always use inline links.
:::

Use [inline](https://spec.commonmark.org/0.29/#inline-link "Link to specification") links instead of [reference](https://spec.commonmark.org/0.29/#reference-link "Link to specification").

**:thumbsup: Correct** code for this rule:

```markdown
[Winter](https://the-winter-is-sparkling-and-frozen.io)
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
[Winter](#winter)

## Winter
```

```markdown
[Winter][winter-info]

[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```
<!-- vale off -->
## No ID inner spacing
<!-- vale on -->
Do not use inner spaces within link IDs.

> remark-lint: [no-inline-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-inline-padding "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
The [Winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen!

[Snowflakes](https://in-the-winter-many-snowflakes-are-falling.io) are falling.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
The [Winter]( https://the-winter-is-sparkling-and-frozen.io ) is sparkling and frozen!

[Snowflakes](    https://in-the-winter-many-snowflakes-are-falling.io     ) are falling.
```

## No trailing or leading title spaces

Do not use trailing or leading spaces in link titles.

Add necessary spaces before or after the brackets/braces (`[]`, `()`) to format links within flowing text.

**:thumbsup: Correct** code for this rule:

```markdown
The [Winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen! [Snowflakes](https://in-the-winter-many-snowflakes-are-falling.io) are falling.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
The[ Winter ](https://the-winter-is-sparkling-and-frozen.io)is sparkling and frozen![ Snowflakes ](https://in-the-winter-many-snowflakes-are-falling.io) are falling.
```

## Autolinks

Try to avoid them.
If you haev to use, always add a valid protocol when using [autolinks](https://spec.commonmark.org/0.29/#autolink "Link to specification").

> remark-lint: [no-auto-link-without-protocol](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
https://example.com

https://www.example.com

http://example.com

http://www.example.com.com
```

```markdown
mailto:code@example.com
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
www.example.com

example.com
```

## Unique IDs

Reference link IDs must be unique within a document file.

> remark-lint: [no-duplicate-definitions](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
[snow](https://snow.io)
[snowflakes](https://snow.io/snowflakes)
```

**Incorrect** code for this rule:

```markdown
[snow](https://snow.io)
[snow](https://snow.io/snowflakes)
```
