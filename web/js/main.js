requirejs.config({
    baseUrl: 'js',
	paths: {
        "ko": "lib/knockout-3.4.0",
        "appViewModel": "appViewModel",
        "anotherViewModel": "anotherViewModel"
	}
});

require(['ko', 'appViewModel'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});

