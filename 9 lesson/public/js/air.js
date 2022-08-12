import Vehicle from './vehicle.js';
class AirVehicle extends Vehicle {
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => `${this.getString()}\tmaksimalus aukštis: ${this.maxAltitude}`;
        this.maxAltitude = maxAltitude;
    }
}
export default AirVehicle;
//# sourceMappingURL=air.js.map