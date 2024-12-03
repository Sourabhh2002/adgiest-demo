import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-black border-opacity-40 border-dashed h-[4.65rem] px-10 flex justify-between items-center">
      <Image
        src="/assets/images/svg/logo.svg"
        alt="logo"
        width={160}
        height={50}
        className="logo relative top-1"
      />

      <div className="flex items-center gap-1 relative top-[2px]">
        <Image
          src="/assets/images/png/pixel-arrow-right.png"
          alt="arrow-right"
          width={40}
          height={40}
          className="icon-img"
        />
        <span className="tracking-[-0.04em] cursor-pointer">Logout</span>
      </div>
    </header>
  );
}
