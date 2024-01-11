let xx: Record<string, string | number | boolean | Function> = { name: "Wruce Bayne" }
xx.number = 1234
xx.active = true
xx.log = () => console.log("awesome!")


////////////////////

type ContactStatus7 = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact7 {
    id: number;
    name: string;
    status: ContactStatus7;
    address: Address;
    email: string;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

//PARTIAL extends a type interface
//Omit
// type ContactQuery = Omit<
//     Partial<
//         Record<keyof Contact7, Query>
//     >,"address" | "status"
// >
type ContactQuery =Partial<
        Pick<Record<keyof Contact7, Query>, "id" | "name">
    >

function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact7)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);