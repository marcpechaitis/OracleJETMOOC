define(['ojs/ojcore', 'knockout', 'ojs/ojgauge'
], function (oj, ko) {
    function customersContentViewModel() {
        var self = this;
        self.value10 = ko.observable(80);
        self.value1 = ko.observable(88);
        self.valueColor = ko.observable('red');
        
        self.gaugeOptionChange = function(e, data) {
            if (data.option == "value") {
              $("#gauge").attr('title', "Value: " + Math.round(data['value']) + "<br>Reference Lines: Low 33, Medium 67, High 100");
              $("#gauge").ojStatusMeterGauge('refresh');
            }
        }
    }
    
    return customersContentViewModel;
});
