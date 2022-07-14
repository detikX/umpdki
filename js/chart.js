const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Upah Minimum Pendapatan",
      backgroundColor: "#28B7FC",
      borderColor: "royalblue",
      color: "black",
      data: [3355750, 3648035, 3940973, 4276349, 4416186, 4641854],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "UMP Era Anies Baswedan",
        color: "black",
        font: {
          family: "'Montserrat'", // Your font family
          size: 20,
          weight: "bold",
        },

        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "'Montserrat'",
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          color: "black",
          display: true,
          text: "Tahun",
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
          },
        },
      },
      y: {
        title: {
          color: "black",
          display: true,
          text: "Gaji",
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
            weight: "bold",
          },
          padding: 20,
        },
        ticks: {
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
          },
        },
      },
    },
    animations: {
      y: {
        easing: "easeInOutElastic",
        from: (ctx) => {
          if (ctx.type === "data") {
            if (ctx.mode === "default" && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);
