var nameHandler = function (data, age) {
    console.log("data :", data["".concat(age)]);
    return { data: data, age: age };
};
var data = nameHandler({ name: "ifti", age: 230, id: true }, "name");
console.log("name :", data);
