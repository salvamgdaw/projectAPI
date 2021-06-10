const cont = document.querySelector('.container');

const url = 'https://jsonplaceholder.typicode.com/users';


const table = document.createElement('table');
table.setAttribute('class','table table-striped');
const thead = document.createElement('thead');
const tr1 = document.createElement('tr');
const th1 = document.createElement('th');
th1.setAttribute('scope','col');
const th2 = document.createElement('th');
th2.setAttribute('scope','col');
th1.innerHTML = 'Name';
th2.innerHTML = 'Information';
cont.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr1);
tr1.appendChild(th1);
tr1.appendChild(th2);

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(user => {

        const tbody = document.createElement('tbody');
        const tr2 = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const buton = document.createElement('a');
        buton.setAttribute('class','btn btn-primary')
        td1.innerHTML = user.name;
        buton.innerHTML = 'Information';
        table.appendChild(tbody);
        tbody.appendChild(tr2);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        td2.appendChild(buton);
        buton.addEventListener('click', function(){
            window.location.href = `./user.html?id=${user.id}`
        }) 
    });
})
.catch(err => console.log(err));