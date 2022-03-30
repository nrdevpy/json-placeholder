/* const getUsuarios = () => {
    const file = 'https://jsonplaceholder.typicode.com/users';
    const userDiv = document.getElementById('users');

    fetch (file)
        .then ((response) => response.json())
            .catch ((err) => console.log (err))
        .then ((data) => {
            let ctx = '';
            for (let i of data) {
                ctx += `
                    <li>${i.name}</li>
                `;
            }

            userDiv.innerHTML = ctx;
        });
};

getUsuarios(); */