type ContactName3 = string;

type ContactStatus3 = "active" | "inactive" | "new"

interface Contact3 {
    id: number;
    name: ContactName;
    birthDate?: Date | number | string;
    status?: ContactStatus3;
}

interface Address3 {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

type AddressableContact = Contact3 & Address3

function getBirthDate(contact: Contact3) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let secondaryContact: Contact3 = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}