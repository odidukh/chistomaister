import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BrandIcon from '../assets/pictures/white_logo_transparent_background.png';
import { COMPANY_NAME } from '../constants';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import { PHONE_NUMBER } from '../constants';

function BrandExample() {
    const { t } = useTranslation('translation');
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand
                        href="/services"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '0.7rem',
                        }}
                    >
                        <img
                            alt=""
                            src={BrandIcon}
                            height="45"
                            className="d-inline-block align-top"
                        />
                        <span
                            style={{
                                display: 'flex',
                                alignSelf: 'center',
                            }}
                        >
                            {COMPANY_NAME}
                        </span>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/services">{t('services')}</Nav.Link>
                        <Nav.Link href="/about">{t('about')}</Nav.Link>
                        <Nav.Link href="/contacts">{t('contacts')}</Nav.Link>
                        <Nav.Link href="/blog">{t('blog')}</Nav.Link>
                        <Nav.Link href="/photos">{t('photos')}</Nav.Link>
                        <Nav.Link href="/prices">{t('prices')}</Nav.Link>
                        <Nav.Link href="/reviews">{t('reviews')}</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href={`tel: ${PHONE_NUMBER}`} type="phone">
                                {PHONE_NUMBER}
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;
