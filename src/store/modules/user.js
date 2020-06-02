const user = {
    namespaced: true,
    state: {
        user: {}
    },
    actions: {
        getUserInfo(store){
            this.$axios.get('/user')
            .then(response => {     
                store.commit('GET_USER_INFO', response.data.user)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    getters: {},
    mutations:{
        GET_USER_INFO(state, user) {
            state.user = {
                id: user.id,
                name: user.name,               
            };
        },
    }
}

export default user;