function processRestaurantManagerCommands(commands) {
    'use strict';

    var RestaurantEngine = (function () {
        var _restaurants, _recipes;

        function initialize() {
            _restaurants = [];
            _recipes = [];
        }

        var Restaurant = (function () {
            var recipes = [];

            var __self = function Restaurant(name, location) {
                this._name = name;
                this._location = location;
            }

            __self.prototype.setName = function (name) {
                if (!name) {
                    throw new Error('Please specify a name');
                }
                this._name = name;
            }

            __self.prototype.getName = function () {
                return this._name;
            }

            __self.prototype.setLocation = function (value) {
                if (!value) {
                    throw new Error('Please specify a Location');
                }
                this._location = value;
            }

            __self.prototype.getLocation = function () {
                return this._locaction;
            }

            __self.prototype.addRecipe = function(recipe) {
                if(!recipe) {
                    throw new Error('Please specify a recipe');
                }

                recipes.push(recipe);
            };

            __self.prototype.removeRecipe = function(recipe) {
                if(!recipe) {
                    throw new Error('Please specify a recipe');
                }

                if(recipes.length == 0) {
                    throw new Error('No recipies found for removal');
                }

                var indx = recipes.indexOf(recipe);
                if(indx == -1) {
                    throw new Error('Did not found recipe');
                }
                recipes = recipes.splice(indx, 1);
            };

            __self.prototype.printRestaurantMenu = function() {
                //  TODO: Ne mi ostana vreme, za da zavyr6a tazi funkciq
            }

            return __self;
        }());

        var Recipe = (function () {

            var __self = function Recipe(name, price, calories, quantityPerServing, unit, time) {

            }

            __self.prototype.setName = function (value) {
                if (!value) {
                    throw new Error('Please specify a name');
                }
                this._name = value;
            }

            __self.prototype.getName = function () {
                return this._name;
            }

            __self.prototype.setPrice = function (value) {
                if (!value) {
                    throw new Error('Please specify a price');
                }
                this._price = value;
            }

            __self.prototype.getPrice = function () {
                return this._price;
            }

            __self.prototype.setPrice = function (value) {
                if (!value) {
                    throw new Error('Please specify a price');
                }
                this._price = value;
            }

            __self.prototype.getPrice = function () {
                return this._price;
            }

            __self.prototype.setCalories = function (value) {
                if (!value) {
                    throw new Error('Please specify a calories');
                }
                this._calories = value;
            }

            __self.prototype.getCalories = function () {
                return this._calories;
            }

            __self.prototype.setQuantityPerServing = function (value) {
                if (!value) {
                    throw new Error('Please specify a quantityPerServing');
                }
                this._quantityPerServing = value;
            }

            __self.prototype.getQuantityPerServing = function () {
                return this._quantityPerServing;
            }

            __self.prototype.setUnit = function (value) {
                if (!value) {
                    throw new Error('Please specify a quantityPerServing');
                }
                this._unit = value;
            }

            __self.prototype.getUnit = function () {
                return this._unit;
            }

            __self.prototype.setTime = function (value) {
                if (!value) {
                    throw new Error('Please specify a time');
                }
                this._time = value;
            }

            __self.prototype.getTime = function () {
                return this._time;
            }


            return __self;
        }());

        var Drink = (function () {
            
            var __self = function Drink(name, price, calories, quantity, timeToPrepare, isCarbonated) {
                Recipe.call(this, name, price, calories, quantity, unit, timeToPrepare);
                this._isCarbonated = isCarbonated;
            }

            __self.prototype = Obejct.create(Recipe.prototype);
            __self.prototype.constructor = __self;

            __self.prototype.setIsCarbonated = function (value) {
                this._isCarbonated = (!isCarbonated) ? false : true;
            }

            __self.prototype.getIsCarbonated = function () {
                return this._isCarbonated;
            }

            return __self;
        }());

        var Meal = (function () {
            var __self = function Meal(name, price, calories, quantity, timeToPrepare, isVegan, type) {
                Recipe.call(this, name, price, calories, quantity, unit, timeToPrepare);

                this._isVegan = (!isVegan) ? false : true;
                this._type = type;
            }

            __self.prototype = Obejct.create(Recipe.prototype);
            __self.prototype.constructor = __self;

            __self.prototype.setIsVegan = function (value) {
                this._isVegan = (!_isVegan) ? false : true;
            }

            __self.prototype.getIsVegan = function () {
                return this._isVegan;
            }

            __self.prototype.toggleIsVegan = function () {
                this._isVegan = !this._isVegan;
            }

            return __self;
        }());

        var Dessert = function () {
            // TODO: Not implemented
        }

        var MainCourse = function () {
            // TODO: Not implemented
        }

        TYPE = {
            PASTA: 'Pasta',
            MEAT: 'Meat',
            SOUP: 'Soup'
        };
        var Salad = (function () {
            var __self = function Salad(name, price, calories, quantity, timeToPrepare, containsPasta) {
                Meal.call(this, name, price, calories, quantity, timeToPrepare, true, type);
            }

            __self.prototype = Obejct.create(Recipe.prototype);
            __self.prototype.constructor = __self;

            return __self;
        }());

        var Command = (function () {

            function Command(commandLine) {
                this._params = new Array();
                this.translateCommand(commandLine);
            }

            Command.prototype.translateCommand = function (commandLine) {
                var self, paramsBeginning, name, parametersKeysAndValues;
                self = this;
                paramsBeginning = commandLine.indexOf("(");

                this._name = commandLine.substring(0, paramsBeginning);
                name = commandLine.substring(0, paramsBeginning);
                parametersKeysAndValues = commandLine
                    .substring(paramsBeginning + 1, commandLine.length - 1)
                    .split(";")
                    .filter(function (e) { return true });

                parametersKeysAndValues.forEach(function (p) {
                    var split = p
                        .split("=")
                        .filter(function (e) { return true; });
                    self._params[split[0]] = split[1];
                });
            }

            return Command;
        }());

        function createRestaurant(name, location) {
            _restaurants[name] = new Restaurant(name, location);
            return "Restaurant " + name + " created\n";
        }

        function createDrink(name, price, calories, quantity, timeToPrepare, isCarbonated) {
            _recipes[name] = new Drink(name, price, calories, quantity, timeToPrepare, isCarbonated);
            return "Recipe " + name + " created\n";
        }

        function createSalad(name, price, calories, quantity, timeToPrepare, containsPasta) {
            _recipes[name] = new Salad(name, price, calories, quantity, timeToPrepare, containsPasta);
            return "Recipe " + name + " created\n";
        }

        function createMainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type) {
            _recipes[name] = new MainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type);
            return "Recipe " + name + " created\n";
        }

        function createDessert(name, price, calories, quantity, timeToPrepare, isVegan) {
            _recipes[name] = new Dessert(name, price, calories, quantity, timeToPrepare, isVegan);
            return "Recipe " + name + " created\n";
        }

        function toggleSugar(name) {
            var recipe;

            if (!_recipes.hasOwnProperty(name)) {
                throw new Error("The recipe " + name + " does not exist");
            }
            recipe = _recipes[name];

            if (recipe instanceof Dessert) {
                recipe.toggleSugar();
                return "Command ToggleSugar executed successfully. New value: " + recipe._withSugar.toString().toLowerCase() + "\n";
            } else {
                return "The command ToggleSugar is not applicable to recipe " + name + "\n";
            }
        }

        function toggleVegan(name) {
            var recipe;

            if (!_recipes.hasOwnProperty(name)) {
                throw new Error("The recipe " + name + " does not exist");
            }

            recipe = _recipes[name];
            if (recipe instanceof Meal) {
                recipe.toggleVegan();
                return "Command ToggleVegan executed successfully. New value: " +
                    recipe._isVegan.toString().toLowerCase() + "\n";
            } else {
                return "The command ToggleVegan is not applicable to recipe " + name + "\n";
            }
        }

        function printRestaurantMenu(name) {
            var restaurant;

            if (!_restaurants.hasOwnProperty(name)) {
                throw new Error("The restaurant " + name + " does not exist");
            }

            restaurant = _restaurants[name];
            return restaurant.printRestaurantMenu();
        }

        function addRecipeToRestaurant(restaurantName, recipeName) {
            var restaurant, recipe;

            if (!_restaurants.hasOwnProperty(restaurantName)) {
                throw new Error("The restaurant " + restaurantName + " does not exist");
            }
            if (!_recipes.hasOwnProperty(recipeName)) {
                throw new Error("The recipe " + recipeName + " does not exist");
            }

            restaurant = _restaurants[restaurantName];
            recipe = _recipes[recipeName];
            restaurant.addRecipe(recipe);
            return "Recipe " + recipeName + " successfully added to restaurant " + restaurantName + "\n";
        }

        function removeRecipeFromRestaurant(restaurantName, recipeName) {
            var restaurant, recipe;

            if (!_recipes.hasOwnProperty(recipeName)) {
                throw new Error("The recipe " + recipeName + " does not exist");
            }
            if (!_restaurants.hasOwnProperty(restaurantName)) {
                throw new Error("The restaurant " + restaurantName + " does not exist");
            }

            restaurant = _restaurants[restaurantName];
            recipe = _recipes[recipeName];
            restaurant.removeRecipe(recipe);
            return "Recipe " + recipeName + " successfully removed from restaurant " + restaurantName + "\n";
        }

        function executeCommand(commandLine) {
            var cmd, params, result;
            cmd = new Command(commandLine);
            params = cmd._params;

            switch (cmd._name) {
                case 'CreateRestaurant':
                    result = createRestaurant(params["name"], params["location"]);
                    break;
                case 'CreateDrink':
                    result = createDrink(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["carbonated"]));
                    break;
                case 'CreateSalad':
                    result = createSalad(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["pasta"]));
                    break;
                case "CreateMainCourse":
                    result = createMainCourse(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]), params["type"]);
                    break;
                case "CreateDessert":
                    result = createDessert(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]));
                    break;
                case "ToggleSugar":
                    result = toggleSugar(params["name"]);
                    break;
                case "ToggleVegan":
                    result = toggleVegan(params["name"]);
                    break;
                case "AddRecipeToRestaurant":
                    result = addRecipeToRestaurant(params["restaurant"], params["recipe"]);
                    break;
                case "RemoveRecipeFromRestaurant":
                    result = removeRecipeFromRestaurant(params["restaurant"], params["recipe"]);
                    break;
                case "PrintRestaurantMenu":
                    result = printRestaurantMenu(params["name"]);
                    break;
                default:
                    throw new Error('Invalid command name: ' + cmdName);
            }

            return result;
        }

        function parseBoolean(value) {
            switch (value) {
                case "yes":
                    return true;
                case "no":
                    return false;
                default:
                    throw new Error("Invalid boolean value: " + value);
            }
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }());


    // Process the input commands and return the results
    var results = '';
    RestaurantEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != "") {
            try {
                var cmdResult = RestaurantEngine.executeCommand(cmd);
                results += cmdResult;
            } catch (err) {
                results += err.message + "\n";
            }
        }
    });

    return results.trim();
}

    // ------------------------------------------------------------
    // Read the input from the console as array and process it
    // Remove all below code before submitting to the judge system!
    // ------------------------------------------------------------

(function () {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function (line) {
            arr.push(line);
        }).on('close', function () {
            console.log(processRestaurantManagerCommands(arr));
            process.stdin;
        });
    }
})();
