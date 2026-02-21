# Contributing to Portfolio

First off, thank you for considering contributing to this project! It's people like you that make it better. Every contribution is valuable.

## Running a Local Build

Here is a quick guide on how to run the repo locally so you can start contributing.

**Prerequisites:**
- Node.js (v18 or higher)
- [pnpm](https://pnpm.io/)

**1. Fork this repository**

Fork this repository by clicking the **Fork** button at the top right of the page.

**2. Clone your forked repository and go into the directory**

```bash
git clone https://github.com/<YOUR-USERNAME>/portfolio.git
cd portfolio
```

**3. Install the project dependencies**

```bash
pnpm install
```

**4. Run the development server**

```bash
pnpm dev
```

This starts the Next.js development server. Open http://localhost:9002 in your browser. Changes to the source code will show up in the running app.

## Testing and QA

Any new feature or bigger change should be tested.

**What to test?**
- **New features:** Make sure the feature works as intended.
- **Bug fixes:** Cover the bug so it doesn’t come back.
- **Edge cases:** Think about unusual inputs or situations.
- **Interactions:** Test how your change works with the rest of the app.

## Making a Pull Request (PR)

When you’ve added a feature or fixed a bug, open a PR and we’ll review it.

Before submitting a pull request, please:

1. **Lint your code**

   ```bash
   pnpm run lint
   ```

2. **Type-check**

   ```bash
   pnpm run typecheck
   ```

3. **Format your code**  
   Use your editor’s formatter (e.g. Prettier) or run your project’s format script if you have one.

4. **Commit**  
   Use clear, descriptive commit messages (see format below).

5. **Submit the PR**  
   Push to your fork and open a pull request against the `main` branch of the original repository. Use a clear PR title (see format below). Fill in the [pull request template](.github/PULL_REQUEST_TEMPLATE.md) that appears when you create the PR.

6. **Add labels**  
   Add one or more labels to your PR (e.g. `enhancement`, `bug`, `documentation`) so maintainers can triage and filter easily.

## Using labels (issues and pull requests)

Please add labels to **issues** and **pull requests** when you open them. Labels help with triage and finding related work.

**Suggested labels:**

- **bug** — Something isn’t working or is incorrect.
- **enhancement** — New feature or improvement.
- **documentation** — Docs, README, CONTRIBUTING, comments.
- **good first issue** — Good for new contributors (maintainers can add this to issues).
- **help wanted** — Extra attention wanted (maintainers can add this).

If the repo has custom labels, use those. Add labels from the right-hand sidebar when creating or editing an issue or PR.

## Commit message and PR title format

Use this style so history and PRs are easy to scan.

**Format:** `type(scope): short description`

- **type:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **scope:** optional area (e.g. `experience`, `about`, `data`, `readme`)
- **description:** imperative, lowercase after the colon, no period at the end

**Commit examples:**

```
feat(experience): add expandable role details
fix(contact): reduce bottom spacing
docs(readme): add contribution link
refactor(sections): move experience types to src/types
```

**PR title examples:**

- `feat(experience): add expandable role details`
- `fix: correct browser title on section change`
- `docs: add CONTRIBUTING and issue template`

Use the same style for the PR title as for your final commit (or a single summary commit) in the PR.

Thanks for contributing!
