import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';
import { useTheme } from './context/ThemeContext';
import showcaseImg from './assets/showcase_image.svg';
import Showcase from './components/showcase/Showcase';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import ContactForm from './components/contact/ContactForm';
import BookAppointment from './components/contact/BookAppointment';

function App() {
	const { theme } = useTheme();

	return (
		<div
			className='App overflow-x-hidden'
			style={{
				color: theme.textcolor.light,
				background: theme.backgroundcolor.primary,
			}}>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Suspense fallback={<Loading />}>
								<>
									<div
										style={{
											backgroundImage: `url(${showcaseImg})`,
											backgroundRepeat: 'no-repeat',
											backgroundSize: 'cover',
											height: '800px',
											backgroundColor: 'rgba(0,0,0,0.9)',
											color: theme.textcolor.dark,
										}}>
										<Navbar />
										<Showcase />
									</div>
									<About />
									<Projects />
									<Services />
									<Contact />
									<ContactForm />
								</>
							</Suspense>
						}
					/>
					<Route
						exact
						path='/bookappointment'
						element={<BookAppointment />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
