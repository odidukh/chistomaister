import { Button } from 'react-bootstrap';

const CouchCleaning = () => {
    return (
        <div className="couch-cleaning-container">
            <div className="couch-cleaning-container-content">
                <h1>Dry cleaning at your home</h1>
                <p>
                    Supporting cleaning of delicate and expensive couches, and
                    also dry cleaning really dirty furniture from spots, stains,
                    dust, and unpleaseant smells.
                </p>
                <Button>Calculate price</Button>
            </div>
        </div>
    );
};

export default CouchCleaning;
