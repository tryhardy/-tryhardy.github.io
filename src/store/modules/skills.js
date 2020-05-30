export default {
    namespaced: true,
    actions: {
        addSkill(store, skill) {
            this.$axios.post(`/skills`, skill)
            .then(response => {

            })
            .catch (error => {
                console.log(error)
            })
        }
    },
}
