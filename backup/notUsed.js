const taskList = document.querySelector('#task-list');

export function renderTaskOld(doc) {
    let card = document.createElement('div');
    card.className += "card";

    let cardBody = document.createElement('div');
    cardBody.className += "card-body";

    let cardTitle = document.createElement('div');
    cardTitle.className += "card-title";

    let cross = document.createElement('div');
    cross.textContent = 'x';

    // Deskripsi Tugas
    let isi = document.createElement('p');

    //Deadline dan Created
    let cardDesc = document.createElement('p');
    cardDesc.className += "my-0 card-description d-sm-inline-block";

    let ul = document.createElement('ul');
    ul.className += "my-0 float-right list-unstyled list-inline";

    let created = document.createElement('li');
    created.className += "my-0 list-inline-item mr-5 text-muted";

    let deadline = document.createElement('li');
    deadline.className += "my-0 list-inline-item text-danger";

    cardTitle.textContent = doc.val().title;
    isi.textContent = doc.val().desc;
    deadline.textContent = "Deadline : " + doc.val().deadline;
    created.textContent = "Created : " + doc.val().created;

    card.setAttribute('data-id', doc.key);

    ul.append(created);
    ul.append(deadline);
    cardDesc.append(ul);
    cardBody.append(cross);
    cardBody.append(cardTitle);
    cardBody.append(isi);
    cardBody.append(cardDesc);
    card.append(cardBody);
    taskList.append(card);
}
