import { GlobalStyle } from './GlobalStyle';
import { Box } from 'components/Box';
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./Contacts/ContactList";
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';



function App(){
  const dispatch = useDispatch();
  fetchContacts();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
  <Box
      display = 'flex'
      flexDirection = 'column'
      alignItems = 'center'
      justifyContent = 'center'
      fontSize = {24}
      padding= {15}
      >
     <div>
        <h1>Phonebook</h1>
      </div>
      <ContactForm  />
         <h2>Contacts</h2>
          <Filter  />
           <ContactList />
            <GlobalStyle />
    </Box>
  );
    
  }


export default App;