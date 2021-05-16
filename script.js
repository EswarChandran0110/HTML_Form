const table = document.getElementById('table');
const row = table.insertRow(0);
row.classList.add('row');
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);
const cell6 = row.insertCell(5);
const cell7 = row.insertCell(6);
const cell8 = row.insertCell(7);
cell1.innerText = 'First Name';
cell2.innerText = 'Last Name';
cell3.innerText = 'Address';
cell4.innerText ='Pincode';
cell5.innerText ='Gender';
cell6.innerText ='Food Choice';
cell7.innerText ='State';
cell8.innerText ='Country';
const row1 = table.insertRow(1);
row1.classList.add('row1');
const Fnamecell = row1.insertCell(0);
const Lnamecell = row1.insertCell(1);
const Addrcell = row1.insertCell(2);
const Pincell = row1.insertCell(3);
const Gendercell = row1.insertCell(4);
const Foodcell = row1.insertCell(5);
const Statecell = row1.insertCell(6);
const Countrycell = row1.insertCell(7);

document.getElementById('btn').addEventListener('click',function(e){
   e.preventDefault();
     const Fname = document.getElementById('Fname').value;
    
     const Lname = document.getElementById('Lname').value;
     
     const addr = document.getElementById('addr').value;
     
     const pin = document.getElementById('pin').value;
     
     const state = document.getElementById('state').value;
     
     const country = document.getElementById('country').value;
     
     var foodchoice ='' ;
     var count = 0;
     const sindian = document.getElementById('sindian');
    if(sindian.checked){
       foodchoice = foodchoice +"* "+sindian.value+" ";
       count++;
    }
    const nindian = document.getElementById('nindian');
    if(nindian.checked){
        foodchoice = foodchoice +"* "+ nindian.value+" ";
        count++;
     }
     const european = document.getElementById('european');
    if(european.checked){
       foodchoice = foodchoice +"* "+ european.value+" ";
       count++;
    }
    const continental = document.getElementById('continental');
    if(continental.checked){
       foodchoice = foodchoice +"* "+ continental.value+" ";
       count++;
    }
    const chinese = document.getElementById('chinese');
    if(chinese.checked){
       foodchoice = foodchoice +"* "+ chinese.value+" ";
       count++;
    }
   
   if ((Fname==="")||(Lname==="")||(addr==="")||(pin==="")||(state==="")||(country==="")||(count<2) || !(document.querySelector('input[name="gender"]:checked'))){
      alert("Fill all the arguments");
      if((count<2)){
         alert("Select Atleast Two Food Choices")
      }
   }else{
      Fnamecell.innerText= Fname;
      Lnamecell.innerText= Lname;
      Addrcell.innerText = addr;
      Pincell.innerText = pin;
      Statecell.innerText = state;
      Countrycell.innerText = country;
      Foodcell.innerText= foodchoice;
      try{
         const gender = document.querySelector('input[name="gender"]:checked').value;
         Gendercell.innerText = gender;
         }catch(err){
            alert('select the Gender ')
            
       }
         }
   
   const form =  document.getElementById('form');
   form.reset();
   
})
