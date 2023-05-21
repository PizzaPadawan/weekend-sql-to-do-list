$(()=>{
    getList();
    $('#submitTask').on('click', postTask);
    $('#showList').on('click', '.completedButton', pootis);
    $('#showList').on('click', '.deleteButton', deleteTask);
});

function getList(){
    $.ajax({
        method: 'GET',
        url: '/todo'
    }).then(response => {
        console.log("frontend GET success", response);
        appendList(response);
    }).catch(error => {
        console.log(error);
        alert('error updating todo list')
    });
}

function appendList(response){
    $('#showList').empty();
    for(item of response){
        console.log (item.completed);
    if(item.completed === true){
        $('#showList').append(`
        <tr class="completed">
            <td>${item.taskname}</td>
            <td><button data-id="${item.id}" class="completedButton">Complete</button></td>
            <td><button data-id="${item.id}" class="deleteButton">Delete</button></td>
        </tr>
        `);} else {
        $('#showList').append(`
        <tr>
            <td>${item.taskname}</td>
            <td><button data-id="${item.id}" class="completedButton">Complete</button></td>
            <td><button data-id="${item.id}" class="deleteButton">Delete</button></td>
        </tr>
        `);}
    }
}

function postTask(){
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: {
            taskname: $('#taskIn').val(),
            completed: 'FALSE'
        }
    }).then(response => {
        console.log('POSTY');
        getList();
    }).catch(error => {
        alert('error posting your task', error);
    });
    $('#taskIn').val('');
    getList();
}

function pootis(event){
    let taskId = $(event.target).data('id');
    console.log(taskId);
    $.ajax({
        method:'PUT',
        url: `/todo/${taskId}/complete`
    }).then(response => {
        console.log(response);
        getList();
    }).catch(error => {
        alert('error updating completed status', error);
    });
}

function deleteTask(event){
    let taskId = $(event.target).data('id');
    console.log(taskId);
    $.ajax({
        method:'DELETE',
        url: `/todo/${taskId}`
    }).then(response => {
        console.log(response);
        getList();
    }).catch(error => {
        alert('error deleting task', error);
    });
}