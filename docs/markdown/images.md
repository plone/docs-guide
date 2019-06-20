# Images

::: tip Key Point
:bulb: Prefer absolute URLs instead of relative ones to improve the portability of the document.
:::

**:thumbsup: Correct:**
<!--lint disable-->
```markdown
![snowflake icon](https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png) snowflakes falling down in the winter!
```
<!--lint enable-->

**:thumbsdown: Incorrect:**

```markdown
![snowflake icon][snowflake] snowflakes falling down in the winter!

[snowflake]: ../assets/snowflake.png
```
