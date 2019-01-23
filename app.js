//on load functions... populate data, clear other (reverse order)

//buttonAdd on click: log info
const formAdd = function() {
    $('.List').append(`<div id="${document.forms["addForm"]["name"].value}List"><br><p>Name: ${document.forms["addForm"]["name"].value}</p>
    <p>Office Number: ${document.forms["addForm"]["officeNum"].value}</p>
    <p> Phone Number: ${document.forms["addForm"]["phoneNum"].value}`);
}

$('#buttonAdd').on('click', formAdd);


const showAdd = function () {
    $('.body').hide();
    $('.Add').show()
    console.log('add?')
}

const showDelete = function () {
    $('.body').hide();
    $('.Delete').show()
    console.log('delete?')
    $(`.List`).empty();
    for (let i=0; i <employeeList.length; i++) {
        $('.List').append(`<br><p>Name: ${employeeList[i].name}</p>
                          <p>Office Number: ${employeeList[i].officeNum}</p>
                          <p> Phone Number: ${employeeList[i].phoneNum}</p><br>`)
    }
}


const showUpdate = function () {
    $('.body').hide();
    $('.Update').show();
    console.log('update?')
    $(`#updateList`).empty();
    for (let i=0; i <employeeList.length; i++) {
        $('#updateList').append(`<br><p>Name: ${employeeList[i].name}</p>
                          <p>Office Number: ${employeeList[i].officeNum}</p>
                          <p> Phone Number: ${employeeList[i].phoneNum}</p><br>`)
    }
}

const showVerify = function () {
    $('.body').hide();
    $('.Verify').show();
    console.log('verify?')
    $(`#verifyList`).empty();
    for (let i=0; i <employeeList.length; i++) {
        $('#verifyList').append(`<br><p>Name: ${employeeList[i].name}</p>
                          <p>Office Number: ${employeeList[i].officeNum}</p>
                          <p> Phone Number: ${employeeList[i].phoneNum}</p><br>`)
    }
}

const showView = function () {
    $('.body').hide();
    $('.View').show();
    console.log('click!')
    $(`#viewList`).empty();
    for (let i=0; i <employeeList.length; i++) {
        $('#viewList').append(`<br><p>Name: ${employeeList[i].name}</p>
                          <p>Office Number: ${employeeList[i].officeNum}</p>
                          <p> Phone Number: ${employeeList[i].phoneNum}</p><br>`)
    }
}
 const reveal = function (which) {
     $(`.body`).hide();
     $(`.${which}`).show();
     console.log(`${which}`);
     for (let i=0; i <employeeList.length; i++) { //stick the out into a 'card' div for style
        $(`.${which}`).append(`<br><p>Name: ${employeeList[i].name}</p>
                          <p>Office Number: ${employeeList[i].officeNum}</p>
                          <p> Phone Number: ${employeeList[i].phoneNum}</p><br>`)
    }
 } //presently broken, just runs //needs lingo update (which vs whichList)

// $('.navAdd').on('click', reveal("Add")); //broken, i think its something to do with the functions vs variable
// $().reveal('#Add');
// $('.navAdd').on('click', reveal);
$('.navAdd').on('click', showAdd);
$('.navDelete').on('click', showDelete);
$('.navUpdate').on('click', showUpdate);
$('.navVerify').on('click', showVerify);
$('.navView').on('click', showView);


/////////////////
/*submit button slightly better
input type="submit"
in js: */
const handleClick = function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    for (let i=0; i <employeeList.length; i++) {
    $('.List').append(`<div id=${employeeList[i].name}List><br><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p><br></div>`)
    }
    console.log(`${name}, ${officeNum}, ${phoneNum}`);
}

$('#submit').on('click', handleClick);


for (let i=0; i <employeeList.length; i++) {
    $('.List').append(`<div id=${employeeList[i].name}List><br><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p><br></div>`)
    console.log("running")
}
