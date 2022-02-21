import React, {useEffect} from 'react';
import { useAppContext } from '../app-context';
import { ElementWithShadow } from '../../types';
import * as styles from './styles.module.scss';

export const MyTwistyPlayer = () => {
  const { twistyPlayer } = useAppContext();
  
  useEffect(() => {
    const twistyPlayerEl = document.getElementById('twistyPlayer');
    if (twistyPlayerEl) {
      twistyPlayerEl.appendChild(twistyPlayer);

      // Cleanup for hot reload
      const twistyPlayerRoot = document.querySelector('twisty-player') as ElementWithShadow;
      if (twistyPlayerRoot) {
        const sceneWrapper = twistyPlayerRoot.shadow && twistyPlayerRoot.shadow.querySelector('twisty-3d-scene-wrapper') as ElementWithShadow;
        const instances = sceneWrapper && sceneWrapper.shadow && sceneWrapper.shadow.querySelectorAll('twisty-3d-vantage');
        if (instances && instances.length > 1) {
          for (let i = 1; i < instances.length; i++) {
            const instance = instances.item(i);
            instance.remove();
          }
        }
      }
    }
  }, []);

  return (
    <div id='twistyPlayer' className={styles.twistyPlayer}/>
  );
}
