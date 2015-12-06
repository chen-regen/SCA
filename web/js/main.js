requirejs.config({
    baseUrl: 'js',
	paths: {
        "ko": "lib/knockout-3.4.0",
        //"jquery": "lib/jquery-1.11.3.min.js",
        "jquery":  "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min",
        "appViewModel": "appViewModel",
        "anotherViewModel": "anotherViewModel",
	}
});

require(['ko', 'appViewModel'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});

