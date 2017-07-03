(function () {
    angular.module('app').factory('Pokemons', Pokemons);

    function Pokemons($http) {
        return {
            getById: getById,
            getAll: getAll
        }

        function getAll() {
            return $http.get('/pokemons');
        }

        function getById(id) {
            return $http.get('/pokemons/' + id);
        }
    }
})();