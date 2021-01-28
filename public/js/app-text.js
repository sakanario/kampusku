
var database = firebase.database();
var taskRef = database.ref('task');

//remove data
function hapus(id){
    taskRef.child(id).remove( (error) => {
        if (error) {
            alert(error)
        } else {
            alert("Task remove succesfully!")
        }
    });
}

//Update Data
function edit(id) {
    taskRef.child(id).on('value', snapshoot =>{
        $('#edit-title').val(snapshoot.val().title)   
        $('#edit-desc').val(snapshoot.val().desc)   
        $('#edit-deadline').val(snapshoot.val().deadline)   
        $('#edit-head').attr("data-id", snapshoot.key);
    })
}

$("#edit-submit").click(function () {
    var title = $("#edit-title").val()
    var desc = $('#edit-desc').val()
    var deadline = $('#edit-deadline').val()
    var dataId = $('#edit-head').attr('data-id')
    updateData(dataId,title, desc, deadline)
});

function updateData(id,title, desc, deadline) {
    taskRef.child(id).update({
        // "created": getCurrentDate(),
        "deadline": deadline,
        "title": title,
        "desc": desc
    }, (error) => {
        if (error) {
            alert(error)
        } else {
            alert("Task update succesfully!")
        }
    });
}




































// document.getElementsByClassName("atur")[0].addEventListener('click', (e) => {

//     // let id = e.target.parentElement.getAttribute('data-id');
//     // alert(e);
//     console.log(e.target);
// });