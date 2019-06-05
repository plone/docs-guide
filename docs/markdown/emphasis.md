# Emphasis

## Italic

Use one (1) asterisk `*` marker to generate spans for italic formatted text.

> remark-lint: [emphasis-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-emphasis-marker)

### Examples

**Correct** code for this rule:

```markdown
*Winter*
*Snow*
```

**Incorrect** code for this rule:

```markdown
__Winter__
__Snow__
```

## Bold

Use two (2) asterisk `*` marker to generate spans for bold formatted text.

> remark-lint: [emphasis-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-emphasis-marker) and [strong-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-strong-marker)

### Examples

**Correct** code for this rule:

```markdown
**Winter**
**Snow**
```

**Incorrect** code for this rule:

```markdown
*Winter*
```

## No Header Replacement

Do not use emphasis elements (bold or italics) to introduce a multi line named section.
Use headers instead which is exactly the semantic meaning of headers.

As a consequence, many implementations add useful behaviors to headers and not to emphasis elements, such as automatic ID generation (anchor)
to make it easier to refer to the header later on.

Use a level 6 header if the meaning of the header section should not stand out great.

> remark-lint: [no-emphasis-as-heading](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-emphasis-as-heading)

### Examples

**Correct** code for this rule:

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

**Incorrect** code for this rule:

```markdown
**Winter**

The winter has sparkling and frozen elements!

__Snow__

Snow is falling down!
```

## No Inner Spacing

Do not use inner spaces for any markers.

> remark-lint: [no-inline-padding](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-inline-padding)

### Examples

**Correct** code for this rule:

```markdown
**Winter**
*Snow*
```

**Incorrect** code for this rule:

```markdown
** Winter **
* Snow *
```

```markdown
**      Winter **
* Snow            *
```
