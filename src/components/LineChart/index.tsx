/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

const labels = [
  "Test 1",
  "Test 2",
  "Test 3",
  "Test 4",
  "Test 5",
  "Test 6",
  "Test 7",
  "Test 8",
  "Test 9",
  "Test 10"
];

const weight = [20.0, 80.2, 59.1, 40.4, 29.9, 60.2, 59.8, 80.6, 85.6, 59.2];


const data = (canvas: any) => {

  const ctx = canvas.getContext('2d');
  var gradientStroke = 'rgba(29, 151, 108, 1)';
  var gradientFill = ctx.createLinearGradient(0, 25, 0, 300);
  gradientFill.addColorStop(0, 'rgba(29, 151, 108, 0.5)');
  gradientFill.addColorStop(0.65, 'rgba(29, 151, 108, 0)');
  gradientFill.addColorStop(1, 'rgba(29, 151, 108, 0)');
  return {
    labels: labels,
    datasets: [
      {
        data: weight,
        lineTension: 0.4,
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 0,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        fill: true,
        backgroundColor: gradientFill,
        borderWidth: 3,
      }
    ],
  }
}

const options = {
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 0
    }
  },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
          ticks: {
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              max: 100,
          },

      }],
      xAxes: [{
          gridLines: {
              zeroLineColor: "transparent"
          },
          ticks: {
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold",
              fontSize: 11
          }
      }]
  }
  }

const ChartWrapper = styled.div`
  margin-top: 15px;
`

const LineChart = () => (
  <ChartWrapper>
    <Line height={120} data={data} options={options} />
  </ChartWrapper>
)

export default LineChart
