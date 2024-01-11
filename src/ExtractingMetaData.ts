//Defines a literal string type that represents a contact status
type Contacts8tatus8 = "active" | "inactive" | "new";

//Interface representing a Address Structure
interface Address8 {
    street: string;
    province: string;
    postalCode: string;
}

//Interface that represents a contact structure
interface Contact8 {
    /**
     * Unique id for contact
     * @type {number}
     */
    id: number;

    /**
     * Contact name
     * @type {string}
     */
    name: string;

    /**
     * Contact status (active, inactivw, new).
     * @type {Contacts8tatus8}
     */
    status: Contacts8tatus8;

    /**
     * Contact's address
     * @type {Address8}
     */
    Address8: Address8;

    /**
     * Contact's email
     * @type {string}
     */
    email: string;
}

//Interface representing a query generici model
interface Query2<TProp> {
    /**
     * Order asc or desc
     * @type {'asc' | 'desc'}
     */
    sort?: 'asc' | 'desc';

    /**
     * Method wich verifies if a value corresponds to query criteria
     * @param {TProp} val - Value to be verified
     * @returns {boolean}
     */
    matches(val: TProp): boolean;
}

// Type representing a query object for contact
type Contact8Query2 = {
    /**
     * Mapeamento de propriedades do contato para objetos de consulta.
     * Contact property mapping for query objects
     * Cada propriedade é opcional e pode ser do tipo Query2 correspondente à propriedade original.
     * Each property is optional and can be Query2 type which corresponds to the original property
     */
    [TProp in keyof Contact8]?: Query2<Contact8[TProp]>;
}

// Function that seachs within contacts following a query criteria
/**
 * Searchs within a contact list filtered by seatch criteria
 * @param {Contact8[]} Contacts8 - Contact list
 * @param {Contact8Query2} Query2 - Query criteria.
 * @returns {Contact8[]} - Filtered contact list.
 */
function searchContacts8(Contacts8: Contact8[], Query2: Contact8Query2): Contact8[] {
    return Contacts8.filter(Contact8 => {
        for (const property of Object.keys(Contact8) as (keyof Contact8)[]) {
            // Gets Query2 object for the property
            const propertyQuery2 = Query2[property] as Query2<Contact8[keyof Contact8]>;
            // Verifies the corresponding
            if (propertyQuery2 && propertyQuery2.matches(Contact8[property])) {
                return true;
            }
        }

        return false;
    });
}

// Usage fo searchContacts8
const filteredContacts8 = searchContacts8(
    [/* Contact Array */],
    {
        id: { 
            /**
             * Verifica se o ID corresponde ao valor especificado.
             * Checks if the ID id matches the specified value
             * @param {number} id - ID to be checked
             * @returns {boolean}
             */
            matches: (id) => id === 123
        }, // Query for ID property
        name: { 
            /**
             * Checks if name matches the specified value
             * @param {string} name - Value to be compared to contact name
             * @returns {boolean}
             */
            matches: (name) => name === "Carol Weaver"
        }, // Pquery for name property
    }
);
