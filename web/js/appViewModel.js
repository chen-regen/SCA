// Main viewmodel class
define(['lib/knockout-3.4.0'], function(ko) {
    return function appViewModel() {
        this.inputLetters = ko.observable('try this');
        this.inputCaps = ko.pureComputed(function() {
            return this.inputLetters().toUpperCase();
        }, this);
    };
});