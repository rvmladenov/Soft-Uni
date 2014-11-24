(function($){
    $.prototype.messageBox = function(options) {
        'use strict';

        var settings = $.extend({
            delayTime: 3000,
            visibleClass: 'visible',
            onErrorClass: 'error',
            onSuccessClass: 'success'
        }, options );

        var self = $(this),
            timeOut,
            TYPE = {
                ERROR: settings.onErrorClass,
                SUCCESS: settings.onSuccessClass
        };

        var showBox = function(msg, type) {
            if(timeOut) {
                clearTimeout(timeOut);
            }

            self.removeClass(TYPE.SUCCESS + ' ' + TYPE.ERROR).addClass(settings.visibleClass + ' ' + type).html(msg);
            timeOut = setTimeout(function(){
                self.removeClass(settings.visibleClass + ' ' + type);
            }, settings.delayTime);
        }

        var showSuccessMsg = function(msg) {
            showBox(msg, TYPE.SUCCESS);
        }

        var showErrorMsg = function(msg) {
            showBox(msg, TYPE.ERROR);
        }

        return {
            success: showSuccessMsg,
            error: showErrorMsg
        };

    };
}(jQuery));