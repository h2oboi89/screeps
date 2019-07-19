const upgrade = require('role.upgrader');

module.exports = function (creep) {
    creep.setState();

    if (creep.memory.working == true) {
        var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => (s.structureType == STRUCTURE_SPAWN ||
                s.structureType == STRUCTURE_EXTENSION ||
                s.structureType == STRUCTURE_CONTAINER ||
                s.structureType == STRUCTURE_TOWER) &&
                s.energy < s.energyCapacity
        });

        if (structure == undefined) {
            structure = creep.room.storage;
        }

        if (structure != undefined) {
            // creep.say('store');
            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structure, {
                    visualizePathStyle: {
                        stroke: '#fff68f'
                    }
                });
            }
        } else {
            upgrade(creep);
        }
    } else {
        creep.getEnergy(false);
    }
};