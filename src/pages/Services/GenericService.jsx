import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import OrderButtonGroup from '../../components/OrderButtonGroup';

function GenericService({ children, cleaningServiceName }) {
    const { t } = useTranslation();

    return (
        <div className="service-page">
            <div
                className={classNames('hero-section', `${cleaningServiceName}`)}
            >
                <div className="hero-section-text-container">
                    <h1>{t(`services.${cleaningServiceName}.header`)}</h1>
                    <p>{t(`services.${cleaningServiceName}.description`)}</p>

                    <OrderButtonGroup />
                </div>
            </div>

            {children}
        </div>
    );
}

export default GenericService;
