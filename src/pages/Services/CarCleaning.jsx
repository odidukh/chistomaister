import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ScrollDownSvg } from '../../assets/svg/scroll-down-arrow.svg';
import GenericService from './GenericService';

const CarCleaning = () => {
    const { t } = useTranslation();

    return (
        <GenericService cleaningServiceName="car_cleaning">
            <ScrollDownSvg />

            <CarCleaningAdvantages />
        </GenericService>
    );
};

const ADVANTAGES_LIST = [
    {
        title: 'services.car_cleaning.advantages.advantages_list.1.title',
        description:
            'services.car_cleaning.advantages.advantages_list.1.description',
    },
    {
        title: 'services.car_cleaning.advantages.advantages_list.2.title',
        description:
            'services.car_cleaning.advantages.advantages_list.2.description',
    },
    {
        title: 'services.car_cleaning.advantages.advantages_list.3.title',
        description:
            'services.car_cleaning.advantages.advantages_list.3.description',
    },
];

function CarCleaningAdvantages() {
    const { t } = useTranslation();

    return (
        <div className="car-cleaning-advantages">
            <h1>{t('services.car_cleaning.advantages.header')}</h1>
            <div className="car-cleaning-advantages-container">
                {ADVANTAGES_LIST.map((advantage, index) => (
                    <div
                        className="car-cleaning-advantages-container-item"
                        key={index}
                    >
                        <h2>{t(advantage.title)}</h2>
                        <p>{t(advantage.description)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarCleaning;
