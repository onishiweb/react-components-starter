import * as React from 'react'
import App from './app'
import { create, ReactTestRenderer } from 'react-test-renderer'

it('renders correctly', () => {
	const app = <App />
	const tree = create(app).toJSON()
	expect(tree).toMatchSnapshot()
})
