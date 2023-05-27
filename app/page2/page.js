"use client";
import Link from "next/link";
import Grid from "../components/Grid";
import { useRouter } from "next/navigation";

export default function page2() {
    const router = useRouter();

    // const {
    //     query: { name },
    // } = router;

    // const props = {
    //     name,
    // };

    return (
        <div className="flex flex-row text-white ">
            <div className="w-full pt-10 pl-10  ">
                <h1 className="text-3xl pb-2  border-b mb-6">John's Event</h1>
                <p className="text-xl">Members:</p>
                <p className="">Richard, Robert, Lexi, Davante</p>
                <h2>Event name: </h2>
                <h2>Event time: </h2>
                <h2>Event days: </h2>
            </div>

            <div className="w-full flex flex-row mt-28 ">
                <div className="mt-6 w-2/12">
                    <h1>8:00 AM</h1>
                    <h1>9:00 AM</h1>
                    <h1>10:00 AM</h1>
                    <h1>11:00 AM</h1>
                    <h1>12:00 PM</h1>
                    <h1>1:00 PM</h1>
                    <h1>2:00 PM</h1>
                    <h1>3:00 PM</h1>
                    <h1>4:00 PM</h1>
                    <h1>5:00 PM</h1>
                    <h1>6:00 PM</h1>
                    <h1>7:00 PM</h1>
                    <h1>8:00 PM</h1>
                    <h1>9:00 PM</h1>
                    <h1>10:00 PM</h1>
                    <h1>11:00 PM</h1>
                    <h1>12:00 AM</h1>
                    <h1>1:00 AM</h1>
                </div>
                <div className="">
                    <div className=" w-10/12 flex flex-row space-x-6 text-sm">
                        <h1>Sunday</h1>
                        <h1>Monday</h1>
                        <h1>Tuesday</h1>
                        <h1>Wednesday</h1>
                        <h1>Thursday</h1>
                        <h1>Friday</h1>
                        <h1>Saturday</h1>
                    </div>
                    <Grid />
                </div>
            </div>
        </div>
    );
}
