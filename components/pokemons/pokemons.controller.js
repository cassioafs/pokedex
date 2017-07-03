(function(){
    angular.module('app').controller('PokemonsController', PokemonsController);

    function PokemonsController (Pokemons){
        vm = this;

        Pokemons.getAll().then(function(response){
            vm.pokemons = response.data;
        });

    };

})();