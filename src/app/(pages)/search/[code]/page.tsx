"use client";

import BookItem from "@/components/book/BookItem";
import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/Sidebar";
import books from "@/data/books";
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from "react";

export default function SearchPage({ params }: { params: { code: string } }) {
	const searchParams = useSearchParams();
	const searchkey = searchParams.get('searchkey');
	const searchAuthor = searchParams.get('author');

	const [catCode, setCatCode] = useState<string>();
	const [authorName, setAuthorName] = useState<string>();
	const [bookResult, setBookResult] = useState<BookInterface[]>([]);

	const getBooks = useCallback(() => {
		const bookList = [...books];
		if (params.code == "all") {
			if (searchkey == "" || searchkey == null) {
				if (searchAuthor == "" || searchAuthor == null) {
					setBookResult(bookList);
				} else {
					const filteredListByAuthor = bookList.filter(item => item.author == searchAuthor.replaceAll("%20", " "));
					setBookResult(filteredListByAuthor);
				}
			} else {
				if (searchAuthor == "" || searchAuthor == null) {
					const filteredList = bookList.filter(item => item.title.toLowerCase().includes(searchkey.toLowerCase()));
					setBookResult(filteredList);
				} else {
					const filteredList = bookList.filter(item => item.title.toLowerCase().includes(searchkey.toLowerCase()));
					const filteredListByAuthor = filteredList.filter(item => item.author == searchAuthor.replaceAll("%20", " "));
					setBookResult(filteredListByAuthor);
				}
			}
		} else {
			const filterByGenre = bookList.filter(item => item.gcode == params.code.replaceAll("%20", " "));
			if (searchkey == "" || searchkey == null) {
				setBookResult(filterByGenre);
			} else {
				const filteredList = filterByGenre.filter(item => item.title.toLowerCase().includes(searchkey.toLowerCase()));
				setBookResult(filteredList);
			}

		}
	}, [params.code, searchkey, searchAuthor]);

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
			<div className="max-lg:hidden"><SideBar code={catCode} /></div>
			<div className="flex flex-col max-w-full flex-grow">
				<Header code={catCode} searchInput={searchkey ?? ""} />

				<div className="flex flex-col gap-[50px] px-[46px] py-[10px] overflow-y-scroll h-[calc(100vh-77px)] max-lg:h-[calc(100vh-167px)]">

					<div className="flex flex-col gap-[20px] mb-[50px]">
						<div className="text-[24px] font-bold">
							{catCode == "all" ? searchAuthor != "" && searchAuthor != null ? `Books written by ${searchAuthor}` : "ALL CATEGORIES" : catCode?.toUpperCase()}
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
