import React from 'react';
import { useSelector } from 'react-redux';
import { selectHourly } from '../../reducers/hourlyReducer';

const Hourly = () => {
    const hourly = useSelector(selectHourly);

    return hourly && hourly.data.map((data) => (
        <div>
            <div>{data.day}</div>
            <div>Temp Max: {data.main.temp_max}</div>
        </div>
    ));
};

export default Hourly;