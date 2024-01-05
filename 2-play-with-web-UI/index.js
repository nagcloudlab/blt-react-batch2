


// -------------------------------------
// Using DOM Api
// -------------------------------------

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const greetBtn = document.querySelector('.btn-primary');
const hideBtn = document.querySelector('.btn-danger');
const showBtn = document.querySelector('.btn-success');


greetBtn.addEventListener('click', (event) => {
    cardBody.innerHTML = 'Good Morning';
});
hideBtn.addEventListener('click', (event) => {
    card.style.display = 'none';
})
showBtn.addEventListener('click', (event) => {
    card.style.display = 'block';
})


// --------------------------------------------------
// Using DOM Api + XHR (XMLHttpRequest) + Fetch API
// --------------------------------------------------


const top5TodosBtn = document.querySelector('#top5-todos-btn');
const todosTBody = document.querySelector('#todos-tbody');
const progressMessage = document.querySelector('#progress-message');

// top5TodosBtn.addEventListener('click', (event) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos?_limit=5', true); // sync http-request
//     xhr.send();
//     progressMessage.innerHTML = 'Loading...';
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             progressMessage.innerHTML = '';
//             if (xhr.status === 200) {
//                 const todos = JSON.parse(xhr.responseText);
//                 const todoRows = todos.map(todo => {
//                     return `
//                         <tr>
//                             <td>${todo.id}</td>
//                             <td>${todo.title}</td>
//                             <td>${todo.completed}</td>
//                         </tr>
//                     `;
//                 });
//                 todosTBody.innerHTML = todoRows.join('');
//             } else {
//                 console.log('Http Error', xhr.responseText);
//             }
//         }
//     };
//     todosTBody.innerHTML = todoRows.join('');

// });

top5TodosBtn.addEventListener('click', (event) => {
    progressMessage.innerHTML = 'Loading...';
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
            const todoRows = todos.map(todo => {
                return `
                        <tr>
                            <td>${todo.id}</td>
                            <td>${todo.title}</td>
                            <td>${todo.completed}</td>
                        </tr>
                    `;
            });
            todosTBody.innerHTML = todoRows.join('');
            progressMessage.innerHTML = '';
        })
        .catch(err => {
            console.log('Http Error', err);
        });
});


// --------------------------------------------------
// Using DOM Api + Timer Api
// --------------------------------------------------

setInterval(() => {
    const clockSpan = document.querySelector('#clock');
    const now = new Date();
    clockSpan.innerHTML = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
}, 1000);

// --------------------------------------------------