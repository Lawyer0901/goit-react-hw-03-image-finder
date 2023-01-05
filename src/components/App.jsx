import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { nanoid } from 'nanoid';
// import { Container } from './Container/Container';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {};

  componentDidMount() {}
  componentDidUpdate(_, prevState) {}

  // Добавляем новый контакт в список контактов

  // Удаляет контакт из списка

  // Controlled Input Filter
  handleInputValue = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  // Рендер всех элементов

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}
