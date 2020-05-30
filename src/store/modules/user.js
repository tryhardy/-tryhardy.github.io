const user = {
    namespaced: true,
    state: {
        user: {}
    },
    actions: {
        getUserInfo(){
            this.$axios.get('/user')
            .then(response => {            
                console.log(response.data)
            })
            .catch(error => {

            })
        },
        refreshToken(){
            
        }
    },
    getters: {},
    mutations:{
        GET_USER_INFO(state, user) {

        },
    }
}

export default user;