define(['knockout'], function (ko) {
    return function appViewModel() {
        ko.components.register("userName", {
            viewModel: function (params) {
                this.firstName = ko.observable('Bert');
                this.firstNameCaps = ko.pureComputed(function () {
                    return this.firstName().toUpperCase();
                }, this);
            },
            template:
                    "<p>First name: <input data-bind='value: firstName' /></p>\n\
                     <p>First name capitalized: <strong data-bind='text: firstNameCaps'></strong></p>"
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
            template:
                    "<p>Age: <input data-bind='value: age' /></p>\n\
                     <p>Age next year: <strong data-bind='text: ageNextYear'></strong></p>\n\
                     <p>Age last year: <strong data-bind='text: ageLastYear'></strong></p>"
        });
    };
});