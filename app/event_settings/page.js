"use client";

import Image from "next/image";

export default function Home() {
    return (
        <div class="main_page">
            <head>
                <title>Event Settings</title>
            </head>
            <div class="top_bar">
                <img class="logo" src="/logo.png" />
                <div>Schedule With Eclipse!</div>
            </div>

            <div>
                <input type="text" placeholder="Event Name" />

                <input type="text" placeholder="Description" />
                <p>Select schedule time range</p>
                <select>
                    <option>12:00 AM</option>
                    <option>1:00 AM</option>
                    <option>2:00 AM</option>
                    <option>3:00 AM</option>
                    <option>4:00 AM</option>
                    <option>5:00 AM</option>
                    <option>6:00 AM</option>
                    <option>7:00 AM</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                    <option>11:00 PM</option>
                </select>
                <p>to</p>
                <select>
                    <option>12:00 AM</option>
                    <option>1:00 AM</option>
                    <option>2:00 AM</option>
                    <option>3:00 AM</option>
                    <option>4:00 AM</option>
                    <option>5:00 AM</option>
                    <option>6:00 AM</option>
                    <option>7:00 AM</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                    <option>11:00 PM</option>
                </select>
                <p>PDT</p>

                <p>select days</p>
                <div class="date_sselector">
                    <button>Sunday</button>
                    <button>Monday</button>
                    <button>Tuesday</button>
                    <button>Wednesday</button>
                    <button>Thursday</button>
                    <button>Friday</button>
                    <button>Saturday</button>
                </div>

                <button>Create Event</button>
            </div>
        </div>
    );
}
