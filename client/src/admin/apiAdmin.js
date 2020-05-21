export const createCategory = (_id,token,name) => {
    return fetch('http://localhost:8000/api/category/create',{
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': `${token}`
        },
        body:JSON.stringify(name)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}

export const getCategories = (token) => {
    console.log(token);
    return fetch(`http://localhost:8000/api/categories`, {
        method: 'GET',
        headers:{
            'x-auth-token':`${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const createProduct = (userId, token, product) => {
    console.log("product is",product);
    return fetch(`http://localhost:8000/api/product/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'x-auth-token':`${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const listOrders = (userId, token) => {
    return fetch(`http://localhost:8000/api/order/list`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'x-auth-token':`${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getStatusValues = (userId, token) => {
    return fetch(`http://localhost:8000/api/order/status-values`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'x-auth-token':`${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`http://localhost:8000/api/order/${orderId}/status`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token':`${token}`
        },
        body: JSON.stringify({ status, orderId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};