<b>CSV file Module/API</b>


This is an API that can consume the CVS file.  For domain foo.com , json response is returned by foo.com/quote.json .

Use the given csv dataset attached.  Each time the endpoint is hit it returns a random entry including the title and the author from the quotes dataset.  
--If the format is html then return a html webpage styled in table with the title and author.

--If the format is json then return a json response with the title and author.

--If the format is xml then return a xml response with the title and author.


<b>Requirements:</b>

  Hosting provider supporting Node.js like heroku.
  
<b>Usage:</b>

  1. Copy all files to the server.
  2. Add cvs file and change to new file name in main file "app.js". This file calls for function from the custom developed           module/API (csvtorandjxh). This can also be installed from npm site using. >>npm install csvtorandjxh
  3. This module consist of only one function which takes cvs file name as input.
  4. Display output pages using examples as shown below.
 
 
<b>Example Usage</b>

All examples can be played out using heroku since a node.js app has already been create using this git repo. Below given are the ways to execute.


Homepage

https://vayu-tech.herokuapp.com/

Get CSV as JSON

https://vayu-tech.herokuapp.com/quote.json

Get CSV as XML

https://vayu-tech.herokuapp.com/quote.xml

Get CSV as HTML

https://vayu-tech.herokuapp.com/quote.html


