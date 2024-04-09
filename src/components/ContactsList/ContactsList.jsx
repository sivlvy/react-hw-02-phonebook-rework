import ContactListItem from './ContactListItem/ContactListItem';

const ContactsList = ({ contacts, onDeleteContact }) => {
	return contacts.map(({ id, name, phone }) => (
		<li key={id}>
			<span>{name}</span>
			<span>{phone}</span>
			<button onClick={() => onDeleteContact(id)}>X</button>
		</li>
	));
};

export default ContactsList;
