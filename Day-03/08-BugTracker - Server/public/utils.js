var utils = angular.module('utils', []);
        /*utils.factory("defaultTrimTextLengthLimit", function(){
            return 20;
        });*/
        utils.value("appDefaults", {
            defaultTrimTextLengthLimit : 20,
            getDefaultLimit : function(){
                return 30;
            }
        });
        utils.filter("trimText", function(appDefaults){
            return function(data, lengthLimit){
                //lengthLimit = lengthLimit || appDefaults.defaultTrimTextLengthLimit;
                lengthLimit = lengthLimit || appDefaults.getDefaultLimit();
                return data.length < lengthLimit ? data : data.substr(0,lengthLimit) + "...";
            }
        });

        utils.filter("toMoment", function(){
            return function(data){
                return moment(data).fromNow();
            }
        });
