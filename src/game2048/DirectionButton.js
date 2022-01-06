import { Button } from 'react-bootstrap';

const DirectionButton = ({ direction, func }) => {
    return (
        <Button onClick={func}>
            {direction}
        </Button>
    );
};

export default DirectionButton;