var specialConsole = function () {

    function writeLine() {
        if(arguments.length > 0) {

            var args = Array.prototype.slice.call(arguments, 0);
            consoleWrite(arguments[0].format(args.slice(1, args.length)));
        }
    }

    function consoleWrite(str) {
        console.log(str.toString());
    }

    // Adding new method to the String type
    String.prototype.format = function(paramsArr) {
        var strVal = this;
        for (var i = 0; i < paramsArr.length; i++) {
            strVal = strVal.replace('{' + i + '}', paramsArr[i].toString());
        }

        return strVal;
    };

    return {
        writeLine: writeLine,
        writeError: writeLine,
        writeWarning: writeLine
    };
}();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");