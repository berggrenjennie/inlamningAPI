import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button,Form,ListGroup} from 'react-bootstrap';

import CardComponent from '../components/CardComponent';

import withHTTPRequests from './../HOCS/withHTTPRequests';
import PropTypes from 'prop-types';

// Klassen innehåller olika states som används i komponenterna, funktioner som
// hanterar värdet i inputfält, och de olika knapparnas funktioner.
class DashBoardComponent extends Component {

  static propTypes = {
        studentList: PropTypes.array,// varnar om studentList inte är en array.
        fetchstudents: PropTypes.func.isRequired// funktionen är required .
      }

    constructor(props) {
      super(props);
          this.state ={
               name: '',
               email: '',
               gata:'',
               postnummer:'',
               ort:'',
               address:{
                 gata:'',
                 postnummer:'',
                 ort:''
               }
            };
      }

  //Metoden kallar på funktionen fetchstudents från withHTTPRequests component. //
    componentDidMount(){
            this.props.fetchstudents();
    }


  //funktionen hanterar input-fältens data och sätter state//
    handleInputChange = name => event => {
      const state = {};
        state[name] = event.target.value;
        this.setState(state);
    };


  //Metoden lägger till ett nytt objekt(student) till API:et//
    addstudentName= event => {
      event.preventDefault();
      let url = 'http://localhost:2000/students';
      const newstudent = {
        email: this.state.email,
        name: this.state.name ,
        address: {
          gata: this.state.gata,
          postnummer:this.state.postnummer,
          ort:this.state.ort
        }
      }

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(newstudent),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
        this.props.fetchstudents();
        this.setState({
          name: '',
          email: '',
          gata:'',
          postnummer:'',
          ort:'',
          address:{
            gata:'',
            postnummer:'',
            ort:''
          }
      })
      })
      .catch(error => console.error('Error:', error));
    }

    //Metoden raderar utpekade uppgifter från databasen//
    removestudentName(id) {
      fetch('http://localhost:2000/students/' + id, {
             method: 'delete'
           })
           .then(response => {
             this.props.fetchstudents();
           })
           .catch(error => console.error('Error:', error));
    }


    render(){
      const { name,email,gata,postnummer,ort} = this.state;
      return (
        <Fragment>
          <Container>
            <Row>
              <Col  lg="6">
                <div >
                  <CardComponent >
                    <ListGroup>
                      {this.props.studentList.map((student) =>

                        <ListGroup.Item className="studentListItem" key={student._id} >

                            {student.name}
                            <br/>
                            <Button variant="danger" onClick={(e) => this.removestudentName(student._id, e)} >Remove</Button>

                        </ListGroup.Item>
                      )}
                  </ListGroup>

                  <br />
                </CardComponent>
              </div>
            </Col>

            <Col  lg="6">
              <div >
                <CardComponent >
                  <Form onSubmit={this.addstudentName}>
                    <Form.Control className="inputForm" size="lg" type="text" placeholder="Name"
                      value={name}  onChange={this.handleInputChange('name')} />
                    <br />
                    <Form.Control className="inputForm" size="lg" type="email" placeholder="Email"
                      value={email}  onChange={this.handleInputChange('email')} />
                    <br />
                    <Form.Control className="inputForm" size="lg" type="text" placeholder="Gata"
                      value={gata}  onChange={this.handleInputChange('gata')} />
                    <br />
                    <Form.Control className="inputForm" size="lg" type="number" placeholder="Postnummer"
                      value={postnummer}  onChange={this.handleInputChange('postnummer')} />
                    <br />
                    <Form.Control className="inputForm" size="lg" type="text" placeholder="Ort"
                      value={ort}  onChange={this.handleInputChange('ort')} />
                    <br />
                    <Button variant="success" type="submit">Add student to database</Button>
                  </Form>

                  <br />
              </CardComponent>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
      );
    }
  }

  export default withHTTPRequests(DashBoardComponent);
