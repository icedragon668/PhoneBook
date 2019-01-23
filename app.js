//on load functions... populate data, clear other (reverse order) // ??

const formAdd = function() {
    $('.cards').append(`<div id="${document.forms["addForm"]["name"].value}Card"><p>Name: ${document.forms["addForm"]["name"].value}</p>
    <p>Office Number: ${document.forms["addForm"]["officeNum"].value}</p>
    <p> Phone Number: ${document.forms["addForm"]["phoneNum"].value}</div>`);
}  //change this to pushing on object

const formDelete = function () {console.log(`Placeholder!`)}
const formUpdate = function () {console.log(`Placeholder!`)}
const formVerify = function () {console.log(`Placeholder!`)
    //psuedocode
     /*
    inout name, check name v employeelist... add doesn/t add to employee list...
    check text/html of the cards?
    if inputName is in .cards, then yay, else boo
    */
}

 const reveal = function (which) {
     $(`.body`).hide();
     $(`.${which}`).show();
     console.log(`${which} via reveal`);
 }

 $('#buttonAdd').on('click', formAdd);
 $('#buttonDelete').on('click', formDelete);
 $('#buttonUpdate').on('click', formUpdate);
 $('#buttonVerify').on('click', formVerify);

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


/////////////////
/*submit button slightly better
input type="submit"
in js: 
const handleClick = function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();

    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');

    console.log(`${name}, ${officeNum}, ${phoneNum}`);
}

$('#submit').on('click', handleClick);
*/

//this block initializes the list
for (let i=0; i <employeeList.length; i++) { //stick the out into a 'card' div for style
    $('.cards').append(`<div id=${employeeList[i].name} Card><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p></div>`)
}  // changes this to create and object, then listing it. allows for array manipulation instead of just DOM >.<
