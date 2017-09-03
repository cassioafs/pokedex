(function(){
    angular.module('app').controller('PokemonController', PokemonController);

    function PokemonController (Pokemons, $stateParams){
        vm = this;

        vm.pokemon = Pokemons.getById($stateParams.id)[0];

    };

})();