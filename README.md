# Dev

* `git clone git@github.com:jpv-axa/book.git`, `npm install`
* To develop using storybook, run `npm start`.
* Open http://localhost:58044
* create a branch from `master`


# Publish the demo

DONT PUBLISH IN `master`

* create a branch from `master`
* Before publishing, run `npm run build`, open locally `docs/storybook/index.html` to check it works.
* To check if all modifications really are wanted, execute `npm run visual-diff` and go on the URL provided by percy.io
* Commit and push `docs/*`.
* Go on Github and require a Pull Request
* Have it approved by a pair

Public demo : https://jpv-axa.github.io/book/storybook/


## Validating techno ?

2 demos with 2 technos
after `npm install`, run either :

- `npm run fractal`
- `npm run storybook`
