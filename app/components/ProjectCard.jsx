import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
	return (
		<div>
			<div
				className='h-52 md:h-72 rounded-t-xl relative group'
				style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}>
				<div className='absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 gap-4 opacity-0 group-hover:opacity-80'>
					<Link
						href={gitUrl}
						className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
						<CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
					<Link
						href={previewUrl}
						className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
						<EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
				</div>
			</div>
			<div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
				<h5 className='text-xl font-semibold mb-2'>{title}</h5>
				<p className='text-[#ADB7BE]'>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
