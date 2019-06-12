# Contributing

::: tip Key Point
:bulb: Information on how to contribute.
:::

We would love for you to contribute to this guide and help make it even better than it is today!

## Code of Conduct

Please read and follow our [Code of Conduct](https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct).

## Questions

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests.

You've got much better chances of getting your question answered on our [forum](https://community.plone.org) where the questions should be tagged with `docs`.

## Bugs

If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository](https://github.com/plone/docs-guide/issues).

Even better, you can [submit a Pull Request](#submitting-a-pull-request) with a fix.

## Features

You can *request* a new feature by [submitting an issue](#submitting-an-issue) to our GitHub Repository.

If you would like to *implement* a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it.

Please consider what kind of change it is:

- For a **Major Feature**, first open an issue and outline your proposal so that it can be
discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
and help you to craft the change so that it is successfully accepted into the project.
- **Small Features** can be crafted and directly [submitted as a Pull Request](#submitting-a-pull-request).

## Submission Guidelines

### Submitting an Issue

Before you submit an issue, please search the issue tracker,
maybe an issue for your problem already exists and the discussion might inform you of workarounds.

You can file new issues by selecting from our [new issue templates](https://github.com/plone/docs-guide/issues/new/choose) and filling out the issue template.

### Submitting a Pull Request

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub](https://github.com/plone/docs-guide/pulls) for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
1. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
  Discussing the design up front helps to ensure that we're ready to accept your work.
1. Fork the `plone/docs-guide` repository.
1. Make your changes in a new git branch:

     ```bash
     git checkout -b my-fix-branch master
     ```

1. Create your patch, **including appropriate test cases**.
1. Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit-message-guidelines). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```bash
     git commit -a
     ```
    Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

1. Push your branch to GitHub:

    ```bash
    git push origin my-fix-branch
    ```

1. In GitHub, send a pull request to `docs-guide:master`.
- If we suggest changes then:
  - Make the required updates.
  - Re-run the Angular test suites to ensure tests are still passing.
  - Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```bash
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can delete your branch and pull the changes
from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```bash
    git push origin --delete my-fix-branch
    ```

- Check out the master branch:

    ```bash
    git checkout master -f
    ```

- Delete the local branch:

    ```bash
    git branch -D my-fix-branch
    ```

- Update your master with the latest upstream version:

    ```bash
    git pull --ff upstream master
    ```

## Commit Message Guidelines

We have precise rules over how our git commit messages can be formatted.

This leads to **more readable messages** that are better to follow when looking through the **project history**.

We advice to use [Commitizen](https://commitizen.github.io/cz-cli/) which is installed as part of the*dev dependencies*.

The git commit messages are also used to **generate the change log**.


### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.
The header has a special format that includes a **type**, a **scope** and a **subject**:

```ini
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters!

This allows the message to be easier to read on GitHub and in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples:

```ini
docs(changelog): update changelog to beta.5
```

```ini
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scope: npm)
- **ci**: Changes to our CI configuration files and scripts (example scope: circleci)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Do not capitalize the first letter
- No dot (.) at the end

### Body

As in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.
