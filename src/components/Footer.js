import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" bg-black text-white">
      <header className="flex md:flex-row-reverse flex-col justify-between px-[3%] py-20">
        <div>
          <ul className="flex flex-col font-bold gap-5">
            <li className="text-2xl">
              <Link href="">Home</Link>
            </li>
            <li className="text-2xl">
              <Link href="">About</Link>
            </li>
            <li className="text-2xl">
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white xl:text-8xl">
          INKiDEA
        </h1>
      </header>
    </footer>
  );
}
