import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CouchCleaning = () => {
    const { t } = useTranslation();
    return (
        <div className="couch-cleaning-container">
            <div className="couch-cleaning-container-content">
                <h1>{t('couch_cleaning_header')}</h1>
                <p>{t('couch_cleaning_description')}</p>
                <Button size="lg">{t('couch_cleaning_button')}</Button>
            </div>
        </div>
    );
};

export default CouchCleaning;
