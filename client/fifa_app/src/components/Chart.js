import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import DiscreteSlider from '../UI/DiscreteSlider';

const Chart = (props) => {
	let options = {
		chart: {
			height: 350,
			type: 'scatter',
			animations: {
				enabled: false
			},
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			}
		},

		xaxis: {
			tickAmount: 10,
			min: props.wageRanges.min,
			max: props.wageRanges.max
		},
		yaxis: {
			tickAmount: 6,
			min: 40,
			max: 100
		},
		markers: {
			size: 30
		},
		fill: {
			type: 'image',
			opacity: 0.9,
			image: {
				width: 60,
				height: 60
			}
		},
		legend: {
			show: false
		}
	};

	let seriesArr = props.players.map((player) => {
		return {
			name: player.Name,
			data: [ [ parseInt(player.Wage), player.Overall ] ]
		};
	});

	let imagesSrc = props.players.map((player) => {
		//const index = Math.floor(Math.random()*200);
		return `http://localhost:5000/images/${player.Index}.png`;
	});

	options.fill.image.src = imagesSrc;

	return (
		<Fragment>
			<div>
				{props.ageRanges.min ? (
					<h4>
						Ages: {props.ageRanges.min}-{props.ageRanges.max}
					</h4>
				) : null}
				<ReactApexChart options={options} series={seriesArr} type="scatter" height={350} />
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<DiscreteSlider onSliderChanged={props.onSliderChanged} />
				</div>
				<button onClick={props.onShowPlayers}>PLAY</button>
			</div>
		</Fragment>
	);
};

export default Chart;

// this.state = {

//   series: [
//     {
//     name: 'Messenger',
//     data: [
//       [133, 5.4],
//       [21.7, 4],
//       [25.4, 3]
//     ]
//   }, {
//     name: 'Instagram',
//     data: [
//       [6.4, 5.4],
//       [11.7, 4],
//       [15.4, 3],
//       [9, 2]
//     ]
//   }],
//   options: {
//     chart: {
//       height: 350,
//       type: 'scatter',
//       animations: {
//         enabled: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//       toolbar: {
//         show: true
//       }
//     },

//     xaxis: {
//       tickAmount: 6,
//       min: 0,
//       max: 600
//     },
//     yaxis: {
//       tickAmount: 6,
//       min: 40,
//       max: 100
//     },
//     markers: {
//       size: 20
//     },
//     fill: {
//       type: 'image',
//       opacity: 1,
//       image: {
//         src: [logo2,logo2,logo2,logo2,logo2,logo2,logo2,logo2,logo2,logo2,],
//         width: 40,
//         height: 40
//       }
//     },
//     legend: {
//       show:false,
//       labels: {
//         useSeriesColors: true
//       },
//       markers: {
//         customHTML: [
//           function() {
//             return ''
//           }, function() {
//             return ''
//           }
//         ]
//       }
//     }
//   }
// };
