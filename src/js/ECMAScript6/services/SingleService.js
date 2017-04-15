angular.module('monterailApp')
    .factory('SingleService', [function(){
        return {
            getTeams: function(){
                return this.notes = [
                    {label: 'MIKI', type: 'chore', done: false},
                    {label: 'FC Todo', type: 'chore2', done: true},
                    {label: 'FT Todo', type: 'task', done: false},
                    {label: 'FF Todo', type: 'fun', done: true},
                    {label: 'SC Todo', type: 'chore', done: true},
                    {label: 'ST Todo', type: 'task', done: true},
                    {label: 'SF Todo', type: 'fun', done: true},
                    {label: 'TC Todo', type: 'chore', done: false},
                    {label: 'TT Todo', type: 'task', done: false},
                    {label: 'TF Todo', type: 'fun', done: false}
                ];
            }
        };
    }]);