import { GlobalStyle } from './GlobalStyle';
import { Box } from 'components/Box';
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./Contacts/ContactList";



function App(){

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