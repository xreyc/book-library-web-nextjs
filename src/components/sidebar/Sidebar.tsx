import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LuChevronDown } from 'react-icons/lu';
import styles from './Sidebar.module.css';

const genres = [
	{ code: 'genre_uid1', name: 'Fiction' },
	{ code: 'genre_uid2', name: 'Novel' },
	{ code: 'genre_uid3', name: 'Science Fiction' },
	{ code: 'genre_uid4', name: 'Non-Fiction' },
	{ code: 'genre_uid5', name: 'General Fiction' },
	{ code: 'genre_uid6', name: 'Genre-Fiction' },
	{ code: 'genre_uid7', name: 'Mystery' },
	{ code: 'genre_uid8', name: 'Young Adult Fiction' },
	{ code: 'genre_uid9', name: 'Romance Novel' },
	{ code: 'genre_uid10', name: 'Horor' },
];

const authors = [
	{ userId: 'author_uid1', name: 'Marco Darow', profileUrl: '/profile1.webp' },
	{ userId: 'author_uid2', name: 'Monica Gatambede', profileUrl: '/profile2.jfif' },
	{ userId: 'author_uid3', name: 'James Yap', profileUrl: '/profile3.webp' },
	{ userId: 'author_uid4', name: 'Luccile Lopez', profileUrl: '/profile4.jfif' },
	{ userId: 'author_uid5', name: 'Jake Blentlemen', profileUrl: '/profile5.jpg' },
];

const SideBar = () => {
	return (
		<div className={`${styles['sidebar']} flex flex-col gap-[10px] lg:border-r`}>
			<div className="py-[20px] text-[24px] mx-[24px]"><span className='font-bold'>BOOK</span>LIBRARY</div>

			<ScrollArea>
				<div className="flex flex-col gap-[40px] text-[17px]">

					<div className="flex flex-col gap-[17px]">
						<div className="font-bold mx-[24px]">Genres</div>
						<div className="flex flex-col gap-[15px] mx-[24px]">
							{genres.map(item => <div key={item.code} className="hover:font-semibold hover:text-yellow-700 cursor-pointer">{item.name}</div>)}
						</div>
						<div className="flex justify-between  mx-[24px]">
							<span>See all</span>
							<LuChevronDown />
						</div>
					</div>

					<div className="flex flex-col gap-[17px] pb-10">
						<div className="font-bold mx-[24px]">Popular Writers</div>
						<div className="flex flex-col gap-[20px] mx-[24px]">
							{authors.map(item => <div key={item.userId} className="flex items-center gap-3">
								<div>
									<Avatar className="h-[27px] w-[27px]">
										<AvatarImage src={item.profileUrl} />
										<AvatarFallback>P</AvatarFallback>
									</Avatar>
								</div>
								<div>{item.name}</div>
							</div>)}
						</div>
						<div className="flex justify-between  mx-[24px]">
							<span>See all</span>
							<LuChevronDown />
						</div>
					</div>

				</div>
			</ScrollArea>

		</div>
	)
}

export default SideBar;