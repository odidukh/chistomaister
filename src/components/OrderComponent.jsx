import useOrderModal from '../hooks/useOrderModal';
import useQuestionModal from '../hooks/useQuestionModal';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import OrderModal from './OrderModal';
import QuestionModal from './QuestionModal';

function OrderComponent() {
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
        <div className="contact-form-container">
            <h1>{t('order_cleaning_header')}</h1>

            <div className="contact-buttons-group">
                <Button variant="primary" onClick={handleOrderShow} size="lg">
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
    );
}

export default OrderComponent;
