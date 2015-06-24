function add(x,y){
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this, n);
        if (typeof n === "function") return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n,10);
    }
    var result = 0;
    for(var i=0; i<arguments.length; i++)
        result += parseArg(arguments[i]);
    return result;
}

/*
Function invocation patterns

1. As a method of obj
      this -> obj

2. As a function
      this -> global scope (window)


*/
