(function($){
    $.prototype.treeView = function(options) {
        'use strict';

        var parentClassName = 'root';
        var activeClassName = 'active';

        var self = $(this);

        var openRoot = function() {
            $(this).parent().toggleClass(activeClassName);
        };

        var generateTree = function(parentObj) {
            parentObj.children().each(function(indx){

                if($(this).find('ul').length > 0) {
                    $(this).addClass(parentClassName).find(' > span:first-child').on('click', openRoot);
                }

                generateTree($(this));
            });
        }

        generateTree(self);
    };
}(jQuery));