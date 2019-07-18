require('prototype.creep');
require('prototype.spawn');

let cleanMemory = () => {
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
};

let runCreeps = () => {
    for (let name in Game.creeps) {
        Game.creeps[name].runRole();
    }
};

let runSpawns = () => {
    for (let spawnName in Game.spawns) {
        Game.spawns[spawnName].spawnCreeps();
    }
};

module.exports.loop = function () {
    cleanMemory();

    runCreeps();

    runSpawns();
}