import { Chart } from "primereact/chart"
import { useState, useEffect } from "react"

function Dashboard() {
  const [barData, setBarData] = useState({})
  const [barOptions, setBarOptions] = useState({})
  const [lineData, setLineData] = useState({})
  const [lineOptions, setLineOptions] = useState({})

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue("--text-color")
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    )
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border")

    //For Course Enrollments
    setBarData({
      labels: ["T1", "T2", "T3", "T4"],
      datasets: [
        {
          label: "Course Enrollments",
          data: [200, 400, 750, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    })

    setBarOptions({
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          position: "top",
          max: 1200,
        },
        title: {
          display: true,
          text: "Education Dashboard - Enrollment and Graduation Rates",
        },
      },
    })

    //For Graduations rates
    setLineData({
      labels: [2019, 2020, 2021, 2022, 2023, 2024],
      datasets: [
        {
          label: "Business Program",
          data: [85, 60, 40, 81, 50, 85],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },

        {
          label: "Software Engineering",
          data: [65, 59, 80, 81, 70, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          tension: 0.4,
        },
      ],
    })

    setLineOptions({
      plugins: {
        legend: {
          position: top,
          labels: {
            color: textColor,
          },
          title: {
            display: true,
            text: "Graduation Rates",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    })
  }, [])

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 p-4">
        <div className="bg-white p-4 shadow rounded h-[300px]">
          <Chart
            type="bar"
            data={barData}
            options={barOptions}
            pt={{
              root: {
                className: "w-full rounded-md",
              },
            }}
          />
        </div>

        <div className="bg-white-500 p-4 shadow rounded h-[300px]">
          <Chart
            type="line"
            data={lineData}
            options={lineOptions}
            pt={{
              root: {
                className: "w-full rounded-md",
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
