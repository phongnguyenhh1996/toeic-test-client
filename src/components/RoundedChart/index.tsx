// @ts-nocheck
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'
import Chart from 'chart.js'

const data = (canvas: any) => {
  console.log(canvas);
  const bar_ctx = canvas.getContext('2d');
  const reading_gradient = bar_ctx.createLinearGradient(0, 0, 0, 170);
  reading_gradient.addColorStop(0, "#58beff");
  reading_gradient.addColorStop(1, "#2770C7");
  const listening_gradient = bar_ctx.createLinearGradient(0, 0, 0, 170);
  listening_gradient.addColorStop(0, "#F8A880");
  listening_gradient.addColorStop(1, "#F67A7C");

  return ({
    labels: ['Listening', 'Reading'],
    datasets: [
      {
        label: 'Percent',
        data: [35, 65],
        backgroundColor: [
          listening_gradient,
          reading_gradient,
        ],
      },
    ],
  })
}

const options = {
  elements: {
    arc: {
        roundedCornersFor: 0,
        borderWidth: 12,
    }
  },
  cutoutPercentage: 80,
  legend: {
    display: false
 },
}

const ChartWrapper = styled.div`
  margin-top: 30px;
`

const RoundedChart = () => (
  <ChartWrapper>
    <Doughnut height={180} data={data} options={options} />
  </ChartWrapper>
)

window.arcSpacing = 0.1;

Chart.elements.Arc.prototype.draw = function() {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var sA = vm.startAngle;
  var eA = vm.endAngle;

  ctx.beginPath();
  ctx.arc(vm.x, vm.y, vm.outerRadius, sA + window.arcSpacing, eA - window.arcSpacing);
  ctx.strokeStyle = vm.backgroundColor;
  ctx.lineWidth = vm.borderWidth;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();
};


export default RoundedChart