import { selectVisibleContacts } from '../../Redux/Contactsslice';
import { List, ListItem, Text, ButtonDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/Operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContact = useSelector(selectVisibleContacts);

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
