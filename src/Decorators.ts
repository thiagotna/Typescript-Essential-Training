interface ContactChapter5 {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated(): boolean {
        return true
    },    
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

function authorize(role: string) {
    return function authorizeDecorator(target: any, property: string, descriptor: PropertyDescriptor ) {
        const wrapper = descriptor.value
    
        descriptor.value = function () {
            if (!currentUser.isAuthenticated()) {
                throw new Error("User is not authenticated!");            
            }

            if (!currentUser.isInRole(role)) {
                throw Error(`User not in ${role}`);
            }

            return wrapper.apply(this, arguments)
        }
    }   
}

class ContactChapterRepository {
    private ContactChapters5: ContactChapter5[] = [];

    @authorize("ContactViewer")
    getContactChapter5ById(id: number): ContactChapter5 | null {
        const ContactChapter5 = this.ContactChapters5.find(x => x.id === id);
        return ContactChapter5;
    }

    @authorize("ContactChapterEditor")
    save(ContactChapter5: ContactChapter5): void {
        const existing = this.getContactChapter5ById(ContactChapter5.id);

        if (existing) {
            Object.assign(existing, ContactChapter5);
        } else {
            this.ContactChapters5.push(ContactChapter5);
        }

        console.debug(`ContactChapterRepository.save: END`);
    }
}