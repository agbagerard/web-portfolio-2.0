'use client';
import { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-2'>
				<li>Javascript</li>
				<li>Node.js</li>
				<li>React.js</li>
				<li>Next.js</li>
				<li>Git</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pl-2'>
				<li>SpringBoard Software Engineering Program</li>
				<li>Bachelor of Science Business Administration, HRM</li>
			</ul>
		),
	},
	{
		title: 'Certifications',
		id: 'certifications',
		content: (
			<ul className='list-disc pl-2'>
				<li>SpringBoard Software Engineering Program</li>
				<li>FreeCodeCamp Responsive Web Design</li>
				<li>FreeCodeCamp Javascript Algorithms</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className='text-white'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about-image.png'
					alt='about image'
					width={500}
					height={500}
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base lg:text-lg '>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
						atque eligendi maiores! Deserunt ex repudiandae nobis expedita
						temporibus impedit blanditiis, reiciendis minima cumque possimus!
						Nesciunt, reiciendis. Inventore, perspiciatis. Sed adipisci dolores
						placeat eaque, cupiditate enim consequuntur, hic rem quam ea ratione
						mollitia! Voluptas, rem voluptatibus distinctio ipsum iure ab vel.
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}>
							Education
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('certifications')}
							active={tab === 'certifications'}>
							Certifications
						</TabButton>
					</div>
					<div className='mt-8'>
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
