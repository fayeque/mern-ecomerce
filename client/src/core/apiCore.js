const queryString = require("query-string");


export const getProducts = (sortBy) => {
    return fetch(`http://localhost:8000/api/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method:'GET'
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    }
    )
}

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`http://localhost:8000/api/products/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getCategories = () => {
    return fetch(`http://localhost:8000/api/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const list = params => {
    const query = queryString.stringify(params);
    console.log("query", query);
    return fetch(`http://localhost:8000/api/products/search?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const read = productId => {
    return fetch(`http://localhost:8000/api/product/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = productId => {
    return fetch(`http://localhost:8000/api/products/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getBraintreeClientToken = (token) => {
    return fetch(`http://localhost:8000/api/braintree/getToken`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-auth-token": `${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const processPayment = (token, paymentData) => {
    return fetch(`http://localhost:8000/api/braintree/payment`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-auth-token": `${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const createOrder = (token, createOrderData) => {
    return fetch(`http://localhost:8000/api/order/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-auth-token": `${token}`
        },
        body: JSON.stringify({ order: createOrderData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};