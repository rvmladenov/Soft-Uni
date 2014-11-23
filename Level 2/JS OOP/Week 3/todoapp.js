var TODOApp = (function(){

    // Container Class ------------------------------------
    var Container = (function(){
        var sections = [];

        var __self = function Container(containerTitle) {
            this._title = containerTitle;
        }

        __self.prototype.addSection = function(sectionObj) { sections.push(sectionObj); };
        __self.prototype.getSections = function(sectionObj) { return sections; };
        __self.prototype.addToDom = function(parent) {
            document.querySelector(parent);
        }

        return __self;
    }());

    // Section Class ------------------------------------
    var Section = (function(){
    var items = [];

    var __self = function Section(sectionTitle){
        this._title = sectionTitle;
    };

    __self.prototype.addItem = function(itemObj) { items.push(itemObj); };
    __self.prototype = Object.create(Container.prototype);
    __self.prototype.constructor = Section;

    return __self;
    }());

    // Item Class ------------------------------------
    var Item = (function(){
    var __self = function Item(status, content){
        this._status = status;
        this._content = content;
        Section.addItem(this);
    };

    __self.prototype = Object.create(Section.prototype);
    __self.prototype.constructor = Item;

    return __self;
    }());

    var TODOApp = function() {
            return {
            Container : Container,
            Section: Section,
            Item: Item
        };
    }

    return TODOApp;
}());