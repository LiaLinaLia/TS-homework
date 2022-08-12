class Vehicle {
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString() {
        const formattedVehicle = `${this.brand} ${this.model} ${this.year}\n`;
        return formattedVehicle;
    }
}
export default Vehicle;
//# sourceMappingURL=vehicle.js.map