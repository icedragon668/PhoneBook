//on load functions... populate data, clear other (reverse order) // ??

// functions //
const render = function () {
    $(".cards").empty();
    for (let i = 0; i < employeeListJS.length; i++) { //stick the out into a 'card' div for style?
    // console.log(`${employeeList[employeeIndex].name} take 3`);
        $('.cards').append(`<div id="${employeeListJS[i].name}" class="card"><p>Name: ${employeeListJS[i].name}</p>
                      <p>Office Number: ${employeeListJS[i].officeNum}</p>
                      <p> Phone Number: ${employeeListJS[i].phoneNum}</p></div>`)
    } // console.log(`${employeeList[employeeIndex].name} take 4`); //renders the list, with DOM style options  
    const employeeNameArray = [];
    for (let i = 0; i < employeeListJS.length; i++) {
        employeeNameArray.push(employeeListJS[i].name);
        console.log(employeeNameArray);
    }
}  

const formAdd = function () {
    const name = document.forms["addForm"]["name"].value;
    const officeNum = document.forms["addForm"]["officeNum"].value;
    const phoneNum = document.forms["addForm"]["phoneNum"].value;
    const newEmployee = { //this is a #$%^ING OBJECT
        name: name,
        officeNum: officeNum,
        phoneNum: phoneNum
    } // end #$%^ING OBJECT
    employeeListJS.push(newEmployee);
    render();
};

const formDelete = function () { //deleting at index number of original name, no updating
    console.log(document.forms["deleteForm"]["name"].value);  // ie Juan deletes [1] everytime
    console.log(employeeNameArray);
    for (let i = 0; i < employeeNameArray.length; i++) {
        const element = employeeNameArray[i];
        if (document.forms["deleteForm"]["name"].value === element) {
            employeeIndex = i;
        }
    }
    if (employeeIndex >= 0) {
        console.log("Present");
        console.log(employeeIndex);
        employeeListJS.splice(employeeIndex, 1);
    } else {
        console.log("Absent");
    }

    render();
    employeeIndex = -1;
}


const formUpdate = function () {
    console.log(document.forms["updateForm"]["oldName"].value);

    const oldName = document.forms["updateForm"]["oldName"].value;
    const newName = document.forms["updateForm"]["name"].value;
    const officeNum = document.forms["updateForm"]["officeNum"].value;
    const phoneNum = document.forms["updateForm"]["phoneNum"].value;

    for (let i = 0; i < employeeNameArray.length; i++) {
        const element = employeeNameArray[i];
        if (document.forms["updateForm"]["oldName"].value === element) {
            employeeIndex = i;
        }
    }
    if (employeeIndex >= 0) {
        console.log("Present");
        console.log(employeeIndex);
        employeeListJS[employeeIndex].name = newName
        console.log(employeeListJS[employeeIndex].name);
    } else {
        console.log("Absent");
    }
    // console.log(`${employeeListJS[employeeIndex].name} take 2`);
    render();
    employeeIndex = -1;
} // .TEXT

const formVerify = function () {
    console.log(employeeNameArray);
    for (let i = 0; i < employeeNameArray.length; i++) {
        const element = employeeNameArray[i];
        if (document.forms["verifyForm"]["name"].value === element) {
            employeeIndex = i;
        }
    }
    if (employeeIndex >= 0) {
        // console.log("Present");
        alert("Present");
        console.log(employeeIndex);
    } else {
        console.log("Absent");
    }
    employeeIndex = -1;
}

const reveal = function (which) {
    $(`.body`).hide();
    $(`.${which}`).show();
    console.log(`${which} via reveal`);
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

$('#buttonAdd').on('click', formAdd);
$('#buttonDelete').on('click', formDelete);
$('#buttonUpdate').on('click', formUpdate);
$('#buttonVerify').on('click', formVerify);


const employeeNameArray = [];
for (let i = 0; i < employeeList.length; i++) {
    employeeNameArray.push(employeeList[i].name);
} console.log(employeeNameArray);

//this block initializes the list
for (let i = 0; i < employeeList.length; i++) { //stick the out into a 'card' div for style
    $('.cards').append(`<div id="${employeeList[i].name}" class="card"><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p></div>`)
}  // changes this to create and object, then listing it. allows for array manipulation instead of just DOM >.<

const employeeListJS = employeeList
