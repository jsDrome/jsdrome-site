# Create an entry point

&nbsp;

## Summary
In the previous chapters, we saw how to setup your development environment, how to initiate the project, configure your editor for work etc. We also pushed the code into our repo. In this chapter, we will write our first line of the actual source code.

Create a folder called `src`. Create a folder inside `src` called `client` and inside that folder, create a file called `index.js`. This file is called as the entry point. We need an entry point because a few simple reasons. But first, you need to understand how we are going to build this app.

The end product of this application will be just one `.js` file, say, `app.bundle.js`. We will reference this file in a html document called `index.html`. When a user visits the website, he will see the html file which in turn calls `app.bundle.js.` And its in this js file that all the logic of the app lies. We will have a proper source code with directories, helper files etc. and we will use a bundler like Webpack to bundle the entire source code to one single file.

## Install

`npm i --save react react-dom`

## Configure

Create a file in this path: `src/client/index.js` with the following code:

## Code

    import React, { Component } from 'react';
    import { render } from 'react-dom';

    class App extends Component {
      render() {
        return <h1>Hello, World</h1>;
      }
    }

    render(<App />, document.getElementById('root'));

Commit and push.

Though we have created the entry point, we cannot see it in action yet because we need to implement the compilation and bundling processes.
