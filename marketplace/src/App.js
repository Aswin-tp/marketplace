import React from 'react';
import './App.css';
import Marketplace from './components/MarketplaceComponent';
import './bootstrap.css';

function App() {
  var sectionStyle = {
    //backgroundImage: "url(" + bg  + ")",
    backgroundColor: '	#A9A9A9',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'

  };
  return (
    <div className="App" style={ sectionStyle }>
    <Marketplace />
    </div>
  );
}

export default App;
