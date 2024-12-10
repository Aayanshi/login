const create=()=>{
  return(
      <div className ="container 
       md:container w-full pt-4 px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-left">
            Create A Free Account
        </h2>
            <p className="text-sm text-gray-800 text-left mb-6 py-2">
              To Access Sync Space Home
            </p> 
        <form >
          <div className="grid gap-2 sm:grid-cols-2">
            <input 
            type="text" 
            placeholder="Email Address" className="border border-[#bfbfbf00] bg-[#F4F4F4] text-base p-3 md:p-4 w-full rounded-md focus:outline-none focus:border focus:border-[#bfbfbf]
            text-black
            " />
            
            <input type="text" placeholder="Website" className="border border-[#bfbfbf00] bg-[#F4F4F4] text-base p-3 md:p-4 w-full rounded-md focus:outline-none focus:border focus:border-[#bfbfbf]
            text-black"/>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 mt-2">

          <input type="password" placeholder="password" className="border border-[#bfbfbf00] bg-[#F4F4F4] text-base p-3 md:p-4 w-full rounded-md focus:outline-none focus:border focus:border-[#bfbfbf]" />
          <input type="password" placeholder="Confirm password" className="border border-[#bfbfbf00] bg-[#F4F4F4] text-base p-3 md:p-4 w-full rounded-md focus:outline-none focus:border focus:border-[#bfbfbf]" />
        </div>
         <div className="flex items-center mt-3 mb-2">
            <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-2 focus:ring-text-cyan-500 mr-2" required />
              <label
                htmlFor="terms"
                className=" text-sm md:text-sm  text-cyan-500"
              >
                I Agree To Tidio&apos;s{' '}
                <a href="#" className="text-cyan-500 hover:underline">
                  Terms & Conditions
                </a>{' '}
                And{' '}
                <a href="#" className="text-cyan-500 hover:underline">
                 Privacy Policy
                </a>
              </label>
          </div>
          <div className="mt-2">
          <button
              type="submit"
              className="bg-cyan-500 text-white text-base w-full p-4 rounded-md hover:bg-cyan-600 transition duration-300
              focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Get Started For Free
            </button>
          </div>
      
        </form>
      </div>
  )
}

export default create;

