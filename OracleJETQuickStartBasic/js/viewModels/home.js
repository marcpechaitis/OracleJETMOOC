/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojchart'],
  function(oj, ko) {
   /**
    * The view model for the main content view template.  Please note that since
    * this example uses ojModule binding, you do not need to call ko.applyBindings
    * like the JET Cookbook examples.  ojModule handles applying bindings for its
    * associated view.
    */
    function mainContentViewModel() {
        var self = this;
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var barSeries = [{name: "Series 1", items: [42, 34]},
                         {name: "Series 2", items: [55, 30]},
                         {name: "Series 3", items: [36, 50]},
                         {name: "Series 4", items: [22, 46]},
                         {name: "Series 5", items: [22, 46]}];
    
        var barGroups = ["Group A", "Group B"];
   
        self.barSeriesValue = ko.observableArray(barSeries);
        self.barGroupsValue = ko.observableArray(barGroups);
        
        /* toggle buttons*/
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
        ];
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
        ];
        
        /* chart data */
        var bubbleSeries = [{name : "Series 1", items : [{x:15, y:25, z:5}, {x:25, y:30, z:12}, {x:25, y:45, z:12}]},
                            {name : "Series 2", items : [{x:15, y:15, z:8}, {x:20, y:35, z:14}, {x:40, y:55, z:35}]},
                            {name : "Series 3", items : [{x:10, y:10, z:8}, {x:18, y:55, z:10}, {x:40, y:50, z:18}]},
                            {name : "Series 4", items : [{x: 8, y:20, z:6}, {x:11, y:30, z: 8}, {x:30, y:40, z:15}]}];
    
        var bubbleGroups = ["Group A", "Group B", "Group C"];
  
        
        this.bubbleSeriesValue = ko.observableArray(bubbleSeries);
        this.bubbleGroupsValue = ko.observableArray(bubbleGroups);
      //  self.something = ko.observable("This section uses content from it's own 'home' ViewModel. The module is found in the /js/viewModules folder");
    }

    /**
     * This example returns a view model instance, but can instead return a constructor function
     * which will be invoked to create a view model instance for each module reference.
     * This instance example will be used as a singleton whenever this module is referenced.
     * Please see the 'ViewModel's Lifecycle' section of the ojModule doc for more info.
     */
    return new mainContentViewModel();
});
