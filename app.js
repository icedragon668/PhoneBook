//on load functions... populate data, clear other (reverse order) // ??
// functions //
const formAdd = function() {
    $('.cards').append(`<div id="${document.forms["addForm"]["name"].value}Card"><p>Name: ${document.forms["addForm"]["name"].value}</p>
    <p>Office Number: ${document.forms["addForm"]["officeNum"].value}</p>
    <p> Phone Number: ${document.forms["addForm"]["phoneNum"].value}</div>`);
}  //change this to pushing on object

const formDelete = function () {console.log(`Placeholder!`)}
const formUpdate = function () {console.log(`Placeholder!`)}
const formVerify = function () {console.log(`Placeholder!`)
    console.log(employeeNameArray);

    //psuedocode
     /*
     get namelist and place in array
     check array for nameinput
    inout name, check name v employeelist... add doesn/t add to employee list...
    check text/html of the cards?
    if inputName is in .cards, then yay, else boo
    */
}

 const reveal = function (which) {
     $(`.body`).hide();
     $(`.${which}`).show();
     console.log(`${which} via reveal`);
     return {which: which}
 }

/////////////////
/*submit button slightly better
input type="submit"
in js: */
const handleClick = function (event) {

    console.log(which);

    event.preventDefault();
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
}

// end functions //


let which = 'initial';
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
$('d').on('click', console.log(which)); //running on load not on click

$('#buttonAdd').on('click', formAdd);
$('#buttonDelete').on('click', formDelete);
$('#buttonUpdate').on('click', formUpdate);
$('#buttonVerify').on('click', formVerify);


const employeeNameArray = [];
for (let i=0; i <employeeList.length; i++) {
    employeeNameArray.push(employeeList[i].name);
} console.log(employeeNameArray);

//this block initializes the list
for (let i=0; i <employeeList.length; i++) { //stick the out into a 'card' div for style
    $('.cards').append(`<div id=${employeeList[i].name} Card><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p></div>`)
}  // changes this to create and object, then listing it. allows for array manipulation instead of just DOM >.<
