export function getCurrentDate() {
    const today = new Date()
    // var monthLong = today.toLocaleString('default', { month: 'long' })
    var month = ("0" + (today.getMonth() + 1)).slice(-2); 
    var currentDate = today.getFullYear() + "-" + today.getDate() + "-" + month;
    return currentDate;
}

export function renderTask(doc){

    var htmlOutput = '<div class="card">' +
        
        '<div class="card-body pt-4">' +
        '<div class="card-title d-inline"> <h4>' + doc.val().title +' </h4></div>'+
        '<p>' + doc.val().desc + '</p>' +
            '<p class="my-0 card-description d-sm-inline-block">' +
               ' <ul class="my-0 float-right list-unstyled list-inline">' +
        ' <li class="my-0 list-inline-item mr-5 text-muted"> Created : ' + doc.val().created + '</li>' +
        '<li class="my-0 list-inline-item text-danger">Deadline : ' + doc.val().deadline + '</li>'+
                '</ul></p></div></div>';

     
    $('#task-list').append(htmlOutput);
}

export function renderTaskLogin(doc) {
    var keyString = "'" + doc.key + "'"
    var editFunc = 'edit(' + keyString + ')';
    var deleteFunc = 'hapus(' + keyString + ')';

    var htmlOutput = '<div class="card">' +
        '<div class="hideIfLogout">' +
            '<div data-id="' + doc.key + '" class="btn-group d-inline ml-auto float-right" role="group" aria-label="Second group">' +
                '<button data-toggle="modal" data-target="#edit-task" onclick="' + editFunc + '" type="button" class="btn btn-light"><i class="fa fa-edit"></i></button>' +
                '<button onclick="' + deleteFunc + '" type="button" id="delete" class="btn btn-light"><i class="text-danger fa fa-trash"></i></button>' +
            '</div>' +
        '</div>' +
        '<div class="card-body pt-4">' +
        '<div class="card-title d-inline"> <h4>' + doc.val().title + ' </h4></div>' +
        '<p>' + doc.val().desc + '</p>' +
        '<p class="my-0 card-description d-sm-inline-block">' +
        ' <ul class="my-0 float-right list-unstyled list-inline">' +
        ' <li class="my-0 list-inline-item mr-5 text-muted"> Created : ' + doc.val().created + '</li>' +
        '<li class="my-0 list-inline-item text-danger">Deadline : ' + doc.val().deadline + '</li>' +
        '</ul></p></div></div>';


    $('#task-list').append(htmlOutput);
}