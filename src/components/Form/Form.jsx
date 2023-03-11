// import { Component } from 'react';
import { nanoid } from 'nanoid';
// import css from '../Form/Form.module.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PhoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  // state = {
  //   name: '',
  //   id: '',
  //   number: '',
  // };
  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({
  //     [name]: value,
  //     id: nanoid(),
  //   });
  // };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };
  // reset = () => {
  //   this.setStatr({ name: '', id: '', number: '' });
  // };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhoneSchema}
      onSubmit={values => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
      }}
    >
      <form>
        <label>
          Name:
          <Field
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number:
          <Field
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </Formik>
  );
};
