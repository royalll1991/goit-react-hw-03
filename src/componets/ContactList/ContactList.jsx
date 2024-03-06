import { FaUser, FaPhone } from 'react-icons/fa';
import css from './ContactList.module.css';

const Contact = ({ name, number }) => {
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
      <button className={css.buttonStyle}>Delete</button>
    </div>
  );
};


const ContactList  = ({contacts}) => {
    return (<ul className={css.list}>
        {contacts.map((contact) => (
                <li  key={contact.id} >
                    <Contact 
                        name={contact.name}
                        number={contact.number}
                        />
                </li>
            ))}
        
    </ul>
    );}

export default ContactList;