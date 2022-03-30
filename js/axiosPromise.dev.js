/* const getUsuarios = () => {
    const userDiv = document.getElementById('users');
    let ctx = '';

    axios
        .get ('https://jsonplaceholder.typicode.com/users')
        .then ((res) => (res.data))
            .catch ((err) => console.log(err))
        .then ((data) => {
            for (let i of data) {
                ctx += `
                    <li>${i.name}</li>
                    <li>${i.email}</li>
                `;
            }
            userDiv.innerHTML = ctx;
        });
};
getUsuarios (); */