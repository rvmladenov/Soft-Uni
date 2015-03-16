var Book = (function () {
    'use strict';

    var PARSE = {
        APP_ID: "kEEDSLtPhlQpKJF3hbtKrp45KOIn5RoIUx0dQnu3",
        REST_API: "UDq4XauSMrsJ4CcAk543lmyhmI9PsIVl8Bc12auI",
        API_URL: 'https://api.parse.com/1/classes/Book'
    };
    var success,
        error;

    var _self = function Book(successCallback, errCallback) {
        success = successCallback;
        error = errCallback;
    }

    _self.prototype.loadBooks = function () {
        $.ajax({
            method: "GET",
            headers: {
                "X-Parse-Application-Id": PARSE.APP_ID,
                "X-Parse-REST-API-Key": PARSE.REST_API
            },
            url: "https://api.parse.com/1/classes/Book?order=name",
            success: success,
            error: error
        });
    }

    _self.prototype.addBook = function () {
        var title = $('#title').val();
        var author = $('#author').val();
        var isbn = $('#isbn').val();

        var data = {
            'title': title,
            'author': author,
            'isbn': isbn
        };
        if (data.title == '' || data.author == '') {
            error(new Error('Author and Title are required'));
            return;
        }

        $.ajax({
            method: "POST",
            headers: {
                "X-Parse-Application-Id": PARSE.APP_ID,
                "X-Parse-REST-API-Key": PARSE.REST_API
            },
            contentType: 'application/json',
            data: JSON.stringify(data),
            url: "https://api.parse.com/1/classes/Book",
            success: success,
            error: error
        });
    }

    return _self;
})();