import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-slate-950 text-white dark:bg-slate-700 dark:text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/drycov6o6/image/upload/v1732409807/japan/egcmzqalliq4thaurrz1.jpg"
          width={40}
          height={20}
          alt="Logo"
        />
      </Link>
      <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-black">CN</AvatarFallback>
        </Avatar>
    </div>
  );
};

export default Navbar;
