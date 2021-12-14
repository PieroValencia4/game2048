import { Col } from 'react-bootstrap';

const Cell = ({ value }) => {
    const colors = new Map([
        [0, '#F3A392'],
        [2, '#F3D692'],
        [4, '#B6E14A'],
        [8, '#81F757'],
        [16, '#6FF48B'],
        [32, '#80F5C4'],
        [64, '#80C0F5'],
        [128, '#808EF5'],
        [256, '#AE80F5'],
        [512, '#F580F5'],
        [1024, '#F44051'],
        [2048, '#F48600']
    ]);
    
    return (
        <Col style={{ backgroundColor: colors.get(value) }}>
            <b style={{ fontSize: '40px' }}>{value}</b>
        </Col>
    );
};

export default Cell;