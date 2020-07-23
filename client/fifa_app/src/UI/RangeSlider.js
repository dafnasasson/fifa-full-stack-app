import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CONSTANTS from '../constants';

const useStyles = makeStyles({
    root: {
        width: '55%',
    },
    title: {
        fontSize: '20px',
        color: '#00cc99',
        fontWeight: 'bold'
    }
});

const marks = [
    {
        value: CONSTANTS.MIN_POSSIBLE_WAGE,
        label: `€${CONSTANTS.MIN_POSSIBLE_WAGE}K`
    },
    {
        value: CONSTANTS.MAX_POSSIBLE_WAGE,
        label: `€${CONSTANTS.MAX_POSSIBLE_WAGE}K`
    }
];

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 100]);

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom className={classes.title}>
                Wage Filter
      </Typography>
            <Slider
                value={value}
                onChange={(event, val) => {
                    setValue(val);
                }}
                onChangeCommitted={(event, val) => { event.preventDefault(); props.onSliderChanged(val[0], val[1]) }}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                marks={marks}
                min={CONSTANTS.MIN_POSSIBLE_WAGE}
                max={CONSTANTS.MAX_POSSIBLE_WAGE}
                disabled={props.disabled}
            />
        </div>
    );
}