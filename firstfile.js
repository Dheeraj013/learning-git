let arr = [1, 
    true, 
    1.1, 
    "string", 
    null, 
    [1,2,3,4,5], 
    function fn(){
        console.log("Hello I am Dheeraj");
        return "Bisht";
    }];

    console.log("arr", arr[3]);
    console.log("function", arr[6])
    console.log("last name", arr[6]())