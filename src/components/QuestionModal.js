import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function QuestionModal({ show, handleClose, handleSubmit }) {
    const { t } = useTranslation();
    return (
        <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>{t('question_modal_header')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="contact-form col-auto" onSubmit={handleSubmit}>
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
                <Button variant="secondary" onClick={handleClose}>
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
    );
}

export default QuestionModal;
