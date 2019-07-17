var roles = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder')
};

Creep.prototype.runRole = function() { roles[this.memory.role].run(this); };

Creep.prototype.getEnergy = function() {
    var source = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

    if (this.harvest(source) == ERR_NOT_IN_RANGE) {
        this.moveTo(source);
    }
};