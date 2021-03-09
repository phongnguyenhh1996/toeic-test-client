// @ts-nocheck
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'
import Chart from 'chart.js'
import PieceLabel from './PieceLabel'

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
  animation: {
    onComplete: function(animation) {
      if (!window.segmentHovered) {
        var value = this.config.data.datasets[0].data.reduce(function(a, b) {
          return a + b;
        }, 0);
        var label = 'T O T A L';

        textInCenter(value, label);
      }
    },
  },
  pieceLabel: {
    fontColor: '#000',
    position: 'outside',
    segment: true
  },
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
  position: relative;
`

const TooltipCanvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const RoundedChart = () => (
  <ChartWrapper>
    <Doughnut height={200} data={data} options={options} />
    <TooltipCanvas id="tooltip-canvas" width="150" height="100" />
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

Chart.plugins.register({
  beforeInit : function (chartInstance) {
    chartInstance.pieceLabel = new PieceLabel();
  },
  afterDatasetsDraw : function (chartInstance) {
    chartInstance.pieceLabel.afterDatasetsDraw(chartInstance);
  }
})

function textInCenter(value, label) {
  var tooltipCanvas = document.getElementById("tooltip-canvas")
  var ctx = tooltipCanvas.getContext('2d');
  ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height)

	ctx.restore();

  // Draw value
  ctx.fillStyle = '#333333';
  ctx.font = '24px sans-serif';
  ctx.textBaseline = 'middle';

  // Define text position
  var textPosition = {
    x: Math.round((tooltipCanvas.width - ctx.measureText(value).width) / 2),
    y: tooltipCanvas.height / 2,
  };

  ctx.fillText(value, textPosition.x, textPosition.y);

  // Draw label
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '10px sans-serif';

  // Define text position
  var labelTextPosition = {
    x: Math.round((tooltipCanvas.width - ctx.measureText(label).width) / 2),
    y: tooltipCanvas.height / 2,
  };

  ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
  ctx.save();
}

export default RoundedChart
