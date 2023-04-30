import { useTranslation } from 'react-i18next';
import GenericService from './GenericService';

function MattressCleaning() {
    const { t } = useTranslation();

    return (
        <GenericService cleaningServiceName="mattress_cleaning"></GenericService>
    );
}

export default MattressCleaning;
