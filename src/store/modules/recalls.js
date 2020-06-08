const recalls = {
    namespaced: true,
    state: {
        recalls: [],
        editedRecall: {},
        addBtn:false,
        editBtn:false
    },
    actions: {
        fetchRecalls(store, user) {
            this.$axios.get('/user')
            .then(response => {
                const user = response.data.user.id;
                this.$axios.get(`/reviews/${user}`)
                .then(response => {
                    store.commit("SET_RECALLS", response.data)
                })
                .catch(error => {
                })
            })
            .catch(error => {
            })
        },
        addRecall(store, recall) {
            this.$axios.post('/reviews', recall)
            .then(response => {
                store.commit("ADD_RECALL", response.data);
            })
            .catch(error => {
                throw new Error(error.response.data.message || error.response.data.error)
            })
        },
        removeRecall(store, recallId) {
            this.$axios.delete(`/reviews/${recallId}`)
            .then(response => {
                store.commit("REMOVE_RECALL", recallId)
            })
            .catch(error => {
            })
        },
        //ЭТО РЕДАКТИРОВАНИЕ ОТЗЫВА
        editCurRecall(store, recall){
            const recallData = new FormData;
            recallData.append('photo', recall.photo);
            recallData.append('author', recall.author);
            recallData.append('occ', recall.occ);
            recallData.append('text', recall.text);
            this.$axios.post(`/reviews/${recall.id}`, recallData)
            .then(response => {
                console.log(response.data.review)
                store.commit("EDIT_RECALL", recall);
                this.addButton();
            })
            .catch(error => {
                console.log(error)
            })
        },
        //ЭТО ДЛЯ КНОПКИ РЕДАКТИРОВАНИЯ ОТЗЫВА
        editRecall(store, recall){
            store.commit("EDIT_BUTTON", recall);
        },
        //ЭТО ДЛЯ СРАБАТЫВАНИЯ КНОПКИ ДОБАВЛЕНИЯ ОТЗЫВА
        addButton(store) {
            store.commit("ADD_BUTTON");
        }
    },
    mutations: {
        SET_RECALLS(state, recalls) {
            state.recalls = recalls;
        },
        ADD_RECALL(state, recall) {
            state.recalls.push(recall);
        },
        REMOVE_RECALL(state, recallId) {
            state.recalls = state.recalls.filter(item => {
                return item.id !== recallId
            })
        },
        EDIT_RECALL(state, recall){
            state.recalls = state.recalls.map(item => {
                if(item.id === recall.id) {
                    item = recall;
                }
                return item;
            });
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
        EDIT_BUTTON(state, recall) {
            state.editBtn = true;
            state.addBtn = true;
            state.editedRecall = {...recall};
        }
    }

}

export default recalls;