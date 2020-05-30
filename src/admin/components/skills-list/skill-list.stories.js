import skillList from './skill-list.vue';
import "../../default.pcss";


export default {
    title: "Skill list"
}

export const defaultView = () => ({
    components: {skillList},
    template: `
    <skillList
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}