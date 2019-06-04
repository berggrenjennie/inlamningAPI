import React, { Component } from 'react';
export default function withHTTPRequests(WrappedComponent, selectData) {

    return class extends Component {
      constructor(props){
        super(props);

        this.state = {
            studentList:[],
        }
      }

      fetchstudents = () => {
        fetch('http://localhost:2000/students')
        .then((response)=> response.json().then((response)=>{
          this.setState({studentList:response});
        }));
      }

      render() {
        return (
          <WrappedComponent
            fetchstudents={this.fetchstudents}
            studentList={this.state.studentList}
            {...this.props}
          />
        )
      }
    };
  }
