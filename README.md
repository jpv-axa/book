# Dev

* `git clone git@github.com:jpv-axa/book.git`, `npm install`
* To develop using storybook, run `npm start`.
* Open http://localhost:58044
* create a branch from `master`


# Publish the demo

DONT PUBLISH IN `master`

* create a branch from `master`
* Before publishing, run `npm run build`, open locally `docs/index.html` to check it works.
* To check if all modifications really are wanted, execute `npm run visual-diff` and go on the URL provided by percy.io
* Commit and push `docs/*`.
* Go on Github https://github.com/jpv-axa/book and do a Pull Request
* re-execute `npm run visual-diff` to help the designer reviewer
* Have it approved 
  * by a pair programer for the code
  * by a designer on the URL provided by percy

Public demo : https://jpv-axa.github.io/book/
