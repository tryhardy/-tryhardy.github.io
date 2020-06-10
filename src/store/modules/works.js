const works = {
    namespaced: true,
    state: {
        works: [],
        editedWork:{},
        addBtn: false,
        editBtn: false
    },
    actions: {
        fetchWorks(store) {
            this.$axios.get('/user')
            .then(response => {
                const user = response.data.user.id;
                this.$axios.get(`/works/${user}`)
                .then(response => {
                    store.commit("SET_WORKS", response.data)
                })
                .catch(error => {
                })
            })
            .catch(error => {
            })
        },
        addWork(store, work) {
            this.$axios.post('/works', work)
            .then(response => {
                store.commit("ADD_WORK", response.data);
            })
            .catch(error => {
                throw new Error(error.response.data.message || error.response.data.error)
            })
        },
        async editWork({ commit }, work) {
            try {
              const { data } = await this.$axios.post(`/works/${work[1]}`, work[0]);
              commit("EDIT_WORK", data.work);
              //console.log(data.work)
            } catch (error) {}
        },
        removeWork(store, workId) {
            this.$axios.delete(`/works/${workId}`)
            .then(response => {
                store.commit("REMOVE_WORK", workId)
            })
            .catch(error => {
            })
        },
        addButtonClicked(store) {
            store.commit("ADD_BUTTON");
        },
        editButtonClicked(store, work) {
            store.commit("EDIT_BUTTON", work);
        }
    },
    mutations: {
        SET_WORKS(state, works) {
            state.works = works;
        },
        ADD_WORK(state, work) {
            state.works.push(work);
        },
        REMOVE_WORK(state, workId) {
            state.works = state.works.filter(item => {
                return item.id !== workId;
            })
        },
        ADD_BUTTON(state) {
            if(state.addBtn) {
                state.addBtn = false;
            } else {
                state.addBtn = true;
            }
            if (state.editBtn) {
                state.editBtn = false;
            }
        },
        EDIT_BUTTON(state, work) {
            state.editBtn = true;
            state.addBtn = true;
            state.editedWork = {...work};
        },
        EDIT_WORK(state, work){         
            state.works = state.works.map(item => {
                if(item.id === work.id) {
                    item = work;
                }
                return item;
            });
            
        }
    }

}

export default works;