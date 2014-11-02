function funcWithNoParams() {

	if(arguments.length > 0) {
        console.log("Number of arguments: " + arguments.length);

        for (var i = 0; i < arguments.length;  i++) {
            console.log("Argument: " + arguments[i]);
            console.log("Argument Type: " + typeof arguments[i]);
        }
    }
}

funcWithNoParams('param1', 2, new Object({d: 'a'}), {a: 'd'});

// Global scope
console.log(this);

// Function scope
funcWithNoParams(this);

// Over the object
new funcWithNoParams(this);

// With params
funcWithNoParams.call(null, 123, "blq");
funcWithNoParams.apply(null, [123, "blq"]);

// Without params. Nothing should be happening
funcWithNoParams.call(null);
funcWithNoParams.apply(null, []);