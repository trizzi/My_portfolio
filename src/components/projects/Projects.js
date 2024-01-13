import React from 'react';
import projects from './projects.json';
import ProjectItem from './ProjectItem';
import projectImage from '../../assets/projects_background_image.svg';
import projectLogo from '../../assets/project_icon.svg';

const Projects = () => {
	return (
		<div
			name='section3'
			className=''
			style={{
				backgroundImage: `url(${projectImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '800px',
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
					<div>
						<h1>Projects</h1>
					</div>
				</div>
			</div>
			<div className='relative w-full min-h-0'>
				<div className='relative flex flex-wrap w-full lg:justify-center lg:space-x-6 pt-10 md:pt-20'>
					{projects.map((project) => (
						<ProjectItem
							key={project.id}
							project={project}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
