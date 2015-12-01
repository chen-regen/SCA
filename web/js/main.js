require(['lib/knockout-3.4.0', 'appViewModel'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});

