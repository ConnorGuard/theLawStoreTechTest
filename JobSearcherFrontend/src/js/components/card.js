import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../css/components/card.css';


export default function Job(props) {
    return (
        <div id="jobs">
            <Card key = {props.i} className = {(props.toggled) ? "Grid" : "List"}>
                <Card.Body>
                    <Card.Title>{props.job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.job.jobType}</Card.Subtitle>
                    <Card.Text>
                        {props.job.description}
                    </Card.Text>
                    <Card.Text>
                        A${props.job.salary}/yr
                    </Card.Text>
                    <Button variant="primary">Apply for this job</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.job.date}</small>
                </Card.Footer>
            </Card>
        </div>
    );
}
