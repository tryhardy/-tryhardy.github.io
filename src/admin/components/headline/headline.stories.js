import headline from './headline.vue';
import "../../default.pcss";

export default {
    title: "Headline"
}

export const defaultView = () => ({
    components: {headline},
    template: `
    <headline />
    `
});

export const withComponent = () => ({
    components: {headline},
    template: `
    <headline>
        <h2>Содержимое</h2>
    </headline>
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}

withComponent.story ={
    name: "Компонент с содержимым"
}