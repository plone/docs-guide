# Naming conventions

::: tip Key Point
:bulb: How to name files and usage of file extension
:::

## File extension

Always use `.md` file extension.

> remark-lint: [file-extension](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-file-extension "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
ice.md
snow.md
frost.md
```

**:thumbsdown: Incorrect** code for this rule:

```raw
ice.gfm
snow.mdk
frost.markdown
```

## File naming
<!--lint disable-->
Always prefer [spinal-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles "Link explaining spinal-case")
(also named [*kebab-case* or *hyphen-separated*](https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case/12273101 "Link to Stack Overflow explaining name difference"))
for file names.
<!--lint enable-->
> remark-lint: [no-file-name-mixed-case](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-file-name-mixed-case "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```raw
winter-season.md
ice-cold.md
snow-fall.md
```

**:thumbsdown: Incorrect** code for this rule:

```raw
winterSeason.md
IceCold.md
snow fall.md
snow_fall.md
```
