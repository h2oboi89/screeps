require('prototype.creep');
require('prototype.spawn');
require('prototype.tower');

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

let runTowers = () => {
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);

    for (let tower of towers) {
        tower.defend();
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

    runTowers();

    runSpawns();
}