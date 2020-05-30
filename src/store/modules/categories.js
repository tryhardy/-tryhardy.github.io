const categories = {
    namespaced: true,
    state: {
        categories: [],
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

        addCategory(store, title) {
            this.$axios.post('/categories', {title})
            .then(response => {
                store.commit("ADD_CATEGORY", response.data)
            })
            .catch(error => {
                throw new Error(error.response.data.message || error.response.data.error)
            })
        },
        fetchCategories(store) {
            this.$axios.get('/user')
            .then(response => {
                const user = response.data.user.id;
                this.$axios.get(`/categories/${user}`)
                .then(response => {
                    store.commit("SET_CATEGORIES", response.data)
                })
                .catch(error => {
                })
            })
            .catch(error => {
                // this.$axios.post('/refreshToken')
                // .then(response => {
                //     const token = localStorage.setItem('token', response.data.token)
                // })
                // .catch (error => {
                //     throw new Error(error.response.data);
                // })
            })
        },
        removeCategory(store, catId) {
            this.$axios.delete(`/categories/${catId}`)
            .then(response => {
                store.commit("REMOVE_CATEGORY", catId)
            })
            .catch(error => {
            })
        },


        addSkill(store, skill) {
            this.$axios.post(`/skills`, skill)
            .then(response => {
                store.commit('ADD_SKILL', response.data)
            })
            .catch (error => {
                console.log(error)
            })
        },
        removeSkill(store, skilltoRemove) {
            this.$axios.delete(`/skills/${skilltoRemove.id}`)
            .then(response => {
                store.commit('REMOVE_SKILL', skilltoRemove)
            })
            .catch (error => {
                console.log(error)
            })
        }
    },
    getters: {},
    mutations:{
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        ADD_CATEGORY(state, newCategory) {
            state.categories.push(newCategory);
        },
        REMOVE_CATEGORY(state, catId) {
            state.categories = state.categories.filter(item => {
                return item.id !== catId
            })
        },

        GET_USER_INFO(state, user) {

        },

        ADD_SKILL(state, skill) {
            state.categories = state.categories.map(category => {
                if(category.id === skill.category) {
                    category.skills.push(skill)
                }
                return category;
            })
        },
        REMOVE_SKILL(state, skilltoRemove) {
            const removeSkillInCat = (category) => {
                category.skills = category.skills.filter((skill) => {
                    return skill.id !== skilltoRemove.id
                });
            }

            const findCategory = (category) => {
                if(category.id === skilltoRemove.category) {
                    removeSkillInCat(category)
                }
                return category;
            }

            state.categories = state.categories.map((category) => {
                findCategory(category)
            });
        },
    }
}

export default categories;