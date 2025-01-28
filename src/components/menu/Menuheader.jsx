import { Button } from "@material-tailwind/react";
import React from "react";

function Menuheader() {
  return (
    <>
      <div>
        <div
          className="flex justify-center items-center h-[500px] bg-cover "
          style={{
            backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QgugunDEPtViaSZudg2x1SMkE~4uq1Rj1Xr~Vuy86Gu0NDg55Qxyz35IDi9634t6yAZp~hN-hgRAV9nDjTnBdP3TG3JJkCSkz2Nat2qazfH3aMvwSH-P7nClyPTKC83rTuv3W4X1qq9glpGdyLTndwRlqwqJHxuMkdb7y1NTNRqnJMwAqNycp~uk6Kyi~ahmiNB58yn27HXrFCjRDEgJBSDo3NzOG5qP6jUugF93yyLzmn6YZgEdKaYVwtTplEA0zp8CDA141u3x1UFVu--dsoVyYaRShXSjKdhOvLGi5~xEhMfNdpt6~sONibM74D9kKCSAPvfMLiuuvZT3UsL5uw__")',
          }}
        >
          {/* <div className="absolute inset-0 w-full h-full  bg-black opacity-50"></div> */}
          <div className=" text-center ">
            <h1 className="text-5xl font-extrabold drop-shadow-[0_4px_6px_rgba(255,0,0,0.5)] text-white">
              MENU
            </h1>
            <p className="mt-2 max-w-xl mx-auto  ">
              Please take a look at our menu featuring food, drinks, and brunch.
              If you'd like to place an order, use the "Order Online" button
              located below the menu.
            </p>
          </div>
        </div>

        <div
          className="h-[100%] "
          style={{
            backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/0571/aff9/d875fd6fec8f3801ba095cc39be0e4b1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H4vwq1U7XnDOaJ3lr5FKCsvwOCt3piCa60rsSY6IBHlnP7J9TaclErCl2NHRu5yEOr4JJn-XQX99I8K~1l5PCeXxiPZ-ng5jRROHbl1Es47NdlT4NeFI1k2MQ0he9Ot4E98vaewmeG9ZhLYjY-GXyKJo5DVj7RKCuq2Y7DUY6Kv-TnsjJADJwbbIEA3expSyMCzUIiejm~pBQ9KJ8Cm1MOHk77ZDCU4s0xPhGi706zrZe~b3WpvtVS0UZbft21TKYLJY6Mti3qdvfoNIU7H4i9uoadsHRIMJ3jr9iMxLZNbndHr0TUaix9xmAOvRu-KK49wjgYBW1acw5KgNchkG4A__")',
          }}
        >
          <div className=" flex  justify-center   items-center h-full p-4   gap-4">
            <Button className="bg-black border border-blue-500 hover:bg-blue-500 h-12 w-32">
              Drinks
            </Button>
            <Button className="bg-black border border-blue-500 hover:bg-blue-500 h-12 w-32">
              Drinks
            </Button>
            <Button className="bg-black border border-blue-500 hover:bg-blue-500 h-12 w-32">
              Drinks
            </Button>
          </div>
    
        </div>
      </div>
    </>
  );
}

export default Menuheader;
