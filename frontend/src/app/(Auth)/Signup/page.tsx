'use client'
import { useRouter } from 'next/navigation';

export default function SignupPage(){
    const router = useRouter();
    const handelSigninClick = () => {
    router.push("/Profile");
    }
    const handelExistinguserClick = () => {
        router.push("/Login");
        }
    return(
        <div className="relative bg-[url('/images/jobrecbg1.jpg')] bg-cover h-screen bg-opacity-10 flex items-center justify-center">
            <div className="rounded-lg bg-white bg-center shadow-xl content-center px-20 pt-10 pb-50">
                <h2 className="text-3xl m-5 text-center text-[#202526]">Sign Up</h2>
                <form className="flex flex-col">
                    <input type="email" placeholder="Email Address" className="border-[#E0E1DD] border-2 px-6 m-2 mb-1"/>
                    <input type="text" placeholder="Password" className="border-[#E0E1DD] border-2 px-6 m-2"/>
                    <button className="rounded-lg bg-[#E0E1DD] mx-16 my-4 text-[#202526]" onClick={handelSigninClick}>Sign Up</button>
                </form>
                <p className="text-sm text-center text-[#202526]" onClick={handelExistinguserClick}>Already a user? Login</p>
            </div>
        </div>
    );
}