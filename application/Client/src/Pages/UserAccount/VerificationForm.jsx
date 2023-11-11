import React from "react";
import "./VerificationForm.css";


const VerificationForm = () => {
    const [driversLicence, setDriversLicence] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    async function handleSubmit() {
        setErrorMessage(''); // fetch error message each time
        const body = {
            driversLicence: driversLicence,
            phoneNumber: phoneNumber,
        };
        const httpSettings = {
          body: JSON.stringify(body),
          method: 'POST'
        };
        const result = await fetch('/verificationForm', httpSettings);
        const apiRes = await result.json();
        console.log(apiRes);
        if (apiRes.status) {
          // sucess
          // todo
        } else {
          // some error message
          setErrorMessage(apiRes.message);
        }
      };

  return (
    <div className="VerificaitonPage">
        <form className="VerificaitonForm">
        <input value={driversLicence} onChange={e => setDriversLicence(e.target.value)} />
        <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />  
        <button onClick={handleSubmit}>Submit</button>
        <div>{errorMessage}</div>
        </form>
    </div>
  );
};

export default VerificationForm;
