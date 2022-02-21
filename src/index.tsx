import React from 'react';
import * as ReactDOM from 'react-dom';
import { ControlPanel } from './components/control-panel';
import { MyTwistyPlayer } from './components/twisty-player'
import { AppContextProvider } from './components/app-context';
import * as styles from './styles.module.scss';

const App = () => {
  return (
    <AppContextProvider>
      <div className={styles.app}>
        <MyTwistyPlayer />
        <ControlPanel />
      </div>
    </AppContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
