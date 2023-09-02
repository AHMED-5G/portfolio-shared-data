# Pre-push Hook

The `pre-push` hook is a Git hook that is executed before the `git push` command. This hook is used to update the `shared-data` submodule to the latest commit before pushing changes to the remote repository.

## code
```bs
#!/bin/bash

echo "Pushing changes in the submodule..."

# Navigate to the submodule directory
cd shared-data
git fetch

# Check if the current branch is behind the remote branch in the shared-data submodule
SUBMODULE_BRANCH=$(git rev-parse --abbrev-ref HEAD)
REMOTE_BRANCH=$(git rev-parse --abbrev-ref @{u})
SUBMODULE_DIFF_COMMITS=$(git rev-list --count $REMOTE_BRANCH..$SUBMODULE_BRANCH)
if [ $SUBMODULE_DIFF_COMMITS -gt 0 ]; then
  echo "Shared-data submodule is ahead of the remote branch. Please pull changes from the remote branch before pushing in the parent repository."
  exit 1
else
  echo "Shared-data submodule is up-to-date. Proceeding with pushing changes in the parent repository."

  # Check the status of the submodule
  git status

  # Add all changes to the staging area
  git add .

  # Create a commit with a descriptive message
  git commit -m "Update submodule by backend"

  # Check if there are any new commits in the remote branch of the submodule
  git fetch origin $SUBMODULE_BRANCH
  LOCAL_COMMIT=$(git rev-parse HEAD)
  REMOTE_COMMIT=$(git rev-parse origin/$SUBMODULE_BRANCH)
  if [ $LOCAL_COMMIT != $REMOTE_COMMIT ]; then
    echo "Remote branch of the shared-data submodule has new commits. Please pull changes from the remote branch before pushing in the parent repository."
    exit 1
  fi

  # Push the changes to the remote repository
  git push origin master

  # Return to the parent directory
  cd ..
fi

```

## Purpose

The purpose of the `pre-push` hook is to ensure that any changes made to the `shared-data` submodule are pushed to the remote repository along with the changes in the parent repository.

## Usage

When `git push` is run, the `pre-push` hook script is automatically executed. It performs the following actions:

1.  Navigates to the `shared-data` submodule directory.
2.  Checks the status of the submodule.
3.  Adds all changes to the staging area.
4.  Creates a commit with a descriptive message.
5.  Pushes the changes to the remote repository.
6.  Returns to the parent directory.

## Configuration

To enable the `pre-push` hook, follow these steps:

1.  Create a file named `pre-push` in the `.git/hooks` directory of your repository.
2.  Add the script provided in the previous response to the `pre-push` file.
3.  Save the file and make it executable using the command `chmod +x .git/hooks/pre-push`.

Now, whenever you run `git push`, the `pre-push` hook will update the `shared-data` submodule before pushing changes to the remote repository.
