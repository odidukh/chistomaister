import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();

    const handleOrderShow = () => {
        console.log('Order button clicked');
    };

    const handleQuestionShow = () => {
        console.log('Question button clicked');
    };

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
        </div>
    );
}

export default Services;
