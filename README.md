#Shopping List App

##How to write this JS app

###Milestone 1: getting the file structure in place
- [ ] create an app.js file
- [ ] link it to index.html
- [ ] link jQuery from CDN:
    - [ ] search online for "jQuery CDN"
    - [ ] get URL for the latest non-Beta uncompressed version of the jQuery
    - [ ] paste that URL in your index html it above your own app.js)

###Milestone 2: create the basic structure in your app.js
- [ ] define the main parts of the JS code (top part is for functions definitions; bottom part is for functions usage (and document ready))
- [ ] inside of each of them describe in plain english what are the functionalities that this app will be achieving (add items; delete items; check functions)
- [ ] create the functions with names but no content ("function addItem() {}")
- [ ] inside document ready specify in plain english the connection between the buttons in html and their corresponding functions
- [ ] create the js code to support the connections above
- [ ] check if the connection between the html buttons and the related functions are working (place "alert("I've just activated the addItem() function") inside each one of the corresponding buttons);


###Milestone 3: complete the functions definitions and test them line by line in your app.js
- [ ] inside each functions write in plain english what are the steps to follow in order to achieve the functionality
- [ ] complete one step at a time and test it





##Basic debugging strategies
(as a real life example: let image we want to debug why the remote is not connecting to your TV)

1 check if JS syntax is correct (check console in Web Dev Tools)
> a real life example: make sure that your TV remote has batteries

2 check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
> a real life example: make sure that your remote connects to your own TV

3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)
> a real life example: make sure that when you click on the volume up button on your remote, you don't get to change channels or similar

