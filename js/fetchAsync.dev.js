/* const getUsuarios = async () => {
    const userDiv = document.getElementById('users');
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    let ctx = '';
    console.log (data);
    for (let i of data) {
        ctx += `
            <li>${i.name}</li>
            <li>${i.email}</li>
        `;
    }
    userDiv.innerHTML = ctx;
}

getUsuarios (); */