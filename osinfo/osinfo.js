const os = require('os');

// const osinfo = () => {
//     return {
//         osarch: os.arch(),
//         cpu: os.cpus(),
//         network: os.networkInterfaces(),
//     }
// };

const osinfo = {
    cpu: os.cpus(),
    network: os.networkInterfaces(),
    osarch: os.arch()
};

console.log(osinfo);