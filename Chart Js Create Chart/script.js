// grab context into the canvas if not won't work
let context = document.querySelector("#bar-chart").getContext("2d");
let options = {
    scales: {
        yAxes:[{
            ticks :{
                beginAtZero: true
            }
        }]
    }
};

let barChart = new Chart(context, {
    // can change type of graph
    type: "bar",
    data: {
        labels: ["Lightning", "Hammer", "Star"],
        // this is an array
        datasets: [{
            label: "# of votes",
            data: [1200, 1000, 900],
            backgroundColor: ["yellow", "blue", "red"]
        }]
    },
    options: options
});

// Line graph 
let lContext = document.querySelector("#line").getContext("2d");
let lOptions = {
    scales: {
        yAxes:[{
            ticks :{
                beginAtZero: true
            }
        }]
    }
};

let lineChart = new Chart(lContext, {
    // can change type of graph
    type: "line",
    data: {
        labels: ["Lightning", "Hammer", "Star"],
        // this is an array
        datasets: [{
            label: "# of votes",
            data: [1200, 1000, 900],
            backgroundColor: "red",
            // color the line
            borderColor: "red",
            borderWidth: 1,
            fill: false
        }]
    },
    options: lOptions
});

// Pie chart
let pContext = document.querySelector("#pie").getContext("2d");
let pOptions = {
    scales: {
        yAxes:[{
            ticks :{
                beginAtZero: true
            }
        }]
    }
};

let pieChart = new Chart(pContext, {
    // can change type of graph
    type: "pie",
    data: {
        labels: ["Lightning", "Hammer", "Star"],
        // this is an array
        datasets: [{
            label: "# of votes",
            data: [1200, 1000, 900],
            backgroundColor: ["yellow", "blue", "red"],
            // color the line
            borderColor: "black",
            // borderWidth: 1,
            // fill: false
        }]
    },
    options: lOptions
});
