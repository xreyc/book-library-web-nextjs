"use client";

import BookItem from "@/components/book/BookItem";
import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/Sidebar";
import books from "@/data/books";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [mostPopular, setMostPopular] = useState<BookInterface[]>([]);
	const [recommended, setRecommended] = useState<BookInterface[]>([]);

	const getMostPopular = useCallback(() => {
		const bookList = [...books];
		bookList.sort((a, b) => b.view - a.view);
		const getTop5 = bookList.slice(0, 5);
		setMostPopular(getTop5);
	}, []);

	const getRecommended = useCallback(() => {
		const bookList = [...books];
		bookList.sort((a, b) => b.recommended - a.recommended);
		const getRecommend = bookList.slice(0, 5);
		setRecommended(getRecommend);
	}, []);

	/** Intialize */
	useEffect(() => {
		getMostPopular();
		getRecommended();
	}, [getMostPopular, getRecommended]);

	return (
		<main className="flex min-h-screen items-start">
			<div className="max-lg:hidden"><SideBar /></div>
			<div className="flex flex-col max-w-full flex-grow">
				<Header />

				<div className="flex flex-col gap-[50px] px-[46px] py-[10px] overflow-y-scroll h-[calc(100vh-77px)] max-lg:h-[calc(100vh-167px)]">

					<div className="flex flex-col gap-[20px]">
						<div className="text-[24px] font-bold">MOST POPULAR</div>
						<div className="grid grid-cols-5  max-[400px]:grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-3 max-xl:grid-cols-4 gap-[30px]">
							{mostPopular.map(item => <BookItem key={`mp-${item.id}`} title={item.title} author={item.author} cover={item.cover} rating={item.rating} />)}
						</div>
					</div>

					<div className="flex flex-col gap-[20px] pb-20">
						<div className="text-[24px] font-bold">RECOMMENDED</div>
						<div className="grid grid-cols-5  max-[400px]:grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-3 max-xl:grid-cols-4 gap-[30px]">
							{recommended.map(item => <BookItem key={`re-${item.id}`} title={item.title} author={item.author} cover={item.cover} rating={item.rating} />)}
						</div>
					</div>

				</div>

			</div>
		</main>
	);
}
