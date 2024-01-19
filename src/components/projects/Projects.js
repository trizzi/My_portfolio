import React from 'react';
import HorizontalScrollCarousel from '../../utilities/HorizontalScrollCarousel';
import projects from './projects.json';
import ProjectItem from './ProjectItem';
import projectImage from '../../assets/projects_background_image.svg';
import projectLogo from '../../assets/project_icon.svg';

const Projects = () => {
	return (
		<div
			name='section3'
			className='h-[450vh] md:h-[100vh]'
			style={{
				backgroundImage: `url(${projectImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				// height: '100vh',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div>
				<div className='flex px-12 pt-8'>
					<div>
						<img
							src={projectLogo}
							alt='service-logo'
						/>
					</div>
					<div className='pt-3'>
						<h1>Projects</h1>
					</div>
				</div>
			</div>

			<HorizontalScrollCarousel>
				<div className='md:relative w-full min-h-0'>
					<div className='flex flex-wrap w-full lg:justify-center lg:space-x-6 mx-4'>
						{projects.map((project) => (
							<ProjectItem
								key={project.id}
								project={project}
							/>
						))}
					</div>
				</div>
			</HorizontalScrollCarousel>
		</div>
	);
};

export default Projects;
