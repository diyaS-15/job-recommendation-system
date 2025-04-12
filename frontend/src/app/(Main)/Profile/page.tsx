export default function ProfilePage(){
    return(
        <div className="flex flex-col">
        <h1 className="text-4xl text-[#202526] font-bold m-3">My Profile </h1>
        <form>
            <input type="file" placeholder="Upload Pdf" className="rounded-md border-2 px-6 m-2 mb-1"/>
         </form>
        <p> Shows user experience + skills </p>
    </div>
    );
}