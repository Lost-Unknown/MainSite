import React from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
function NavList() {
  return (
    <ul className="my-2 w-full flex flex-col justify-between items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/" className="text-white  text-outline-b1 lilita-font no-underline text-xl">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/games"
          className="text-white  text-outline-b1 lilita-font no-underline text-xl"
        >
          Games
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/youtube"
          className="text-white  text-outline-b1 lilita-font no-underline text-xl"
        >
          Youtube
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/contactme" className="text-white text-outline-b1 lilita-font no-underline text-xl">
          Contact Me
        </Link>
      </Typography>
    </ul>
  );
}
const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar color="transparent" className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-center text-blue-gray-900">
        
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
    // <nav className='flex justify-center'>
    //     <div className=' flex lg:w-1/3 md:w-2/3 sm:w-full h-auto justify-between px-8 py-4 items-center  rounded-full'>
    //         <Link className=' text-white lilita-font no-underline text-xl' href={'/'}>Home</Link>
    //         <Link className='text-white lilita-font no-underline text-xl' href={'/games'}>Games</Link>
    //         <Link className='text-white lilita-font no-underline text-xl' href={'/games'}>Youtube</Link>
    //         <Link className='text-white lilita-font no-underline text-xl' href={'/games'}>Contact Me</Link>
    //     </div>
    // </nav>
  );
};

export default Nav;
