import React from 'react';
import projects from './projects.json';
import ProjectItem from './ProjectItem';
import projectImage from '../../assets/projects_background_image.svg';
import projectLogo from '../../assets/project_icon.svg';

const Projects = () => {
	return (
		<div
			name='section3'
			className='px-4 py-10'
			style={{
				backgroundImage: `url(${projectImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div className='container-xl lg:container m-auto'>
				<div>
					<div className='flex justify-center '>
						<div>
							<img
								src={projectLogo}
								alt='service-logo'
								className='mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
							/>
						</div>
						<h1 className='text-4xl text-bold pb-6'>Projects</h1>
					</div>
				</div>

				<div className=''>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{projects.map((project) => (
							<ProjectItem
								key={project.id}
								project={project}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
