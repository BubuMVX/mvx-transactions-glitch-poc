import { PropsWithChildren } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from './Footer/Footer.tsx';
import { Header } from './Header/Header.tsx';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="min-vh-100 d-flex flex-column">
                    <Header />
                    <div className="mb-2 flex-grow-1">
                        {children}
                    </div>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};
