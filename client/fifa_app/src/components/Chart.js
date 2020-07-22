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
		title: {
			text: `FIFA PLAYER COMPARISION`,
			align: 'center',
			margin: 100,
			offsetY: 15,
			floating: true,
			style: {
				color: '#00cc99',
				fontSize: '3.5vw'
			}
		},
		subtitle: {
			text: props.players.length === 0 ? `NO PLAYERS WITHIN AGE GROUP: ${props.ageRanges.min} - ${props.ageRanges.max}` : `PLAYERS WITHIN AGE GROUP: ${props.ageRanges.min} - ${props.ageRanges.max}`,
			align: 'center',
			margin: 30,
			offsetY: 90,
			floating: true,
			style: {
				color: props.players.length === 0 ? '#0099ff' : '#00cc99',
				fontSize: '2vw',
				fontWeight: 'bold'
			}
		},
		xaxis: {
			title: {
				text: 'Wage',
				style: {
					fontSize: '20px',
					fontWeight: 'bold',
					fontFamily: undefined,
					color: '#2eb8b8'
				}

			},
			tickAmount: 10,
			min: props.wageRanges.min,
			max: props.wageRanges.max
		},
		yaxis: {
			title: {
				text: 'Overall Rate',
				style: {
					fontSize: '20px',
					fontWeight: 'bold',
					fontFamily: undefined,
					color: '#2eb8b8'
				}

			},
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
			data: [[parseInt(player.Wage), player.Overall]]
		};
	});

	if (!props.players || props.players.length === 0) {
		seriesArr = [{
			name: 'gugul',
			data: [[50, 50]]
		}]

		//options.fill.image.src = ['http://localhost:5000/images/1.png'];
	}


	let imagesSrc = props.players.map((player) => {
		//logic for frontend only
		// const index = Math.floor(Math.random() * 100);
		// return window.location.origin + `/images/${index}.png`;
		//-------//
		return `http://localhost:5000/images/${player.Index}.png`;
	});

	options.fill.image.src = imagesSrc;
	if (!props.ageRanges.min) {
		options.subtitle.text = '';
	}

	return (
		<Fragment>
			<div>
				<ReactApexChart options={options} series={seriesArr} type="scatter" height={600} />
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
