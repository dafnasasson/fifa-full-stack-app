import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '50%'
	},
	margin: {
		height: theme.spacing(3)
	}
}));

const marks = [
	{
		value: 0,
		label: '0-100'
	},
	{
		value: 100,
		label: '100-200'
	},
	{
		value: 200,
		label: '200-300'
	},
	{
		value: 300,
		label: '300-400'
	},
	{
		value: 400,
		label: '400-500'
	},
	{
		value: 500,
		label: '500-600'
	}
];

function valuetext(value) {
	console.log(value);
	return `${value}`;
}

export default function DiscreteSlider(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography id="discrete-slider-custom" gutterBottom>
				Wage Range Picker
			</Typography>
			<Slider
				onChangeCommitted={(event, val) => props.onSliderChanged(val)}
				defaultValue={0}
				aria-labelledby="discrete-slider-custom"
				step={100}
				marks={marks}
				min={0}
				max={500}
			/>
		</div>
	);
}
