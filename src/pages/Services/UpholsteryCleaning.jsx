import { useTranslation } from 'react-i18next';
import GenericService from './GenericService';

function UpholsteryCleaning() {
    const { t } = useTranslation();

    return (
        <GenericService cleaningServiceName="upholstery_cleaning"></GenericService>
    );
}

export default UpholsteryCleaning;
