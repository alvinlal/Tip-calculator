document.querySelector('#persons').addEventListener('change',(findresult));
document.querySelector('#bill').addEventListener('change',(findresult));
document.querySelector('#percent').addEventListener('change',(findresult));
function findresult(){
    var textnode;
    var persons=document.getElementById('persons').valueAsNumber;
    var bill=document.getElementById('bill').valueAsNumber;
    var percent=document.getElementById('percent').valueAsNumber;
    var tip=(bill*percent)/100;
    var tip_person=tip/persons;
    var total=(bill+tip);
    var p=document.getElementById('p1');
    p.textContent="Tip Per Person : "
    var value=tip_person;
    if(!isNaN(value)){
    textnode=document.createTextNode(value);
    p.appendChild(textnode);
    }
    var p=document.getElementById('p2');
    p.textContent="TOTAL : "
    var value=total;
    if(!isNaN(value)){
    textnode=document.createTextNode(value);
    p.appendChild(textnode);
    }
    
}
