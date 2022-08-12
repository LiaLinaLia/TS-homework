import Vehicle from './vehicle.js';
class LandVehicle extends Vehicle {
    constructor({ tires }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => `${this.getString()}\tpadangos: ${this.tires.join(', ')}`;
        this.tires = tires;
    }
}
export default LandVehicle;
//# sourceMappingURL=land.js.map