const cont = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');
const url = 'https://jsonplaceholder.typicode.com/users';

const table = document.createElement('table');
table.setAttribute('class','table table-striped');
const thead = document.createElement('thead');
const tr1 = document.createElement('tr');
const th1 = document.createElement('th');
th1.setAttribute('scope','col');
const th2 = document.createElement('th');
th2.setAttribute('scope','col');
const th3 = document.createElement('th');
th3.setAttribute('scope','col');
const th4 = document.createElement('th');
th4.setAttribute('scope','col');
const th5 = document.createElement('th');
th5.setAttribute('scope','col');
th1.innerHTML = 'Name';
th2.innerHTML = 'Username';
th3.innerHTML = 'Email';
th4.innerHTML = 'Phone';
th5.innerHTML = 'Website';
cont.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr1);
tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
tr1.appendChild(th5);

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const tbody = document.createElement('tbody');
    const tr2 = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    td1.innerHTML = data.name;
    td2.innerHTML = data.username;
    td3.innerHTML = data.email;
    td4.innerHTML = data.phone;
    td5.innerHTML = data.website;
    table.appendChild(tbody);
    tbody.appendChild(tr2);
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
})
.catch(err => console.log(err));