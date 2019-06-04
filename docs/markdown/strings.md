# Strings

## Quotes

Use double quotes `""` for strings:

- **Double quotes can be used for inline HTML**.
- **Consistency to other style guides**. Double quotes are used by many code styles like e.g. [JavaScript](https://arcticicestudio.github.io/styleguide-javascript).
- **Parallelism to the natural language**. Double quotes are used to identify a passage of quoted text. When using single quotes, the reader may misinterpret it as a contraction. The other meaning of a passage of text surrounded by the `'` indicates the *colloquial* meaning. It makes sense to stay consistent with pre-existing languages, and this may likely ease the learning and interpretation of code.

> remark-lint: [link-title-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-link-title-style)

### Examples

**Correct** code for this rule:

```markdown
"The winter is sparkling and frozen!"
```

**Incorrect** code for this rule:

```markdown
'The winter is sparkling and frozen!'
```

## Line Length

Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

Broken strings are painful to work with and make code less searchable.

### Examples

**Correct** code for this rule:

```markdown
"Cupcake ipsum candy pudding soufflé chocolate. Croissant muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream cake dessert icing donut."
```

**Incorrect** code for this rule:

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