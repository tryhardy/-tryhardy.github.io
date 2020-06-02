const categories = {
    namespaced: true,
    state: {
        categories: []
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
              commit("EDIT_SKILL", data, { root: true });
            } catch (error) {}
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
                //findCategory(category)
                if(category.id === skilltoRemove.category) {
                    category.skills = category.skills.filter(skill => {
                        skill.id !== skilltoRemove.id;
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
        }
    }
}

export default categories;