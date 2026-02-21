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
   Use clear, descriptive commit messages.

5. **Submit the PR**  
   Push to your fork and open a pull request against the `main` branch of the original repository.

Thanks for contributing!
