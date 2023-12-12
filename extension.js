
let inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl= document.getElementById("input-el")
const ulEt= document.getElementById("ul-el")
inputBtn.addEventListener("click", function() {
    
     myLeads.push(inputEl.value)
     inputEl.value=""
     rendeLeads()
}
) 
function rendeLeads(){
    let listItems= ""
    for (let i=0;i<myLeads.length; i ++){
listItems += 
`
<li>
    <a href='${myLeads[i]}' target='_blank'>
        ${myLeads[i]}
    </a>
</li>
`;
}
ulEt.innerHTML= listItems

    }
    
 