import { useState } from 'react';
import * as R from 'ramda';

export const useHome = () => {
  const [state, setState] = useState({
    dtag: 'CatBoss',
    displayName: 'Cat Boss',
    bio: 'Trust me, I\'m a **Cat**<br/>[Cat Boss](https://catboss.network) | [Twitter](https://twitter.com/Catboss_Network) | [Medium](https://catboss.medium.com/) | [Github](https://github.com/catboss-network)<br/>A portion of our earnings will go directly to animal shelters',
    coverUrl: 'https://i.imgur.com/60ctw7b.jpg',
    profileUrl: 'https://i.imgur.com/Pn5SFLb.png',
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleFormChange = (label: string, value: any) => {
    handleSetState({
      [label]: value,
    });
  };

  return {
    state,
    handleSetState,
    handleFormChange,
  };
};
