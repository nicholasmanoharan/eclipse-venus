"use client";

import Image from "next/image";
import Button from "./components/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        eventName: "",
        description: "",
        members: "",
    });

    const name = "john";

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };
    const createEvent = (e) => {
        router.push(router.push("/page2"));
    };

    return (
        <main>
            <div class="main_page h-screen">
                <head>
                    <title>Event Settings</title>
                </head>
                <div class="top_bar">
                    <img class="logo" src="/logo.png" />
                    <p class="logo_text">Schedule With Eclipse!</p>
                </div>

                <div>
                    <input
                        id="event_name"
                        type="text"
                        placeholder="Event Name"
                        name="eventName"
                        onChange={handleInput}
                    />

                    <input
                        id="description"
                        type="text"
                        placeholder="Members"
                        name="members"
                        onChange={handleInput}
                    />

                    <p>select schedule time range</p>
                    <div class="time_selector">
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
                    </div>

                    <p>select days</p>
                    <div class="container">
                        <div class="cat">
                            <label>
                                <input type="checkbox" value="1" />
                                <span>Sunday</span>
                            </label>
                        </div>

                        <div class="cat">
                            <label>
                                <input type="checkbox" value="1" />
                                <span>Monday</span>
                            </label>
                        </div>

                        <div class="cat">
                            <label>
                                <input type="checkbox" value="1" />
                                <span>Tuesday</span>
                            </label>
                        </div>

                        <div class="cat">
                            <label>
                                <input type="checkbox" value="1" />
                                <span>Wednesday</span>
                            </label>
                        </div>

                        <div class="cat">
                            <label>
                                <input type="checkbox" value="1" />
                                <span>Thursday</span>
                            </label>
                        </div>

                        <div class="cat">
                            <label>
                                <input type="checkbox" value="1" />
                                <span>Friday</span>
                            </label>
                        </div>

                        <div class="cat">
                            <label>
                                <input type="checkbox" value="1" />
                                <span>Saturday</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="create_event">
                    <a
                        onClick={() => {
                            createEvent();
                        }}
                    >
                        //Create Event
                    </a>
                </div>
            </div>

            <button id="nextButton"> Next Page </button>
        </main>
    );
}
