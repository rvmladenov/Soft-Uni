var domModule = (function() {
    var appendChild = function(elementToAppend, container) {
        //Adding а DOM element to a parent element specified by selector

    };

    var removeChild = function(container, elementToRemove) {
        // Removing a child element from a parent specified by selector
    }

    var addHandler = function(elementToAttach, event, whatToExecuteOnEvent) {
        // Attaching an event to a given selector by given event type and event handler
    }

    var retrieveElements = function(elementsSelector) {
        // Retrieving elements by a given CSS selector
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
}());

var manipulator1 = new domModule();
var containerElement = "ul.birds-list";

var liElement = document.createElement("li");
// Appends a list item to ul.birds-list
domModule.appendChild(liElement, containerElement);

// Removes the first li child from the bird list
domModule.removeChild(containerElement,"li:first-child");

// Adds a click event to all bird list items
domModule.addHandler("li.birds", 'click', function(){ alert("I'm a bird!") });

// Retrives all elements of class "bird"
var elements = domModule.retrieveElements(".bird");
