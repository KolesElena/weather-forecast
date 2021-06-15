import React from 'react'; 
import Search from './components/Search/Search';
import Current from './components/Current/Current';
import Hourly from './components/Hourly/Hourly';

const App = () => {
  return (
    <div>
        <Search />
        <Current />
        <Hourly />
    </div>
  );
}

export default App;