const categories = {
    namespaced: true,
    state: {
        categories: [],
        AddGroupButton: false
    },
    actions: {
        getUserInfo(){
            this.$axios.get('/user')
            .then(response => {            
                //console.log(response.data)
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
        fetchCategories(store, user) {
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
            })
        },
        editCategory(store, cat){
            this.$axios.post(`/categories/${cat.id}`, {title: cat.category})
            .then(response => {
                store.commit('EDIT_CATEGORY', cat.id)
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
                console.log(response.data )
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
        },
        async editSkill({ commit }, editedSkill) {
            try {
              const { data } = await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill);
              commit("EDIT_SKILL", data);
            } catch (error) {}
        },


        addGroupButtonClicked(store){
            store.commit('ADD_GROUP_BUTTON')
        },
        closeAddGroupBlock(store){
            store.commit('ADD_GROUP_BUTTON_CLOSE')
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
        EDIT_CATEGORY(state, cat) {
            state.categories = state.categories.map(category => {
                if(category.id === cat.id) {
                    category.category == cat.category;
                }
                return category;
            });
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
            state.categories = state.categories.map((category) => {
                if(category.id === skilltoRemove.category) {
                    category.skills = category.skills.filter(skill => {
                        return skill.id !== skilltoRemove.id;
                    });
                };
                return category;
            });
        },
        EDIT_SKILL(state, skilltoEdit){
            const editSkillInCategory = category => {
                category.skills = category.skills.map(skill => {
                  return skill.id === editedSkill.id ? editedSkill : skill;
                });
              };
        
              const findCategory = category => {
                if (category.id === editedSkill.category) {
                  editSkillInCategory(category);
                }      
                return category;
              };
        
              state.categories = state.categories.map(findCategory);
        },


        ADD_GROUP_BUTTON(state){
            state.AddGroupButton = true;
        },
        ADD_GROUP_BUTTON_CLOSE(state){
            state.AddGroupButton = false;
        }
    }
}

export default categories;