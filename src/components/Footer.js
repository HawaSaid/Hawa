import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import nav1icon from "../assets/img/linkedin.svg";
import nav2icon from "../assets/img/github.svg";
import nav3icon from "../assets/img/envelope.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hawa-afnane-said/"><img src={nav1icon} alt="" /></a>
                            <a href="https://github.com/HawaSaid"><img src={nav2icon} alt="" /></a>
                            <a href="mailto:hawaAfnane.engineer@gmail.com"><img src={nav3icon} alt="" /></a>                        
                            </div>
                            <p className="text-center"> CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}