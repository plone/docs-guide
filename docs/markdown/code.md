# Code

::: tip Key Point
:bulb: Rules for code and code blocks.
:::

## Blocks
<!--lint disable-->
Avoid indentation based code blocks, use [fenced code blocks](https://spec.commonmark.org/0.29/#fenced-code-blocks "Link to CommonMark spec") for multi line code.

This prevents malformed rendered output due to wrong indentation errors, increases the readability and allows the usage of [language syntax highlighting](https://v1.vuepress.vuejs.org/guide/markdown.html#syntax-highlighting-in-code-blocks "Link to vuepress docs about syntax highlighting").

> remark-lint: [code-block-style](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-code-block-style "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~
```js
    import React, { PureComponent } from "react";

    class Frost extends PureComponent {
      // ...
    }

    export default Frost;
```
~~~

## Syntax highlighting

Explicitly declare the language for blocks containing code snippets, so that neither the syntax highlighter nor the next editor must guess.

> remark-lint: [fenced-code-flag](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-flag "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~md
```
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
~~~

## Escape newlines in terminal commands

Command snippets are intended to be copied and pasted directly into e.g. a terminal.

To protect the user from unintentional run the copied code due to a newline (interpreted by the terminal as <kbd>Enter</kbd>) use a single backslash at the end of the line.

**:thumbsup: Correct** code for this rule:

```shell
npx run docs:generate -- --template=winter --description="Sparkling and frozen" \
--elements="snow,frost,ice" --snowflakes=20
```

**:thumbsdown: Incorrect** code for this rule:

```shell
npx run docs:generate -- --template=winter --description="Sparkling and frozen" --elements="snow,frost,ice" --snowflakes=20
```

## No shell code dollar sign

Avoid to use dollar sign (`$`) in shell code.
It improves the readability and prevents error when users copy and paste the code.

To clarify the output of a command use e.g. a comment on the next line or optionally append it to the command on the same line, separated by a whitespace.

> remark-lint: [no-shell-dollars](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-shell-dollars "Link to remarkjs docs")

**:thumbsup: Correct** code for this rule:

```shell
echo "The winter is sparkling and frozen!"
```

```shell
winter="The winter is sparkling and frozen!"
echo $winter # The winter is sparkling and frozen!
```

**:thumbsdown: Incorrect** code for this rule:

```shell
$ echo "The winter is sparkling and frozen!"
```

## Within lists

When using code blocks within lists make sure to use the correct indention to not break the list.

**:thumbsup: Correct** code for this rule:

~~~
- Winter
  ```jsx
  const Snow = <Snowflake amount=20 />;
  ```
- Frost
~~~

**:thumbsdown: Incorrect** code for this rule:

~~~
- Winter
```jsx
const Snow = <Snowflake amount=20 />;
```
- Frost
~~~

## Inline

Use one (1) backtick character `` ` `` to create a `inline code` span which will render all wrapped content literally.

**:thumbsup: Correct** code for this rule:

```md
The winter has `sparkling` and frozen `elements`!
```

**:thumbsdown: Incorrect** code for this rule:

~~~md
The winter has ```sparkling``` and frozen ```elements```!
~~~

## Marker character style

Use backtick characters `` ` `` for both blocks and inline code.

> remark-lint: [fenced-code-marker](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-marker "Link to remarkjs docs")


**:thumbsup: Correct** code for this rule:

~~~
```js
import React, { PureComponent } from "react";
class Snow extends PureComponent {
  // ...
}
export default Snow;
```
~~~

**:thumbsdown: Incorrect** code for this rule:

```
~~~js
import React, { PureComponent } from "react";
class Snow extends PureComponent {
  // ...
}
export default Snow;
~~~
```

## Use cases

[Code blocks](#blocks) should be used for code snippets longer than a single line
or terminal command quotations that contain sample output when the being executed.

[Inline code spans](#inline) on the other hand should be used to highlight e.g.

- **Executables** - `gcc`, `npm`, `go`, `python`
- **Paths** - `/etc/hosts`, `src/main/java/com/arcticicestudio/icecore/hashids/Hashids.java`
- **Version numbers** - `0.2.0`, `1.8.6-frost.2`
- **Code e.g. reserved keywords, builtins and operators** - `this`, `true`/`false`, `String`, `=>`

Don't use it for

- **Project or proper names** - e.g [React](https://reactjs.org "Link to reactjs"), [GCC](https://gcc.gnu.org "Link to GCC"), [Node.js](https://nodejs.org "Link to nodejs"), [Golang](https://golang.org "Link to Golang") or [Rust](https://www.rust-lang.org "Link to rust")
- **Libraries** - e.g. [libc](https://crates.io/crates/libc "Link to libc")
- **Packages and modules** - e.g. [react-dom](https://www.npmjs.com/package/react-dom "Link to react-dom")
<!--lint enable-->
