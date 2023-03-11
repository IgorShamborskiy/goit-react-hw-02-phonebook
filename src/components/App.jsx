import { Component } from 'react';
import { ContactForm } from '../components/Form/Form';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  formSubmithandler = data => {
    console.log(data);
  };

  addPhone = newPhone => {
    this.setState(prevState => {
      return { phones: [...prevState.phones, newPhone] };
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addPhone} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
