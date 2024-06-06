
var ticket_no = 1500;
var averageTimePerType = { "s1": 60, "s2": 120, "s3": 240, "s4": 480};
var TicketData = [
    {'date': new Date('07/04/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': -250, 'ticket status': 'Overdue'},
    {'date': new Date('07/04/2020'), 'ticket-priority': 's4', 'ticket-type': 'incident', 'resolve_time': 30, 'ticket status': 'Resolved'},
    {'date': new Date('07/07/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 317, 'ticket status': 'Resolved'},
    {'date': new Date('07/05/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 220, 'ticket status': 'Resolved'},
    {'date': new Date('07/07/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 46, 'ticket status': 'Resolved'},
    {'date': new Date('07/09/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 53, 'ticket status': 'Resolved'},
    {'date': new Date('07/04/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 20, 'ticket status': 'Resolved'},
    {'date': new Date('07/08/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 114, 'ticket status': 'Resolved'},
    {'date': new Date('07/09/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': -260, 'ticket status': 'Overdue'},
    {'date': new Date('07/06/2020'), 'ticket-priority': 's4', 'ticket-type': 'incident', 'resolve_time': 119, 'ticket status': 'Resolved'},
    {'date': new Date('07/10/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': -160, 'ticket status': 'Overdue'},
    {'date': new Date('07/12/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 50, 'ticket status': 'Resolved'},
    {'date': new Date('07/11/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 48, 'ticket status': 'Resolved'},
    {'date': new Date('07/07/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 25, 'ticket status': 'Resolved'},
    {'date': new Date('07/10/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 50, 'ticket status': 'Resolved'},
    {'date': new Date('07/11/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 100, 'ticket status': 'Resolved'},
    {'date': new Date('07/10/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 26, 'ticket status': 'Resolved'},
    {'date': new Date('07/04/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 66, 'ticket status': 'Resolved'},
    {'date': new Date('07/10/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 75, 'ticket status': 'Resolved'},
    {'date': new Date('07/05/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 120, 'ticket status': 'Resolved'},
    {'date': new Date('07/05/2020'), 'ticket-priority': 's4', 'ticket-type': 'service', 'resolve_time': 188, 'ticket status': 'Resolved'},
    {'date': new Date('07/09/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': -175, 'ticket status': 'Overdue'},
    {'date': new Date('07/05/2020'), 'ticket-priority': 's4', 'ticket-type': 'service', 'resolve_time': 120, 'ticket status': 'Resolved'},
    {'date': new Date('07/13/2020'), 'ticket-priority': 's4', 'ticket-type': 'incident', 'resolve_time': 5, 'ticket status': 'Resolved'},
    {'date': new Date('07/23/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 11, 'ticket status': 'Resolved'},
    {'date': new Date('07/09/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 185, 'ticket status': 'Resolved'},
    {'date': new Date('07/14/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 120, 'ticket status': 'Resolved'},
    {'date': new Date('07/18/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 60, 'ticket status': 'Resolved'},
    {'date': new Date('07/19/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/08/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 90, 'ticket status': 'Resolved'},
    {'date': new Date('07/13/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 231, 'ticket status': 'Resolved'},
    {'date': new Date('07/07/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/10/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 70, 'ticket status': 'Resolved'},
    {'date': new Date('07/10/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 108, 'ticket status': 'Resolved'},
    {'date': new Date('07/04/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 132, 'ticket status': 'Resolved'},
    {'date': new Date('07/04/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 48, 'ticket status': 'Resolved'},
    {'date': new Date('07/05/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/08/2020'), 'ticket-priority': 's1', 'ticket-type': 'service', 'resolve_time': -78, 'ticket status': 'Overdue'},
    {'date': new Date('07/05/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 60, 'ticket status': 'Resolved'},
    {'date': new Date('07/07/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 220, 'ticket status': 'Resolved'},
    {'date': new Date('07/22/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 81, 'ticket status': 'Resolved'},
    {'date': new Date('07/11/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 20, 'ticket status': 'Resolved'},
    {'date': new Date('07/19/2020'), 'ticket-priority': 's1', 'ticket-type': 'service', 'resolve_time': 08, 'ticket status': 'Resolved'},
    {'date': new Date('07/06/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 24, 'ticket status': 'Resolved'},
    {'date': new Date('07/09/2020'), 'ticket-priority': 's1', 'ticket-type': 'service', 'resolve_time': 21, 'ticket status': 'Resolved'},
    {'date': new Date('07/17/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 60, 'ticket status': 'Resolved'},
    {'date': new Date('07/13/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 41, 'ticket status': 'Resolved'},
    {'date': new Date('07/29/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 214, 'ticket status': 'Resolved'},
    {'date': new Date('07/30/2020'), 'ticket-priority': 's4', 'ticket-type': 'service', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/18/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 32, 'ticket status': 'Resolved'},
    {'date': new Date('07/21/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 99, 'ticket status': 'Resolved'},
    {'date': new Date('07/28/2020'), 'ticket-priority': 's4', 'ticket-type': 'service', 'resolve_time': 311, 'ticket status': 'Resolved'},
    {'date': new Date('07/21/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 98, 'ticket status': 'Resolved'},
    {'date': new Date('07/15/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/27/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 119, 'ticket status': 'Resolved'},
    {'date': new Date('07/08/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 78, 'ticket status': 'Resolved'},
    {'date': new Date('07/22/2020'), 'ticket-priority': 's1', 'ticket-type': 'service', 'resolve_time': 20, 'ticket status': 'Resolved'},
    {'date': new Date('07/12/2020'), 'ticket-priority': 's4', 'ticket-type': 'incident', 'resolve_time': 136, 'ticket status': 'Resolved'},
    {'date': new Date('07/25/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 39, 'ticket status': 'Resolved'},
    {'date': new Date('07/24/2020'), 'ticket-priority': 's4', 'ticket-type': 'service', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/17/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 47, 'ticket status': 'Resolved'},
    {'date': new Date('07/27/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 101, 'ticket status': 'Resolved'},
    {'date': new Date('07/26/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 82, 'ticket status': 'Resolved'},
    {'date': new Date('07/14/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/30/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/16/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 102, 'ticket status': 'Resolved'},
    {'date': new Date('07/22/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': -346, 'ticket status': 'Overdue'},
    {'date': new Date('07/26/2020'), 'ticket-priority': 's1', 'ticket-type': 'service', 'resolve_time': 44, 'ticket status': 'Resolved'},
    {'date': new Date('7/23/2020'),  'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 98, 'ticket status': 'Resolved'},
    {'date': new Date('07/30/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 179, 'ticket status': 'Resolved'},
    {'date': new Date('07/27/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': -182, 'ticket status': 'Overdue'},
    {'date': new Date('07/11/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 21, 'ticket status': 'Resolved'},
    {'date': new Date('07/26/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 52, 'ticket status': 'Resolved'},
    {'date': new Date('07/28/2020'), 'ticket-priority': 's4', 'ticket-type': 'incident', 'resolve_time': 358, 'ticket status': 'Resolved'},
    {'date': new Date('07/08/2020'), 'ticket-priority': 's4', 'ticket-type': 'service', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/11/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/04/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 47, 'ticket status': 'Resolved'},
    {'date': new Date('07/21/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 18, 'ticket status': 'Resolved'},
    {'date': new Date('07/28/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 46, 'ticket status': 'Resolved'},
    {'date': new Date('07/23/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 74, 'ticket status': 'Resolved'},
    {'date': new Date('07/26/2020'), 'ticket-priority': 's2', 'ticket-type': 'incident', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/22/2020'), 'ticket-priority': 's1', 'ticket-type': 'service', 'resolve_time': 57, 'ticket status': 'Resolved'},
    {'date': new Date('07/19/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': -220, 'ticket status': 'Overdue'},
    {'date': new Date('07/20/2020'), 'ticket-priority': 's4', 'ticket-type': 'incident', 'resolve_time': 326, 'ticket status': 'Resolved'},
    {'date': new Date('07/20/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/25/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 32, 'ticket status': 'Resolved'},
    {'date': new Date('07/28/2020'), 'ticket-priority': 's1', 'ticket-type': 'service', 'resolve_time': 40, 'ticket status': 'Resolved'},
    {'date': new Date('07/29/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 15, 'ticket status': 'Resolved'},
    {'date': new Date('07/20/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 28, 'ticket status': 'Resolved'},
    {'date': new Date('07/27/2020'), 'ticket-priority': 's4', 'ticket-type': 'incident', 'resolve_time': 0, 'ticket status': 'OnHold'},
    {'date': new Date('07/16/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 29, 'ticket status': 'Resolved'},
    {'date': new Date('07/20/2020'), 'ticket-priority': 's3', 'ticket-type': 'service', 'resolve_time': 194, 'ticket status': 'Resolved'},
    {'date': new Date('07/30/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 62, 'ticket status': 'Resolved'},
    {'date': new Date('07/05/2020'), 'ticket-priority': 's3', 'ticket-type': 'incident', 'resolve_time': 127, 'ticket status': 'Resolved'},
    {'date': new Date('07/10/2020'), 'ticket-priority': 's1', 'ticket-type': 'incident', 'resolve_time': 38, 'ticket status': 'Resolved'},
    {'date': new Date('07/07/2020'), 'ticket-priority': 's2', 'ticket-type': 'service', 'resolve_time': 94, 'ticket status': 'Resolved'}
];

var bgC = {'red': "rgba(255, 99, 132, 0.7)", 'orange': "rgba(255, 159, 64, 0.7)", 'yellow': "rgba(255, 205, 86, 0.7)", 'green': "rgba(75, 192, 192, 0.7)", 'blue': "rgba(54, 162, 235,0.7)", 'violett': "rgba(153, 102, 255, 0.7)", 'grey': "rgba(201, 203, 207, 0.7)"};
var backgroundColorType = [bgC.red, bgC.orange, bgC.yellow, bgC.green, bgC.blue, bgC.violett, bgC.grey];
var backgroundColorType2 = [bgC.blue, bgC.red];
var cssColors =     {'first-bg-color':  '#1B161F', 'second-bg-color': '#1B2533;', 'first-font-color': 'white','second-font-color': '#21cd92'};


function groupByDate(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value.date]) {
            res[value.date] = { x: new Date(value.date), y: 0 };
            result.push(res[value.date]);
        }
        res[value.date].y += value.resolve_time;
        return res;
    }, {});
    return result;
}

function groupByPriority(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['ticket-priority']]) {
            res[value['ticket-priority']] = { x: value['ticket-priority'], y: 0 };
            result.push(res[value['ticket-priority']]);
        }
        res[value['ticket-priority']].y += value.resolve_time;
        return res;
    }, {});
    return result;
}

function groupByTicketStatus(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['ticket status']]) {
            res[value['ticket status']] = { x: value['ticket status'], y: 0 };
            result.push(res[value['ticket status']]);
        }
        res[value['ticket status']].y += value.resolve_time;
        return res;
    }, {});
    return result;
}

function compare(a, b) {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;
    return 0;
}

function accumulate(array) {
    return array.map(function (val) { return { x: val.x, y: this.acc += val.y }; }, { acc: ticket_no });
}



var income = TicketData.filter(function (entry) { return entry.resolve_time >= 0; });
var cost = TicketData.filter(function (entry) { return entry.resolve_time ; });



var incomeTotals = income.reduce(function (val, data) { return val + data.resolve_time; }, 0);
var costTotals = cost.reduce(function (val, data) { return val + data.resolve_time; }, 0);


var costGroupedByDate = groupByDate(cost).sort(compare);
var incomeGroupedByDate = groupByDate(income).sort(compare);


var incomeGroupedByType = { type: groupByPriority(income).map(a => a.x), resolve_time: groupByPriority(income).map(a => a.y) };
var costGroupedByType = { type: groupByPriority(cost).map(a => a.x), resolve_time: groupByPriority(cost).map(a => a.y) };


var costGroupedByTypeBenchmark = [];
groupByPriority(cost).forEach((elem, i) => {
    costGroupedByTypeBenchmark.push({
        label: elem.x, backgroundColor: backgroundColorType[i], data: [{
            x: elem.y,
            y: averageTimePerType[elem.x],
            r: elem.y / costTotals * 100
        }]
    });
});

var incomeGroupedByTypeBenchmark = [];
groupByPriority(income).forEach(elem => {
    incomeGroupedByTypeBenchmark.push({
        label: elem.x, backgroundColor: 'red', borderColor: 'red', borderWidth: 1, data: [{
            x: elem.y,
            y: averageTimePerType[elem.x],
            r: elem.y / incomeTotals * 100
        }]
    });
});


var incomeGroupedByTicketStatus = { type: groupByTicketStatus(income).map(a => a.x), resolve_time: groupByTicketStatus(income).map(a => a.y / incomeTotals * 100) };
var costGroupedByTicketStatus = { type: groupByTicketStatus(cost).map(a => a.x), resolve_time: groupByTicketStatus(cost).map(a => a.y / costTotals * 100) };


var totalsGroupedByDate = groupByDate(TicketData).sort(compare);
var totalsAccGroupedByDate = accumulate(totalsGroupedByDate);
