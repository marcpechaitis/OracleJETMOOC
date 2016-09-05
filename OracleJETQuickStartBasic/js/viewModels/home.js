/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojpictochart'],
  function(oj, ko) {
   /**
    * The view model for the main content view template.  Please note that since
    * this example uses ojModule binding, you do not need to call ko.applyBindings
    * like the JET Cookbook examples.  ojModule handles applying bindings for its
    * associated view.
    */
    function mainContentViewModel() {
        var self = this;
        self.pictoChartItems = ko.observableArray([
        {name: 'Have Sleep Problems', shape: 'human', count:7, color: '#ed6647'},
        {name: 'Sleep Well', shape: 'human', count: 3}
      ]);
    }

   
    return new mainContentViewModel();
});
