define(['knockout'], function (ko) {
    return function appViewModel() {
        ko.components.register("userName", {
            viewModel: function (params) {
                this.firstName = ko.observable('Bert');
                this.firstNameCaps = ko.pureComputed(function () {
                    return this.firstName().toUpperCase();
                }, this);
            },
            template: {require: 'text!js/views/app.html'}
        });
        ko.components.register("userAge", {
            viewModel: function (params) {
                this.age = ko.observable(40);
                this.ageNextYear = ko.pureComputed(function () {
                    return this.age() + 1;
                }, this);
                this.ageLastYear = ko.pureComputed(function () {
                    return this.age() - 1;
                }, this);
            },
            template: {require: 'text!js/views/appAge.html'}
        });
    };
});