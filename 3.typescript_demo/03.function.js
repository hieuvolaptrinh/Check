{
    function add1(a, b) {
        return a + b;
    }
    var myVariable = 10;
    var result = add1(myVariable, 100);
    console.log(result);
}
{
    var id = 1;
    var name_1 = "hieu";
    var gender = true;
    var allInfor = "Id" + id + "\n" + "name " + name_1 + "\n" + " gender " + gender;
    console.log(allInfor);
    //    sử dụng back stick cho nó dễ ``````````
    console.log("\n-----------------------------------------------");
    var allInfor2 = "Id ".concat(id, " \n name ").concat(name_1, "  \n gender ").concat(gender);
    console.log(allInfor2);
}
