
function setDataEC(ByStream) {
    return {
    datasets: [{
        backgroundColor: backgroundColorType,
        data: ByStream.resolve_time,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: '1'
    }],

        labels: ByStream.type,
    };
}

var DataEC = setDataEC(costGroupedByType);
var optionsEC = {
    title: { display: true, text: 'Tickets per type', fontSize: '24', fontFamily: "'Roboto', sans-serif"},
    legend: { display: true, position: 'right', align: 'center'},
    cutoutPercentage: 50
}

var Pie = document.getElementById('ExpensesByType').getContext('2d');
PieChart = new Chart(Pie, { type: 'doughnut', data: DataEC, options: optionsEC});



DataEC = {
    datasets: [{

        backgroundColor: backgroundColorType2,
        data: costGroupedByTicketStatus.resolve_time,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: '1'
    }],

        labels: costGroupedByTicketStatus.type,
};

var optionsEC = {
    title: { display: true, text: 'Ticket status', fontSize: '24', fontFamily: "'Roboto', sans-serif"},
    legend: { display: true, position: 'right', align: 'center'}
}

var Pie = document.getElementById('ExpensesByTicketStatus').getContext('2d');
PieChart = new Chart(Pie, { type: 'pie', data: DataEC, options: optionsEC});

costGroupedByTypeBenchmark.unshift(
    {
        type: 'line',
        label: 'Benchmark',
        data: [{x:0, y:0}, {x:-2500, y:-2500}],
        fill: false,
        borderWidth: '2',
        backgroundColor: cssColors['second-font-color'],
        borderColor: cssColors['second-font-color'],
        pointRadius: 0
    });


var DataECB = {datasets: costGroupedByTypeBenchmark};
var optionsECB = {
    title: { display: true, text:'Expenses per Category - Benchmark', fontSize: '24', fontFamily: "'Roboto', sans-serif"},
    legend: {display: true, position: 'right', align: 'center'},
    scales: {
        xAxes: [{
          ticks: {
              beginAtZero: true, userCallback: function(value) {
                  value = value.toString();
                  return  '€' + value
              }
          },
        scaleLabel: { display: true, labelString: 'Your expenses per category'}
        }],
        yAxes: [{
          ticks: {
              beginAtZero: true, userCallback: function(value) {
                  value = value.toString();
                  return '€' + value;
              }
          },
        scaleLabel: { display: true, labelString: 'Average expenses per category'}
        }],
    }
};

var Scatter = document.getElementById('ExpensesByTypeBenchmark').getContext('2d');
var ScatterChart = new Chart(Scatter, { type: 'bubble', data: DataECB, options: optionsECB});
