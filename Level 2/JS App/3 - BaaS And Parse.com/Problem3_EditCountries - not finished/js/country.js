(function($){
    $.fn.country = function(options) {
        'use strict';

        var settings = $.extend({
            appID: 'cPjajdzjVI5DpKDtfktFPYnopORX2GbucJVNBgqp',
            jsID: 'bSV60WRhg3BUSDdAJaHjdvUg6RKz9IEnWwEZymGf'
        }, options );

        var self = $(this);

        Parse.initialize(settings.appID, settings.jsID);
        var Country = Parse.Object.extend("Country");

        var getAllCountries = function(callback) {
            var query = new Parse.Query(Country);

            query.find({
                success: function(results) {
                    callback(results);
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }

        var addCountry = function(name) {
            if(!name) {
                throw new Error('Missing or incorrect Name');
            }

            var newCountryObj = new Country();
            newCountryObj.set("name", name);
            var newCountryID = null;

            newCountryObj.save(null, {
                success: function(newCountryObj) {
                    newCountryID = newCountryObj.id;
                },
                error: function(newCountryObj, error) {
                    alert('Failed to create new object, with error code: ' + error.message);
                }
            });

            // TODO: Or to returns the errors instead
            return newCountryID;
        };

        var delCountry = function(id) {
            if (!id) {
                throw new Error('Missing or incorrect ID');
            }

            var query = new Parse.Query(Country);
            query.equalTo("objectId", "id");
            query.find({
                success: function (results) {
                    results[0].destroy({
                        success: function (myObject) {
                            alert('OK');
                        },
                        error: function (myObject, error) {
                            alert("Can not delete Country with id " + id);
                        }
                    });
                },
                error: function (error) {
                    alert("Can not delete Country with id " + id);
                }
            });
        }

//        var editCountry = function(id, newName) {
//            if(!id) {
//                throw new Error('Incorrect or no ID');
//            }
//
//            if(!newName) {
//                throw new Error('Incorrect or no Name');
//            }
//        };



        return {
            addCountry : addCountry,
            getAllCountries: getAllCountries,
            delCountry: delCountry
        };
    };
}(jQuery));