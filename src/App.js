import React, { Component } from 'react';
import { Button,Container,Row,Col,Table } from 'reactstrap';
import TutorialDataService from "../services/tutorial.service";
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';

class App extends Component{
   _isMounted = false;
   constructor(props) {
      super(props);
      this.retrieveTutorials = this.retrieveTutorials.bind(this);
      this.state = {
        tutorials: [],
      };
    }
    componentDidMount() {
      this._isMounted = true;
      this.retrieveTutorials();
      
    }
    componentWillUnmount() {
      this._isMounted = false;
    }
   
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
         if (this._isMounted) {
            this.setState({
               tutorials: response.data
            });
            console.log(response.data);
         }
        })
        .catch(e => {
         //  console.log(e);
        });
    }
   render(){
      return(
         <div>
            <Container>
            <Table borderless>
                  <thead>
                  <tr>
                     <th>id</th>
                     <th>Tutorial Name</th>
                     <th>Description</th>
                     <th>Published</th>
                     <th>Created At</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.tutorials.map((tutorial, index) => <TableRow key = {index} 
                     data = {tutorial} />) }
                  </tbody>
               </Table>
            </Container>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.title}</td>
            <td>{this.props.data.description}</td>
            <td>{this.props.data.published}</td>
            <td>{moment(this.props.data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
         </tr>
      );
   }
}
export default App;