(function($){
    $.fn.slider = function(options) {
        'use strict';

        var settings = $.extend({
            timerInterval : 5000
        }, options );

        var self = $(this),
            NAV = {
            NEXT: 'NEXT',
            PREV: 'PREV'
        };

        var timer,
            totalChildrenNum = self.children.length,
            currentChildNum = 0,
            childWidth = self.find(":first-child").css('width'),
            plainChildWidth = parseInt(childWidth.substr(0, childWidth.length - 2)),
            navCont = $("<section id=\"sliderNav\"></section>"),
            next = $("<div>Next</div>"),
            prev = $("<div>Prev</div>");

        navCont.append(next).append(prev);

        next.on('click', function(){
            animationFunc(NAV.NEXT);
            resetTimer();
        });

        prev.on('click', function(){
            animationFunc(NAV.PREV);
            resetTimer();
        });
        self.before(navCont);

        var resetTimer = function() {
            clearInterval(timer);
            startSlider();
        }

        var startSlider = function() {
            timer = setInterval(animationFunc.bind(this, NAV.NEXT), settings.timerInterval);
        }

        /**
         * Main animation function
         * @param {string} navType
         */
        var animationFunc = function(navType){
            if(navType == NAV.NEXT) {
                ++currentChildNum;
                if(currentChildNum > totalChildrenNum) {
                    currentChildNum = 0;
                }
            } else if(navType == NAV.PREV) {
                --currentChildNum;
                if(currentChildNum < 0) {
                    currentChildNum = totalChildrenNum;
                }
            }

            self.stop(true, true).animate({
                scrollLeft: currentChildNum * plainChildWidth
            } ,300);
        };

        startSlider();
    };
}(jQuery));