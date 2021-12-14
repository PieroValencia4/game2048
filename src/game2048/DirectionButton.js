import { Button } from 'react-bootstrap';

const DirectionButton = ({ direction }) => {
    return (
        <Button>
            {direction}
        </Button>
    );
};

export default DirectionButton;