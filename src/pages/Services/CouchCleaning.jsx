import { useTranslation } from 'react-i18next';
import GenericService from './GenericService';

function CleaningProcess(props) {
    const { t } = useTranslation();
    return (
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
    );
}

const CouchCleaning = () => {
    return (
        <GenericService cleaningServiceName="couch_cleaning">
            <CleaningProcess />
        </GenericService>
    );
};

export default CouchCleaning;
