type ContactStatus6 = "active" | "inactive" | "new";

interface Address6 {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact6 {
    id: number;
    name: string;
    status: ContactStatus6;
    address: Address6;
}

//type Awesome = Contact6["id"]
type Awesome = Contact6["address"]["postalCode"]

interface ContactEvent {
    contactId: Contact6["id"];
}

interface ContactDeletedEvent6 extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: Contact6["status"];
    newStatus: Contact6["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent6;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
    eventName: T, // Generic type that should contain a string that matches the name of the method in this case should match deleted or statusChanged inside the Contact Events Interface.
    handler: (evt: ContactEvents[T])=> void // Method that contains a generic type as a parameter tha matches the type of the property indicated in the eventName param 
) {
    if (eventName === "statusChanged") {
        handler({contactId: 1, oldStatus: "active", newStatus:"inactive"})
    }
}

//Usage
handleEvent("statusChanged", evt => evt)