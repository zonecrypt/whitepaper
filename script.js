window.onload = function () {
    document.getElementById("myPopup").style.display = "block";
    document.body.classList.add("popup-open");
};

function closePopup() {
    document.getElementById("myPopup").style.display = "none";
    document.body.classList.remove("popup-open");
}

const tokenDistributionData = {
    labels: ["Employee Payroll & Benefits", "Treasury & Operational Reserves", "Veterans Fund", "Deceased & Medical Fund"],
    datasets: [{
        data: [25, 25, 25, 25],
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0"
        ]
    }]
};

const config = {
    type: 'pie',
    data: tokenDistributionData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
};

const tokenDistributionChart = new Chart(
    document.getElementById('tokenDistributionChart'),
    config
);

