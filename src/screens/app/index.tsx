import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SettingsProvider } from '@contexts';
import { InnerApp } from './components';
import { useApp } from './hooks';

function App(props: AppProps) {
  useApp();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Big Dipper 2.0 Desmos profile preview created and maintained by Cat Boss." />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="og:title" property="og:title" content="Big Dipper 2.0 Profile Preview" />
        <meta name="og:description" property="og:description" content="Big Dipper 2.0 Desmos profile preview created and maintained by Cat Boss." />
        <meta name="twitter:card" content="summary" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:image" content="https://i.imgur.com/Pn5SFLb.png" />
        <title>Big Dipper 2.0 Profile Preview</title>
      </Head>
      <SettingsProvider>
        <InnerApp {...props} />
      </SettingsProvider>
    </>
  );
}

export default App;
