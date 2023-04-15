import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import OrderComponent from '../components/OrderComponent';
import { PRICE_LIST } from '../constants';

const Prices = () => {
    const { t } = useTranslation();
    return (
        <main className="price-page">
            <div className="price-block">
                <h1 className="price-page-header">{t('prices.main_header')}</h1>
                <article className="price-sections-container">
                    <section className="price-section">
                        <h2 className="price-section-header">
                            {t('prices.furniture_cleaning.header')}
                        </h2>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>{t('prices.table.column_1')}</th>
                                    <th>{t('prices.table.column_2')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(PRICE_LIST.upholstery).map(
                                    ([key, value]) => (
                                        <tr key={key}>
                                            <td>
                                                {t(
                                                    'prices.furniture_cleaning.type.' +
                                                        key
                                                )}
                                            </td>
                                            <td>{value}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </section>

                    <section className="price-section">
                        <h2 className="price-section-header">
                            {t('prices.mattress_cleaning.header')}
                        </h2>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>{t('prices.table.column_1')}</th>
                                    <th>{t('prices.table.column_2')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(PRICE_LIST.mattress).map(
                                    ([key, value]) => (
                                        <tr key={key}>
                                            <td>
                                                {t(
                                                    'prices.mattress_cleaning.type.' +
                                                        key
                                                )}
                                            </td>
                                            <td>{value}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </section>

                    <section className="price-section">
                        <h2 className="price-section-header">
                            {t('prices.car_cleaning.header')}
                        </h2>
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <th>{t('prices.table.column_1')}</th>
                                    <th>{t('prices.table.column_2')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(PRICE_LIST.car).map(
                                    ([key, value]) => (
                                        <tr key={key}>
                                            <td>
                                                {t(
                                                    'prices.car_cleaning.type.' +
                                                        key
                                                )}
                                            </td>
                                            <td>{value}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </section>
                </article>
            </div>
            <OrderComponent />
        </main>
    );
};

export default Prices;
