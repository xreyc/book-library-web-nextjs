"use client";

import BookItem from "@/components/book/BookItem";
import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/Sidebar";
import books from "@/data/books";
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from "react";

export default function Search({ params }: { params: { code: string } }) {
	const searchParams = useSearchParams();
	const someQueryParam = searchParams.get('searchkey');

	const [catCode, setCatCode] = useState<string>();
	const [bookResult, setBookResult] = useState<BookInterface[]>([]);

	const getBooks = useCallback(() => {
		const bookList = [...books];
		if (params.code == "all") {
			setBookResult(bookList);
		} else {
			const filterByGenre = bookList.filter(item => item.gcode == params.code.replaceAll("%20", " "));
			setBookResult(filterByGenre);
		}
	}, [params.code]);

	const getCode = useCallback(() => {
		setCatCode(params.code.replaceAll("%20", " "));
	}, [params.code]);

	/** Intialize */
	useEffect(() => {
		getBooks();
		getCode();
	}, [getBooks, getCode]);

	return (
		<main className="flex min-h-screen items-start">
			<div className="max-lg:hidden"><SideBar /></div>
			<div className="flex flex-col max-w-full flex-grow">
				<Header code={catCode} searchInput={someQueryParam ?? ""} />

				<div className="flex flex-col gap-[50px] px-[46px] py-[10px] overflow-y-scroll h-[calc(100vh-77px)] max-lg:h-[calc(100vh-167px)]">

					<div className="flex flex-col gap-[20px] mb-[50px]">
						<div className="text-[24px] font-bold">
							{catCode == "all" ? "ALL CATEGORIES" : catCode?.toUpperCase()}
						</div>
						<div className="grid grid-cols-5 max-[400px]:grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-3 max-xl:grid-cols-4 gap-[50px]">
							{bookResult.map(item => <BookItem key={`mp-${item.id}`} title={item.title} author={item.author} cover={item.cover} rating={item.rating} />)}
						</div>
					</div>

				</div>

			</div>
		</main>
	);
}
