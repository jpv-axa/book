# User

## Include in your project

### Using the compiled version

The simplest way is to use the files in the `dist/` directory, of type `{.js|.css|.svg}`. They are compiled to work at least on IE11, and all desktop and mobile browser versions released after IE11 (2013). Check `dist/demo.html` for a working demo.

### Using the original sources

If you are a bundler user, like Webpack or Rollup, you can directly use the source files in the `dg/components/` directory. Sources are written in Sass and ES Next. Check `package.json` and `.babelrc` to know the babel and sass versions and plugins you will need.

### /!\ Fonts special case

We are using two fonts and their licence disallow us to distribute it to you. To be specific : the file `dg/components/materials/fonts.scss` and its built counterpart `dist/fonts.X.X.X.css` contain the font files but are here only to show a realistic demo. Licensing disallows you to use them directly.

You are supposed to copy or buy and host yourself the font files.
You can download the original _Source Sans Pro Regular_ and _Source Sans Pro SemiBold_ here : https://fonts.google.com/selection?selection.family=Source+Sans+Pro:400,600. For performance reasons, please select a language and convert the files to Woff2 (for performance) and Woff (for compatibility).
The License for _Publico Headline Bold_ DISALLOWS us to distribute to other Axa entities the original file. Please buy a licence from Commercial Type (https://commercialtype.com/catalog/publico/publico_headline/bold), with the Woff2 option (for performance) and Woff (for compatibility).

## Usage

The live documentation is here : https://jpv-axa.github.io/book/. Once you have include the CSS/JS file in your project, you will be able to use the code as demonstrated in the "How to Code That?" tab of each demo.

# Contributor

## Local development

- `git clone git@github.com:jpv-axa/book.git`, `npm install`
- To develop using storybook, run `npm start`.
- Open http://localhost:58044
- create a branch from `master`

## Publishing the demo

DONT PUBLISH IN `master`

- create a branch from `master`
- do your modifications, small and atomic commits are preferred
- Before publishing, run `npm run build`, open locally `docs/index.html` to check it works.
- To check if all modifications really are wanted, execute `npm run visual-diff` and go on the URL provided by percy.io
- Commit and push `docs/*`.
- Upgrade the `package.json` version number
- Check that the library build is still working
- - run `npm run lib-build` then `npm run lib-serve`
- - open http://localhost:8080/demo.html to check components still work with the JS/CSS bundles only
- - commit and push `dist/*`
- Go on Github https://github.com/jpv-axa/book and do a Pull Request
- A build on Travis-ci should start, it must pass
- A percy review should be accepted
- Have it approved
  - by a pair programer for the code
  - by a designer on the URL provided by percy

Public demo : https://jpv-axa.github.io/book/
