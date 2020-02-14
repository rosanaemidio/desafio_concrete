import React from 'react'
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Button from './Button'

let wrapper

describe ('snapshot of button', ()=>{
    it ('should match snapshot', () => {
        const tree = renderer.create(<Button/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

describe ('test"s of button', () =>{
    beforeEach(()=>{
        wrapper = mount (<Button/>)
    })
    it('should be a function', () =>{
        expect(typeof Garrafa).toBe('function')
    })
})

// Adicionar testes ao evento de click.

