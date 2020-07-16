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
        labels: ["Jan", "Feb", "Mar"],
        // this is an array
        datasets: [{
            label: "# of votes",
            data: [1200, 1000, 900],
            backgroundColor: ["yellow", "blue", "red"]
        }]
    },
    options: options
});

document.querySelector("btn").addEventListener("click", function(){
    barChart.data.datasets[0].data = [300, 400, 599];
    barChart.update();
})

document.querySelector("add-btn").addEventListener("click", function(){
    barChart.data.datasets[0].data = [300, 400, 599];
    barChart.update();
})