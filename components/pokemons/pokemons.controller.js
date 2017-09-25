(function(){
    angular.module('app').controller('PokemonsController', PokemonsController);

    function PokemonsController (Pokemons){
        vm = this;
        var imagesArray = ['/img/026.png',
        '/img/031.png', 
        '/img/031.png', 
        '/img/031.png', 
        '/img/032.png', 
        '/img/034.png', 
        '/img/059.png', 
        '/img/064.png', 
        '/img/071.png',
        '/img/012.png']
        vm.pokemons = Pokemons.getAll();
        vm.save = function (){
            vm.pokemon.image = imagesArray[Math.floor(Math.random() * 10) + 1];
            Pokemons.pokemons.push(vm.pokemon);
            vm.pokemon = {
                id: '',
                name: '',
                type1: 'grama',
                type2: 'grama',
                attack: '',
                defense: '',
                hp: '',
                image : ''
            };
            vm.pokemons = Pokemons.getAll();
            $('#myModal').modal('hide');
        }
    };

})();