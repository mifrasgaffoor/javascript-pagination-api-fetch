
const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);

const content = document.createElement("div");
body.appendChild(content);
content.classList.add("conten")

const btnprev = document.createElement("button");
btnprev.innerHTML="<<";
container.appendChild(btnprev)

const btn1 = document.createElement("button");
btn1.innerHTML="01-10";
container.appendChild(btn1)


const btn2 = document.createElement("button");
btn2.innerHTML="11-20"
container.appendChild(btn2)


const btn3 = document.createElement("button");
btn3.innerHTML="21-30"
container.appendChild(btn3)

const btn4 = document.createElement("button");
btn4.innerHTML="31-40"
container.appendChild(btn4)

const btn5 = document.createElement("button");
btn5.innerHTML="41-50"
container.appendChild(btn5)

const btn6 = document.createElement("button");
btn6.innerHTML="51-60"
container.appendChild(btn6)

const btn7 = document.createElement("button");
btn7.innerHTML="61-70"
container.appendChild(btn7)

const btn8 = document.createElement("button");
btn8.innerHTML="71-80"
container.appendChild(btn8)


const btn9 = document.createElement("button");
btn9.innerHTML="81-90"
container.appendChild(btn9)


const btn10 = document.createElement("button");
btn9.innerHTML="91-100"
container.appendChild(btn9)


const btnback = document.createElement("button");
btnback.innerHTML=">>"
container.appendChild(btnback)


   const table =  document.createElement("table");
    content.append(table);

    const col = document.createElement("tr");
    table.appendChild(col);

    const th1 = document.createElement("th");
    col.appendChild(th1);
    th1.innerHTML="id"

    
    const th2 = document.createElement("th");
    col.appendChild(th2);
    th2.innerHTML="Email"

    
    const th3 = document.createElement("th");
    col.appendChild(th3);
    th3.innerHTML="Name"
     


   
     let page = 0 ;
  
let arr =[];

function createRow(element){
    const col = document.createElement("tr");
    table.appendChild(col);


    const td1 = document.createElement("th");
    col.appendChild(td1);
    td1.innerHTML=element.id

    const td2 = document.createElement("th");
    col.appendChild(td2);
    td2.innerHTML=element.name


    const td3 = document.createElement("th");
    col.appendChild(td3);
    td3.innerHTML=element.email 
}


// async function fetchData(){
//     let url ="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
//   try {
//         const responseData = await fetch(url);
//         const getData = await responseData.json()
//       console.log(getData);
//     } catch (error) {
//         console.log(error);
//     }
// }















  
 let url ="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  fetch(url).then((res)=>{
      return (res.json());
  }).then((data)=>{
    console.log(data);
    data.forEach(element => {

    });
  }).catch((err)=>{
      console.log(err);
  })
  



  