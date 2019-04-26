/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create()

/* Set the title of the project */
fractal.set('project.title', '<img src=https://www.axa.com/base/images/logo.svg?version=2.4.4 width=50/> Axa Digital Guidelines')
fractal.set('project.version', 'NotEvenAlpha');
fractal.set('project.author', 'Jean-Pierre Vincent');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/wg_static_agent/components')

fractal.components.set('ext', '.html')

fractal.web.set('static.path', __dirname + '/wg_static_agent')

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/stories/')

fractal.web.set('builder.dest', __dirname + '/docs/fractal')

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// https://fractal.build/guide/web/default-theme.html#configuration
// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "navy",
    panels: ["html", /*"view",*/ /* "context", */ "resources", "info", "notes"],
    "styles": ['default', 'fractal_custom-style.css']
});

fractal.web.theme(myCustomisedTheme) // tell Fractal to use the configured theme by default