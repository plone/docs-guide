# Naming Conventions

## File Extension

Always use `.md` file extension.

> remark-lint: [file-extension](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-file-extension)

### Examples

**Correct** code for this rule:

```markdown
ice.md
snow.md
frost.md
```

**Incorrect** code for this rule:

```raw
ice.gfm
snow.mdk
frost.markdown
```

## File Naming

Always prefer [spinal-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) (also named [*kebab-case* or *hyphen-separated*](https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case/12273101)) for file names.

> remark-lint: [no-file-name-mixed-case](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-file-name-mixed-case)

###### Examples

**Correct** code for this rule:

```raw
winter-season.md
ice-cold.md
snow-fall.md
```

**Incorrect** code for this rule:

```raw
winterSeason.md
IceCold.md
snow fall.md
snow_fall.md
```
