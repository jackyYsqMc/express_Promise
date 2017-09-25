/**
 * Created by jackyMC on 2017/9/25.
 */
function *test(){
    console.log("test1");
    console.log("test2");
    yield  name ="123";
    console.log("test3");
}

function *test2(){
    console.log("test1^^^");
    console.log("test2^^^");
    yield name="456"
        console.log("test3^^^");
}
var it1 =test();
var it2 =test2();
console.log(it1);
console.log(it2)
console.log(it1.next(234));
console.log(it2.next(456));
console.log(name)



