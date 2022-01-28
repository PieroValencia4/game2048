import { Button } from 'react-bootstrap';

const DirectionButton = ({ direction, func }) => (
    <Button onClick={func}>
        {direction}
    </Button>
);

export default DirectionButton;
