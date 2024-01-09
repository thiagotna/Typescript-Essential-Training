type ContactName4 = string;
type ContactStatus4 = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface ContactKeys  {
    id: number;
    name: ContactName4;
    birthDate?: ContactBirthDate;
    status?: ContactStatus4;
}

let thirdContact: ContactKeys = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof ContactKeys

function getValue<T, K extends keyof T>(source: T, propertyName: K) {
    return source[propertyName]
}

const value = getValue(thirdContact, "status")
const value2 = getValue({min: 0, max:200}, "max")

console.log(value)
console.log(value2)