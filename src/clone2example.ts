//function clone( source: Contact) : Contact {
function clone2<T1, T2 extends T1>( source: T1) : T2 {
    return Object.apply({}, source)
}

let m2: Contact = {
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

// interface UserContact<TEexternalId> {
//     id: number,
//     name: string,
//     username: string,
//     externalId: TEexternalId,
//     loadExternalId() : <TEexternalId>
// }

const dateRange2 =  {startDate: Date.now(), endDate:Date.now()}
const dateRangeCopy2 = clone(dateRange)

clone<Contact, Date>(m) //Explicit defines the input and output of the method as determined when the method clone was written