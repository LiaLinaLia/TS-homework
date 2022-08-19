class Person {
    constructor({ id, name, surname }) {
        this.getPersonInfo = () => `${this.name} ${this.surname}, ident. numeris: ${this.id}:\n`;
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
export default Person;
//# sourceMappingURL=person.js.map