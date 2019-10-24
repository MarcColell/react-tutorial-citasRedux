const initialState = {
    citas: []
};

// Tal vez state viene vacio, indicamos un default
// payload -> datos que mandas en la accion
export default function (state = initialState, action) {
    switch (action.type) {
        case 'AGREGAR_CITA':
            return {
                ...state,
                citas: [...state.citas, action.payload]
            };
        case 'ELIMINAR_CITA':
            return {
                ...state,
                citas: state.citas.filter( cita => {
                    return cita.id !== action.payload
                })
            }
        default:
            return state;
    }
}