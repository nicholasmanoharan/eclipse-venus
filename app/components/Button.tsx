"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Button({
    children,
    className,
}: {
    children?: React.ReactElement<any> | string;
    className?: string;
}) {
    const [shaded, setShaded] = useState(true);

    const buttonColor = shaded ? "bg-white" : "bg-[#dac4ff]";

    return (
        <button
            onClick={() => setShaded(!shaded)}
            className={`inline-block text-center border-2 border-gray-300 ${buttonColor} 
        font-normal text-sm transition ease-in-out duration-100
      box-content rounded-sm px-[45px] my-0 py-[10px] ${className} `}
        >
            {children}
        </button>
    );
}
