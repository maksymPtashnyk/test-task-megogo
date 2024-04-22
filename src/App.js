import React from 'react';
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Main } from './components/Main';
import { WatchOffline } from './components/WatchOffline';
import { OptimalSubscription } from './components/OptimalSubscription';
import { Gifts } from './components/Gifts';
import { ActivateSubscription } from './components/ActivateSubscription';

const App = () => {
  return (
    <Fullpage>

      <FullPageSections>
       
        <FullpageSection>
          <Main />
        </FullpageSection>
        <FullpageSection>
          <WatchOffline />
        </FullpageSection>
        <FullpageSection>
          <OptimalSubscription />
        </FullpageSection>
        <FullpageSection>
          <Gifts />
        </FullpageSection>
        <FullpageSection>
          <ActivateSubscription />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default App;
