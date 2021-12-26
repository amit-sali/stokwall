export default function App() {
  return (

    <div>
    <div>
      <nav>
        <div>
          <h1 className="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/">Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li className=" font-bold">
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  
    <main className="px-16 py-6">
      <div className="flex justify-end">
        <a href="#">Log in</a>
        <a href="#" className="ml-2">Sign up</a>
      </div>

    

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
  
        <div className="mt-8">
        {/* cards go here */}
          <div> 
            <img src="img/stew.png" alt="stew"/>
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className="font-bold mt-12 pb2 border-b border-gray-200">Most Popular</h4>

        <div className="mt-8">
           {/* cards go here */}
        </div>
      </div>

      <div className=" flex justify-center">
        <div className="bg-secondary-100 text-secondary-200">Load more</div>
      </div>    
    </main>
  </div>
    
  )
}