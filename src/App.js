import { useState, useMemo } from 'react';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import ContactsFilter from './components/ContactsFilter/ContactsFilter';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 'c7a273d-8bfr-66gr-wef2-4f4d57ea2d0',
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: 'anctrjd-8bfr-66gr-wef2-4f4d57ea2d0',
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: 'dkt846a-8bfr-66gr-wef2-4f4d57ea2d0',
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: 'hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0',
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    // Проверка на дубликат
    const duplicateName = contacts.find(
      contact => contact.name === newContact.name,
    );

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    setContacts(() => [...contacts, newContact ]
    );
  };

  // Следит за полем фильтрации и пишет в стейт
  const changeFilter = event => {
    event.preventDefault();
    setFilter(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  // Фильтрует и возвращает результат фильтра

  const filterContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    } else {
      return contacts;
    }
  },[contacts,filter]);


  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   if (filter !== '') {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter),
  //     );
  //   } else {
  //     return contacts;
  //   }
  // };

  // Удаляет контакт
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id)
       
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <ContactsFilter filter={filter} onFilter={changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
};


export default App;
