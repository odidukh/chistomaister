import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CouchCleaning = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="couch-cleaning-container">
                <div className="couch-cleaning-container-content">
                    <h1>{t('couch_cleaning_header')}</h1>
                    <p>{t('couch_cleaning_description')}</p>
                    <Button
                        size="lg"
                        className="couch-cleaning-container-content-button"
                    >
                        {t('couch_cleaning_button')}
                    </Button>
                </div>
            </div>
            
            <div className="couch-cleaning-process">
                <h1 className="couch-cleaning-process-header">
                    {t('couch_cleaning_process_header')}
                </h1>

                <ol className="">
                    <li>
                        <h3>{t('couch_cleaning_process_step_1')}</h3>
                        <p>{t('couch_cleaning_process_step_1_description')}</p>
                    </li>
                    <li>
                        <h3>{t('couch_cleaning_process_step_2')}</h3>
                        <p>{t('couch_cleaning_process_step_2_description')}</p>
                    </li>
                    <li>
                        <h3>{t('couch_cleaning_process_step_3')}</h3>
                        <p>{t('couch_cleaning_process_step_3_description')}</p>
                    </li>
                    <li>
                        <h3>{t('couch_cleaning_process_step_4')}</h3>
                        <p>{t('couch_cleaning_process_step_4_description')}</p>
                    </li>
                    <li>
                        <h3>{t('couch_cleaning_process_step_5')}</h3>
                        <p>{t('couch_cleaning_process_step_5_description')}</p>
                    </li>
                    <li>
                        <h3>{t('couch_cleaning_process_step_6')}</h3>
                        <p>{t('couch_cleaning_process_step_6_description')}</p>
                    </li>
                </ol>
            </div>
        </>
    );
};

export default CouchCleaning;
