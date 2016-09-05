 define(['ojs/ojcore', 'knockout', 'ojs/ojchart', 'ojs/ojpictochart'],
  function(oj, ko) {
    function PictoChartModel() {
      this.pictoChartItems = ko.observableArray([
        {name: 'Have Sleep Problems', shape: 'human', count:7, color: '#ed6647'},
        {name: 'Sleep Well', shape: 'human', count: 3}
      ]);
    }
    var pictoChartModel = new PictoChartModel();
    return pictoChartModel;
  });
