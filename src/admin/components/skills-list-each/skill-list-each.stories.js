import skillListEach from './skill-list-each.vue';
import "../../default.pcss";


export default {
    title: "Skill list each"
}

export const defaultView = () => ({
    components: {skillListEach},
    template: `
    <skillListeach
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}