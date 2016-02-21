/// <reference path="../typings/knockout-3.2.0.d.ts" />

module VMs {
    export class Orchestrator {
        
        public name: KnockoutObservable<string>;
        
        constructor () {
            this.name = ko.observable('');
            
            ko.applyBindings(this, document.getElementById('mainpage'));
            
            this.name('vaca');

        }
        
    }
}