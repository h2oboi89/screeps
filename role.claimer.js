module.exports = function (creep) {
    console.log(creep.room);
    if (creep.room.name != creep.memory.target) {
        console.log('moving to target ' + creep.memory.target);
        var exit = creep.room.findExitTo(creep.memory.target);
        console.log(exit);
        creep.moveTo(creep.pos.findClosestByRange(exit));
    }
    else {
        console.log('found target, moving to controller');
        creep.getOffRoomEdge();
        console.log('move to controller');
        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
    }
};