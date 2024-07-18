# Phase 1 Project

## Overview 
For this phase 1 project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API. The learning goals are 

1. Integrate JavaScript and an external API
2. Debug issues in small- to medium-sized project



## Project Requirements

1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use.

 2. Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

 3. Use at least 3 distinct event listenersLinks to an external site. (3 events of different types) that enable interactivity. What this means is that, if you had 3 click events, that would only count as 1 distinct event and you would need to add at least 2 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

4. Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

5. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.



## System Requirements
1.Node 18+
2.JSON Server
3.A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
4.Operating System (Windows 10+, MacOS, Linux, etc.)
5.A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
6.RAM >= 4GB
7.Disk space >= 1GB

## Installation
To use this repo, follow these steps:

### Alternative One
1. Open the terminal/CLI on your computer.

2. If you don't have JSON server installed in the terminal, install it globally using the following command:

        npm install -g json-server  

3. Clone the repository by running the following command:

       git clone https://github.com/keelann95/Movie-Website-Project

4. Change directory to the repo folder:

        cd movie-website-project 

5. Open it in your Code Editor of choice. If you use VS Code, run the command:

        code .


### Alternative Two
1. On the top right corner of this page there is a button labelled Fork.

2. Click on that button to create a copy of the repository to your own account.

3. Follow the process described in Alternative One above.

4. Remember to replace your username when cloning.

        git clone  https://github.com/keelann95/Movie-Website-Project

## Running the application locally
1. Open the integrated terminal in your code editor and run json-server:

        json-server watch movie.json

2. Open the index.html file in Mozilla Firefox, Safari or any Chromium-based browser.

3. If using VS Code, you can use the Live Server extension to run the file on the browser for live reloading.


## Authors
    @keelann95