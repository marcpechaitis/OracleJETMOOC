/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * capitalizer module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    function homeContentViewModel() {
        var self = this;
        self.firstName = ko.observable('Bert');
        self.firstNameCaps = ko.pureComputed(function () {
            return this.firstName().toUpperCase();
        }, this);
    }
    return homeContentViewModel;
});