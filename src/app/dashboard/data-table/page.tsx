import { payments } from "@/data/payments.data";
import { columns } from "@/app/dashboard/data-table/columns"
import { DataTable } from "./data-table";

async function fetchData(){
	return payments;
}

export default async function Page() {

	const data = await fetchData()

  return (
    <div>
      <DataTable 
				columns={columns}
				data={data}
			/>
    </div>
  );
}