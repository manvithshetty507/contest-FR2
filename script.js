let employees = [{id:1,name:"john",age:"18",profession:"developer"},
                {id:2, name:"jack",age:"20", profession:"developer"},
                {id:3, name:"karen", age:"19",profession:"admin"}];

//show employees

function showEmployees(employees){

    const employeeList = document.getElementById('name-list');
    employeeList.innerHTML="";

    employees.forEach(element => {
        const info = document.createElement('div');
        info.classList.add('employee-info');
        info.innerHTML =`
            <span>${element.id}.</span>
            <span>Name: ${element.name}</span>
            <p>Profession: ${element.profession}</p>
            <p>Age: ${element.age}</p>
        `;
        employeeList.appendChild(info);
    });

}

//filter employees

function filterEmployees() {

    
    const selectedProfession = document.getElementById('prof');
    const profession = selectedProfession.value;

    if (profession === "") {
        alert("Please select a profession before filtering.");
        console.log('gg');
        return;
    }

    const filtered = employees.filter(employee => employee.profession === profession);
    showEmployees(filtered);
}

//add user

function addUser(){

    const nameVal = document.getElementById('name');
    const professionVal = document.getElementById('profession');
    const ageVal = document.getElementById('age');

    const name = nameVal.value.trim();
    const age = ageVal.value.trim();
    const profession = professionVal.value.trim();

    const newUser = {
        id:employees.length+1,
        name:name,
        profession:profession,
        age:age
    };

    employees.push(newUser);
    showEmployees(employees);

    nameVal.value = "";
    professionVal.value = "";
    ageVal.value = "";
    
}

//call showEmployee

showEmployees(employees);