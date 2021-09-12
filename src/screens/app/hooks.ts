import { useEffect } from 'react';
import * as jdenticon from 'jdenticon';

export const useApp = () => {
  useEffect(() => {
    // jdenticon theme
    jdenticon.configure({
      hues: [207],
      lightness: {
        color: [0.84, 0.84],
        grayscale: [0.84, 0.84],
      },
      saturation: {
        color: 0.48,
        grayscale: 0.48,
      },
      backColor: '#2a4766',
    });
  }, []);

  // ==========================
  // css
  // ==========================
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};
