Deployed Website Link
https://hdl-visualizer.herokuapp.com/

## Front End Documentation:
The front end was built using React and JavaScript. This code is in the `/src/components` directory. The state of the application is held in app.js. Any state that has to do with file uploads and drawing generation should be placed here and passed as props to other components. You will notice the website is then split into the left.js and right.js component. Left contains everything to the left of the vertical line on the website. Right contains everything to the right of it. There are lots of comments in the code explaining what it does but it will require some knowledge of html, react, and JavaScript to understand.

## Back End Documentation:
### Drawing Algorithm:
**V(parts)**: This function returns a list of vertices comprising all the parts in the chip
   - the parts are represented by their ids (1..n) which are guaranteed unique
   - as well as their boolstrenated pin names
   - it also populates the id2part dictionary with the numerical ids as keys and the parts as   values
   *** this function is automatically called by E, there is no need to call it ***
   - it also populates the op2expr dictionary with the boolean expression corresponding to the part's output,
   surrounded by parentheses

**E()**:this function returns a list of tuples representing the edges found in the graph
   - it may not include every vertex in it, only vertices which have an outgoing edge

**indexOfOut(part)**: helper function to distinguish between external input and output pins
   *** an edge must be directed from one part's output to another part's input ***

**logician(outs, ins)**: '''this function recursively builds the logic tree/expression starting from each output of the chip and working it's way down to the inputs. we will pass it
directly to elements4output in order for the drawing to render'''

**elements4output**: '''this function recursively builds the logic tree/expression starting from each output of the chip and working it's way down to the inputs. we will pass it
directly to elements4output in order for the drawing to render'''

The drawing algorithm utilizes the Chip_Graph with Depth-First Search Traversal and Chip_Graph_BFS with Breadth-First Search Traversal of the chips. The classes build the graph of the chips based on the edges provided and will conduct a topological sort based on either DFS or BFS.

### Server
The deployed app is hosted on Heroku on a server using gunicorn. Any changes pushed to the main branch of the remote repository will immediately be deployed. Implications of this are that since windows (and maybe mac os) don’t support gunicorn, deploying this app is going to be extremely difficult if you develop on those platforms because it will require changing your code so that it is deploy compatible everytime you push (or else the site will crash) and changing it to make it locally compatible everytime you pull (so you can test your changes). 

In `server/app.py`, there are various flask routes. These contain the urls for the api. The functions contained in these routes specify what they do. Currently there are 2 routes, `/` and `draw/<fileContent>.svg`. `/` is the route that renders the main page of the website whenever you launch with gunicorn or flask. `draw/<fileContent>.svg` is the api for the drawing algorithm. It returns an image in svg format containing the output of the drawing algorithm. The <fileContent> part of the url is supposed to contain a string of all the hdl code of the file you want to draw the chip for. 
  
## Running the website locally:
Clone the repository. I also strongly recommend making a virtual environment for all the packages and stuff you are going to have to install.
Building/Compiling the Frontend:
Navigate to the root folder locally. Install npm. Run `npm install`. Then run `npm run build`. This will compile the frontend so that the latest changes are reflected. Run ‘npm run build’ anytime you want to check front end changes to the site. You will also have to do a hard refresh to clear your browser’s cache potentially.
Windows Specific: After setting up the server, you can also just run ‘npm start’. This will automatically load up the webpage and will not require you to run ‘npm run build’ every time you make changes to the front end to see them. However, beware. It is being run in a very different way then the deploy branch. You must also be running the flask server in a different terminal or none of the flask api will work. As this is being run with node instead of flask, the backend might also not connect. If this is the case check the proxy settings in `package.json` and adjust them so it works.  
### Running the Server:
#### Everyone
If this is your first time running, you will need to `pip install -r requirements.txt`. I strongly recommend you do this in a virtual environment. If you get issues due to the `nand2tetris_hdl_parser` package, it’s likely a wheel distribution issue. These are OS and Python version specific. There are multiple distributions for a variety of OS in the `server/nand2tetrisParser` directory. Find the one that corresponds to your machine and change the file name in requirements.txt to whatever that was. Then run `pip install -r requirements.txt` again. After installing all the required packages, change the filename in r`equirements.txt` back to how it was before so you don’t accidentally push and change it on the remote and break the deployed build.
#### Linux
Currently it is only possible to run this server locally in a way similar to the deployment server on Linux. If you are running this on Linux, navigate to the root folder locally and run ‘gunicorn server.app:app’. This should start the server. Maybe it will tell you how to open it in browser as well? Idk I made this on windows.
#### Windows
Make sure you are using the wheel distribution of `nand2tetris_hdl_parser` that corresponds to your machine specs and python OS. Navigate to the root directory and type `flask run`. This should start the server and tell you where to access it from your browser. If this is your first time you should get a `No module named ‘server’` error. Go to the file where this happens and remove `server.` from all the import statements. Run the `flask run` command again and repeat this process until it works. Copy paste the local host address into it and you should be good to go. Before pushing changes to the deployment branch, make sure to add the `server.` prefix back to avoid breaking it.
#### Mac OS
Make sure you use the correct wheel distribution. Aside from that, I have no idea. Maybe follow the same process as windows? I don’t have a mac and I didn’t buy one for this project to figure out how to do it. If you figure it out please update this documentation.
## Future Work (In order of higher to lower priority):
### Ease deployment/development:
Deploying this was very time consuming and not straightforward. (Mostly because I built it using windows which cannot run gunicorn so I kinda had to spam commits to the remote and debug whatever message it gave me until it worked). Turns out this website is launched differently depending on OS, python version, etc. Any instructions on running this (locally and on deployed) can and probably will vary. Apparently, Docker can make this process a lot less terrible. If someone wants to put this in a Docker container, please go for it. Ideally, this will make deployment easier and make the website more resistant to changes in Heroku’s server architecture. I’m also hoping this would also allow everyone to boot up the website locally the same way and thus ease development. I have no idea what this will involve modifying but I trust whoever wants to do this can figure it out.
### Add more standard nand2tetris chips.
Originally, the plan was for this website to be able to handle any nand2tetris standard chip. Turns out that while schemdraw was pretty good for logic gates, it wasn’t very good for these. Either using another library to reimplement the drawing algorithm with more nand2tetris chips or making some custom schemdraw elements to do this would be pretty cool and greatly increase the functionality of the site.
### Add ability to implement user defined chips.
This website was also originally meant to handle custom user defined chips. The way that it would do this is it would allow users to upload a main file (the chip they want to draw) and then additional sub files containing their custom defined chips. The ability to upload multiple additional files and their contents is already implemented in the React Front End but was commented out. If you check app.js, it should have comments directing you to the code that needs to be uncommented and an explanation of what other quick changes need to be made to re-enable this feature. The drawing algorithm does not support this at all however. You will need to make changes to it to allow it to handle the input from multiple files. 

