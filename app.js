//Get input element
var filterInput = document.getElementById('filterInput');
//Get the ul tag names
var ulNames = document.getElementById('names');

//Adding keyup Event Listener using filerInput
filterInput.addEventListener('keyup', filterNames);

//function fileterNames
function filterNames(e) {
    e.preventDefault();

    //Get the input value from the filter
    let filterInputValue = document.getElementById('filterInput').value.toLowerCase();

    //Get lis from ulNames
    let li = ulNames.querySelectorAll('li.collection-item');

    //loop through the collection-items list
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        //If matches
        if (a.innerHTML.toLowerCase().indexOf(filterInputValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';

        }
    }
}