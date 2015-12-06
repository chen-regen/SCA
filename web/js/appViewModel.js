// Main viewmodel class
define(['ko', 'anotherViewModel', 'jquery'], function(ko, anotherViewModel, $) {
    return function appViewModel() {
    	self.model = this;
        this.inputLetters = ko.observable('try this');
        this.inputCaps = ko.pureComputed(function() {
            return this.inputLetters().toUpperCase();
        }, this);
        this.redirect = function () {
            //return new anotherViewModel(this.inputCaps);
        	//$('body').load("another.html", function () {
        		//ko.cleanNode($('body'));
        		//ko.applyBindings(new anotherViewModel(), $("body"));
        		//ko.applyBindings(new anotherViewModel(), $('body'));
        		//ko.applyBindings(new anotherViewModel());
        	//});
//        	 $.ajax({
//                 type: "POST",
//                 url: "another.html",
//                 data: { inputCaps: this.inputCaps },
//                 success: function (data) {
                	 //alert(data);
//                	 $("body").html(data);
//                	 ko.applyBindings(new anotherViewModel(), $("body"));
//                 },
//                 error: function () {
//                 }
//             });
            $.ajax({
				type: 'GET',
				url: 'another.html', 
				success: function (data) {
	                $('#indexDiv').html(data);
	                ko.applyBindings(self.model, $('#anotherDiv')[0]);
				}
			});
        };
        this.redirectAnotherModel = function () {
            $.ajax({
				type: 'GET',
				url: 'anotherModelPage.html', 
				success: function (data) {
		        	$('#indexDiv').css('visibility','hidden');
	                
		        	if (!$('#anotherModelDiv').length){
		        		$('body').append(data);
		        		
				        //ko.applyBindings(new anotherViewModel(self.model.inputCaps()), $('#anotherModelDiv')[0]);
		        		ko.applyBindings(new anotherViewModel(self.model), $('#anotherModelDiv')[0]);
		        	}
		                
			        $('#anotherModelDiv').css('visibility','visible');
				}
			});
        };
    };
});