(function(){
    angular.module('app').controller('PokemonsController', PokemonsController);

    function PokemonsController (Pokemons){
        vm = this;

        vm.pokemons = Pokemons.getAll();
        vm.save = function (){
            Pokemons.pokemons.push(vm.pokemon);
            vm.pokemons = Pokemons.getAll();
            $('#myModal').modal('hide');
        }
    };

})();