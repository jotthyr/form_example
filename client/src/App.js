import './App.css';
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export default function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [validateEmail, setValidateEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());

  const emailRegex = /\S+@\S+\.\S+/;

  const emailInput = (event) => {
    const email = event.target.value;
    setEmail(event.target.value)
    if (emailRegex.test(email)) {
      setValidateEmail(true)
    } else {
      setValidateEmail(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (date) {
      console.log(date, validateEmail, /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()), /^[a-z ,.'-]+$/i.test(firstName), /^[a-z ,.'-]+$/i.test(lastName))
      if (date && validateEmail && /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()) && /^[a-z ,.'-]+$/i.test(firstName) && /^[a-z ,.'-]+$/i.test(lastName)) {
        axios.post('/api/form', {
          "firstName": lastName,
          "lastName": firstName,
          "email": email,
          "date": date,
        })
          .then((response) => {
            setDate("");
            setEmail("");
            setFirstName("");
            setLastName("");
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input"
        placeholder="First name"
        value={firstName}
        onChange={(event) => { setFirstName(event.target.value) }}
        required
      />
      <input className="form__input"
        placeholder="Last name"
        value={lastName}
        onChange={(event) => { setLastName(event.target.value) }}
        required
      />
      <input id="email"
        className={`${validateEmail ? 'form__input' : 'form__input--invalid'}`}
        placeholder="Email"
        value={email}
        onChange={emailInput}
        required
      />
      <div className="form__datePicker">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              required
              label="Choose date"
              value={date}
              minDate={new Date('2017-01-01')}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <input
        className="form__input--submit"
        type="submit"
        value="Submit" />
      <p>{date && /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()) && /^[a-z ,.'-]+$/i.test(firstName) && validateEmail && typeof firstName === 'string' && typeof lastName === 'string' ? null : "Wrong data!"}</p>
    </form>
  );
}
