function renderCharts() {
    let dataTypeId;
    if ($('.data-iswait1tab').hasClass('is-selected')) {
      dataTypeId = 1;
    } else {
      dataTypeId = 2;
    }
    let wtTotContainer = document.getElementsByClassName('wt-tot-container');

    const isProductionEnvironment = drupalSettings.environment == "prod";
    const WAIT_TIMES_API_ENDPOINT = isProductionEnvironment ? "https://or.hqontario.ca" : "https://oruat.hqontario.ca";
    $(wtTotContainer).each(function () {
      let orgId = $(this).attr('chartid');
      const chartApiEndPoint = WAIT_TIMES_API_ENDPOINT + "/DiagnosticImaging/wtchartdata/" + language + "/" + ageGroup + "/" + procedureType + "/1/" + orgId;
      google.charts.load('current', { 'packages': ['controls'], language: language });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        $.ajax({
          url: chartApiEndPoint,
          dataType: "json",
          success: function (chartAPIData) {
            var dashboard = new google.visualization.Dashboard(document.getElementById('wt-tot-chart-' + orgId));
            var data = new google.visualization.DataTable();
            data.addColumn('date', 'Month');
            data.addColumn('number', getTrans("chartToolTipLabelAve4"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel904"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelMed4"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel%4"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelVol4"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });

            data.addColumn('number', getTrans("chartToolTipLabelAve3"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel903"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelMed3"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel%3"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelVol3"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });

            data.addColumn('number', getTrans("chartToolTipLabelAve2"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel902"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelMed2"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel%2"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelVol2"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });


            data.addColumn('number', getTrans("chartToolTipLabelAve234"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel90234"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelMed234"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabel%234"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });
            data.addColumn('number', getTrans("chartToolTipLabelVol234"));
            data.addColumn('number', '');
            data.addColumn({ type: 'string', role: 'annotation' });

            var date = new Date();
            var latestDate;
            var dateArray = []
            for (var i = 0; i < chartAPIData.length; i++) {

              var key3date = chartAPIData[i].Key3;
              date = moment(key3date, 'YYYY MM').toDate();
              dateArray.push(date);

              //Initial data
              var inidataMean2 = parseFloat(chartAPIData[i].WaitTimes[0].WaitTimeMean);
              var inidata90p2 = parseFloat(chartAPIData[i].WaitTimes[0].WaitTime90percentile);
              var inidataMedian2 = parseFloat(chartAPIData[i].WaitTimes[0].WaitTime_median);
              var inidataInTarget2 = parseFloat(chartAPIData[i].WaitTimes[0].WaitTimePercentWithinTarget);
              var inidataVolume2 = parseFloat(chartAPIData[i].WaitTimes[0].NumberOfCases);

              var inidataMean3 = parseFloat(chartAPIData[i].WaitTimes[1].WaitTimeMean);
              var inidata90p3 = parseFloat(chartAPIData[i].WaitTimes[1].WaitTime90percentile);
              var inidataMedian3 = parseFloat(chartAPIData[i].WaitTimes[1].WaitTime_median);
              var inidataInTarget3 = parseFloat(chartAPIData[i].WaitTimes[1].WaitTimePercentWithinTarget);
              var inidataVolume3 = parseFloat(chartAPIData[i].WaitTimes[1].NumberOfCases);

              var inidataMean4 = parseFloat(chartAPIData[i].WaitTimes[2].WaitTimeMean);
              var inidata90p4 = parseFloat(chartAPIData[i].WaitTimes[2].WaitTime90percentile);
              var inidataMedian4 = parseFloat(chartAPIData[i].WaitTimes[2].WaitTime_median);
              var inidataInTarget4 = parseFloat(chartAPIData[i].WaitTimes[2].WaitTimePercentWithinTarget);
              var inidataVolume4 = parseFloat(chartAPIData[i].WaitTimes[2].NumberOfCases);

              var inidataMean234 = parseFloat(chartAPIData[i].WaitTimes[3].WaitTimeMean);
              var inidata90p234 = parseFloat(chartAPIData[i].WaitTimes[3].WaitTime90percentile);
              var inidataMedian234 = parseFloat(chartAPIData[i].WaitTimes[3].WaitTime_median);
              var inidataInTarget234 = parseFloat(chartAPIData[i].WaitTimes[3].WaitTimePercentWithinTarget);
              var inidataVolume234 = parseFloat(chartAPIData[i].WaitTimes[3].NumberOfCases);

              //Round Data
              var dataMean2 = ((inidataMean2 >= 0) ? Math.floor(inidataMean2 + 0.5) : Math.ceil(inidataMean2 - 0.5));
              var data90p2 = (inidata90p2 >= 0) ? Math.floor(inidata90p2 + 0.5) : Math.ceil(inidata90p2 - 0.5);
              var dataMedian2 = (inidataMedian2 >= 0) ? Math.floor(inidataMedian2 + 0.5) : Math.ceil(inidataMedian2 - 0.5);
              var dataInTarget2 = (inidataInTarget2 >= 0) ? Math.floor(inidataInTarget2 + 0.5) : Math.ceil(inidataInTarget2 - 0.5);
              var dataVolume2 = (inidataVolume2 >= 0) ? Math.floor(inidataVolume2 + 0.5) : Math.ceil(inidataVolume2 - 0.5);

              var dataMean3 = (inidataMean3 >= 0) ? Math.floor(inidataMean3 + 0.5) : Math.ceil(inidataMean3 - 0.5);
              var data90p3 = (inidata90p3 >= 0) ? Math.floor(inidata90p3 + 0.5) : Math.ceil(inidata90p3 - 0.5);
              var dataMedian3 = (inidataMedian3 >= 0) ? Math.floor(inidataMedian3 + 0.5) : Math.ceil(inidataMedian3 - 0.5);
              var dataInTarget3 = (inidataInTarget3 >= 0) ? Math.floor(inidataInTarget3 + 0.5) : Math.ceil(inidataInTarget3 - 0.5);
              var dataVolume3 = (inidataVolume3 >= 0) ? Math.floor(inidataVolume3 + 0.5) : Math.ceil(inidataVolume3 - 0.5);

              var dataMean4 = (inidataMean4 >= 0) ? Math.floor(inidataMean4 + 0.5) : Math.ceil(inidataMean4 - 0.5);
              var data90p4 = (inidata90p4 >= 0) ? Math.floor(inidata90p4 + 0.5) : Math.ceil(inidata90p4 - 0.5);
              var dataMedian4 = (inidataMedian4 >= 0) ? Math.floor(inidataMedian4 + 0.5) : Math.ceil(inidataMedian4 - 0.5);
              var dataInTarget4 = (inidataInTarget4 >= 0) ? Math.floor(inidataInTarget4 + 0.5) : Math.ceil(inidataInTarget4 - 0.5);
              var dataVolume4 = (inidataVolume4 >= 0) ? Math.floor(inidataVolume4 + 0.5) : Math.ceil(inidataVolume4 - 0.5);

              var dataMean234 = (inidataMean234 >= 0) ? Math.floor(inidataMean234 + 0.5) : Math.ceil(inidataMean234 - 0.5);
              var data90p234 = (inidata90p234 >= 0) ? Math.floor(inidata90p234 + 0.5) : Math.ceil(inidata90p234 - 0.5);
              var dataMedian234 = (inidataMedian234 >= 0) ? Math.floor(inidataMedian234 + 0.5) : Math.ceil(inidataMedian234 - 0.5);
              var dataInTarget234 = (inidataInTarget234 >= 0) ? Math.floor(inidataInTarget234 + 0.5) : Math.ceil(inidataInTarget234 - 0.5);
              var dataVolume234 = (inidataVolume234 >= 0) ? Math.floor(inidataVolume234 + 0.5) : Math.ceil(inidataVolume234 - 0.5);

              //No Value
              var dataMean2nv = parseInt(chartAPIData[i].WaitTimes[0].WaitTimeMean) || 0;
              var data90p2nv = parseInt(chartAPIData[i].WaitTimes[0].WaitTime90percentile) || 0;
              var dataMedian2nv = parseInt(chartAPIData[i].WaitTimes[0].WaitTime_median) || 0;
              var dataInTarget2nv = parseInt(chartAPIData[i].WaitTimes[0].WaitTimePercentWithinTarget) || 0;
              var dataVolume2nv = parseInt(chartAPIData[i].WaitTimes[0].NumberOfCases) || 0;
              var dataMean3nv = parseInt(chartAPIData[i].WaitTimes[1].WaitTimeMean) || 0;
              var data90p3nv = parseInt(chartAPIData[i].WaitTimes[1].WaitTime90percentile) || 0;
              var dataMedian3nv = parseInt(chartAPIData[i].WaitTimes[1].WaitTime_median) || 0;
              var dataInTarget3nv = parseInt(chartAPIData[i].WaitTimes[1].WaitTimePercentWithinTarget) || 0;
              var dataVolume3nv = parseInt(chartAPIData[i].WaitTimes[1].NumberOfCases) || 0;
              var dataMean4nv = parseInt(chartAPIData[i].WaitTimes[2].WaitTimeMean) || 0;
              var data90p4nv = parseInt(chartAPIData[i].WaitTimes[2].WaitTime90percentile) || 0;
              var dataMedian4nv = parseInt(chartAPIData[i].WaitTimes[2].WaitTime_median) || 0;
              var dataInTarget4nv = parseInt(chartAPIData[i].WaitTimes[2].WaitTimePercentWithinTarget) || 0;
              var dataVolume4nv = parseInt(chartAPIData[i].WaitTimes[2].NumberOfCases) || 0;
              var dataMean234nv = parseInt(chartAPIData[i].WaitTimes[3].WaitTimeMean) || 0;
              var data90p234nv = parseInt(chartAPIData[i].WaitTimes[3].WaitTime90percentile) || 0;
              var dataMedian234nv = parseInt(chartAPIData[i].WaitTimes[3].WaitTime_median) || 0;
              var dataInTarget234nv = parseInt(chartAPIData[i].WaitTimes[3].WaitTimePercentWithinTarget) || 0;
              var dataVolume234nv = parseInt(chartAPIData[i].WaitTimes[3].NumberOfCases) || 0;

              //Annotations
              var dataMean2Anno = chartAPIData[i].WaitTimes[0].WaitTimeMean.replace(/[^A-Z]/g, '');
              var data90p2Anno = chartAPIData[i].WaitTimes[0].WaitTime90percentile.replace(/[^A-Z]/g, '');
              var dataMedian2Anno = chartAPIData[i].WaitTimes[0].WaitTime_median.replace(/[^A-Z]/g, '');
              var dataInTarget2Anno = chartAPIData[i].WaitTimes[0].WaitTimePercentWithinTarget.replace(/[^A-Z]/g, '');
              var dataVolume2Anno = chartAPIData[i].WaitTimes[0].NumberOfCases.replace(/[^A-Z]/g, '');
              var dataMean3Anno = chartAPIData[i].WaitTimes[1].WaitTimeMean.replace(/[^A-Z]/g, '');
              var data90p3Anno = chartAPIData[i].WaitTimes[1].WaitTime90percentile.replace(/[^A-Z]/g, '');
              var dataMedian3Anno = chartAPIData[i].WaitTimes[1].WaitTime_median.replace(/[^A-Z]/g, '');
              var dataInTarget3Anno = chartAPIData[i].WaitTimes[1].WaitTimePercentWithinTarget.replace(/[^A-Z]/g, '');
              var dataVolume3Anno = chartAPIData[i].WaitTimes[1].NumberOfCases.replace(/[^A-Z]/g, '');
              var dataMean4Anno = chartAPIData[i].WaitTimes[2].WaitTimeMean.replace(/[^A-Z]/g, '');
              var data90p4Anno = chartAPIData[i].WaitTimes[2].WaitTime90percentile.replace(/[^A-Z]/g, '');
              var dataMedian4Anno = chartAPIData[i].WaitTimes[2].WaitTime_median.replace(/[^A-Z]/g, '');
              var dataInTarget4Anno = chartAPIData[i].WaitTimes[2].WaitTimePercentWithinTarget.replace(/[^A-Z]/g, '');
              var dataVolume4Anno = chartAPIData[i].WaitTimes[2].NumberOfCases.replace(/[^A-Z]/g, '');
              var dataMean234Anno = chartAPIData[i].WaitTimes[3].WaitTimeMean.replace(/[^A-Z]/g, '');
              var data90p234Anno = chartAPIData[i].WaitTimes[3].WaitTime90percentile.replace(/[^A-Z]/g, '');
              var dataMedian234Anno = chartAPIData[i].WaitTimes[3].WaitTime_median.replace(/[^A-Z]/g, '');
              var dataInTarget234Anno = chartAPIData[i].WaitTimes[3].WaitTimePercentWithinTarget.replace(/[^A-Z]/g, '');
              var dataVolume234Anno = chartAPIData[i].WaitTimes[3].NumberOfCases.replace(/[^A-Z]/g, '');

              data.addRow([date, dataMean4, dataMean4nv, dataMean4Anno, data90p4, data90p4nv, data90p4Anno, dataMedian4, dataMedian4nv, dataMedian4Anno, dataInTarget4, dataInTarget4nv, dataInTarget4Anno, dataVolume4, dataVolume4nv, dataVolume4Anno, dataMean3, dataMean3nv, dataMean3Anno, data90p3, data90p3nv, data90p3Anno, dataMedian3, dataMedian3nv, dataMedian3Anno, dataInTarget3, dataInTarget3nv, dataInTarget3Anno, dataVolume3, dataVolume3nv, dataVolume3Anno, dataMean2, dataMean2nv, dataMean2Anno, data90p2, data90p2nv, data90p2Anno, dataMedian2, dataMedian2nv, dataMedian2Anno, dataInTarget2, dataInTarget2nv, dataInTarget2Anno, dataVolume2, dataVolume2nv, dataVolume2Anno, dataMean234, dataMean234nv, dataMean234Anno, data90p234, data90p234nv, data90p234Anno, dataMedian234, dataMedian234nv, dataMedian234Anno, dataInTarget234, dataInTarget234nv, dataInTarget234Anno, dataVolume234, dataVolume234nv, dataVolume234Anno])
            }

            var chartContainer = document.getElementById('chart-' + orgId);
            var accordionContainer = document.getElementById('content-area-container');
            var chartContainerWidth = accordionContainer.length;
            //If there is less than 13 data points don't set a range start, otherwise subtract 13 months from the latest date of the data

            latestDate = new Date(Math.max(...dateArray.map(date => date.getTime())));
            earliestDate = new Date(Math.min(...dateArray.map(date => date.getTime())));

            var rangestart;
            var numOfRows = data.getNumberOfRows();
            if (numOfRows <= 12) {
              rangestart = earliestDate;
            } else {
              rangestart = new Date(latestDate);
              rangestart.setFullYear(latestDate.getFullYear() - 1);
              rangestart.setHours(0, 0, 0, 0);
            }
            //Chart Options
            var chartOptions = {
              animation: {
                duration: 500,
                easing: 'linear',
              },
              annotations: {
                textStyle: {
                  fontSize: 14,
                  bold: true,
                  // The color of the text.
                  color: '#4d4d4d'
                },
                stem: {
                  color: 'none',
                  length: 3
                }
              },
              colors: ['transparent', '#00B2E3'],
              chartArea: {
                left: 40,
                right: 40
              },
              legend: {
                position: 'none',
                textStyle: {
                  fontSize: 0
                }
              },
              hAxis: {
                format: 'MMM yyyy',
                gridlines: {
                  color: 'transparent',
                },
                maxAlternation: 1,
                maxTextLines: 1,
                minorGridlines: {
                  count: 0,
                },
                showTextEvery: 3
              },
              vAxis: {
                baselineColor: '#4d4d4d',
                gridlines: {
                  color: '#e3e3e3',
                },
                minValue: 1,
                viewWindow: {
                  min: 0,
                }
              },
              pointSize: 4,
              width: chartContainerWidth
            }

            //Generate the google chart
            var chart = new google.visualization.ChartWrapper();
            chart.setChartType('LineChart');
            chart.setContainerId(chartContainer);
            chart.setOptions(chartOptions);

            var view = new google.visualization.DataView(data);

            //format for pop up date
            var date_formatter = new google.visualization.DateFormat({
              pattern: "MMMM yyyy"
            });
            date_formatter.format(data, 0);

            //Controller for the time line range selector
            var rangeSlider = new google.visualization.ControlWrapper({
              'controlType': 'DateRangeFilter',
              'containerId': 'range-control-' + orgId,
              'options': {
                'filterColumnIndex': '0',
                'ui': {
                  'label': false,
                  'labelStacking': 'vertical',
                  'format': {
                    'pattern': 'MMM yyyy'
                  },
                  'step': 'hour',
                  'width': chartContainerWidth
                }
              },
              'state': {
                'lowValue': rangestart,
                'highValue': latestDate
              }
            });

            var prioSelect = document.getElementById('prioSelect-' + orgId);
            var viewSelect = document.getElementById('viewSelect-' + orgId);
            var wtTotTitle = '#wt-tot-title-' + orgId;

            toggleData();

            prioSelect.addEventListener('change', toggleData);
            viewSelect.addEventListener('change', toggleData);

            function toggleData() {
              let viewSelected = viewSelect.value;
              let prioLevel = prioSelect.value;
              let wtselectOptions = viewSelected + prioLevel;
              //Update the chart data based on each combination of the select dropdowns
              if (wtselectOptions === 'dataMean4') view.setColumns([0, 2, 3, 1,]);
              else if (wtselectOptions === 'data90p4') view.setColumns([0, 5, 6, 4]);
              else if (wtselectOptions === 'dataMedian4') view.setColumns([0, 8, 9, 7]);
              else if (wtselectOptions === 'dataInTarget4') view.setColumns([0, 11, 12, 10]);
              else if (wtselectOptions === 'dataVolume4') view.setColumns([0, 14, 15, 13]);
              else if (wtselectOptions === 'dataMean3') view.setColumns([0, 17, 18, 16]);
              else if (wtselectOptions === 'data90p3') view.setColumns([0, 20, 21, 19]);
              else if (wtselectOptions === 'dataMedian3') view.setColumns([0, 23, 24, 22]);
              else if (wtselectOptions === 'dataInTarget3') view.setColumns([0, 26, 27, 25]);
              else if (wtselectOptions === 'dataVolume3') view.setColumns([0, 29, 30, 28]);
              else if (wtselectOptions === 'dataMean2') view.setColumns([0, 32, 33, 31]);
              else if (wtselectOptions === 'data90p2') view.setColumns([0, 35, 36, 34]);
              else if (wtselectOptions === 'dataMedian2') view.setColumns([0, 38, 39, 37]);
              else if (wtselectOptions === 'dataInTarget2') view.setColumns([0, 41, 42, 40]);
              else if (wtselectOptions === 'dataVolume2') view.setColumns([0, 44, 45, 43]);
              else if (wtselectOptions === 'dataMean234') view.setColumns([0, 47, 48, 46]);
              else if (wtselectOptions === 'data90p234') view.setColumns([0, 50, 51, 49]);
              else if (wtselectOptions === 'dataMedian234') view.setColumns([0, 53, 54, 52]);
              else if (wtselectOptions === 'dataInTarget234') view.setColumns([0, 56, 57, 55]);
              else if (wtselectOptions === 'dataVolume234') view.setColumns([0, 59, 60, 58]);

              //Update the title text of the drop down content to reflect the selected combination
              if (language === "FR") {
                if (viewSelected == 'dataMean') { $(wtTotTitle).html('<h4>Temps d’attente moyen (en jours)</h4><p class= "wt-tot-subtitle italic">Nombre moyen de jours d’attente constaté pour les patients à ce niveau de priorité</p >') }
                else if (viewSelected == 'data90p') { $(wtTotTitle).html('<h4>Temps d’attente, 90e centile (en jours)</h4><p class= "wt-tot-subtitle italic">À ce niveau de priorité, 90 % des patients ont attendu pendant ce nombre de jours ou moins, et 10 % ont attendu plus longtemps</p >') }
                else if (viewSelected == 'dataMedian') { $(wtTotTitle).html('<h4>Temps d’attente médian (en jours)</h4><p class= "wt-tot-subtitle italic">À ce niveau de priorité, la moitié des patients a attendu moins longtemps que ce nombre de jours, et l’autre moitié a attendu plus longtemps</p >') }
                else if (viewSelected == 'dataInTarget') { $(wtTotTitle).html('<h4>Le pourcentage correspond aux objectifs</h4><p class= "wt-tot-subtitle italic">Le pourcentage des patients qui ont été reçus dans un délai correspond aux objectifs pour ce niveau de priorité</p >') }
                else if (viewSelected == 'dataVolume') { $(wtTotTitle).html('<h4>Volume</h4><p class= "wt-tot-subtitle italic">Nombre de patients de ce niveau de priorité qui ont été reçus</p >') }
              } else {
                if (viewSelected == 'dataMean') { $(wtTotTitle).html('<h4>Average wait time (days)</h4><p class= "wt-tot-subtitle italic">The average number of days that patients at this priority level waited</p >') }
                else if (viewSelected == 'data90p') { $(wtTotTitle).html('<h4>90th percentile wait time (days)</h4><p class= "wt-tot-subtitle italic">90% of patients at this priority level waited this number of days or fewer, while 10% waited longer</p >') }
                else if (viewSelected == 'dataMedian') { $(wtTotTitle).html('<h4>Median wait time (days)</h4><p class= "wt-tot-subtitle italic">Half of the patients at this priority level waited fewer than this number of days and the other half waited longer</p >') }
                else if (viewSelected == 'dataInTarget') { $(wtTotTitle).html('<h4>% within target</h4><p class= "wt-tot-subtitle italic">The percentage of patients who were seen within the target time for this priority level</p >') }
                else if (viewSelected == 'dataVolume') { $(wtTotTitle).html('<h4>Volume</h4><p class= "wt-tot-subtitle italic">Number of patients at this priority level who were seen</p >') }
              }
              //Range State items here prevent the range slider from zeroing out when the select lists are changed
              var rangeState = rangeSlider.getState();
              var rangeStateLV = rangeState.lowValue;
              var rangeStateHV = rangeState.highValue;
              rangeSlider.setState({ 'lowValue': rangeStateLV, 'highValue': rangeStateHV });

              //Re-draw the chart with select list combination data
              dashboard.draw(view);
            }

            function addRangeSliderLabels(){

              var chartLayout = chart.getChart().getChartLayoutInterface();
              var chartBounds = chartLayout.getChartAreaBoundingBox();
              var lv = new Date(chartLayout.getHAxisValue(chartBounds.left));
              var hv = new Date(chartLayout.getHAxisValue(chartBounds.left + chartBounds.width));
              lv.setDate(lv.getDate() + 1);

              if (language === "FR") {
                var flv = new Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric' }).format(lv);
                var fhv = new Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric' }).format(hv);

              } else {
                var flv = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(lv);
                var fhv = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(hv);
              }

              var lvContainer = '#date-lv-' + orgId
              var hvContainer = '#date-hv-' + orgId


              $(lvContainer).text(flv);
              $(hvContainer).text(fhv);

            };

            google.visualization.events.addListener(chart, 'ready', addRangeSliderLabels);
            google.visualization.events.addListener(chart, 'statechange', addRangeSliderLabels);

            dashboard.bind(rangeSlider, chart);
            dashboard.draw(view);
          }
        });
      };


      $('#csvDL-' + orgId).unbind().click(function () {
        downloadChartCSV();
      })
      function downloadChartCSV() {
        $.ajax({
          url: chartApiEndPoint,
          dataType: "json",
          success: function (chartAPIData) {
            var csOutput = [];
            //Iterating each element of the myData
            chartAPIData.forEach(o => {

              //Checking the duplicate value and updating the fields
              let temp = csOutput.find(x => {
                if (x && x.id === o.id) {
                  x.Key4 += "," + o.Key4;
                  x.WaitTimes[0].WaitTimeMean += ", " + o.WaitTimes[0].WaitTimeMean;
                  x.WaitTimes[0].WaitTime90percentile += ", " + o.WaitTimes[0].WaitTime90percentile;
                  x.WaitTimes[0].WaitTime_median += ", " + o.WaitTimes[0].WaitTime_median;
                  x.WaitTimes[0].WaitTimePercentWithinTarget += ", " + o.WaitTimes[0].WaitTimePercentWithinTarget;
                  x.WaitTimes[0].NumberOfCases += ", " + o.WaitTimes[0].NumberOfCases;
                  x.WaitTimes[1].WaitTimeMean += ", " + o.WaitTimes[1].WaitTimeMean;
                  x.WaitTimes[1].WaitTime90percentile += ", " + o.WaitTimes[1].WaitTime90percentile;
                  x.WaitTimes[1].WaitTime_median += ", " + o.WaitTimes[1].WaitTime_median;
                  x.WaitTimes[1].WaitTimePercentWithinTarget += ", " + o.WaitTimes[1].WaitTimePercentWithinTarget;
                  x.WaitTimes[1].NumberOfCases += ", " + o.WaitTimes[1].NumberOfCases;
                  x.WaitTimes[2].WaitTimeMean += ", " + o.WaitTimes[2].WaitTimeMean;
                  x.WaitTimes[2].WaitTime90percentile += ", " + o.WaitTimes[2].WaitTime90percentile;
                  x.WaitTimes[2].WaitTime_median += ", " + o.WaitTimes[2].WaitTime_median;
                  x.WaitTimes[2].WaitTimePercentWithinTarget += ", " + o.WaitTimes[2].WaitTimePercentWithinTarget;
                  x.WaitTimes[2].NumberOfCases += ", " + o.WaitTimes[2].NumberOfCases;
                  x.WaitTimes[3].WaitTimeMean += ", " + o.WaitTimes[3].WaitTimeMean;
                  x.WaitTimes[3].WaitTime90percentile += ", " + o.WaitTimes[3].WaitTime90percentile;
                  x.WaitTimes[3].WaitTime_median += ", " + o.WaitTimes[3].WaitTime_median;
                  x.WaitTimes[3].WaitTimePercentWithinTarget += ", " + o.WaitTimes[3].WaitTimePercentWithinTarget;
                  x.WaitTimes[3].NumberOfCases += ", " + o.WaitTimes[3].NumberOfCases;
                  return true;
                }
              });
              if (!temp)
                csOutput.push(o);
            });
            var name = csOutput[0].Name;
            var doctitle = getTrans('wtditotTitle') + "_" + name;

            var month = csOutput[0].Key4.split(",").reverse().join(",");

            var dataMean2 = csOutput[0].WaitTimes[0].WaitTimeMean.split(",").reverse().join(",");
            var data90p2 = csOutput[0].WaitTimes[0].WaitTime90percentile.split(",").reverse().join(",");
            var dataMedian2 = csOutput[0].WaitTimes[0].WaitTime_median.split(",").reverse().join(",");
            var dataInTarget2 = csOutput[0].WaitTimes[0].WaitTimePercentWithinTarget.split(",").reverse().join(",");
            var dataVolume2 = csOutput[0].WaitTimes[0].NumberOfCases.split(",").reverse().join(",");

            var dataMean3 = csOutput[0].WaitTimes[1].WaitTimeMean.split(",").reverse().join(",");
            var data90p3 = csOutput[0].WaitTimes[1].WaitTime90percentile.split(",").reverse().join(",");
            var dataMedian3 = csOutput[0].WaitTimes[1].WaitTime_median.split(",").reverse().join(",");
            var dataInTarget3 = csOutput[0].WaitTimes[1].WaitTimePercentWithinTarget.split(",").reverse().join(",");
            var dataVolume3 = csOutput[0].WaitTimes[1].NumberOfCases.split(",").reverse().join(",");

            var dataMean4 = csOutput[0].WaitTimes[2].WaitTimeMean.split(",").reverse().join(",");
            var data90p4 = csOutput[0].WaitTimes[2].WaitTime90percentile.split(",").reverse().join(",");
            var dataMedian4 = csOutput[0].WaitTimes[2].WaitTime_median.split(",").reverse().join(",");
            var dataInTarget4 = csOutput[0].WaitTimes[2].WaitTimePercentWithinTarget.split(",").reverse().join(",");
            var dataVolume4 = csOutput[0].WaitTimes[2].NumberOfCases.split(",").reverse().join(",");

            //var dataMean234 = csOutput[0].WaitTimes[3].WaitTimeMean.split(",").reverse().join(",");
            //var data90p234 = csOutput[0].WaitTimes[3].WaitTime90percentile.split(",").reverse().join(",");
            //var dataMedian234 = csOutput[0].WaitTimes[3].WaitTime_median.split(",").reverse().join(",");
            var dataInTarget234 = csOutput[0].WaitTimes[3].WaitTimePercentWithinTarget.split(",").reverse().join(",");
            var dataVolume234 = csOutput[0].WaitTimes[3].NumberOfCases.split(",").reverse().join(",");


            function GenerateChartCSV() {

              var newLine = '\r\n';
              var seperator = ',';
              var doc = '';

              doc += getTrans('wtditotTitle');
              doc += newLine;
              doc += newLine;
              doc += getTrans('procedure') + procedureType;
              doc += newLine;
              //Hospital or province name
              doc += name;
              doc += newLine;
              doc += newLine;
              doc += '"' + getTrans('patientWithEmergency_di') + '"';
              doc += newLine;
              doc += '"' + getTrans('noValueLegendDI') + '"';
              doc += newLine;
              doc += newLine;
              doc += getTrans('MonthHeading');
              doc += seperator;
              doc += month;
              doc += newLine;
              doc += getTrans('Prio4Heading');
              doc += newLine;
              doc += getTrans('AverageHeading');
              doc += seperator;
              doc += dataMean4;
              doc += newLine;
              doc += '"' + getTrans('90percentHeading') + '"';
              doc += seperator;
              doc += data90p4;
              doc += newLine;
              doc += getTrans('MedianHeading');
              doc += seperator;
              doc += dataMedian4;
              doc += newLine;
              doc += getTrans('PercentTargetHeading');
              doc += seperator;
              doc += dataInTarget4;
              doc += newLine;
              doc += getTrans('VolumeHeading');
              doc += seperator;
              doc += dataVolume4;
              doc += newLine;
              doc += newLine;
              doc += getTrans('Prio3Heading');
              doc += newLine;
              doc += getTrans('AverageHeading');
              doc += seperator;
              doc += dataMean3;
              doc += newLine;
              doc += '"' + getTrans('90percentHeading') + '"';
              doc += seperator;
              doc += data90p3;
              doc += newLine;
              doc += getTrans('MedianHeading');
              doc += seperator;
              doc += dataMedian3;
              doc += newLine;
              doc += getTrans('PercentTargetHeading');
              doc += seperator;
              doc += dataInTarget3;
              doc += newLine;
              doc += getTrans('VolumeHeading');
              doc += seperator;
              doc += dataVolume3;
              doc += newLine;
              doc += newLine;
              doc += getTrans('Prio2Heading')
              doc += newLine;
              doc += getTrans('AverageHeading');
              doc += seperator;
              doc += dataMean2;
              doc += newLine;
              doc += '"' + getTrans('90percentHeading') + '"';
              doc += seperator;
              doc += data90p2;
              doc += newLine;
              doc += getTrans('MedianHeading');
              doc += seperator;
              doc += dataMedian2;
              doc += newLine;
              doc += getTrans('PercentTargetHeading');
              doc += seperator;
              doc += dataInTarget2;
              doc += newLine;
              doc += getTrans('VolumeHeading');
              doc += seperator;
              doc += dataVolume2;
              doc += newLine;
              doc += newLine;
              doc += '"' + getTrans('CombinedHeading') + '"';
              doc += newLine;
              doc += getTrans('PercentTargetHeading');
              doc += seperator;
              doc += dataInTarget234;
              doc += newLine;
              doc += getTrans('VolumeHeading');
              doc += seperator;
              doc += dataVolume234;

              buildcsvURL(doc);
            }

            function buildcsvURL(input) {
              var BOM = "\uFEFF";
              var input = BOM + input;
              const blob = new Blob([input], { type: 'text/csv;charset=utf-8"' });
              const csvURL = URL.createObjectURL(blob);
              const csvA = document.createElement('a');
              csvA.download = doctitle + '_' + procedureType + '.csv';
              csvA.href = csvURL;
              csvA.style.display = 'none';

              document.body.appendChild(csvA);
              csvA.click();
              csvA.remove();
              URL.revokeObjectURL(csvURL);
            }
            GenerateChartCSV();
          }

        })
      }
      $(window).resize(function () {
        drawChart();
      });

    });
  }
