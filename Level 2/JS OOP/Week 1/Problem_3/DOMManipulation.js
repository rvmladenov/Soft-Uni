var domModule = (function() {
    var appendChild = function(elementToAppend, container) {
        //Adding а DOM element to a parent element specified by selector
        var containerNode = document.querySelector(container);
        containerNode.appendChild(elementToAppend);
    };

    var removeChild = function(container, elementToRemove) {
        // Removing a child element from a parent specified by selector
        var containerNode = document.querySelector(container);
        containerNode.removeChild(containerNode.querySelector(elementToRemove));
    }

    var addHandler = function(elementsToAttach, event, whatToExecuteOnEvent) {
        // Attaching an event to a given selector by given event type and event handler
        var nodes = document.querySelectorAll(elementsToAttach)
        for(var i = 0; i< nodes.length; i++) {
            nodes[i].addEventListener(event, whatToExecuteOnEvent, false);
        }
    }

    var retrieveElements = function(elementsSelector) {
        // Retrieving elements by a given CSS selector and return the result as Array
        return Array.prototype.slice.call(document.querySelectorAll(elementsSelector), 0);
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
}());

var containerElement = "ul.birds-list";

var liElement = document.createElement("li");
// Appends a list item to ul.birds-list
domModule.appendChild(liElement, containerElement);

// Removes the first li child from the bird list
domModule.removeChild(containerElement,"li:first-child");

// Adds a click event to all bird list items
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });

// Retrives all elements of class "bird"
var elements = domModule.retrieveElements(".bird");
console.log(elements);