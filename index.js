/* eslint-disable strict */

// Add items to the shopping list
function add(){
  // Listens for a submission
  $('#js-shopping-list-form').submit(event => {
    // Remove default properties of the submit event to refresh the page
    // When a submission takes place
    event.preventDefault();

    // Create an item
    let iList = document.createElement('li');
    let iName = document.createElement('span');
    let iDiv = document.createElement('div');
    let cLabel = document.createElement('span');
    let cButton = document.createElement('button');
    let dLabel = document.createElement('span');
    let dButton = document.createElement('button');

    // Set values for attributes and content
    iName.innerHTML = $('#shopping-list-entry').val();
    iName.className = 'shopping-item';
    iDiv.className = 'shopping-item-controls';
    cLabel.innerHTML = 'check';
    cLabel.className = 'button-label';
    cButton.className = 'shopping-item-toggle';
    dLabel.innerHTML = 'delete';
    dLabel.className = 'button-label';
    dButton.className = 'shopping-item-delete';

    // Orders of semantic HTML
    cButton.append(cLabel);
    dButton.append(dLabel);
    iDiv.append(cButton);
    iDiv.append(dButton);
    iList.append(iName);
    iList.append(iDiv);
    
    // Add item to the shopping list
    $('.shopping-list').append(iList);
  });
}




// Checks off the item
function check() {
  // Event delegation - listening in the parent ul for clicks just in case new items are added to the list
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event)  {
    // Check and uncheck the item
    // Cannot use fat arrow when using this keyword - lexical scoping in fat arrow functions
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
  
}


// Removes item
function remove() {
  // Event delegation
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).closest('li').remove();
  });
}

function listens (){
  $(add);
  $(check);
  $(remove);
}

$(listens);





