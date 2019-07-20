StructureTower.prototype.defend = function () {
    let target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

    if (target != undefined) {
        this.attack(target);
    }
};