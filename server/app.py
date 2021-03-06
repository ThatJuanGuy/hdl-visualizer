#imports from visualize so this works because they aren't brought in for some reason
from nand2tetris_hdl_parser import parse_hdl
import re
import io
from server.topsort import Chip_Graph, Chip_Graph_BFS
from schemdraw import logic
from schemdraw import elements
from schemdraw import Drawing, ImageFormat
from schemdraw.parsing import logicparse
from schemdraw.elements import ElementDrawing
#new imports
from server.visualize import drawHDL #functions
from flask import Flask, Response
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/draw/<fileContent>.svg', methods=['GET'])
def generateDrawing(fileContent):
    figBytes = drawHDL(fileContent)
    return Response(figBytes, mimetype='image/svg+xml')

if __name__ == "__main__":
    app.run(debug=False)