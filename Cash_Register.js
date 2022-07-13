// TODO: Refactor and document this code
var factorValue={
  "1":{name:"PENNY",value: 0.01},
  "2":{name:"NICKEL",value: 0.05},
  "3":{name:"DIME",value: 0.1},
  "4":{name:"QUARTER",value: 0.25},
  "5":{name:"ONE",value: 1},
  "6":{name:"FIVE",value: 5},
  "7":{name:"TEN",value: 10},
  "8":{name:"TWENTY",value: 20},
  "9":{name:"ONE HUNDRED",value: 100}
};

function getNotesDetails(remainingAmount,cashRegisterAmount,result,noteIndex){
  // use reducer function instead
  if(remainingAmount===0){
    let flag=0;
    cashRegisterAmount.forEach(x=>{
      if(x[1] > 0){
        flag=1;
      }
    });
    if(flag===0)
      return {status: "CLOSED"};
      
    return {status: "OPEN",change: result};
  }
