import instanceConfig from "./config-instance.js";
import deepmerge from 'deepmerge';

const baseConfig = {
    hostip: {
        endpoint: "192.168.1.145",
        port: "28000"
    },
    runtime: {
        enableLogging: true
    }    
}


const config = deepmerge(baseConfig, instanceConfig);

export default config;
