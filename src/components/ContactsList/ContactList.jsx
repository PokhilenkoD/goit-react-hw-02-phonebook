export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={deleteContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
