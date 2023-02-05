/* eslint-disable jsx-a11y/iframe-has-title */
import { Button, Form } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div className="contacts-page">
            <h1>Де ми працюємо</h1>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=Тальнівський+район,+Черкаська+область,+Україна&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=10"
                    width="80%"
                    height="450"
                    style={{ border: 0, margin: '0 auto', display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <h1>Замовте хімчистку у найкращого Майстра Чистоти!</h1>
            <Form className="contact-form col-auto">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone" />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="btn-block"
                >
                    Submit
                </Button>
            </Form>

            <div
                className="contacts"
                style={{
                    height: '30vh',
                }}
            >
                Aloha
            </div>
        </div>
    );
};

export default Contacts;
