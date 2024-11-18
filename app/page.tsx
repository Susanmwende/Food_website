import Navbar  from "./components/Atoms/Navbar/navbar";
export default function Home() {
  return (
    <main>
      <nav className="flex justify-evenly">
        <div className="flex gap-20 my-8 text-[20px]">
        <a className="text-yellow-600">FoodHouse</a>
        <a className="text-yellow-600">HOME</a>
        <a>RESTRURNT</a>
        <a>SERVICS</a>
        <a>CART</a>
        </div>
        <div>
        <p className="my-8 text-[20px]">Sign Up</p>
      </div>
      </nav>
      <div className=" px-28 py-28 flex justify-evenly">
        <div>
        <h1 className=" text-7xl font-black ">Enjoy Delicious <br /> Food in <b className="text-yellow-600">Healthy Life</b></h1> <br /><br />
        <p className="">Tandoori masala is an Indian spice blend consisting of a <br/>variety of spice Tandoori masala in an indian spice blend <br/>consisting of a variety of spices </p>
        <button className="my-[70px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px]">Order Now</button>
        </div>
        <div>
          <img src="images/chicken.png" alt="" className="" />
        </div>
      </div>
  <div className="">
      <div>
        <h3 className="font-serif text-3xl text-center">Online Store</h3>
        <h2 className="text-5xl text-center">Popular Foods</h2>
      </div>
      <div className="flex justify-evenly items-center">
        <div>
          <img src="images/fish.png" alt=""  className=""/>
          <h3 className="mx-16 text-3xl ">Fruit dish</h3>
          <img src="images/rate.png" alt=""  className="mx-16 text-3xl"/>
          <button className=" my-[20px] bg-yellow-500 text-neutral-100 min-w-[260px] text-amber-500 min-h-[60px] text-[25px] rounded-full mr-[60px] ">Add to cart  $696</button>
        </div>
        <div>
          <img src="images/potatoes.png" alt=""  className=""/>
          <h3 className="mx-16 text-3xl ">Sea Fish dish</h3>
          <img src="images/rate.png" alt=""  className="mx-16 text-3xl"/>
          <button className=" my-[20px] bg-yellow-500 text-neutral-100 min-w-[260px] text-amber-500 min-h-[60px] text-[25px] rounded-full mr-[60px] ">Add to cart  $696</button>
        </div>
        <div>
          <img src="images/chips.png" alt=""  className=""/>
          <h3 className="mx-16 text-3xl ">Sea Fish Dish</h3>
          <img src="images/rate.png" alt=""  className="mx-16 text-3xl"/>
          <button className=" my-[20px] bg-yellow-500 text-neutral-100 min-w-[260px] text-amber-500 min-h-[60px] text-[25px] rounded-full mr-[60px] ">Add to cart  $696</button>
        </div>
        <div className="my-20">
          <img src="images/pizza.png" alt=""  className=""/>
          <h3 className="mx-16 text-3xl ">Pizza</h3>
          <img src="images/rate.png" alt=""  className="mx-16 text-3xl"/>
          <button className=" my-[20px] bg-yellow-500 text-neutral-100 min-w-[260px] text-amber-500 min-h-[60px] text-[25px] rounded-3xl mr-[60px] ">Add to cart  $696</button>
        </div>
      </div>
      <div className="flex justify-evenly py-28">
      <div>
        <button className="my-[20px] bg-yellow-500 text-neutral-100 min-w-[120px] text-amber-500 min-h-[60px] text-[25px] rounded mr-[60px] ">-50%</button>
        <h1 className="text-5xl font-black">Our Special Offer</h1>
        <p>Best cooks and best delivery guys all at your <br />service. Hot tasty food will reach you in 60 minutes</p>
        <button className="my-[20px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[60px] text-[25px] rounded mr-[60px] ">See All Menu </button>
      </div>
      <div>
        <img src="images/dish5.png" alt="" className="" />
      </div>
      </div>
      <div className="text-center">
        <p className="text-3xl ">Quality Food</p>
        <h1 className="text-5xl ">Get The Best Offers</h1>
        <p className="text-2xl ">The food at your doorstep. Why starve when you have us. You hunders <br />partners. Straight out of the oven to your doorstep.</p>
      </div> <br /><br /> <br />
      <div className="flex justify-evenly">
      <div className="flex">
      <div>
        <h1 className="text-3xl font-black">Any day <br />offers</h1>
        <p className="text-2xl">New phenomenon <br />Burger taste </p>
        <p className="text-yellow-600 text-3xl">$12.90</p>
        </div>
        <div>
          <img src="images/burgers.png" alt="" />
        </div>
      </div>
      <div className="flex">
      <div>
        <h1 className="text-3xl font-black">Other <br />flavors</h1>
        <p className="text-2xl">Save room. we<br />made salats </p>
        <p className="text-yellow-600 text-3xl">$12.90</p>
        </div>
        <div>
          <img src="images/burger2.png" alt="" />
        </div>
      </div>
      <div className="flex">
      <div>
        <h1 className="text-3xl font-black">Find a poco <br />store near <br />you</h1>
        </div>
        <div>
          <img src="images/poco.png" alt="" />
        </div>
      </div>
      </div>
      <br /><br /><br /><br /><br />
      <h1 className="text-6xl text-center">Our Services</h1> <br /><br /><br />
      <div className="flex justify-evenly">
        <div>
        <img src="images/one.png" alt="" />
        <h2 className="text-2xl font-black">55+ Restaurants</h2>
        </div>
        <div>
        <img src="images/two.png" alt="" />
        <h2 className="text-2xl font-black">Good Quality</h2>
        </div>
        <div>
        <img src="images/three.png" alt="" />
        <h2 className="text-2xl font-black">Discount System</h2>
        </div>
        <div>
        <img src="images/four.png" alt="" />
        <h2 className="text-2xl font-black">Fast Delivery</h2>
        </div>
      </div>
      <div className=""><br /><br /><br /><br /><br /><br />
        <div className="text-center ">
          <h2 className="text-3xl ">Testimonial</h2>
          <h1 className=" text-6xl font-black ">What Our Clients Say</h1> <br /><br />
          <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt <br />ut labore magna aliqua. Ut enim ad minin veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo</p> <br /><br />
          <img src="images/teamgroup.png" alt="" className="" />
        </div>
      </div>
      

      
      </div>

    </main>
  );
}
