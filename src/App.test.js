import React from 'react';
import { shallow } from 'enzyme';
import App from "./App";
import Personagem from "./components/Personagem";

describe('<App />', () => {
  it('10 <Personagem/> renderizados', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Personagem)).toHaveLength(10);
  });
})