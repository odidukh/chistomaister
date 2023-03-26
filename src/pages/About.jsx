import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
                    <Carousel>
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
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.ikea.com/PIAimages/0452022_PE694202_S5.JPG"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.ikea.com/PIAimages/0452022_PE694202_S5.JPG"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default About;
