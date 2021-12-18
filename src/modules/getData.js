const getData = () => {
    return fetch('https://cloud-3efe4-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
}

export default getData;