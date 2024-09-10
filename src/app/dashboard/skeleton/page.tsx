/* eslint-disable @next/next/no-async-client-component */
'use client'


import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


import Image from "next/image";

const getData = async () => {
	 await new Promise((resolve) => setTimeout(resolve, 3000))
	// array con los números del 1 al 9
	return "123456789".split("")
}

export default async function Page() {
	const data = await getData()
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

			{
				data.map(Item => (
					<Card key={Item}>
						<CardHeader className="flex flex-row">
							<Image
								src="https://github.com/shadcn.png"
								alt="Shadcn"
								width={40}
								height={40}
								className="rounded-full mr-2 w-10 h-10"
							/>

							<div>
								<CardTitle> Title </CardTitle>
								<CardDescription> Description </CardDescription>
							</div>
						</CardHeader>

						<CardFooter className="flex justify-end">
							<Button> Más</Button>
						</CardFooter>
					</Card>

				))
			}

		</div>
	);
}