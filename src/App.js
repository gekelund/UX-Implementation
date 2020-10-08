import React from 'react';
import AppStyles from './AppStyles.styles.tw';
import Routes from './Routes';
import BottomNav from './Components/BottomNav';


const App = () => {
  return (
    <AppStyles>
      <Routes />
     {/*  <BottomNav /> */}
    </AppStyles>
  );
}

export default App;
