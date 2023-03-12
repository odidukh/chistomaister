import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { PRICE_LIST } from '../constants';

const Prices = () => {
    const { t } = useTranslation();
    return (
        <div>
            <section>
                <h2>{t('prices.furniture_cleaning.header')}</h2>
                <Table>
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
                                    <td>{t('prices.furniture_cleaning.type.' + key)}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
            </section>
            <section>
                <h2>{t('prices.mattress_cleaning.header')}</h2>
                <Table>
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
                                    <td>{t('prices.mattress_cleaning.type.' + key)}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
            </section>

            <section>
                <h2>{t('prices.car_cleaning.header')}</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>{t('prices.table.column_1')}</th>
                            <th>{t('prices.table.column_2')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(PRICE_LIST.car).map(([key, value]) => (
                            <tr key={key}>
                                <td>{t('prices.car_cleaning.type.' + key)}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>
        </div>
    );
};

export default Prices;
