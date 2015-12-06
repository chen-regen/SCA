// viewmodel in another.html
define(['ko'], function(ko) {
//    return function anotherViewModel(inputCaps) {
//        this.inputCaps = inputCaps;
//        
//        this.goBack = function () {
//        	$('#indexDiv').css('visibility','visible');
//            
//	        $('#anotherModelDiv').css('visibility','hidden');
//        };
//    };
    return function anotherViewModel(mainModel) {
        this.inputCaps = ko.pureComputed(function() {
            return mainModel.inputLetters().toUpperCase();
        }, this);
        
        this.goBack = function () {
        	$('#indexDiv').css('visibility','visible');
            
	        $('#anotherModelDiv').css('visibility','hidden');
        };
    };

});
