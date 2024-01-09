//function clone( source: Contact) : Contact {
function clone<T1, T2>( source: T1) : T2 {
    return Object.apply({}, source)
}

let m: Contact = {
    id: 2,
    name: "Marge Simpson",
    birthDate: new Date('03-03-1990'),
    status: ContactStatus.New,
    line1: "Evergreen Boulevard 123",
    province: "Springfield",
    region: "Central",
    postalCode: "1234321",
    clone: Contact.prototype.clone
}

const dateRange =  {startDate: Date.now(), endDate:Date.now()}
const dateRangeCopy = clone(dateRange)

clone<Contact, Date>(m) //Explicit defines the input and output of the method as determined when the method clone was written