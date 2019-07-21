module.exports = function (creep) {
    let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

    if (target != undefined) {
        creep.attack(target);
    }
    else {
        creep.moveTo(25, 25);
    }
};