const remoteURL = "http://localhost:5002"

    export const getLocationById = (id) => {
        return fetch(`${remoteURL}/locations/${id}?_expand=animals&_expand=employees`)
        .then(response => response.json())
    };

    export const getAllLocations = () => {
        return fetch(`${remoteURL}/locations`)
        .then(response => response.json())
    };