// (function myFun() {
//   console.log("this is my name");
// })();
let total = (function my() {
  let a = {
    name: "jabed",
    age: 24,
  };
  return a;
})();

var initial = (function () {
  console.log("my name is " + total.name);
})();
function newFun() {
  "use strict";
  console.log(this);
}
newFun() 