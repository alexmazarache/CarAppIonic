import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp,IonTabButton,IonIcon,IonLabel, IonRouterOutlet,IonTabs,IonTabBar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { CarProvider } from './todo/CarProvider';
import { AuthProvider, Login, PrivateRoute } from './auth';
import { CarEdit, CarList } from './todo';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import { ellipse, triangle } from 'ionicons/icons';
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <AuthProvider>
          <Route path="/login" component={Login} exact={true}/>
          
          <CarProvider>
            <PrivateRoute path="/posts" component={CarList} exact={true}/>
            <PrivateRoute path="/post" component={CarEdit} exact={true}/>
            <PrivateRoute path="/post/:id" component={CarEdit} exact={true}/>
          </CarProvider>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/posts"/>}/>
        </AuthProvider>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
