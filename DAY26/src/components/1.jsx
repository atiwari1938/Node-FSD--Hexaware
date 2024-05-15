import { useState } from 'react';
import '../components/1.css';

function VehicleRegistrationForm() {
    const [ownerName, setOwnerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [result, setResult] = useState('');
    const [errorObj, setErrorObj] = useState({
        ownerName: '',
        contactNumber: '',
        vehicleModel: '',
        registrationNumber: '',
        vehicleColor: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        const validRegistrationNumberRegex = RegExp(/^[A-Z]{2}[ -]?[0-9]{2}[ -]?[A-Z]{1,2}[ -]?[0-9]{4}$$/);
        const validContactNumberRegex = RegExp(/^\d{10}$/);

        let tempErrorObj = {
            ownerName: (ownerName.trim() === '') ? 'Owner Name is required' : '',
            contactNumber: validContactNumberRegex.test(contactNumber) ? '' : 'Contact Number must be a 10-digit number',
            vehicleModel: (vehicleModel.trim() === '') ? 'Vehicle Model is required' : '',
            registrationNumber: validRegistrationNumberRegex.test(registrationNumber) ? '' : 'Registration Number must be in the format TS09EA1234',
            vehicleColor: (vehicleColor.trim() === '') ? 'Vehicle Color is required' : ''
        };

        setErrorObj(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        let index = valuesArray.findIndex(item => item !== '');

        if (index === -1) {
            setResult('Vehicle details are valid. You can proceed.');
        } else {
            setResult('Invalid vehicle details. Please correct the errors.');
        }
    }

    return (
        <>
            <h3>Vehicle Registration Form</h3>
            <hr />
            <form onSubmit={handleSubmit} class="form">
                <fieldset>
                    <legend>Enter Vehicle Details</legend>
                    Owner Name:
                    <input type="text" onChange={(e) => setOwnerName(e.target.value)} />
                    <span className="error">{errorObj.ownerName}</span>
                    <br /><br />
                    Contact Number:
                    <input type="text" onChange={(e) => setContactNumber(e.target.value)} />
                    <span className="error">{errorObj.contactNumber}</span>
                    <br /><br />
                    Vehicle Model:
                    <input type="text" onChange={(e) => setVehicleModel(e.target.value)} />
                    <span className="error">{errorObj.vehicleModel}</span>
                    <br /><br />
                    Registration Number:
                    <input type="text" onChange={(e) => setRegistrationNumber(e.target.value)} />
                    <span className="error">{errorObj.registrationNumber}</span>
                    <br /><br />
                    Vehicle Color:
                    <input type="text" onChange={(e) => setVehicleColor(e.target.value)} />
                    <span className="error">{errorObj.vehicleColor}</span>
                    <br /><br />
                    <input type="submit" value="Register" />
                    <h3>{result}</h3>
                </fieldset>
            </form>
        </>
    );
}

export default VehicleRegistrationForm;
