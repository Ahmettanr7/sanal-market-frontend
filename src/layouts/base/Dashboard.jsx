import React from 'react'
import Navi from './Navi'
import { Row, Col } from 'react-bootstrap';
import Card from './Card';
import ItemList from './ItemList';

export default function Dashboard() {
    return (
        <div>
            <Navi/>
                <Row>
                    <Col sm={3}>
                        <Card />
                    </Col>
                    <Col sm={8}>
                        <ItemList/>
                    </Col>
                    <Col sm={1}>

                    </Col>
                </Row>
        </div>
    )
}
