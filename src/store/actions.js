import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyWord) {
    axiosClient.get(`search.php?s=${keyWord}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}