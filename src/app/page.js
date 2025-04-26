"use client";

import React, { useEffect, useState } from "react";
import { wixClient } from "@/lib/wix-client";

export default function HeroSlide() {
  const [content, setContent] = useState({
    title: "Is your tech causing chaos?",
    description:
      "You need Geeks2U. Got a constantly crashing computer, weak Wi-Fi, or problematic printer? Our fast and friendly technicians are available to come to you, with same day service available.",
    image: "/Base.png",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await wixClient.collections.query("HeroContent").find();
        const data = response.items[0]?.data || {};
        setContent({
          title: data.title || content.title,
          description: data.description || content.description,
          image: data.image || content.image,
        });
      } catch (error) {
        console.error("Error fetching Wix CMS data:", error);
      }
    }
    fetchData();
  }, []);

  return React.createElement(
    "div",
    { className: "flex justify-center items-center min-h-screen bg-gray-50" },
    React.createElement(
      "div",
      { className: "w-full max-w-7xl mx-auto h-[500px] grid grid-cols-2 rounded-2xl shadow-xl overflow-hidden" },
      // Left Side
      React.createElement(
        "div",
        { className: "bg-[#d91e36] text-white flex flex-col justify-center px-12 py-8 rounded-r-[250px]" },
        React.createElement("h1", { className: "text-4xl font-bold mb-6 leading-tight" }, content.title),
        React.createElement("p", { className: "text-lg mb-6" }, content.description),
        React.createElement("button", { className: "bg-black text-white px-6 py-4 rounded-full w-fit" }, "Book online now")
      ),
      // Right Side
      React.createElement(
        "div",
        { className: "bg-white flex items-center justify-center" },
        React.createElement("img", { src: content.image, alt: "Tech chaos graphic", className: "h-full object-contain" })
      )
    )
  );
}