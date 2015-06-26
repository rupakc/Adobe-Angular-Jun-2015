/* Sync */
function add(x,y){
    console.log("[SP] - processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] - returning result");
    return result;
}

function addClient(x,y){
    console.log("[SC] - triggering Add");
    var result = add(x,y);
    console.log("[SC] - result = ", result);
}

/* Async */

function addAsync(x,y, onResult){
    console.log("[SP] - processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] - returning result");
        if (typeof onResult === "function")
            onResult(result);
    },3000);
}

function addAsyncClient(x,y){
    console.log("[SC] - triggering Add");
    var result = addAsync(x,y, function(result){
          console.log("[SC] - result = ", result);
    });
}
