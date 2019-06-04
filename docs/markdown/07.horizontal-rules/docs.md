# Marker Character Style

A horizontal rule must consist of three (3) hyphens (`-`) without spaces.

> remark-lint: [rule-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-rule-style)

### Examples

**Correct** code for this rule:

```markdown
---
```

**Incorrect** code for this rule:

```markdown
-
```

```markdown
--

- -
```

```markdown
-- -

- --
```

## No prepended or appended content

Make sure that there are no other prepended or appended characters (including whitespaces).

### Examples

**Correct** code for this rule:

```markdown
---
```

**Incorrect** code for this rule:

```markdown
.---
```

```markdown
 ---
```

```markdown
---x
```

```markdown
---
```

## Empty lines before and after

Always surround lines by a single empty line except at the beginning of the file.

### Examples

**Correct** code for this rule:

```markdown
... snowflakes are falling.

---

Sparkling and frozen...
```

**Incorrect** code for this rule:

```markdown
... snowflakes are falling.
---
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


---


Sparkling and frozen...
```

## Use cases

Horizontal rules can be used to separate sections when headers are not applicable or to separate base document elements like a header, body and footer.
