export const ContactsList = ({contacts}) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
          return <li key={id}>{name}: { number}</li>;
      })}
    </ul>
  );
};
