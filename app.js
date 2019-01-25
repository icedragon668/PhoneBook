//on load functions... populate data, clear other (reverse order) // ??

// functions //
const render = function () {
    $(".cards").empty();
    for (let i = 0; i < employeeList.length; i++) { //stick the out into a 'card' div for style?
        $('.cards').append(`<div id="${employeeList[i].name}" class="card col-3"><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p></div>`)
    }
}

const Add = function () {
    const name = document.forms["addForm"]["name"].value;
    const officeNum = document.forms["addForm"]["officeNum"].value;
    const phoneNum = document.forms["addForm"]["phoneNum"].value;
    const newEmployee = {
        name: name,
        officeNum: officeNum,
        phoneNum: phoneNum
    }
    employeeList.push(newEmployee);
    render();
    $('#buttonVerify').on('click', Add);
}; 

const Delete = function () {
    for (let i = 0; i < employeeList[i].name.length; i++) {
        const element = employeeList[i].name;
        if (document.forms["deleteForm"]["name"].value === element) {
            employeeIndex = i;
        }
    }
    if (employeeIndex >= 0) {
        console.log("Present");
        employeeList.splice(employeeIndex, 1);
    } else {
        console.log("Absent");
    }

    render();
    employeeIndex = -1;
    $('#buttonVerify').on('click', Delete);
}


const Update = function () {
    const oldName = document.forms["updateForm"]["oldName"].value;
    const newName = document.forms["updateForm"]["name"].value;
    const officeNum = document.forms["updateForm"]["officeNum"].value;
    const phoneNum = document.forms["updateForm"]["phoneNum"].value;

    for (let i = 0; i < employeeList.length; i++) {
        const element = employeeList[i].name;
        if (oldName === element) {
            employeeIndex = i;
        }
    }
    if (employeeIndex >= 0) {
        console.log("Present");
        employeeList[employeeIndex].name = newName
        employeeList[employeeIndex].officeNum = officeNum
        employeeList[employeeIndex].phoneNum = phoneNum
        console.log(employeeList[employeeIndex].name);
    } else {
        console.log("Absent");
    }
    // console.log(`${employeeList[employeeIndex].name} take 2`);
    render();
    employeeIndex = -1;
    $('#buttonVerify').on('click', Update);
} // .TEXT

const Verify = function () {
    for (let i = 0; i < employeeList.length; i++) {
        const element = employeeList[i].name;
        if (document.forms["verifyForm"]["name"].value === element) {
            employeeIndex = i;
        }
    }
    if (employeeIndex >= 0) {
        alert("Present");
    } else {
        alert("Absent");
    }
    employeeIndex = -1;
    $('#buttonVerify').on('click', Verify);
}

const reveal = function (which) {
    $(`.body`).hide();
    $(`.${which}`).show();    
    return { which: which }
}

/////////////////
/*submit button slightly better
input type="submit"
in js: */
// const handleClick = function (event) {

//     console.log(which);

//     event.preventDefault();
    // const nameIn = $('#name').val();
    // const officeNumIn = $('#officeNum').val();
    // const phoneNumIn = $('#phoneNum').val();

    // console.log(`${nameIn}, ${officeNumIn}, ${phoneNumIn}`);

    // $('#name').val('');
    // $('#officeNum').val('');
    // $('#phoneNum').val('');

    // console.log(`${nameIn}, ${officeNumIn}, ${phoneNumIn}`);

    // if (which === "Add") {
    //     formAdd();
    // } else if (which === "Delete") {
    //     formDelete();
    // } else if (which === "Update") {
    //     formUpdate();
    // } else if (which === "Verify") {
    //     formVerify();
    // }
    // console.log(`${nameIn}, ${officeNumIn}, ${phoneNumIn}`);
// }

// end functions //


let which = 'initial';
let employeeIndex = -1;
const showAdd = function () { reveal("Add") }
const showDelete = function () { reveal("Delete") }
const showUpdate = function () { reveal("Update") }
const showVerify = function () { reveal("Verify") }
const showView = function () { reveal("View") }

$('.navAdd').on('click', showAdd);
$('.navDelete').on('click', showDelete);
$('.navUpdate').on('click', showUpdate);
$('.navVerify').on('click', showVerify);
$('.navView').on('click', showView);

// $('#submit').on('click', handleClick); // see below
// $(`#submit`).on('click', console.log("submit clicked?")); //running on load not on click

$('#buttonAdd').on('click', Add);
$('#buttonDelete').on('click', Delete);
$('#buttonUpdate').on('click', Update);
$('#buttonVerify').on('click', Verify);


// for (let i = 0; i < employeeList.length; i++) {
//     employeeList[i].name.push(employeeList[i].name);
// } console.log(employeeList[i].name);

//this block initializes the list
for (let i = 0; i < employeeList.length; i++) { //stick the out into a 'card' div for style
    $('.cards').append(`<div id="${employeeList[i].name}" class="card col-3"><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p></div>`)
}  // changes this to create and object, then listing it. allows for array manipulation instead of just DOM >.<

