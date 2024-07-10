const Header = () => {
    return (
     <div className="flex justify-between bg-slate-200">
        <div > 
            <img src="https://www.fishsensedq.com/wp-content/uploads/2018/12/swiggy-logo-design-1-02.png" alt="" className="h-20 w-20 p-3 "  />
        </div>
        <div>
            <ul className="flex space-x-3 mt-5 text-xl " >
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Feedback</li>
            </ul>
        </div>
     </div>
    )
  }

  export default Header;