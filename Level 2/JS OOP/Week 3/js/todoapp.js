var TODOApp = (function(){
    'use strict';

    var TODOApp = function() {
        return {
            Container : Container,
            Section: Section,
            Item: Item
        };
    }

    var Container = (function(){
        var sections = [];
        var appContainer = "body";

        var __self = function Container(containerTitle) {
            this._title = containerTitle;
            // Sets the container
            this._containerNode = document.querySelector(appContainer);
        }

        __self.prototype.addSection = function(sectionObj) { sections.push(sectionObj); };
        __self.prototype.getSections = function(sectionObj) { return sections; };

        __self.prototype.addToDom = function() {
            var parentNode = this._containerNode;
            var containerSection = document.createElement("section");
            var containerHeading = document.createElement("h1");
            var headingText = document.createTextNode(this._title);

            containerHeading.appendChild(headingText);
            containerSection.appendChild(containerHeading);

            // Button for adding sections
            var sectionTitle = document.createElement('input');
            sectionTitle.type = 'text';
            sectionTitle.placeholder = 'Title...';
            containerSection.appendChild(sectionTitle);

            var newSectionButton = document.createElement('button');
            newSectionButton.className = 'addSectionBtn';
            newSectionButton.innerHTML = 'New Section';
            newSectionButton.addEventListener('click', function () {
                var newSection = new Section(sectionTitle.value);
                newSection.addToDom(parentNode);
            }, false);
            containerSection.appendChild(newSectionButton);

            parentNode.appendChild(containerSection);
        }

        return __self;
    }());

    var Section = (function(){
        var __self = function Section(sectionTitle){
            Container.call(this, sectionTitle);
        };

        var items = [];

        __self.prototype.getItems = function() { return items; };
        __self.prototype.addItem = function(itemObj) { items.push(itemObj); };
        __self.prototype = Object.create(Container.prototype);
        __self.prototype.constructor = Section;

        __self.prototype.addToDom = function(parentNode) {
            var sectionHeader = document.createElement('h3');
            sectionHeader.innerHTML = this._title;

            var sectionList = document.createElement('ul');
            var sectionListContainer = document.createElement('div');
            sectionListContainer.className = 'sectionList';
            sectionListContainer.appendChild(sectionHeader);
            sectionListContainer.appendChild(sectionList);

            var inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = 'Add item...';

            var addItemButton = document.createElement('button');
            addItemButton.className = 'addItemBtn';
            addItemButton.innerHTML = '+';
            addItemButton.addEventListener('click', function () {
                var newItem = new Item('B', inputField.value);
                inputField.value = '';
                newItem.addToDom(sectionList);
            }, false);

            var sectionContainer = document.createElement('article');
            sectionContainer.appendChild(sectionListContainer);
            sectionContainer.appendChild(inputField);
            sectionContainer.appendChild(addItemButton);

            parentNode.appendChild(sectionContainer);
        }

        return __self;
    }());

    var Item = (function(){
        var __self = function Item(status, content){
            Section.call(this);
            this._status = status;
            this._content = content;
        };

        __self.prototype = Object.create(Section.prototype);
        __self.prototype.constructor = Item;

        __self.prototype.addToDom = function(parentNode) {
            var inputField = document.createElement('input');
            inputField.type = 'checkbox';
            inputField.id = this._content;

            var label = document.createElement('label');
            label.innerHTML = this._content;
            label.htmlFor = inputField.id;

            var itemContainer = document.createElement('li');
            itemContainer.className = 'notActive';

            itemContainer.appendChild(inputField);
            itemContainer.appendChild(label);
            inputField.addEventListener('change', function () {
                if (inputField.checked) {
                    itemContainer.className = 'active';
                } else {
                    itemContainer.className = 'notActive';
                }
            }, false);

            parentNode.appendChild(itemContainer);
        }

        return __self;
    }());

    return TODOApp;
}());