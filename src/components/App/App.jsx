import { ContactList } from 'components/ContactList';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import css from './App.module.css';

// import dataContacts from '../../data/contacts.json';

export class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'John Bold', number: '(067)-323-43-43' },
      { id: 2, name: 'Jane Gold', number: '(066)-123-24-43' },
      { id: 3, name: 'Jim Fold', number: '(097)-456-40-39' },
      { id: 4, name: 'Jack Daniels', number: '(050)-488-48-38' },
    ],
    filter: '', 
  };

  handleChangeInput = event => {
    const { value } = event.target;
    console.log(value)
    this.setState({filter: value});
  }

  addContact = (name, number) => {
    this.setState(prevState =>{
      return {
        contacts: [...prevState.contacts, {
          name: name,
          number: number,
          id: nanoid(),
        },],
      }
    })
  }

  render() {
    return (
      <div className={css.allContent}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          handleChangeInput={this.handleChangeInput}
          
        />
      </div>
    );
  }
}
