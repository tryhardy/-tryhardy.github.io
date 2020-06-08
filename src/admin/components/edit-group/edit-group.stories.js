import addGroup from './edit-group.vue';
import "../../default.pcss";


export default {
    title: "Edit group"
}

export const defaultView = () => ({
    components: {editGroup},
    template: `
    <editGroup 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}