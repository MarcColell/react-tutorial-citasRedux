import React from 'react';
import { useSelector } from 'react-redux';

import Cita from '../cita/cita';
import './list.css';

const List = () => {

    const citas = useSelector( state => state.citas.citas );

    const generateCitaTag = (id, cita) => {
        return <Cita key={ id } cita={ cita }/>
    }

    const emptyComponent = <div className="empty-list">No hay citas programadas</div>;

    return (
        <div className="container-list">
            { 
                citas.length > 0 ? 
                    citas.map(cita => generateCitaTag(cita.id, cita)) : 
                    emptyComponent 
            }
        </div>
    );
}

export default List;