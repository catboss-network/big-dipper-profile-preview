import { useState } from 'react';
import * as R from 'ramda';

export const useHome = () => {
  const [state, setState] = useState({
    dtag: '',
    displayName: '',
    bio: '',
    coverUrl: '',
    profileUrl: '',
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
