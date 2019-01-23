//on load functions... populate data, clear other (reverse order)

//buttonAdd on click: log info
const formAdd = function() { //stick the out into a 'card' div for style
    $('.List').append(`<div id="${document.forms["addForm"]["name"].value}List"><br><p>Name: ${document.forms["addForm"]["name"].value}</p>
    <p>Office Number: ${document.forms["addForm"]["officeNum"].value}</p>
    <p> Phone Number: ${document.forms["addForm"]["phoneNum"].value}`);
}

$('#buttonAdd').on('click', formAdd);


// const showAdd = function () {
//     $('.body').hide();
//     $('.Add').show()
//     console.log('add?')
// }

// const showDelete = function () {
//     $('.body').hide();
//     $('.Delete').show()
//     console.log('delete?')
// }


// const showUpdate = function () {
//     $('.body').hide();
//     $('.Update').show();
//     console.log('update?')
// }

// const showVerify = function () {
//     $('.body').hide();
//     $('.Verify').show();
//     console.log('verify?')
// }

// const showView = function () {
//     $('.body').hide();
//     $('.View').show();
//     console.log('click!')
// }
 const reveal = function (which) {
     $(`.body`).hide();
     $(`.${which}`).show();
     console.log(`${which} via reveal`);
 } //presently broken, just runs //needs lingo update (which vs whichList)

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
in js: */
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


$(".List").empty(); //this block initializes the list
for (let i=0; i <employeeList.length; i++) { //stick the out into a 'card' div for style
    $('.List').append(`<div id=${employeeList[i].name}List><br><p>Name: ${employeeList[i].name}</p>
                      <p>Office Number: ${employeeList[i].officeNum}</p>
                      <p> Phone Number: ${employeeList[i].phoneNum}</p><br></div>`)
}
