# Express Fruits

If, at any time, you need to sync with your instructor's code, run the following 2 or 3 commands:

1. `git fetch --all`
    - This will retrieve the changes from this `express-fruits` repo, but doesn't merge them into your code.
2. `git reset --hard origin/master`
    - This will throw away all your staged and unstaged changes, forget everything on your current local branch, and then merge all the fetched changes, making it exactly the same as `origin/master`.
3. Optional: If your instructor has installed npm packages that you have not, run `npm install`.
    - This will read the `package.json` and install any packages that are listed there, which are not currently in your `node_modules`.
