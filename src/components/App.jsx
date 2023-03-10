import { Component } from 'react';
import Form from '../components/Form/Form';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  formSubmithandler = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <section>Phonebook</section>
        <Form onSubmit={this.formSubmithandler} />
        <section>Contacts:</section>
        <Filter />
      </>
    );
  }
}
