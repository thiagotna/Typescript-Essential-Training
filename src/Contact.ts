interface Contact extends Address {
    id: number;
    name: string;
    birthDate: Date;
    status: ContactStatus;
    clone(name: string) : Contact
}

interface Address {
    line1: string;
    line2?: string;
    province: string;
    region: string;
    postalCode: string;
}

let primaryContact: Contact = {
    id: 1,
    name: "John",
    birthDate: new Date("19-01-1987"),
    status: ContactStatus.New,
    line1: "RUa José Barro Magaldi 867",
    province: "São Paulo",
    region: "South East",
    postalCode: "05815-000",
    clone: Contact.prototype.clone
}