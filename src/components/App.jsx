import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from 'service/API';
// import { nanoid } from 'nanoid';
// import { Container } from './Container/Container';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    search: '',
  };

  componentDidMount() {}
  componentDidUpdate(_, prevState) {}

  // Добавляем новый контакт в список контактов

  // Удаляет контакт из списка

  // Controlled Input Filter
  formSubmit = search => {
    this.setState({ search });
  };

  // Рендер всех элементов

  render() {
    const { search } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery search={search} />
      </>
    );
  }
}
