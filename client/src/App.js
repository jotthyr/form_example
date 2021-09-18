import './App.css';
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';

export default function App() {

  const [validateEmail, setValidateEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());

  const emailRegex = /\S+@\S+\.\S+/;

  const emailInput = (event) => {
      const email = event.target.value;
      setEmail(event.target.value)
      if (emailRegex.test(email)) {
        console.log("correct")
        setValidateEmail(true)
      } else {
        console.log("incorrect")
        setValidateEmail(false)
      }
  }

  return (
    <form className="form" onSubmit={null}>
      <input className="form__input" placeholder="First name" required/>
      <input className="form__input" placeholder="Last name" required/>
      <input id="email" className={`${validateEmail ? 'form__input' : 'form__input--invalid' }`} placeholder="Email" value={email} onChange={emailInput} required/>
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
      <input className="form__input--submit" type="submit" value="Submit" />
    </form>
  );
}
