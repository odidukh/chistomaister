import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import OrderComponent from '../components/OrderComponent';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="about-page">
            <div className="about-page-text-container">
                <h1 className="about-page-header">{t('about.header')}</h1>
                <p>{t('about.description')}</p>
            </div>

            <div className="about-page-technologies-container">
                <h2>{t('about.technologies')}</h2>

                <div>
                    <h3>{t('about.equipment')}</h3>
                    <p className="about-page-technologies-description">
                        {t('about.equipment_description')}
                    </p>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block carousel-image"
                                src="https://s1.kaercher-media.com/products/11002400/main/1/d0.jpg"
                                alt="Kärcher Puzzi 8/1"
                            />
                            <Carousel.Caption className="carousel-caption">
                                Kärcher Puzzi 8/1
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carousel-image"
                                src="https://s1.kaercher-media.com/products/16298910/main/1/d0.jpg"
                                alt="Kärcher WD 3 P PREMIUM"
                            />
                            <Carousel.Caption className="carousel-caption">
                                Kärcher WD 3 P PREMIUM
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div>
                    <h3>{t('about.chemicals')}</h3>
                    <p className="about-page-technologies-description">
                        {t('about.chemicals_description')}
                    </p>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block carousel-image"
                                src="https://chemspec.com.ua/images/virtuemart/product/All_Fiber_Textile_Rinse_EU_Full_10.png"
                                alt="Chemspec All Fiber Textile Rinse"
                            />
                            <Carousel.Caption>
                                Chemspec All Fiber Textile Rinse
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carousel-image"
                                src="https://chemspec.com.ua/images/virtuemart/product/shot_12.jpg"
                                alt="Enzall"
                            />
                            <Carousel.Caption>Enzall</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block carousel-image"
                                src="https://s1.kaercher-media.com/products/62954900/main/1/d0.jpg"
                                alt="Kärcher RM 769"
                            />
                            <Carousel.Caption>Kärcher RM 769</Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <OrderComponent />
        </div>
    );
};

export default About;
