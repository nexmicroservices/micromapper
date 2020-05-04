import {AppsV1Api, CoreV1Api, KubeConfig} from '@kubernetes/client-node';


let coreApi;
let appsApi;

function makeClientApi() {
    try {
        const kubeConf = new KubeConfig();
        kubeConf.loadFromDefault();
        coreApi = kubeConf.makeApiClient(CoreV1Api);
        appsApi = kubeConf.makeApiClient(AppsV1Api);
    } catch (error) {
        console.log("can't make api client");
        console.log(error);
        coreApi = undefined;
        appsApi = undefined;
    }
}

async function init() {
    if (!coreApi) {
        makeClientApi();
    }
    try {
        await coreApi.listNamespacedPod('kube-system');
        return;
    } catch(error) {
        coreApi = undefined;
        appsApi = undefined;
        console.log("Kubernetes server unreachable. Try another connexion in 3 seconds");
        console.log(error);
        await sleep(3000);
        makeClientApi();
        return coreApi ? coreApi : init();
    }
}


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
} 

/*
function getAppsApi() {
    try {
        appsApi.listNamespacedDeployment('default');
        return appsApi;
    } catch(error) {
        console.log("Kubernetes server unreachable. Try another connexion in 3 seconds");
        setTimeout(init, 3000);
        return getAppsApi();
    }
}
*/

async function getPods() {
    await init();
    coreApi.listNamespacedPod('kube-system').then((res) => {
        console.log(res.body.items);
        return res.body.items
    });
} 

exports.getPods = getPods;

/*
async function getDeployments() {
    getAppsApi().listNamespacedDeployment('default').then((res) => {
        console.log(res.body.items);
        return res.body.items;
    });
} 

exports.getDeployments = getDeployments;*/