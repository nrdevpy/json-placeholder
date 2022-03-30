/* const getUsuarios = async () => {
    const userDiv = document.getElementById('users');
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    let ctx = '';
    for (let i of data) {
        ctx += `
            <li>${i.name}</li>
        `;
    }
    userDiv.innerHTML = ctx;
}

getUsuarios (); */