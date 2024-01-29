interface Contato {
    id: number;
}

const usuarioAtivo = {
    id: 1234,
    roles: ["ContatoEditor"],
    isAuthenticated(): boolean {
        return true
    },
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

function authorize(role: string) {
    return function authorizeDecorator(target: any, property: string, descriptor: PropertyDescriptor) {
        const wrapped = descriptor.value

        descriptor.value = function () {
            if (!usuarioAtivo.isAuthenticated()) {
                throw Error("User is not authenticated");
            }
            if (!usuarioAtivo.isInRole(role)) {
                throw Error(`User not in role ${role}`);
            }

            return wrapped.apply(this, arguments);
        }
    }
}

function freeze(target:Function) {
    
}

@freeze
class ContatoRepository {
    private Contatos: Contato[] = [];

    @authorize("ContatoViewer")
    getContatoById(id: number): Contato | null {
        const Contato = this.Contatos.find(x => x.id === id);
        return Contato;
    }

    @authorize("ContatoEditor")
    save(Contato: Contato): void {
        const existing = this.getContatoById(Contato.id);

        if (existing) {
            Object.assign(existing, Contato);
        } else {
            this.Contatos.push(Contato);
        }
    }
}