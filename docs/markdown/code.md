# Code

## Blocks

Avoid indentation based code blocks, use [fenced code blocks](https://github.github.com/gfm/#fenced-code-blocks) for multi line code.

This prevents malformed rendered output due to wrong indentation errors, increases the readability and allows the usage of [language syntax highlighting](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting).

> remark-lint: [code-block-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-code-block-style)

### Examples

**Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
~~~

**Incorrect** code for this rule:

~~~
```js
    import React, { PureComponent } from "react";

    class Frost extends PureComponent {
      // ...
    }

    export default Frost;
```
~~~

## Syntax Highlighting

Explicitly declare the language for blocks containing code snippets, so that neither the syntax highlighter nor the next editor must guess.

> remark-lint: [fenced-code-flag](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-flag)

### Examples

**Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
~~~

**Incorrect** code for this rule:

~~~md
```
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
~~~

## Escape Newlines In Terminal Commands

Command snippets are intended to be copied and pasted directly into e.g. a terminal.

To protect the user from unintentional run the copied code due to a newline (interpreted by the terminal as <kbd>Enter</kbd>) use a single backslash at the end of the line.

### Examples

**Correct** code for this rule:

```shell
npx run docs:generate -- --template=winter --description="Sparkling and frozen" \
--elements="snow,frost,ice" --snowflakes=20
```

**Incorrect** code for this rule:

```shell
npx run docs:generate -- --template=winter --description="Sparkling and frozen" --elements="snow,frost,ice" --snowflakes=20
```

## No Shell Code Dollar Sign

Avoid to use dollar sign (`$`) in shell code.
It improves the readability and prevents error when users copy and paste the code.

To clarify the output of a command use e.g. a comment on the next line or optionally append it to the command on the same line, separated by a whitespace.

> remark-lint: [no-shell-dollars](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-shell-dollars)

### Examples

**Correct** code for this rule:

```shell
echo "The winter is sparkling and frozen!"
```

```shell
winter="The winter is sparkling and frozen!"
echo $winter # The winter is sparkling and frozen!
```

**Incorrect** code for this rule:

```shell
$ echo "The winter is sparkling and frozen!"
```

## Within Lists

When using code blocks within lists make sure to use the correct indention to not break the list.

### Examples

**Correct** code for this rule:

~~~
- Winter
  ```jsx
  const Snow = <Snowflake amount=20 />;
  ```
- Frost
~~~

**Incorrect** code for this rule:

~~~
- Winter
```jsx
const Snow = <Snowflake amount=20 />;
```
- Frost
~~~

## Inline

Use one (1) backtick character `` ` `` to create a `inline code` span which will render all wrapped content literally.

### Examples

**Correct** code for this rule:

```md
The winter has `sparkling` and frozen `elements`!
```

**Incorrect** code for this rule:

~~~md
The winter has ```sparkling``` and frozen ```elements```!
~~~

To learn what content should be wrapped please read the [use cases](#use-cases) chapter.

## Marker Character Style

Use backtick characters `` ` `` for both blocks and inline code.

> remark-lint: [fenced-code-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-marker)

### Examples

**Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";
class Snow extends PureComponent {
  // ...
}
export default Snow;
```
~~~

**Incorrect** code for this rule:

```
~~~js
import React, { PureComponent } from "react";
class Snow extends PureComponent {
  // ...
}
export default Snow;
~~~
```

## Use Cases

[Code Blocks](#blocks) should be used for code snippets longer than a single line or terminal command quotations that contain sample output when the being executed.

[Inline code spans](#inline) on the other hand should be used to highlight e.g.

- **executables** - `gcc`, `npm`, `go`, `python`
- **paths** - `/etc/hosts`, `src/main/java/com/arcticicestudio/icecore/hashids/Hashids.java`
- **version numbers** - `0.2.0`, `1.8.6-frost.2`
- **code e.g. reserved keywords, builtins and operators** - `this`, `true`/`false`, `String`, `=>`

Don't use it for

- **project or proper names** - e.g [React](https://reactjs.org), [GCC](https://gcc.gnu.org), [Node.js](https://nodejs.org), [Golang](https://golang.org) or [Rust](https://www.rust-lang.org)
- **libraries** - e.g. [libc](https://crates.io/crates/libc)
- **packages and modules** - e.g. [react-dom](https://www.npmjs.com/package/react-dom) or [archlinux-keyring](https://www.archlinux.org/packages/core/any/archlinux-keyring)
