const w = "string"
const ww = true
console.log(typeof w) // --> "string"
console.log(typeof ww) // --> "boolean"



type ContactName5 = string;
type ContactStatus5 = "active" | "inactive" | "new"
type ContactBirthDate5 = Date | number | string

interface Contact5 {
    id: number;
    name: ContactName5;
    birthDate?: ContactBirthDate5;
    status?: ContactStatus5;
}

function toContact(nameOrContact: string | Contact5 ) : Contact5 {
    if (typeof nameOrContact === "object") {
        return {
            id: nameOrContact.id,
            name: nameOrContact.name,
            status: nameOrContact.status
        }
    }
    else {
        return {
            id: 0,
            name: nameOrContact,
            status: "active"
        }
    }
}

const myType = {min: 1, max:300}

function save(source:typeof myType) {
    console.log(source)
}