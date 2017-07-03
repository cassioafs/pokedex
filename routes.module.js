(function () {
    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/list');

        $stateProvider.state('main', {
            url: '/',
            templateUrl: 'components/main/main.html'
        }).state('main.list', {
            url: 'list',
            templateUrl: 'components/pokemons/pokemons.html',
            controller: 'PokemonsController',
            controllerAs: 'PokemonsController'
        }).state('main.details', {
            url: 'details/:id',
            templateUrl: 'components/pokemons/pokemon.html',
            controller: 'PokemonController',
            controllerAs: 'PokemonController'
        })
    });
})();