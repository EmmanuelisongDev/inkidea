import React from "react";

export default function Contact() {
  const textSize = "text-6xl  font-bold md:text-8xl lg:text-9xl ";
  return (
    <>
      <div className="h-screen bg-[#ffcdd3] pl-[3%] pt-40">
        <header className="flex flex-col   ">
          <h1 className={textSize}>QUESTIONS?</h1>
          <h1 className={textSize}>QUESTIONS?</h1>
          <h1 className={textSize}>QUESTIONS?</h1>
        </header>
        <main className=" mt-20 flex gap-10">
          <div >
            <h1>• New Business</h1>
            <p>example@inkidea.com</p>
          </div>
          <div>
            <h1>• Press & PR</h1>
            <p>example@inkidea.com</p>
          </div>
        </main>
      </div>
    </>
  );
}
