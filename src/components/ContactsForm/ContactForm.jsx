import { Formik, Form, Field } from 'formik';

const initailValues = {
  name: '',
  number: '',
};

export const ContactsForm = ({ addsContacts }) => {

  const handleSubmit = (values, { resetForm }) => {
    addsContacts(values);

    resetForm();
  };

  return (
    <Formik initialValues={initailValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="name">
          Name
          <Field
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            name="name"
          ></Field>
        </label>
        <label htmlFor="tel">
          Number
          <Field
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            type="tel"
            name="number"
          ></Field>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
