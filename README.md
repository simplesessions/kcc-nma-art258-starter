# kcc-nma-art258-starter

## Getting Started

1. Clone this through Git or Downoad it as a Zip file.
2. Run `npm install` to install all the dependencies to get things going.
3. Run `gulp` to start the project up.
4. Code away!

## How to Work on Code

While you have gulp running in a terminal window, edit any file in the `src` directory. When saved, resulting files will be rendered to the root of the project directory.

## Disecting the Project Starter Files

__`src`__ - where you'll be editing all your files for your projects. Within this, you'll have the following folders/files:

- `images` - the folder where all your image assets go.
- `scss` - your Sass files, which are transformed into CSS files.
- `index.html` - your main HTML starter file.

__`.gitignore`__ - a "dot file" (invisible file) that holds a list of files and folders that will not be added to your project as you check in your changes. Among the list is the `node_modules` folder, which you should never check in.

__`.stylelintrc.json`__ - configures the linter for CSS files. You can [read more about what linting is](https://en.wikipedia.org/wiki/Lint_%28software%29) on your own, but linting is basically a way to enforce propper formatting and basic error-checking within your code. In this case, we're using a program called [stylelint](http://stylelint.io), installed with when you run `npm install`, to output any problems with your stylesheets to the CLI. This file is a configuration file to help `stylelint` know which rules to pay attention to.

__`README.md`__ - what you see on GitHub that describes the project. It's written in a format called [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

__`gulpfile.js`__ - controls [gulp](http://gulpjs.com), the task runner that we're using to run all the tasks that "build" our projects.

