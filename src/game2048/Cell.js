import './Cell.css'

import { Col } from 'react-bootstrap';

const Cell = ({ value }) => (
    <div className={`cell cell-${value}`}>
        {value}
    </div>
);

export default Cell;
