const cont = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p');
    name.innerHTML = data.name;
    cont.appendChild(name);
})
.catch(err => console.log(err));