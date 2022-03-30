const getUsuarios = async () => {
    //  const data = await axios.get ('https://jsonplaceholder.typicode.com/users');
    const {data} = await axios.get ('https://jsonplaceholder.typicode.com/users'); // * Destructuring to get data.
    let ctx = '';
    const userDiv = document.getElementById('users');


    for (let i of data) {
        ctx += `
            <li>${i.name}</li>
            <li>${i.email}</li>
        `;
    }
    userDiv.innerHTML = ctx;
};
getUsuarios ();