# Mouse-Tracking Eyes

## Description
A JavaScript animation that displays a pair of moving eyes by tracking mouse cursor positions and movements using DOM manipulation to dynamically style elements within the CSS grid. More specifically, the running code employs event listeners to access DOM elements using CSS-style selectors or relationship properties (i.e., class name `ball`), and then implements programatic functionality by manipulating the element's CSS styling to send `mousemove` events to the `div` element when the mouse cursor moves over the respective element.

## Installation
_**NOTE:** In order to run the "Mouse-Tracking Eyes" animation, you must download/copy the 3 required files (`eyes.js`, `index.html`, and `styles.css`) & store all the files in the same local directory on your machine._
There are two ways to copy the repository files to your local system:
* Download the repository as a zip file to your local machine:  
  * Navigate to the GitHub repository's main page and click the green _'Code'_ button on the right side. 
  * In the menu pop-up, click _'Download ZIP'_. 
* Fork & Clone the GitHub repository to create a local copy:
  * Navigate to the GitHub repository's main page and click the green _'Code'_ button on the right side. In the menu pop-up under **'Clone'**, select your clone type (`HTTPS`, `SSH`, or `GitHub CLI`), and then click the button to copy the URL.
  * Open your system's command-line system (**Terminal** for Mac users). Use the `cd` command to navigate to the system location where you want the cloned repository to exist. In the command line, type `git clone [url]` with the copied URL to finish cloning the repository to your local system.

Once the zip file or cloned repository is copied onto your local system, locate and open the local directory. 

Open your web browser (Google Chrome is recommended), and drag and drop the `index.html` file into your browser window to run the live animation (or, right-click the _'index.html'_ file and select your browser from the _'Open With'_ command).

## How to Use
Once you've loaded the `index.html` file into the browser window, move the mouse cursor around the browser screen and both eyes will track the cursor and move in the same direction.

## Roadmap
To further develop this project in the future, I would like to focus on improving the CSS styling properties to enhance the graphics by making the eyes appear more realistic by adding eye color, eyelashes, and eye shape. In addition, I would like to further develop the DOM element's animation capabilities as well to liven the eyes to depict a more realistic image rather than a cartoon with more realistic physical textures seen on a real eye and emotional eye gestures (i.e., like blinking, squinting, wide-eyed, sleepy, etc.). 

## Support
For additional support, contact via email (gabysalgar1314@gmail.com) with specified details regarding questions, issues or concerns.

## License Information
MIT License

Copyright (c) 2023 Gaby Salgar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
