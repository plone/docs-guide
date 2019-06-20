# Strings

::: tip Key Point
:bulb: Use double quotes `""` for strings.
:::

## Quotes

- **Double quotes can be used for inline HTML**.
- **Consistency to other style guides**. Double quotes are used by many code styles like for example [JavaScript](https://arcticicestudio.github.io/styleguide-javascript "Link to an JS code style guide").
- **Parallelism to the natural language**. Double quotes are used to identify a passage of quoted text.

> remark-lint: [link-title-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-link-title-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```markdown
"The winter is sparkling and frozen!"
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
'The winter is sparkling and frozen!'
```

## Line length

Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

Broken strings are painful to work with and make code less searchable.

**:thumbsup: Correct** code for this rule:

```markdown
"Cupcake ipsum candy pudding soufflé chocolate. Croissant muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream cake dessert icing donut."
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
"Cupcake ipsum candy pudding soufflé chocolate. Croissant \
muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream \
cake dessert icing donut."
```

```markdown
"Cupcake ipsum candy pudding soufflé chocolate. Croissant" +
 "muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream " +
 "cake dessert icing donut."
```
