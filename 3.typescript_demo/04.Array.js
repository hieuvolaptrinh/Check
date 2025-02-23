{
    var myNumber = [1, 2, 3, 4, 5, 6, 7, 8];
    //   for
    for (var i = 9; i < 15; i++) {
        myNumber.push(i);
    }
    console.log(myNumber);
    console.log("---------------------------");
    //   print - forr of
    for (var _i = 0, myNumber_1 = myNumber; _i < myNumber_1.length; _i++) {
        var x = myNumber_1[_i];
        console.log(x);
    }
}
