import { DappProvider } from '@multiversx/sdk-dapp/wrappers';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './assets/scss/styles.scss';
import { apiTimeout, environment, walletConnectV2ProjectId } from './config/config.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DappProvider
            environment={environment}
            customNetworkConfig={{
                name: 'customConfig',
                apiTimeout: apiTimeout.toString(),
                walletConnectV2ProjectId,
            }}
            dappConfig={{
                shouldUseWebViewProvider: true,
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DappProvider>
    </React.StrictMode>,
);
