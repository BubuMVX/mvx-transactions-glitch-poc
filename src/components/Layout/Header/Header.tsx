import { useGetAccount, useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { logout } from '@multiversx/sdk-dapp/utils';
import React from 'react';
import { Badge, Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { environment } from '../../../config/config.tsx';
import { RouteNamesEnum } from '../../../routes/routeNames.enum.tsx';
import { Username } from '../../Username.tsx';

export const Header = () => {
    const isLoggedIn = useGetIsLoggedIn();
    const account = useGetAccount();

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        sessionStorage.clear();
        // noinspection JSIgnoredPromiseFromCall
        logout(RouteNamesEnum.login);
    };

    return (
        <Navbar expand="lg" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand as={Link} to={RouteNamesEnum.home}>
                    Transactions Glitch PoC
                </Navbar.Brand>
                {isLoggedIn ? (
                    <Row className="align-items-center">
                        <Col xs={'auto'}>
                            <Badge bg="secondary">
                                {environment}
                            </Badge>
                        </Col>
                        <Col xs={'auto'}>
                            <Username account={account} />
                        </Col>
                        <Col xs={'auto'}>
                            <Button
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Col>
                    </Row>
                ) : null}
            </Container>
        </Navbar>
    );
};
