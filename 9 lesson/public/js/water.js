import Vehicle from './vehicle.js';
class WaterVehicle extends Vehicle {
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
        this.maxDepth = maxDepth;
    }
}
export default WaterVehicle;
//# sourceMappingURL=water.js.map