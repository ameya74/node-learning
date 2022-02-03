const os = require('os');

const osinfo = {
    cpu: os.cpus(),
    network: os.networkInterfaces(),
    osarch: os.arch()
};

console.log(osinfo);