(function(){
    angular.module('app').controller('PokemonController', PokemonController);

    function PokemonController (Pokemons, $stateParams){
        vm = this;

        Pokemons.getById($stateParams.id).then(function(response){
            vm.pokemon = response.data;
        });

    };

})();