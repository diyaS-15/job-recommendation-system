'use client'
import Link from 'next/link';

export default function Navbar(){
    return(
        <div>
            <nav>
                <ul className="flex justify-end gap-6 mx-6 pt-4 text-xl text-[#f3f7f8] font-bold">
                    <li className="hover:text-[#e3ecef]">
                        <Link href="/Jobs">Jobs</Link>
                    </li>
                    <li className="hover:text-[#e3ecef]">
                        <Link href="/Profile">Profile</Link>
                    </li>
                    <li className="hover:text-[#e3ecef]">
                        <Link href="/Dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}