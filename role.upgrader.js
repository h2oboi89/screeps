module.exports = function (creep) {
    creep.setState();

    if (creep.memory.working == true) {
        // creep.say('upgrading');
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller, {
                visualizePathStyle: {
                    stroke: '#ccff00'
                }
            });
        }
    } else {
        creep.getEnergy();
    }
};