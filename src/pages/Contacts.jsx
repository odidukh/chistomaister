/* eslint-disable jsx-a11y/iframe-has-title */
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
    COMPANY_EMAIL,
    COMPANY_PHONE_NUMBER,
    COMPANY_FACEBOOK_LINK,
    COMPANY_TELEGRAM_LINK,
    COMPANY_VIBER_LINK,
    COMPANY_INSTAGRAM_LINK,
} from '../constants';
import { useState } from 'react';

const Contacts = () => {
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    const handleOrderClose = () => setShowOrderModal(false);
    const handleOrderShow = () => setShowOrderModal(true);

    const handleQuestionClose = () => setShowQuestionModal(false);
    const handleQuestionShow = () => setShowQuestionModal(true);

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        handleOrderClose();
        console.log('submit_order');
    };

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        handleQuestionClose();
        console.log('submit_question');
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
                <Modal
                    show={showOrderModal}
                    onHide={handleOrderClose}
                    animation={true}
                    onSubmit={handleOrderSubmit}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {t('order_cleaning_modal_header')}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="contact-form col-auto">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>{t('email_address')}</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder={t('enter_your_email')}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>{t('phone_number')}</Form.Label>
                                <Form.Control
                                    type="phone"
                                    placeholder={t('enter_your_phone_number')}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Label>{t('your_name')}</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder={t('enter_your_name')}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleOrderClose}>
                            {t('close_button')}
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            size="lg"
                            className="btn-block"
                            onClick={handleOrderSubmit}
                        >
                            {t('order_cleaning_button')}
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={showQuestionModal}
                    onHide={handleQuestionClose}
                    animation={true}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{t('question_modal_header')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            className="contact-form col-auto"
                            onSubmit={handleQuestionSubmit}
                        >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>{t('email_address')}</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder={t('enter_your_email')}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>{t('phone_number')}</Form.Label>
                                <Form.Control
                                    type="phone"
                                    placeholder={t('enter_your_phone_number')}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Label>{t('your_name')}</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder={t('enter_your_name')}
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label>{t('your_message')}</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={handleQuestionClose}
                        >
                            {t('close_button')}
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            size="lg"
                            className="btn-block"
                        >
                            {t('send_message')}
                        </Button>
                    </Modal.Footer>
                </Modal>
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
