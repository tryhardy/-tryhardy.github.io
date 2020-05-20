import headline from "./headline.vue";
import {shallowMount} from '@vue/test-utils';

it("сохраняет структуру", ()=> {
    const component = shallowMount(headline);

    expect(component.element).toMatchSnapshot();
})