var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

require('prototype.creep');

var spawn = require('spawn');

let cleanMemory = () => {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
};

let runCreeps = () => {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == roleHarvester.ROLE) {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == roleUpgrader.ROLE) {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == roleBuilder.ROLE) {
            roleBuilder.run(creep);
        }
    }
};

module.exports.loop = function () {
    cleanMemory();

    spawn(Game.spawns['Spawn1']);

    runCreeps();
}
