/********************************************
Step 1 define functions and objects
************************************/

var state = {
    items: [
        {
            name: "apples",
            checked: false
        },
        {
            name: "oranges",
            checked: false
        },
        {
            name: "milk",
            checked: false
        },
        {
            name: "bread",
            checked: true
        }
    ]
}

// function to add items in the shopping list
function addItem(state, itemObj) {
    state.items.push(itemObj);
}

// function to delete items in the shopping list
function removeItem(state, itemName) {
    var itemsArray = state.items;
    var index;
    for (var i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].name === itemName) {
            index = i;
        }
    }
    //delete one element from the itemsArray
    itemsArray.splice(index, 1);
}

// function to check items in the shopping list
function checkItem(state, itemName) {
    var itemsArray = state.items;
    for (var i = 0; i < state.items.length; i++) {
        if (state.items[i].name === itemName) {
            state.items[i].checked = true;
        }
    }
}

// render list function
function renderList(state, JQueryElement) {
    var renderedHTML = state.items.map(function (item) {
        console.log(item);

        var row = '';
        row += '<li>';
        if (item.checked == false) {
            row += '<span class="shopping-item">' + item.name + '</span>';
        } else {
            row += '<span class="shopping-item shopping-item__checked">' + item.name + '</span>';
        }
        row += '<div class="shopping-item-controls">';
        row += '<button class="shopping-item-toggle">';
        row += '<span class="button-label">check</span>';
        row += '</button>';
        row += '<button class="shopping-item-delete">';
        row += '<span class="button-label">delete</span>';
        row += '</button>';
        row += '</div>';
        row += '</li>';

        return row;
    });
    JQueryElement.html(renderedHTML);
    //reset the input field to an empty value
    $('#shopping-list-entry').val('')
}

/********************************************
Step 2 use functions and objects
************************************/

$(document).ready(function () {

    checkItem(state, "milk")

    //when the page loads show existing items
    renderList(state, $('.shopping-list'));

    /*the following function call should be INSIDE the $(document).ready(function() because the targeted containers were created WHEN the page was loaded*/

    /*on click on the "#js-shopping-list-form button" button */
    $('#js-shopping-list-form').on('submit keypress', function (event) {
        if (event.type === 'keypress' && event.which === 13 || event.type === 'submit') {
            event.preventDefault();
            var itemName = $('#shopping-list-entry').val();
            var shoppingItem = {
                name: itemName,
                checked: false
            }
            if (itemName) {
                /*activate function called addItem()*/
                addItem(state, shoppingItem);
                /*and reder the list with the new item in it*/
                renderList(state, $('.shopping-list'));
            }
        }
    });
});
/*the following 2 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers were created AFTER the page was loaded*/

// function to check items in the shopping list
$('ul').on('click', 'button.shopping-item-toggle', function (event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click', 'button.shopping-item-delete', function (event) {
    var itemName = $(this).closest('li').find('.shopping-item').text();
    removeItem(state, itemName);
    renderList(state, $('.shopping-list'));
});
