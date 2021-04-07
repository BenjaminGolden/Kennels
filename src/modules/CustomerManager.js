const remoteUrl = "http://localhost:5002"

    export const getCustomerById = (id) => {
        return fetch(`${remoteUrl}/customers/${id}?_embed=animals`)
        .then(res => res.json())
    }

    export const getAllCustomers = () => {
        return fetch(`${remoteUrl}/customers`)
        .then(res => res.json())
    }

    export const deleteCustomer = (id) => {
        return fetch(`${remoteUrl}/customers/${id}`, { 
            method: "DELETE"
        }).then(result => result.json())
    }

    export const addCustomer = (newCustomer) => {
        return fetch(`${remoteUrl}/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCustomer)
        }).then(result => result.json())
    }

    //expand means I have the id of the related data and it's use is singular. 

    //embed means the id of my resource exists on other resources and I want those other resources embeded in my object. 