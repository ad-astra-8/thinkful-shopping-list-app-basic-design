/* How to write JS apps

Getting the file structure in place
- create an app.js file
- link it to index.html
- link jquery from CDN:
--> search online for "jQuery CDN"
--> get URL for the latest non-Beta uncompressed version of the jQuery
--> paste that URL in your index html it above your own app.js)

Milestone one: create the basic structure in your app.js
- first define the main parts of the JS code (top part is for functions definitions; bottom part is for functions usage (and document ready))
- inside of each of them describe in plain english what are the functionalities that this app will be acheving (add items; delete items; check functions)
- create the functions with names but no content ("function addItem() {}")
- inside document ready specify in plain english the connection between the buttons in html and their corresponding functions
- create the js code to suport the connections above
- check if the connection between the html buttons and the related functions are working (place "alert("I've just activated the addItem() function") inside each one of the corresponding buttons);


Milestone two: complete the functions definitions and test them line by line in your app.js
- inside each functions write in plain english what are the steps to follow in order to achive the functionality
- complete one step at a time and test it
*/



/* Basic debugging strategies

debugging level 1 => check if JS syntax is correct (check console in Web Dev)
    --> a real life example: make sure that your TV remote has batteries
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
    --> a real life example: make sure that your remote connects to your own TV
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)
    --> a real life example: make sure that when you click on the volume up button on your remote, you don't get to change channels or similar
*/



/********************************************
Step 1 define functions and objects
************************************/

// function to add items in the shopping list
function addItem() {
    //check if the targeting is working
    //    alert("I've just activated the addItem() function");

    //get the value of the input box
    var itemValue = $('#shopping-list-entry').val();

    //check if the logic makes sense -> make sure that you get the value you are adding in the html
    //alert(itemValue);


    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }
    //if the input is valid ....
    else {
        //dynamicaly create one row inside the shopping list

        var row = '';
        row += '<li>';
        row += '<span class="shopping-item">' + itemValue + '</span>';
        row += '<div class="shopping-item-controls">';
        row += '<button class="shopping-item-toggle">';
        row += '<span class="button-label">check</span>';
        row += '</button>';
        row += '<button class="shopping-item-delete">';
        row += '<span class="button-label">delete</span>';
        row += '</button>';
        row += '</div>';
        row += '</li>';

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting the value

        $('#shopping-list-entry').val('');
    }


}
// function to check items in the shopping list
function checkItem() {
    //check if the targeting is working
    //    alert("I've just activated the checkItem() function");

    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of the parent of it (in our case the LI above the it) and add / remove the "shopping-item__checked" class to it
    $(this).parent().parent().toggleClass('shopping-item__checked');

}
// function to delete items in the shopping list
function deleteItem() {
    //check if the targeting is working
    //alert("I've just activated the deleteItem() function");

    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the closest LI and remove it along with everything inside it

    $(this).closest('li').remove();
}



/********************************************
Step 2 use functions and objects
************************************/

/*the following function call should be INSIDE the $(document).ready(function() because the targeted containers were created WHEN the page was loaded*/

$(document).ready(function () {

    /*on click on the "#js-shopping-list-form button" button activate function called addItem()*/

    $('#js-shopping-list-form').submit(function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();

        addItem();
    });

});

/*the following 2 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers were created AFTER the page was loaded*/

/*on click on the ".shopping-item-toggle" button activate function called checkItem()*/

$(document).on('click', '.shopping-item-toggle', checkItem);

/*on click on the ".shopping-item-delete" button activate function called deleteItem()*/

$(document).on('click', '.shopping-item-delete', deleteItem);
