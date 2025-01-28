import React from "react";

function Viewmenu() {
  return (
    <>
<div className="relative p-10 lg:p-30">
  {/* Left Image */}
  <div className="absolute left-4 top-4 lg:left-18 lg:top-0">
    <img
      className="w-[130px] h-[100px] lg:w-[190px] lg:h-[281px] object-contain"
      src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o5WMwELho~sx6kPQyhSX0W7JpIxIck3hhu2L7ar7Px0afPRnsclLbUM7JyGKw6P8XPWUB3EOEYalJ17N480QP5OmLeBHvf3x6EqzgnYlmm8DaKnpj51na2UbnIJDZEc5rb7njd5Kyeu1S6uHzZ9FW3cFjcoHr2lnUalPcDbqKq5OFm-8KBOMT8cVMcIRfCHNyCFbI3U9sRO5HqXftOF4AsGkUt6-x2~hSK4dCXzs0vkpagi9t3pw6wQQB~SU~xew7Rwp0sDBJz-Zimf822GoTyIl6R8k2JtIxUvEhlUkz9nf5EwbsasmP~8~C87CI1SFAH5ZqFdwo7g12WNvyF~rCQ_"
      alt="Decorative Left"
    />
  </div>
  {/* Main Content */}
  <div className="flex flex-col h-full w-full p-5 lg:p-10 border rounded-lg overflow-auto">
    <div className="flex items-center justify-center lg:mb-20">
      <h1 className="text-3xl lg:text-5xl text-center font-extrabold">BRUNCH COCKTAILS</h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
      {/* Repeated Content */}
      <div className="flex flex-col">
        <h2 className="text-xl lg:text-2xl font-bold text-white">CINNAMON TOAST CRUNCH..........................$16</h2>
        <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl lg:text-2xl font-bold text-white">CINNAMON TOAST CRUNCH..........................$16</h2>
        <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl lg:text-2xl font-bold text-white">CINNAMON TOAST CRUNCH..........................$16</h2>
        <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl lg:text-2xl font-bold text-white">CINNAMON TOAST CRUNCH..........................$16</h2>
        <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl lg:text-2xl font-bold text-white">CINNAMON TOAST CRUNCH..........................$16</h2>
        <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
      </div>
      {/* Add more items here */}
    </div>
  </div>
  {/* Right Image */}
  <div className="absolute right-4 bottom-4 lg:right-30 lg:bottom-18">
    <img
      className="w-[150px] h-[200px] lg:w-[190px] lg:h-[281px] object-contain"
      src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIWCajpMaKaiolVzucZv5t13~zps0ftWEcbbOlPfvjgXGTKFnL3m-b1G~RefmmfWupO4iLowXH4CxX4cH5F4Vg50Am~fcEpW38dE6FMNK-IKa8GEs6~W4eQzPgy2hRuugNP8WjJtwhxBSal8D4JTPc9n24KeVhHB2mgN1bi6i4JxlLhqxHVGZqt0c4xMDVAh~1TJEXuqwdd8IRojDuOey96EayLsuD9gJATSnqOs~BWHufftlHQmBM2rLemzr6cQxNXEoxHab4-KD4X-mnYHYFSD~vjuDc6UgwsEY5MaBZ0OZekcjoKz0IFn3r5Pyriy106im~uZRXo-VcFBAxEFeQ_"
      alt="Decorative Right"
    />
  </div>
</div>

    </>
  );
}

export default Viewmenu;
