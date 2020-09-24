"use strict";
// Type-only circular import
Object.defineProperty(exports, "__esModule", { value: true });
var internalSlotMap = new WeakMap();
function getInternalSlots(x) {
    var internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
        internalSlots = Object.create(null);
        internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
}
exports.default = getInternalSlots;
