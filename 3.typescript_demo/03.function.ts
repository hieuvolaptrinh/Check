{
  function add1(a: number, b: number): number {
    return a + b;
  }

  let myVariable: any = 10;
  let result = add1(myVariable, 100);
  console.log(result);
}
{
  let id: number = 1;
  let name: string = "hieu";
  let gender: boolean = true;

  const allInfor =
    "Id" + id + "\n" + "name " + name + "\n" + " gender " + gender;
  console.log(allInfor);

  //    sử dụng back stick cho nó dễ ``````````

  console.log("\n-----------------------------------------------");
  const allInfor2 = `Id ${id} \n name ${name}  \n gender ${gender}`;

  console.log(allInfor2 );
}
