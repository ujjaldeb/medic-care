import React from 'react';
import BookAppointment from '../BookAppointment/BookAppointment';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Appointment.css';

const Appointment = () => {
    return (
        <div>
            <PageTitle></PageTitle>
            <BookAppointment></BookAppointment>
        </div>
    );
};

export default Appointment;