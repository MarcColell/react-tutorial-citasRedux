import React from 'react';
import { useDispatch } from 'react-redux';
import { eliminarCitaAction } from '../../actions/citasActions';

import './cita.css';

const Cita = ({ cita }) => {

    const dispatch = useDispatch();
    const eliminarCita = (id) => dispatch(eliminarCitaAction(id)); 

    return (
        <div className="cita">
            <div className="day">{ cita.date }</div>
            <div className="hour">{ cita.hour }</div>
            <div className="pet">{ cita.pet }</div>
            <div className="owner">{ cita.owner }</div>
            <div className="description">{ cita.description }</div>
            <div className="delete">
                <button onClick={ () => eliminarCita( cita.id ) }>Eliminar</button>
            </div>
        </div>
    );
};

export default Cita;