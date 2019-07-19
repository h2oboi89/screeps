var upgrade = require('role.upgrader');

module.exports = function (creep) {
    creep.setState();

    if (creep.memory.working == true) {
        var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        if (constructionSite != undefined) {
            creep.talk('🛠️');
            if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                creep.moveTo(constructionSite);
            }
        } else {
            upgrade(creep);
        }
    } else {
        creep.getEnergy();
    }
};