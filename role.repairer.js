var build = require('role.builder');

module.exports = function (creep) {
    creep.setState();

    if (creep.memory.working == true) {
        var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
        });

        if (structure != undefined) {
            creep.talk('🔨');
            if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structure);
            }
        }
        else {
            build(creep);
        }
    }
    else {
        creep.getEnergy();
    }
};