import { FaUser, FaPhone } from 'react-icons/fa';
import css from './ContactList.module.css';

const Contact = ({ id, name, number, onDelete}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className={css.box}>
      <div className={css.buttonBox}>
        <div className={css.userBox}>
        <FaUser className={css.userImg}/>      
      <p className={css.text}>{name}</p>
      </div>
      <div className={css.userBox}> 
        <FaPhone className={css.userImg}/>      
      <p className={css.text}>{number}</p>
      </div>
      </div>
      <button className={css.buttonStyle} onClick={handleDelete}>Delete</button>
    </div>
  );
};


const ContactList  = ({contacts, filteredContacts, onDelete}) => {
const contactsRender = filteredContacts || contacts;

    return ( <ul className={css.list}>
        {contactsRender.map((contact) => (
                <li  key={contact.id} >
                    <Contact 
                        name={contact.name}
                        number={contact.number}
                        id = {contact.id}
                        onDelete = {onDelete}
                        />
                </li>
            ))}
        
    </ul>
    );}

export default ContactList;