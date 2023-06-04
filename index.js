// declare empty object
// let expanse_object = [];

let date = new Date();
let expanse_counter = 0, total_expance_Value = 0, budget_inputbox, budget_Value = 0;
const options = { year: "numeric", month: "long", day: "numeric" };
date = date.toLocaleDateString(undefined, options);
document.getElementById("demo").innerHTML = date;

function btn() {
  budget_inputbox = document.getElementById("budget_inputBox");
  let exp = document.getElementById("expense");
  document.getElementById("current_balance").innerText = `Value : $ ${budget_inputbox.value}`;

  if (budget_inputbox.value) {
    result.innerText = `Total Budget : ${budget_inputbox.value}`;
    const subtract = (balance.innerText = `Balance : ${budget_inputbox.value}`);
    //       console.log(subtract)
  } else {
    alert("Please Enter the value");
  }
  budget_Value = budget_inputbox.value;
}

// let obj = {
//     DueDate: '2024-01-01',
//     Recurring: 'No',
//     TotalAmmount: 150,
//     Category: 'Soap',
//     Description: 'This is a soap',
//     PaymentDate: '2023-01-01'
// };

// expanse_object.push(obj);

// for(let i=0; i<expanse_object.length; i++){
//     document.getElementById("expanseContainerId").innerHTML += `<div class="container p-5 mt-5 " style="background-color: green; color: white; font-size: 30px;">
//     <div class="row align-items-start">
//         <div class="col" id="result">${expanse_object}</div>
//         <div class="col">Total Expanse : $5000</div>
//         <div class="col">Total Balance : 10000</div>
//     </div>
//     </div>`;
// };
//let expanse_arrayq1 = ["sheheryar","ss","yaseen","iqra"];

// let expanse_array1 = [
//         {
//                 due: day.value,
//                 Prod: product.value,
//                 amo: amount.value,
//                 rec: recurring.value,
//                 pay: payment.value
//         },
//         {
//                 due: day.value,
//                 Prod: product.value,
//                 amo: amount.value,
//                 rec: recurring.value,
//                 pay: payment.value
//         },
//         {
//                 due: day.value,
//                 Prod: product.value,
//                 amo: amount.value,
//                 rec: recurring.value,
//                 pay: payment.value
//         },
//         {
//                 due: day.value,
//                 Prod: product.value,
//                 amo: amount.value,
//                 rec: recurring.value,
//                 pay: payment.value
//         }
// ];

let expanse_array = [];

function submit() { 
        // document.getElementById('#expanseModalLabel').modal('hide');

  let day = document.getElementById("date");
  let product = document.getElementById("product");
  let recurring = document.getElementById("recurring");
  let payment = document.getElementById("payment");
  let description = document.getElementById("description");
  let amount = document.getElementById("amount");
  let exp = document.getElementById("expense");
  let clo = document.getElementById("close");

  total_expance_Value += Number(amount.value);

  budget_Value -= Number(amount.value);

  document.getElementById("current_balance").innerText = `Value : $ ${budget_Value}`;

  document.getElementById("balance").innerText = `Balance: ${budget_Value}`;

  document.getElementById("expense").innerText = `Expenses: ${total_expance_Value}`;

  //exp.innerText = `Expenses : ${amount.value}`;

  let obj = {
    due: day.value,
    Prod: product.value,
    amo: amount.value,
    rec: recurring.value,
    pay: payment.value,
  };
  let input = document.getElementById("budget_inputBox");
  //balance.innerText = `Balance : ${input.value - amount.value}`;

  expanse_array.push(obj);

  
  document.getElementById("Expanse_container").innerHTML += 
  `<div class="container p-5 mt-5" id="list">
  <div class="row">
  <div class="col" id="due${expanse_counter}">Due Date</div>
  <div class="col" id="Prod${expanse_counter}">Product</div>
  <div class="col" id="amo${expanse_counter}">Amount</div>
  <div class="col" id="rec${expanse_counter}">Recurring</div>
  <div class="col" id="pay${expanse_counter}">Paymet Date</div>
  </div>
  </div>`;

  expanse_counter++;
  
  for (let i = 0; i < expanse_array.length; i++) {
    document.getElementById("due"+i).innerText = expanse_array[i].due;
    document.getElementById("Prod"+i).innerText = expanse_array[i].Prod;
    document.getElementById("amo"+i).innerText = expanse_array[i].amo;
    document.getElementById("rec"+i).innerText = expanse_array[i].rec;
    document.getElementById("pay"+i).innerText = expanse_array[i].pay;

    // document.querySelector()
  }
}

let transaction = document.getElementById("trans");
let incr = document.getElementById("increament");

let num = 0;

transaction.addEventListener("click", function () {
  num += 1;
  incr.innerHTML = `Transaction : ${num}`;
});

function myFunction() {
  document.getElementById("myForm").reset();
}
