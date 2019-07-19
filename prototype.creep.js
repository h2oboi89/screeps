const ROLES = require('role');
let roles = {};

for (let role of ROLES) {
    roles[role.name] = require('role.' + role.name);
}

// console.log(JSON.stringify(roles));

Creep.prototype.runRole = function () {
    roles[this.memory.role](this);
};

Creep.prototype.getEnergy = function (useContainer = true) {
    let container;

    if (useContainer) {
        container = this.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                s.store[RESOURCE_ENERGY] > 0
        });
    }

    if (container != undefined) {
        if (this.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            this.moveTo(container);
        }
    } else {
        var source = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

        if (this.harvest(source) == ERR_NOT_IN_RANGE) {
            this.moveTo(source, {
                visualizePathStyle: {
                    stroke: '#fef65b'
                }
            });
        }
    }
};

Creep.prototype.setState = function () {
    if (this.memory.working == true && this.carry.energy == 0) {
        this.memory.working = false;
    } else if (this.memory.working == false && this.carry.energy == this.carryCapacity) {
        this.memory.working = true;
    }
};