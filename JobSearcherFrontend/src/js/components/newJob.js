import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../css/components/form.css';
export default function NewJob() {
    return (
        <div id="newJob">
            <Card ClassName="newJobCard" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Create New Job</Card.Title>
                    <Form>
                        <Form.Group controlId="newJob.Title">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>

                        <Form.Group controlId="newJob.JobType">
                            <Form.Label>Job type</Form.Label>
                            <Form.Control as="select">
                                <option>Frontend</option>
                                <option>Backend</option>
                                <option>Fullstack</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="newJob.Descriprion">
                            <Form.Label>Description </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group controlId="newJob.Salary">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
