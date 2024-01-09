let thirdContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
};
function getValue(source, propertyName) {
    return source[propertyName];
}
const value = getValue(thirdContact, "status");
const value2 = getValue({ min: 0, max: 200 }, "max");
console.log(value);
console.log(value2);
