export default function Navbar(){
    return(
        <div>
            <nav>
                <ul className="flex justify-end gap-10 mx-10 pt-4 text-xl text-[#f3f7f8] font-bold">
                    <li className="hover:text-[#e3ecef]">Jobs</li>
                    <li className="hover:text-[#e3ecef]">Profile</li>
                    <li className="hover:text-[#e3ecef]">Account</li>
                </ul>
            </nav>
        </div>
    );
}