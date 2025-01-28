import React from "react";

function Header() {
  return (
    <>
      <div className="">
        <div className="flex h-[50px] justify-around ">
          <div className="w-full  h-30px relative top-5 left-10">
            <img
              className="w-[200px] h-full text-blue-500  "
              src="https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DjLsioJ8ZwOS5mR9KyXHkDzdt9WBeCezXQ5~PMVJsFxU99by2Q2WzfnHKvVUHfCuFKeXVcoDWy4o8LldSu4kzyCPYZ4uIyDbH4T4p5qgcGYZEfgDrlwYXUydr6XynPJOthZKxREMku0jzE6o5VC2769VbBWoPKAza1xp-DpgK1DFT2QjpVaJW2sDW1tAA7KVgww3FWlq~EA0Az1VQYlG098OIH3Xb106krS5c9Ea-BEyZNHuSsJm7FDPAWUsOKDPxz6TnT2FeD5-Ckj9KgDfYV-FIM4JLeeCBKnTjDvdOrHBWTDz8RM5w0WQfe5Qt5P7vFxlMIrT-~DBJ~hxHN6Qag__"
              alt=""
            />
          </div>

          <div className="flex w-full justify-around items-center h-[20px] mt-7">
            <h1>HOME</h1>
            <h1 className="text-blue-500">MENU</h1>
            <h1>MAKE A RESERVATION</h1>
            <h1>CONTACT US</h1>
          </div>
           {/* <img src="https://s3-alpha-sig.figma.com/img/0571/aff9/d875fd6fec8f3801ba095cc39be0e4b1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H4vwq1U7XnDOaJ3lr5FKCsvwOCt3piCa60rsSY6IBHlnP7J9TaclErCl2NHRu5yEOr4JJn-XQX99I8K~1l5PCeXxiPZ-ng5jRROHbl1Es47NdlT4NeFI1k2MQ0he9Ot4E98vaewmeG9ZhLYjY-GXyKJo5DVj7RKCuq2Y7DUY6Kv-TnsjJADJwbbIEA3expSyMCzUIiejm~pBQ9KJ8Cm1MOHk77ZDCU4s0xPhGi706zrZe~b3WpvtVS0UZbft21TKYLJY6Mti3qdvfoNIU7H4i9uoadsHRIMJ3jr9iMxLZNbndHr0TUaix9xmAOvRu-KK49wjgYBW1acw5KgNchkG4A__" alt="" /
        <img src="https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QgugunDEPtViaSZudg2x1SMkE~4uq1Rj1Xr~Vuy86Gu0NDg55Qxyz35IDi9634t6yAZp~hN-hgRAV9nDjTnBdP3TG3JJkCSkz2Nat2qazfH3aMvwSH-P7nClyPTKC83rTuv3W4X1qq9glpGdyLTndwRlqwqJHxuMkdb7y1NTNRqnJMwAqNycp~uk6Kyi~ahmiNB58yn27HXrFCjRDEgJBSDo3NzOG5qP6jUugF93yyLzmn6YZgEdKaYVwtTplEA0zp8CDA141u3x1UFVu--dsoVyYaRShXSjKdhOvLGi5~xEhMfNdpt6~sONibM74D9kKCSAPvfMLiuuvZT3UsL5uw__" alt="" />
        <img src="https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkTFjMUuehDIRRcl-s5GpwpoXDswdhDOftf81BHGsT2BTTVnEj4qviQ61kH8nHrbEroruETjEhW3zGENTuEE9WcGzfSKLclF248jsfYSkANQOQ2NnpF1EbPCuaP54br68sMC6KbN16kmm4csiSGylYLhC~zRWGcSjrcdh~wYry6HVjWYctH7wJMsiji-GsfVCD551Ac34hrydfzWGqHqoxyF8hQwAmwV8wJbOpH803OfeIOqeYhUm7hIDXbYu8~lvnQMUlz97aMnqRo3QSjKURd81-~UWlSK~8oLTh1iiMg-cuNhMEZRl7MCucNhHkz4mba-sg5BTMjPooAn~aZ6ZQ__" alt="" />
        <img src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIWCajpMaKaiolVzucZv5t13~zps0ftWEcbbOlPfvjgXGTKFnL3m-b1G~RefmmfWupO4iLowXH4CxX4cH5F4Vg50Am~fcEpW38dE6FMNK-IKa8GEs6~W4eQzPgy2hRuugNP8WjJtwhxBSal8D4JTPc9n24KeVhHB2mgN1bi6i4JxlLhqxHVGZqt0c4xMDVAh~1TJEXuqwdd8IRojDuOey96EayLsuD9gJATSnqOs~BWHufftlHQmBM2rLemzr6cQxNXEoxHab4-KD4X-mnYHYFSD~vjuDc6UgwsEY5MaBZ0OZekcjoKz0IFn3r5Pyriy106im~uZRXo-VcFBAxEFeQ__" alt="" /> */}
        {/* <img src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o5WMwELho~sx6kPQyhSX0W7JpIxIck3hhu2L7ar7Px0afPRnsclLbUM7JyGKw6P8XPWUB3EOEYalJ17N480QP5OmLeBHvf3x6EqzgnYlmm8DaKnpj51na2UbnIJDZEc5rb7njd5Kyeu1S6uHzZ9FW3cFjcoHr2lnUalPcDbqKq5OFm-8KBOMT8cVMcIRfCHNyCFbI3U9sRO5HqXftOF4AsGkUt6-x2~hSK4dCXzs0vkpagi9t3pw6wQQB~SU~xew7Rwp0sDBJz-Zimf822GoTyIl6R8k2JtIxUvEhlUkz9nf5EwbsasmP~8~C87CI1SFAH5ZqFdwo7g12WNvyF~rCQ__" alt="" /> */}

        </div>
      </div>
    </>
  );
}

export default Header;
