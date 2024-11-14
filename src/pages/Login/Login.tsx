import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import {
    ExtensionLoginButton,
    ExtensionLoginButtonPropsType,
    LedgerLoginButton,
    LedgerLoginButtonPropsType,
    OperaWalletLoginButtonPropsType,
    WalletConnectLoginButton,
    WalletConnectLoginButtonPropsType,
    WebWalletLoginButton,
    WebWalletLoginButtonPropsType,
} from '@multiversx/sdk-dapp/UI';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RouteNamesEnum } from '../../routes/routeNames.enum.tsx';

type CommonPropsType =
    | OperaWalletLoginButtonPropsType
    | ExtensionLoginButtonPropsType
    | WebWalletLoginButtonPropsType
    | LedgerLoginButtonPropsType
    | WalletConnectLoginButtonPropsType

export const Login = () => {
    const navigate = useNavigate();
    const isLoggedIn = useGetIsLoggedIn();
    const commonProps: CommonPropsType = {
        callbackRoute: RouteNamesEnum.home,
        nativeAuth: {
            expirySeconds: 30 * 24 * 60,
        },
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate(RouteNamesEnum.home);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Row className="h-100 flex-column gy-3 justify-content-center align-items-center">
            <Col xs={12} md={4} className="d-grid">
                <WalletConnectLoginButton {...commonProps}>
                    <i className="mvx-icon-xportal"></i> xPortal
                </WalletConnectLoginButton>
            </Col>
            <Col xs={12} md={4} className="d-grid">
                <ExtensionLoginButton {...commonProps}>
                    <i className="mvx-icon-defi-wallet"></i> Browser extension
                </ExtensionLoginButton>
            </Col>
            <Col xs={12} md={4} className="d-grid">
                <WebWalletLoginButton {...commonProps}>
                    <i className="mvx-icon-web-wallet"></i> Web Wallet
                </WebWalletLoginButton>
            </Col>
            <Col xs={12} md={4} className="d-grid">
                <LedgerLoginButton {...commonProps}>
                    <i className="mvx-icon-ledger"></i> Ledger
                </LedgerLoginButton>
            </Col>
        </Row>
    );
};
