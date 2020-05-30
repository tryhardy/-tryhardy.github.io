import skill from './skill.vue';
import "../../default.pcss";


export default {
    title: "Add skill"
}

export const defaultView = () => ({
    components: {skill},
    template: `
    <skill
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}