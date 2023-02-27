/* eslint-disable jsx-a11y/iframe-has-title */
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
    COMPANY_EMAIL,
    COMPANY_PHONE_NUMBER,
    COMPANY_FACEBOOK_LINK,
    COMPANY_TELEGRAM_LINK,
    COMPANY_VIBER_LINK,
    COMPANY_INSTAGRAM_LINK,
} from '../constants';
import OrderModal from '../components/OrderModal';
import QuestionModal from '../components/QuestionModal';
import useOrderModal from '../hooks/useOrderModal';
import useQuestionModal from '../hooks/useQuestionModal';

const Contacts = () => {
    const { showOrderModal, handleOrderShow, handleOrderClose } =
        useOrderModal();
    const { showQuestionModal, handleQuestionShow, handleQuestionClose } =
        useQuestionModal();

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        handleOrderClose();
    };

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        handleQuestionClose();
    };

    const { t } = useTranslation();
    return (
        <div className="contacts-page">
            <div className="map-container">
                <h1>{t('where_we_work_header')}</h1>
                <p>{t('where_we_work_description')}</p>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=Тальнівський+район,+Черкаська+область,+Україна&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=10"
                        width="80%"
                        height="450"
                        style={{
                            border: 0,
                            margin: '0 auto',
                            display: 'block',
                        }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="contact-form-container">
                <h1>{t('order_cleaning_header')}</h1>

                <div className="contact-buttons-group">
                    <Button
                        variant="primary"
                        onClick={handleOrderShow}
                        size="lg"
                    >
                        {t('order_cleaning_button')}
                    </Button>
                    <Button
                        variant="warning"
                        onClick={handleQuestionShow}
                        size="lg"
                    >
                        {t('question_button')}
                    </Button>
                </div>

                <OrderModal
                    show={showOrderModal}
                    handleClose={handleOrderClose}
                    handleSubmit={handleOrderSubmit}
                />
                <QuestionModal
                    show={showQuestionModal}
                    handleClose={handleQuestionClose}
                    handleSubmit={handleQuestionSubmit}
                />
            </div>

            <div className="contact-info-container">
                <div>
                    <h2>{t('contact_info_header')}</h2>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h3 className="contact-info-item-header">
                                {t('our_address')}
                            </h3>
                            <p className="contact-info-item-text">
                                {t('bussiness_address')}
                            </p>
                        </div>
                        <div className="contact-info-item">
                            <h3 className="contact-info-item-header">
                                {t('our_phone_number')}
                            </h3>
                            <p className="contact-info-item-text">
                                {COMPANY_PHONE_NUMBER}
                            </p>
                        </div>
                        <div className="contact-info-item">
                            <h3 className="contact-info-item-header">
                                {t('our_email_address')}
                            </h3>
                            <p className="contact-info-item-text">
                                <a href={`mailto:${COMPANY_EMAIL}`}>
                                    {COMPANY_EMAIL}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="social-networks-container">
                <h1>{t('social_networks_header')}</h1>
                <div className="social-networks">
                    <a
                        href={COMPANY_FACEBOOK_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://img.icons8.com/fluency/48/null/facebook-new.png"
                            alt="facebook"
                        />
                    </a>
                    <a
                        href={COMPANY_INSTAGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://img.icons8.com/fluency/48/null/instagram-new.png"
                            alt="instagram"
                        />
                    </a>
                    <a
                        href={COMPANY_TELEGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://img.icons8.com/color/48/null/telegram-app--v1.png"
                            alt="telegram"
                        />
                    </a>
                    <a
                        href={COMPANY_VIBER_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://img.icons8.com/color/48/null/viber.png"
                            alt="viber"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
