import { Input } from "@material-tailwind/react";
import React from "react";

function Addmenu() {
  return (
    <>
      <div className=' className="inset-0 backdrop-blur-md fixed flex justify-center items-center w-full h-full bg-black bg-opacity-80 "'>
        <div className="grid bg-blue-800  grid-cols-2">
          <Input label="menu"></Input>
          <Input label="decription"></Input>
          <Input></Input>
          <Input></Input>
        </div>
      </div>
    </>
  );
}

export default Addmenu;
