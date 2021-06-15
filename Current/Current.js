import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity, selectHourly } from 'reducers/rootReducer';
import { fetchHourly, emptyHourly } from 'actions/index';

const Current = () => {
// const Current = ({ city, fetchCity}) => {

// const temp_max = city ? city.main.temp_max: 'Hola'

    const dispatch = useDispatch();
    const city = useSelector(selectCity);
    const hourly = useSelector(selectHourly);

    const getHourly = () => {
        try {
          const action = hourly ? emptyHourly() : fetchHourly(city);
          dispatch(action);
        } catch (err) {
          console.log('gg');
        }
      };

    const buttonText = hourly ? 'See less' : 'See more';

    return city && (
        <div>
            <div>{city.name}</div>
            <div>{city.main.temp_max}</div>
            <button onClick = {() => getHourly()}>{buttonText}</button>
        </div>
    )

    // const mapStateToProps = (state) => {
//   return {
//     city: state.cityReducer.city
//     // city: selectCity(state)
//   }
// }

// export default connect(mapStateToProps, { fetchCity })(Current);
}

export default Current;