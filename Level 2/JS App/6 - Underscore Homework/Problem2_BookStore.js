(function  () {
	if (typeof require !== 'undefined') {
		_ = require('./js/underscore-min.js');
	}

	var books = [{"book":"The Grapes of Wrath","author":"John Steinbeck","price":"34,24","language":"French"},
				{"book":"The Great Gatsby","author":"F. Scott Fitzgerald","price":"39,26","language":"English"},
				{"book":"Nineteen Eighty-Four","author":"George Orwell","price":"15,39","language":"English"},
				{"book":"Ulysses","author":"James Joyce","price":"23,26","language":"German"},
				{"book":"Lolita","author":"Vladimir Nabokov","price":"14,19","language":"German"},
				{"book":"Catch-22","author":"Joseph Heller","price":"47,89","language":"German"},
				{"book":"The Catcher in the Rye","author":"J. D. Salinger","price":"25,16","language":"English"},
				{"book":"Beloved","author":"Toni Morrison","price":"48,61","language":"French"},
				{"book":"Of Mice and Men","author":"John Steinbeck","price":"29,81","language":"Bulgarian"},
				{"book":"Animal Farm","author":"George Orwell","price":"38,42","language":"English"},
				{"book":"Finnegans Wake","author":"James Joyce","price":"29,59","language":"English"},
				{"book":"The Grapes of Wrath","author":"John Steinbeck","price":"42,94","language":"English"}]

				
	var tast1 = _.chain(books)
		.groupBy('language')
		.sortBy(function  (book) {
			return book.author && book.price;
		})
		.value();

	console.log(tast1);

	var task2 =_.chain(books)
					.groupBy('author')
					.map(function(value, author, grouped){
		var hisBook = value;
		var sum = 0;
		_.each(hisBook, function(value, hisBook){
				sum += parseFloat(value.price.replace(/,/g,'.'));			
		});
		return [author, (sum/hisBook.length).toFixed(2)]
	}).value();

	console.log(task2);
	
	var tast3 = _.chain(books)
		.filter(function(book) {
			return (book.language === 'English' || book.language === 'German') && parseFloat(book.price)<30.00;
		})
		.groupBy('author').value();

	console.log(tast3);
}())