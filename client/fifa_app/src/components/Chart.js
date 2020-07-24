import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';

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
			text: `FIFA PLAYER COMPARISON`,
			align: 'center',
			margin: 100,
			offsetY: 15,
			floating: true,
			style: {
				color: '#00cc99',
				fontSize: '3.2vw'
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
				text: 'Wage (in thousand €)',
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
		tooltip: {
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				return (
					'<div style="margin: 2px; box-shadow: 0 0 20px 40px #ccc; padding: 10px; text-align: center; height: 110px; box-sizing: border-box; background-color: rgb(46, 184, 184,0.1)">' +
					'<p style="margin:2px;">' + 'Name: ' + '<span style="font-weight: bold;">' + w.config.series[seriesIndex].name + '</span>' + '</p>' +
					'<p>' + 'Rating: ' + '<span style="font-weight: bold;">' + w.config.series[seriesIndex].data[0][1] + '</span>' + '</p>' +
					'<p>' + 'Wage: ' + '<span style="font-weight: bold;">' + "€" + w.config.series[seriesIndex].data[0][0] + "K" + '</span>' + '</p>' +
					'</div>'
				);
			}
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


	let seriesArr = [{
		name: 'defualt',
		data: [[0, 0]]
	}];
	let imagesSrc = [];

	if (props.players && props.players.length !== 0) {
		seriesArr = props.players.map((player) => {
			return {
				name: player.Name,
				data: [[parseInt(player.Wage), player.Overall]]
			};
		});
		imagesSrc = props.players.map((player) => {
			return `http://localhost:5000/images/${player.Index}.png`;
		});
	}


	options.fill.image.src = imagesSrc;
	if (!props.ageRanges.min) {
		options.subtitle.text = '';
	}

	return (
		<Fragment>
			<div>
				<ReactApexChart options={options} series={seriesArr} type="scatter" height={500} />
			</div>
		</Fragment>
	);
};

export default Chart;