import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Support() {
  return (
    <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-full border bg-zinc-100 border-blue-700 fixed bottom-8 right-10">
      <span className="text-sm text-blue-700">
        <IoMdInformationCircleOutline />
      </span>
      Support, Terms & More
    </div>
  );
}

export default Support;
