import Link from "next/link";
import Image from "next/image";

const Header1 = () => {
    return (
  <div>
          <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2">
            {/* Logo Section */}
            <Image src="/image/logob.png" alt="Logo" width={24} height={24} />
      
            {/* Links Section */}
            <nav>
              <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
                <li>
                  <Link href="#">Find a Store</Link>
                </li>
                <span className="h-[14px] w-px bg-gray-400" />
                <li>
                  <Link href="#">Help</Link>
                </li>
                <span className="h-[14px] w-px bg-gray-400" />
                <li>
                  <Link href="joinus">Join Us</Link>
                </li>
                <span className="h-[14px] w-px bg-gray-400" />
                <li>
                  <Link href="login">Sign In</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            
          </div>
          </div>
        );
      };
      
      export default Header1