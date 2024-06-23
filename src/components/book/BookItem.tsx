import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle
} from "@/components/ui/sheet";

interface Props {
	title: string;
	cover: string;
	rating: number;
}

const BookItem: React.FC<Props> = ({ title, cover, rating }) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Book Details</SheetTitle>
						<div>
							<div className="flex justify-center bg-gray-100 drop-shadow-[0_10px_50px_rgba(100,100,0,0.25)] border-2 border-slate-800 mb-[15px]">
								<Image
									src={cover}
									width={200}
									height={1}
									alt="Cover"
									className="h-[300px]"
								/>
							</div>
							<div className="font-bold mb-[10px]">
								{title}
							</div>
							<div className="flex gap-[2px]">
								<FaStar color={rating >= 1 ? "FFD704" : "AAA89F"} size={15} />
								<FaStar color={rating >= 2 ? "FFD704" : "AAA89F"} size={15} />
								<FaStar color={rating >= 3 ? "FFD704" : "AAA89F"} size={15} />
								<FaStar color={rating >= 4 ? "FFD704" : "AAA89F"} size={15} />
								<FaStar color={rating >= 5 ? "FFD704" : "AAA89F"} size={15} />
							</div>
						</div>
						<SheetDescription>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			<div className="flex flex-col cursor-pointer" onClick={() => setOpen(prev => !prev)}>
				<div className="flex justify-center bg-gray-100 hover:drop-shadow-[0_10px_50px_rgba(100,100,0,0.25)] hover:border-2 hover:border-slate-800 mb-[15px]">
					<Image src={cover} width={149} height={233} alt="Cover" />
				</div>
				<div className="hover:font-bold mb-[10px]">
					{title}
				</div>
				<div className="flex gap-[2px]">
					<FaStar color={rating >= 1 ? "FFD704" : "AAA89F"} size={15} />
					<FaStar color={rating >= 2 ? "FFD704" : "AAA89F"} size={15} />
					<FaStar color={rating >= 3 ? "FFD704" : "AAA89F"} size={15} />
					<FaStar color={rating >= 4 ? "FFD704" : "AAA89F"} size={15} />
					<FaStar color={rating >= 5 ? "FFD704" : "AAA89F"} size={15} />
				</div>
			</div>
		</>
	)
}

export default BookItem;