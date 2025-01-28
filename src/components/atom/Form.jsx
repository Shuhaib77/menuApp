import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useFormik } from "formik";
import axios from "axios";

function Form({ heading,setOpen }) {
  const { handleBlur, handleChange, handleSubmit, errors, values } =
    heading === "ADD MENU"
      ? useFormik({
          initialValues: {
            name: "",
            description: "",
          },
          onSubmit: async (values) => {
            try {
              await axios.post("");
            } catch (error) {}
          },
        })
      : useFormik({
          initialValues: {
            name: "",
            description: "",
            price: "",
            catogery: "",
          },
          onSubmit: async (values) => {
            try {
              await axios.post("");
            } catch (error) {}
          },
        });

        const handle_close=()=>{
            setOpen(false)

        }

  return (
    <>
      <div className="inset-0 fixed flex justify-center items-center w-full h-full  bg-opacity-0 backdrop-blur-xl z-10">
        <div className=" w-[700px] overflow-auto p-5 place-items-center h-[500px] rounded-lg bg-blue-400 ">
      
            <div className="float-end">
              <i class="fa-solid fa-xmark fa-2xl" onClick={handle_close}></i>
            </div>
        
          <div className="flex flex-col h-full  gap-4  justify-center items-center">
          <div>
            <h1 className="text-3xl font-bold">{heading}</h1>
          </div>

          <form
            action=""
            className="flex flex-wrap w-full justify-center  p-2 gap-4"
            onSubmit={handleSubmit}
          >
            <Input
              label="Menu"
              className=" bg-white"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
            />
            <Textarea
              label="Description "
              className="bg-white "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              name="description"
            />
            {/* <Input label="Menu" className=" bg-white" />
            <Textarea label="Description " className="bg-white " /> */}
          </form>

          <div className="text-center w-full ">
            <Button className="w-1/2  mr-2 ">Add</Button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
