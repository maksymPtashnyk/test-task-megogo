import './App.css';
import { Element } from 'react-scroll';
import { Main } from './components/Main';
import { WatchOffline } from './components/WatchOffline';
import { OptimalSubscription } from './components/OptimalSubscription';
import { Gifts } from './components/Gifts';
import { ActivateSubscription } from './components/ActivateSubscription';

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
        <OptimalSubscription />
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

