import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid/v4';

import { agregarCitaAction } from '../../actions/citasActions';
import { validarForm } from '../../actions/validarFormAction';

import './form.css';

const Form = () => {

    const [ cita, setCita ] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        description: ''
    });

    // Dispatch para las acciones
    const dispatch = useDispatch();
    const agregarCita = (cita) => dispatch(agregarCitaAction(cita));
    const validacion = (estado) => dispatch(validarForm(estado));

    // Recogemos error del store
    const error = useSelector( (state) => state.error );

    // Cambios en los inputs
    const handleChange = (data) => {
        setCita({
            ...cita,
            [data.target.name]: data.target.value
        });
    };

    // On Submit
    const validateForm = (e) => {
        e.preventDefault();

        if (cita.pet.trim() === '') {
            validacion(true);
            return; 
        }

        validacion(false);
        agregarCita({
            ...cita,
            id: uuid()
        });
    };

    return (
        <div className="container-form">
            <form onSubmit={validateForm}>
                <div className="form-row">
                    <div className="form-element">
                        <span>Nombre mascota:</span>
                        <input onChange={ handleChange } type="text" name="pet" placeholder="Mascota"></input>
                    </div>
                    <div className="form-element">
                        <span>Nombre propietario:</span>
                        <input onChange={ handleChange } type="text" name="owner" placeholder="Propietario"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-element">
                        <span>Fecha:</span>
                        <input onChange={ handleChange } type="date" name="date"></input>
                    </div>
                    <div className="form-element">
                        <span>Hora:</span>
                        <input onChange={ handleChange } type="time" name="hour"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-element textarea">
                        <span>Descripción:</span>
                        <textarea onChange={ handleChange } name="description"></textarea>
                    </div>
                    <div className="form-element submit">
                        <input type="submit"></input>
                    </div>
                </div>
                <div className="form-error">
                    { error.error? <div>Faltan campos por rellenar</div>: null }
                </div>
            </form>
        </div>
    );
};

export default Form;