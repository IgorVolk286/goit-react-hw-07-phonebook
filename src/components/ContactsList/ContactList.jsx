import { getContacts } from '../../Redux/Contactsslice';
import { getFilter } from '../../Redux/Filterslice';
import { List, ListItem, Text, ButtonDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteCont } from '../../Redux/Contactsslice';
import { deleteContact } from '../../Redux/Operations';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // console.log(contacts);
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContact.map(({ name, id, number }) => {
        return (
          <ListItem key={id} id={id}>
            <Text>
              {name} : {number}
            </Text>
            <ButtonDelete onClick={() => dispatch(deleteContact(id))}>
              DELETE
            </ButtonDelete>
          </ListItem>
        );
      })}
    </List>
  );
};

// екшн для редакс\\\

// const deleteCont = id => {
//   return {
//     type: 'contacts/deleteCont',
//     payload: id,
//   };
// };
