document.addEventListener("DOMContentLoaded", function () {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.querySelector(".modal-close");
  
    // Open modal and initialize chart (only once)
    function openModal() {
      modal.classList.add("show");
      modalOverlay.classList.add("show");
      if (!modal.dataset.chartInitialized) {
        initializeChart();
        modal.dataset.chartInitialized = "true";
      }
    }
  
    // Close modal
    function closeModal() {
      modal.classList.remove("show");
      modalOverlay.classList.remove("show");
    }
  
    learnMoreBtn.addEventListener("click", openModal);
    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
  
    // Initialize Chart.js doughnut chart
    function initializeChart() {
      const ctx = document.getElementById("tokenChart").getContext("2d");
      const data = {
        labels: ["Private Sale", "Team", "Marketing", "Liquidity", "Development"],
        datasets: [
          {
            data: [40, 20, 15, 15, 10],
            backgroundColor: [
              "rgba(212, 175, 55, 0.9)",
              "rgba(212, 175, 55, 0.7)",
              "rgba(212, 175, 55, 0.5)",
              "rgba(212, 175, 55, 0.3)",
              "rgba(212, 175, 55, 0.2)",
            ],
            borderColor: "#d4af37",
            borderWidth: 2,
          },
        ],
      };
  
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "#e0dcd3",
              font: { size: 14 },
            },
          },
        },
        animation: {
          duration: 1500,
          easing: "easeOutQuart",
        },
      };
  
      new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: options,
      });
    }
  });