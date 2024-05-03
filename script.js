

  const inpt = document.getElementById("txte");
  const buton = document.getElementById("bnt");
  const limit=1000;
  
  function sumMultiplesOf3And5(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};
 
  const result = sumMultiplesOf3And5(limit);
  const answer = parseInt(document.getElementById("inpt").value);
  buton.addEventListener("click", function(){
  if (inpt === result){
    alert("Congrats that is correct")
  }else{
    alert("Wrong, try again")
  }
  });
  console.log("The sum of all multiples of 3 or 5 below", limit, "is:", result);
  