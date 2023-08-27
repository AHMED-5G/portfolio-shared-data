# Pre-commit Hook

The `pre-commit` hook is a Git hook that is executed before creating a commit in your repository. This hook is used to perform certain actions before allowing the commit to proceed.

## code
```bs
#!/bin/bash

# Update the submodule to the latest commit
# don't merge new commit from shared-data because may it will cause errors
git submodule update --remote shared-data


# Run ESLint check
npm run lint



# Check ESLint exit code
ESLINT_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ]; then
  echo "ESLint check failed. Please fix the linting issues before committing."
  exit 1
fi

```

## Purpose

The purpose of the `pre-commit` hook is to update the `shared-data` submodule to the latest commit and run an ESLint check on your codebase. By doing so, it ensures that the submodule is up to date and checks for any linting issues before allowing the commit to proceed.

## Usage

When you attempt to create a commit, the `pre-commit` hook script is automatically executed. It performs the following actions:

1. Updates the `shared-data` submodule to the latest commit using the command `git submodule update --remote shared-data`.
2. Runs the ESLint check using the command `npm run lint`.

## Configuration

To enable the `pre-commit` hook in your repository, follow these steps:

1. Create a file named `pre-commit` in the `.git/hooks` directory of your repository.
2. Add the following script to the `pre-commit` file:
