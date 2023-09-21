import axiosClient from "../axiosClient";

export function searchMealsByName({ commit }, keyWord) {
    axiosClient.get(`search.php?s=${keyWord}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}
export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealsByLetter', data.meals)
        })
}
export function searchMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
            commit('setMealsByIngredient', data.meals)
        })
}