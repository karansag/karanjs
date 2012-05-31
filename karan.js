//adds a 'create' method to all objects
if (typeof Object.create !== 'function') {
     Object.create = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
}

//adds a 'method' method to all methods that let
//them add methods to their linked 'prototype'
//object e.g., the property 'myfunc.prototype'
Function.prototype.method = function (name, func) {
    if(!this.prototype[name]){
        this.prototype[name] = func;
        return this;
    }
};

//adds method .integer() to all numbers that returns integer part
Number.method('integer', function (  ) {
        return Math[this < 0 ? 'ceil' : 'floor'](this);
});

//trims the whitespace off the end of a string
String.method('trim', function (  ) {
        return this.replace(/^\s+|\s+$/g, '');
});


Function.method('curry', function (  ) {
        var slice = Array.prototype.slice,
            args = slice.apply(arguments),
            that = this;
    return function (  ) {
                return that.apply(null, args.concat(slice.apply(arguments)));
                    };
});
