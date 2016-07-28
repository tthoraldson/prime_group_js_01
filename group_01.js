// Completed by: Theresa T, Adam E, Tyler R, Liz H. on 7/28/2016

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var empSTIArray = [];

employees.forEach(fun);

//functions
function fun(array) {
  var empArray = [];
  var bonus;
  array[2] = parseInt(array[2]);

  empArray.push(array[0]);

  switch(array[3]){
    case 2:
      bonus = 0;                  //bonus is saved as float
      break;
    case 3:
      bonus = 0.04;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 5:
      bonus = 0.1;
      break;
    }


    if(array[1].length == 4) {
      bonus += 0.05;
      parseInt(array[1]);
    }

    if (array[2] > 65000) {
      bonus -= 0.01;
    }
    if (bonus >= 0.13) {
      bonus = 0.13;
    }

    var bonusAmount = bonus * array[2];
    var salary =  bonusAmount + array[2];

    empArray[1] = bonus;
    empArray[2] = salary;
    empArray[3] = Math.round(bonusAmount);



    empSTIArray.push(empArray);
    console.log(empArray);
    //document.write(empArray + "<br>");

    for (i = 0; i < empArray.length; i++) {
      document.write(empArray[i] + " ");
    }
  document.write("<br>");
}
