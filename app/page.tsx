"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";
import { EnterIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <h1 className={title()}>
          One-Stop Destination for{" "}
          <span className={title({ color: "yellow" })}>Products</span> and{" "}
          <span className={title({ color: "pink" })}>Manufacturers</span>.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Discover, Connect, and List with IndianMarket.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "success",
            radius: "sm",
            variant: "shadow",
          })}
          href={"/seller"}
        >
          Become a Merchant
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "lg" })}
          href="/signup"
        >
          <EnterIcon width={15} height={15} /> SignUp
        </Link>
      </div>
    </section>
  );
}
