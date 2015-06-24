/*spinner
    - up()
    - down()
    */

function getSpinner(){
    var count = 0;
    var spinner = {
        up : function(){
            return ++count;
        },
        down : function(){
            return --count;
        }
    };
    return spinner;
}

//revealing module pattern
function getSpinner(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    }
}
