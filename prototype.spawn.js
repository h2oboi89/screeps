const ROLES = require('role');

StructureSpawn.prototype.spawnCreeps = function () {
    if (this.spawning !== null) {
        return;
    }

    let room = this.room;

    let creeps = room.find(FIND_MY_CREEPS);

    for (let role of ROLES) {
        let count = _.sum(creeps, (c) => c.memory.role == role.name);

        if (count < role.limit) {
            this.buildCreep(this.room.energyAvailable, role.name);
            break;
        }
    }
};

StructureSpawn.prototype.buildCreep = function (energy, role) {
    var numberOfParts = Math.min(Math.floor(energy / 200), Math.floor(50 / 3));

    var body = [];

    for (let i = 0; i < numberOfParts; i++) {
        body.push(WORK);
    }

    for (let i = 0; i < numberOfParts; i++) {
        body.push(CARRY);
    }

    for (let i = 0; i < numberOfParts; i++) {
        body.push(MOVE);
    }

    return this.spawnCreep(body, role + Game.time, {
        memory: {
            role: role,
            working: false
        }
    });
}