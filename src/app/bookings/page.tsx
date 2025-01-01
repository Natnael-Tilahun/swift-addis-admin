import { DataTable } from "@/components/ui/data-table";
import { Booking, columns } from "@/components/bookings/columns";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Booking[]> {
  const bookings = await fetch(
    "https://autodetailingapi-1.onrender.com/api/booking"
  );
  console.log(bookings);
  return bookings.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="px-5 w-full lg:px-10 mx-auto space-y-6 py-10">
      <div className="flex justify-between">
        <PageTitle
          title="Bookings"
          sub="  View, update, delete a list of your bookings!"
        />

        <Link href="/bookings/add-bookings">
          <Button>Add Booking</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
