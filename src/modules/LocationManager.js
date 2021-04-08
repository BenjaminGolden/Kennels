const remoteURL = "http://localhost:5002"

    export const getLocationById = (id) => {
        return fetch(`${remoteURL}/locations/${id}?_embed=animals`)
        .then(response => response.json())
    };

    export const getAllLocations = () => {
        return fetch(`${remoteURL}/locations`)
        .then(response => response.json())
    };

    export const deleteLocation = (id) => {
        return fetch(`${remoteURL}/locations/${id}`, {
            method: "DELETE"
        }) .then(result => result.json())  
    };