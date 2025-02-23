{
  let myNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  //   for
  for (let i = 9; i < 15; i++) {
    myNumber.push(i);
  }
  console.log(myNumber);

  console.log("---------------------------");
  //   print - forr of
  for (let x of myNumber) {
    console.log(x);
  }
  
}
