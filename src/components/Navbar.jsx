import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BrandIcon from '../assets/pictures/white_logo_transparent_background.png';
import { COMPANY_NAME } from '../constants';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import { COMPANY_PHONE_NUMBER } from '../constants';
import NavDropdown from 'react-bootstrap/NavDropdown';

const SERVICES = [
    {
        name: 'couch',
        link: '/services/couch-cleaning',
        translationKey: 'navbar.services.dropdownElements.couch',
    },
    {
        name: 'upholstery',
        link: '/services/upholstery-cleaning',
        translationKey: 'navbar.services.dropdownElements.upholstery',
    },
    {
        name: 'mattress',
        link: '/services/mattress-cleaning',
        translationKey: 'navbar.services.dropdownElements.mattress',
    },
    {
        name: 'car',
        link: '/services/car-cleaning',
        translationKey: 'navbar.services.dropdownElements.car',
    },
];

function CustomNavbar() {
    const { t } = useTranslation('translation');

    return (
        <>
            <Navbar bg="primary" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand href="/" className="navbar-brand">
                        <img
                            alt=""
                            src={BrandIcon}
                            height="45"
                            className="d-inline-block align-top"
                        />
                        <span className="navbar-brand-name">
                            {COMPANY_NAME}
                        </span>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown
                            title={t('navbar.services.name')}
                            id="nav-dropdown"
                        >
                            {SERVICES.map((service) => (
                                <NavDropdown.Item
                                    key={service.name}
                                    href={service.link}
                                >
                                    {t(service.translationKey)}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <Nav.Link href="/about">{t('navbar.about')}</Nav.Link>
                        <Nav.Link href="/contacts">
                            {t('navbar.contacts')}
                        </Nav.Link>
                        {/* <Nav.Link href="/blog">{t('navbar.blog')}</Nav.Link> */}
                        <Nav.Link href="/photos">{t('navbar.photos')}</Nav.Link>
                        <Nav.Link href="/prices">{t('navbar.prices')}</Nav.Link>
                        {/* <Nav.Link href="/reviews">
                            {t('navbar.reviews')}
                        </Nav.Link> */}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a
                                href={`tel: ${COMPANY_PHONE_NUMBER}`}
                                type="phone"
                            >
                                {COMPANY_PHONE_NUMBER}
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;
