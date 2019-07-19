module.exports = function (creep) {
    creep.setState();

    if (creep.memory.working == true) {
        creep.talk('⬆️');
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
    } else {
        creep.getEnergy();
    }
};