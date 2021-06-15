import React, { useState, useEffect } from 'react';
import { SearchStyled } from './Search.styled';
import { useDispatch } from 'react-redux';
import { fetchCity } from '../../actions/index';
// import { connect } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();

    // const city = useSelector((state) => state.city)
    const [input, setInput] = useState('');
    const onSearchChange = (e) => {
      setInput(e.target.value);
    };

    const onSearchSubmit = (e) => {
      e.preventDefault();
      try {
        dispatch(fetchCity(input));
      } catch (err) {
        console.log('gg');
      }
    };

    const minutes = (minutes) => minutes * (60 * 1000);

    useEffect(() => {
      const interval = setInterval(() => {
        dispatch(fetchCity(input));
      }, minutes(10));

      return () => clearInterval(interval);
    }, [dispatch, input]);

    return (
        <form onSubmit={onSearchSubmit}>
        <SearchStyled>
            <input type='text' value = {input} placeholder = 'Search the city' onChange = {onSearchChange}></input>
            <button>Search</button>
        </SearchStyled>
        </form>
    )
}



// export default connect(null, { fetchCity })(Search);
export default Search;