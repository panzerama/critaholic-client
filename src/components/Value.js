import React, {Component} from 'react';
import './Component.css';
import { Col } from 'react-bootstrap';

class Value extends Component {
  render () {
    return (
      <Col md={3}>
        <h2>{this.props.value}</h2>
      </Col>
    );
  }
}

export default Value;