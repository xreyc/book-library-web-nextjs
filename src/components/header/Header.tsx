import Sidebar from "@/components/sidebar/Sidebar";
import { Input } from "@/components/ui/input";
import {
	Sheet,
	SheetContent
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";

interface Props {
	code?: string;
	searchInput?: string;
}

const Header: React.FC<Props> = ({ code, searchInput }) => {
	const router = useRouter();

	const [open, setOpen] = useState<boolean>(false);
	const [searchKey, setSearchKey] = useState<string>("");

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key == "Enter") {
			router.push(`/search/${code ? code : "all"}?searchkey=${searchKey}`);
		}
	}

	const initialize = useCallback(() => {
		setSearchKey(searchInput ?? "");
	}, [searchInput]);

	useEffect(() => {
		initialize();
	}, [initialize]);

	return (
		<>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetContent side="left">
					<Sidebar />
				</SheetContent>
			</Sheet>

			<div className="flex w-full justify-between px-[46px] py-[20px]">
				<div className="flex items-center gap-[20px] lg:hidden">
					<div><LuAlignLeft size={20} onClick={() => setOpen(prev => !prev)} /></div>
					<div className="text-[24px] mr-[20px] cursor-pointer" onClick={() => router.push("/")}>
						<span className='font-bold'>BOOK</span>LIBRARY
					</div>
				</div>
				<div className="flex-grow max-lg:hidden">
					<Input
						placeholder="Search"
						className="w-[200px]"
						value={searchKey}
						onChange={(event) => setSearchKey(event.target.value)}
						onKeyDown={handleKeyDown}
					/>
				</div>
				<div>
					<Button variant="link" className="max-[440px]:hidden">Login</Button>
					<Button>Sign Up</Button>
				</div>
			</div>
			<div className="px-[46px] py-[20px] lg:hidden">
				<Input
					placeholder="Search"
					className="w-full"
					value={searchKey}
					onChange={(event) => setSearchKey(event.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</div>
		</>
	);
}

export default Header;