import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
        value: 0,
        label: '€0K'
    },
    {
        value: 600,
        label: '€600K'
    }
];

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                min={0}
                max={600}
                disabled={props.disabled}
            // getAriaValueText={valuetext}
            />
        </div>
    );
}