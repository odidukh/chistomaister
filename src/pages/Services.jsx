import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import OrderModal from '../components/OrderModal';
import QuestionModal from '../components/QuestionModal';
import useOrderModal from '../hooks/useOrderModal';
import useQuestionModal from '../hooks/useQuestionModal';

function Services() {
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
        <div className="services-page">
            <div className="services-page-text-container">
                <h1>{t('services.header')}</h1>
                <p>{t('services.description')}</p>

                <div className="services-page-text-container-buttons">
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

export default Services;
