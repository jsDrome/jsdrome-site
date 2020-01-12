# HTML Webpack Plugin

&nbsp;

## Summary

So we have come a long way. We setup the codebase, introduced React, we built the code and produced the output files. Now, its time to see it in the browser. Now, in order to run the javascript files we generated, we need a html file which will call these generated output files. This is where HTMLWebpackPlugin comes into play. This plugin generates a html file with a reference to the bundled js file and its emitted along with the bundled js files.

## Install

`npm i --save-dev html-webpack-plugin`

## Configure

Add the following lines of code to the plugins section in both `webpack.dev.js` and `webpack.prod.js`. Note that we are duplicating the code in two different files. We will resolve this code duplication issue by creating a common file for both dev and prod builds in the next chapter.

## Code for webpack.common.js

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    ...
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My website',
      }),
    ],


## Execute

`npx webpack --env=dev --config=webpack/webpack.config.js`

If you see the webpack output, it will show an index.html file being emitted along with the bundled js file. And if you check the dist folder, it will have a reference to the app.js


![webpack dev output](https://firebasestorage.googleapis.com/v0/b/jsdrome.appspot.com/o/webpack-dev-output.png?alt=media&token=b3f3324c-f38c-4a79-ad12-9fedf333c6e1 "webpack dev output")


## Adding root node

If you notice the entry point file, we ask react to render the app in a div with id 'root'.  We will need it in the html file. For this, we can specify a template to HTMLWebpackPlugin. Modify the above code to the below:

    ...
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My website',
        template: path.resolve(__dirname, '_template/client.html'),
      }),
    ],

Create a file at this path -`_templates/client.html` with the following code.

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title><%= htmlWebpackPlugin.options.title %></title>
      </head>
      <body>
        <div id='root'></div>
      </body>
    </html>

Commit and push.
