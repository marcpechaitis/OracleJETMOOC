define(['ojs/ojcore', 'knockout', 'ojs/ojchart'],
  function(oj, ko) { 
  
    var self = this;

    function viewModel(data) 
    {     
      self.datasource = new oj.ArrayTableDataSource(data, {idAttribute: 'id'});
      self.projectStartDate = new Date("Jan 3, 2016").getTime();
      self.projectEndDate = new Date("Mar 27, 2016").getTime();

      self.timeAxisWidth = ko.observable(0);
      
      var dir = document.documentElement.getAttribute("dir");
      if (dir)
        dir = dir.toLowerCase();
      self.isRTL = (dir === 'rtl');
      
      self.monitorAxisWidth = function()
      {
        var timeAxis = $('#timeAxis');
        // After initial render, monitor time axis width
        self.timeAxisWidth(timeAxis.width());

        // monitor subsequent time axis width change due to window resize
        $(window).on('resize', function()
        {
          self.timeAxisWidth(timeAxis.width());
        });
      };

      self.getPosition = function(taskStart)
      {
        return oj.TimeUtils.getPosition(taskStart, self.projectStartDate, self.projectEndDate, self.timeAxisWidth());
      };

      self.getLength = function(taskStart, taskEnd)
      {
        return oj.TimeUtils.getLength(taskStart, taskEnd, self.projectStartDate, self.projectEndDate, self.timeAxisWidth());
      };

      self.getProgress = function(taskStart, taskEnd, current)
      {
        var percent = self.getLength(taskStart, current) / self.getLength(taskStart, taskEnd) * 100;
        return Math.round(percent * 10) / 10;
      };

      self.getAriaLabel = function(rowData)
      {
        var taskStartTime = rowData['start'];
        var taskEndTime = rowData['end'];

        var taskStart = 'Start date ' + taskStartTime + '. ';
        var taskEnd = 'End date ' + taskEndTime + '. ';
        var duration = 'Duration ' + (new Date(taskEndTime).getTime() - new Date(taskStartTime).getTime()) / (1000*60*60*24) + ' days. ';
        return taskStart + taskEnd + duration;
      };

    };
});