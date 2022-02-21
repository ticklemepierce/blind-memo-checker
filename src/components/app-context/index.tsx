import React, { createContext, useContext } from 'react';
import { TwistyPlayer } from "cubing/twisty";


console.log("new twisty player");
const twistyPlayer = new TwistyPlayer({
  puzzle: '3x3x3',
  backView: "none",
  background: "none",
  controlPanel: 'none'
});

export const AppContext = createContext({twistyPlayer});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={{twistyPlayer}}>
    {children}
  </AppContext.Provider>
)