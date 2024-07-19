
    // Pie Chart Data
    const ctx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Successful Projects', 'Unsuccessful Projects'],
        datasets: [{
          label: 'Projects Status',
          data: [70, 30], // Example data: 70% successful, 30% unsuccessful
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
              }
            }
          }
        }
      }
    });
  // Bar Chart Data
  const ctx1 = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: ['2020', '2021', '2022', '2023', '2024'], // x-axis labels for years
          datasets: [{
              label: 'Number of Companies',
              data: [15, 20, 25, 30, 35], // Example data for the number of companies
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Year'
                  }
              },
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Number of Companies'
                  }
              }
          }
      }
  });


  // Pie Chart Configuration
  const pieChartCtx = document.getElementById('financialPieChart').getContext('2d');
  const financialPieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
          labels: ['Revenue', 'Expenses', 'Profit', 'Loss'],
          datasets: [{
              label: 'Financial Summary',
              data: [50000, 20000, 30000, 5000], // Example data
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
              tooltip: {
                  callbacks: {
                      label: function(tooltipItem) {
                          return tooltipItem.label + ': $' + tooltipItem.raw;
                      }
                  }
              }
          }
      }
  });