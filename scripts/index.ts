module CheckM8 {
    "use strict";

    let orchestrator: VMs.Orchestrator = null;

    export module Application {
        export function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

        function onDeviceReady() {
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            
            orchestrator = new VMs.Orchestrator();

        }
    }

    window.onload = function () {
        Application.initialize();
    }
}
