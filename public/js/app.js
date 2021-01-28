import { getCurrentDate , renderTask, renderTaskLogin } from './support.js';

var database = firebase.database();
var taskRef = database.ref('task');

// Show Data
taskRef.on('value', showData);

function showData(snapshot) {
    
    firebase.auth().onAuthStateChanged((user) => {
        $('#task-list').html('')
        if (user) {
            snapshot.forEach(doc => {
                renderTaskLogin(doc);
            })
        } else {
            snapshot.forEach(doc => {
                renderTask(doc);
            })
        }
    });
    
}

// Save Data
$("#submit").click(function () {
    var title = $("#title").val()
    var desc = $('#desc').val()
    var deadline = $('#deadline').val()
    saveData(title, desc, deadline)
});

function saveData(title, desc, deadline) {
    taskRef.push({
        "created": getCurrentDate(),
        "deadline": deadline,
        "title": title,
        "desc": desc
    }, (error) => {
        if (error) {
            alert(error)
        } else {
            alert("Task added succesfully!")
        }
    });
}

// Remove Date
export function removeData(id) {
    taskRef.child(id).remove()
}

//remove banner
$(document).ready(function(){
    $('#body').removeClass('purchase-banner-active');
    $('.item-purchase-banner').remove();
})





