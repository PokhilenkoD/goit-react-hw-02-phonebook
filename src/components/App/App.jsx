import { ContactsForm } from 'components/ContactsForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactList';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addsNameContacts = value => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: value.name,
            number: value.number,
          },
        ],
      };
    });
  };

  filterContacts = (name) => {
    this.state.contacts.filter(contact => {
      console.log(contact)
    })
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm addsContacts={this.addsNameContacts} />
        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}
