# Headings

## ATX Style

Always use [atx-style](http://www.aaronsw.com/2002/atx/intro) headings (not closed) instead of [Setext](http://docutils.sourceforge.net/mirror/setext.html).
The level can be easily seen and the number of characters must not match in both lines.

ATX also works for all levels, while Setex only goes up to level 2.

> remark-lint: [heading-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-heading-style)

### Examples

**Correct** code for this rule:

```markdown
# Winter

## Frost

### Snow
```

**Incorrect** code for this rule:

```markdown
Winter
======

Frost
-----
```

No closed ATX styled headings:

```markdown
# Winter #

## Frost ##

### Snow ###
```

## Empty Lines Before And After

Always surround headers by a single empty line except at the beginning of the file.

### Examples

**Correct** code for this rule:

```markdown
... snowflakes are falling.

# Winter

Sparkling and frozen...
```

**Incorrect** code for this rule:

```markdown
... snowflakes are falling.
# Winter
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


# Winter


Sparkling and frozen...
```

## Content Spacing

Always separate the marker character `#` from the actual header content using a single whitespace.

> remark-lint: [no-heading-content-indent][remark-lint-no-heading-content-indent]

###### Examples

**Correct** code for this rule:

```markdown
# Winter
```

**Incorrect** code for this rule:

```markdown
#Winter
```

```markdown
#  Winter
```

## No Content Before

Make sure that there are no other characters (including whitespaces) in front of headings.

> remark-lint: [no-heading-indent](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-content-indent)

###### Examples

**Correct** code for this rule:

```markdown
# Winter
```

Note: The `·` character represents a whitespace character.

**Incorrect** code for this rule:

```markdown
.# Winter
```

```markdown
·# Winter
```

## Sentences Case

Use an upper case letter as the first letter of a header, unless it is a word that always starts with lowercase letters, e.g. proper names or code snippets.

### Examples

**Correct** code for this rule:

```markdown
# The quick brown fox jumps over the lazy dog
```

Proper names or code snippets:

```markdown
# React

# `string`

# init main
```

**Incorrect** code for this rule:

```markdown
# winter is sparkling and frozen
```

Proper names or code snippets:

```markdown
# react

# `String`

# Init
```

## Length

Prefer using short header with a maximum length of 80 character (without markers).

Instead of using a huge sentence, make the header a summary and write the huge sentence as the first paragraph beneath the header.

This makes it is easier to refer to the header later, specially if automatic IDs or a TOC are created.

> remark-lint: [maximum-heading-length](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-heading-length)

### Examples

**Correct** code for this rule:

```markdown
# Winter

The winter is sparkling and frozen and soft snowflakes are falling down on the world!
```

**Incorrect** code for this rule:

```markdown
# The winter is sparkling and frozen and soft snowflakes are falling down on the world!
```

## Punctuation After Content

Do not use any punctuation at the end of a header e.g. a trailing (semi)colon `;:`, period `.`, closing marker `#` or any "sentence amplifier" (`!?`).

Every header is an introduction to what is about to come next, which is exactly the function of a colon.

Also the header is not a sentence, or at least only a short sentence, so there is not need to add a sentence separator to it.

> remark-lint: [no-heading-punctuation](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-punctuation)

### Examples

**Correct** code for this rule:

```markdown
# Winter

Sparkling and frozen.
```

**Incorrect** code for this rule:

```markdown
# Winter: Sparkling
```

```markdown
# Winter. Frozen.
```

```markdown
# Winter #
```
