import addGroup from './add-group.vue';
import "../../default.pcss";


export default {
    title: "Add group"
}

export const defaultView = () => ({
    components: {addGroup},
    template: `
    <addGroup 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}