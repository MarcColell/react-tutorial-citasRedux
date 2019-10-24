export const getStorage = () => {
    const citas = localStorage.getItem('citas');

    if(!citas) {
        return;
    }

    return JSON.parse(citas);
};

export const setStorage = (data) => {
    localStorage.setItem('citas', JSON.stringify(data));
};