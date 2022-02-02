import './Cell.css'

import { Col } from 'react-bootstrap';

const Cell = ({ value }) => (
    <Col className={`cell cell-${value}`}>
        {value}
    </Col>
);

export default Cell;
