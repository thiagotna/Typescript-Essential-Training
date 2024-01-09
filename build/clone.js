function clone(source) {
    return Object.apply({}, source);
}
let m = {
    id: 2,
    name: "Marge Simpson",
    birthDate: new Date('03-03-1990'),
    status: ContactStatus.New,
    line1: "Evergreen Boulevard 123",
    province: "Springfield",
    region: "Central",
    postalCode: "1234321",
    clone: Contact.prototype.clone
};
clone(m);
