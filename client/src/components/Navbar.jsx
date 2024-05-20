
const Navbar = () => {
  return (
    <div className="p-5 bg-primary flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl font-concertOne text-white">CodeDate</h2>
        <ul className="flex gap-3 text-white font-ropaSans text-2xl">
            <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">About</li>
            <li className="hover:underline transition-all cursor-pointer duration-300 ease-in-out">Download</li>
            <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">Privacy</li>
        </ul>

        <button className="font-ropaSans text-2xl text-black px-5 py-1 rounded-full bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out">Log In</button>
    </div>
  )
}

export default Navbar