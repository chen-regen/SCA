// Main viewmodel class
define(['ko', 'anotherViewModel'], function(ko, anotherViewModel) {
    return function appViewModel() {
        this.inputLetters = ko.observable('try this');
        this.inputCaps = ko.pureComputed(function() {
            return this.inputLetters().toUpperCase();
        }, this);
        this.redirect = function () {
            return new anotherViewModel(this.inputCaps);
        };
    };
});