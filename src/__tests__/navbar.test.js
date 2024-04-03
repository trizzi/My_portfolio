import renderer from 'react-test-renderer';
import { Link } from 'react-scroll';

it('changes the class when menu is open', () => {
	const componetLinks = renderer.create(
		<Link
			to='section1'
			toggle={() => {}}
			closeMenu={() => {}}>
			Home
		</Link>,
		<Link
			to='section2'
			toggle={() => {}}
			closeMenu={() => {}}>
			About
		</Link>,
		<Link
			to='section3'
			toggle={() => {}}
			closeMenu={() => {}}>
			Projects
		</Link>,
		<Link
			to='section4'
			toggle={() => {}}
			closeMenu={() => {}}>
			Services
		</Link>,
	);

	let tree = componetLinks.toJSON();
	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	renderer.act(() => {
		tree.props.toggle();
	});
	// re-rendering
	tree = componetLinks.toJSON();
	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	renderer.act(() => {
		tree.props.closeMenu();
	});
	// re-rendering
	tree = componetLinks.toJSON();
	expect(tree).toMatchSnapshot();
});
