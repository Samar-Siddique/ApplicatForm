const table=document.querySelector(".tableBody")
var firstName="";
var secondName="";
var Age= "";
var Email="";
var PhoneNumber="";

let dataArray=[];
let selectedRow=null; 

function addValue(){
    firstName=document.getElementById("fName").value;
    secondName=document.getElementById("sName").value;
    Age=document.getElementById("age").value;
    Email=document.getElementById("email").value;
    PhoneNumber=document.getElementById("phone_no").value;
  
    let htmlData="";

    if(selectedRow==null){
        dataArray.push({
            firstName: firstName,
            secondName: secondName,
            Age:Age,
            Email:Email,
            PhoneNumber:PhoneNumber
        })
        console.log(dataArray);
    }
    else{
        dataArray[selectedRow].firstName=firstName;
        dataArray[selectedRow].secondName=secondName;
        dataArray[selectedRow].Age=Age;
        dataArray[selectedRow].Email=Email;
        dataArray[selectedRow].PhoneNumber=PhoneNumber;

        table.innerHTML="";
        selectedRow=null;
    }

    dataArray.forEach((el,index)=>{
        htmlData+=`<tr id=${index}>
        <td>${el.firstName}</td>
        <td>${el.secondName}</td>
        <td>${el.Age}</td>
        <td>${el.Email}</td>
        <td>${el.PhoneNumber}</td>
        <td><button class="edit-btn" onClick="edit(this)">Edit</button></td></tr>
        `
    })
    table.innerHTML=htmlData;
    document.getElementById("fName").value="";
    document.getElementById("sName").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
    document.getElementById("phone_no").value="";
}

function edit(e){
    selectedRow=e.parentElement.parentElement.id;

    let getData=dataArray[selectedRow];

    document.getElementById("fName").value=getData.firstName;
    document.getElementById("sName").value=getData.secondName;
    document.getElementById("age").value=getData.Age;
    document.getElementById("email").value=getData.Email;
    document.getElementById("phone_no").value=getData.PhoneNumber;

}

