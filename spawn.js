var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

const spawnList = [
    {
        role: roleHarvester.ROLE, 
        max: 1,
        create: roleHarvester.create
    }, {
        role: roleUpgrader.ROLE,
        max: 1,
        create: roleUpgrader.create
    },
    {
        role: roleBuilder.ROLE,
        max: 4,
        create: roleBuilder.create
    }
];

module.exports = (spawn) => {
    for(let s of spawnList) {
        if(spawn.spawning) {
            break;
        }
        
        let alive = _.filter(Game.creeps, (c) => c.memory.role === s.role);
        
        if (alive.length < s.max) {
            let creep = s.create();
            spawn.spawnCreep(creep.body, creep.name, creep.options);
        }
    }

    if(spawn.spawning) {
        var spawningCreep = Game.creeps[spawn.spawning.name];
        spawn.room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            spawn.pos.x + 1,
            spawn.pos.y,
            {align: 'left', opacity: 0.8});
    }
};
