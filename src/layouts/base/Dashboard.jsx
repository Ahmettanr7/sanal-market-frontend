import React from 'react'
import Navi from './Navi'
import { Row, Col, Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import CarouselLayout from './CarouselLayout';

export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <Route exact path='/' component={CarouselLayout}/>
            <Container>
                <Route exact path='/' component={CategoryList}/>
            </Container>
            
                <Row>
                    <Col sm={3}>
                    <Route exact path='/items/:id' component={CategoryList}/>
                    </Col>
                    <Col sm={8}>
                    <Route exact path='/items/:id' component={ItemList}/>
                    </Col>
                    <Col sm={1}>
                    <Route exact path='/items/:id'/>
                    </Col>
                </Row>
        </div>
    )
}
