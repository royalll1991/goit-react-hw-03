// import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from "../ContactForm/ContactForm";
import SearchBox  from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";



function App() {

 
//  useEffect(() => {
//   window.localStorage.setItem( "all-feedback", JSON.stringify(feedback)), [feedback];
//  })
  return (
    
     <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
  
  )
}

export default App
