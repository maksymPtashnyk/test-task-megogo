import './App.css';
import { Element } from 'react-scroll';
import { Main } from './components/Main';
import { WatchOffline } from './components/WatchOffline';
import { OptimalSubcription } from './components/OptimalSubcription';
import { Gifts } from './components/Gifts';
import { ActivateSubscription } from './components/ActivateSubcription';

const App = () => {
  return (
    <div>
      <Element name="main" className="section">
        <Main />
      </Element>
      <Element name="watch-offline" className="section">
        <WatchOffline />
      </Element>
      <Element name="optimal-subscription" className="section">
        <OptimalSubcription />
      </Element>
      <Element name="gifts" className="section">
        <Gifts />
      </Element>
      <Element name="activate-subscription" className="section">
        <ActivateSubscription />
      </Element>
    </div>
  );
};

export default App;

