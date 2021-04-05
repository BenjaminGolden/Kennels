const remoteUrl = "http://localhost:5002"

    export const getCustomerById = (id) => {
        return fetch(`${remoteUrl}/customers/${id}?_expand=location`)
        .then(res => res.json())
    }

    export const getAllCustomers = () => {
        return fetch(`${remoteUrl}/customers`)
        .then(res => res.json())
    }