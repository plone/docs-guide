# Images

## Absolute URLs

Prefer absolute URLs instead of relative ones to improve the portability of the document.

### Examples

**Correct** code for this rule:

```markdown
![snowflake icon][snowflake] snowflakes falling down in the winter!

[snowflake]: https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png
```

**Incorrect** code for this rule:

```markdown
![snowflake icon][snowflake] snowflakes falling down in the winter!

[snowflake]: ../assets/snowflake.png
```
