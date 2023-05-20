import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SERVICES_LIST = [
    {
        header: 'services.car_cleaning.header',
        image: 'car.jpeg',
        link: '/services/car-cleaning',
    },
    {
        header: 'services.couch_cleaning.header',
        image: 'blue-cushions-one-yellow-cushion.jpg',
        link: '/services/couch-cleaning',
    },
    {
        header: 'services.mattress_cleaning.header',
        image: 'mattress-cleaning.jpeg',
        link: '/services/mattress-cleaning',
    },
    {
        header: 'services.upholstery_cleaning.header',
        image: 'blue-cushions-one-yellow-cushion.jpg',
        link: '/services/upholstery-cleaning',
    },
];

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home-page">
            <h1>
                Ласкаво просимо у світ Чистоти, яку подарує Вам наш Майстер!
            </h1>

            <h2>Дізнайтеся детальніше про послуги нашого Майстра Чистоти:</h2>

            <div className="home-page-services">
                {SERVICES_LIST.map((service, index) => (
                    <Link
                        to={service.link}
                        className="home-page-services-item"
                        key={index}
                    >
                        <img
                            src={require(`../assets/images/${service.image}`)}
                            alt={service.header}
                        />
                        <h3>{t(service.header)}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
