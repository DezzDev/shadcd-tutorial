import Tabs1 from "@/app/dashboard/tabs/ui/tab1"
import Tabs2 from "@/app/dashboard/tabs/ui/tab2"

export default function Page() {
	return (
		<div className="flex flex-col gap-8 items-center">
			
			<Tabs1 />


			<Tabs2 />

		</div>
	);
}