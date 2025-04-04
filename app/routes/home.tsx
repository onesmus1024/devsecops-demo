import type { Route } from "./+types/home";
import img from "../assets/images/img1.png";
import { Link } from "react-router";
import Logo from "~/components/Logo";
import ProductList from "~/components/ProductList";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Swiftcart" },
    { name: "description", content: "Swiftcart Ecommerce shop, shop all products in one place" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[#F6F2EF] min-h-screen text-gray-900 ">
      <nav className="w-full flex justify-between p-4 container mx-auto pt-8">
        <Link to="/"><Logo /></Link>
        <div className="flex justify-between items-center gap-8 text-gray-400">
          <Link to="/" className="text-lg font-semibold">Home</Link>
          <Link to="/#products" className="text-lg font-semibold">Products</Link>
          <Link to="/orders" className="text-lg font-semibold">Orders <p className="badge ">0</p></Link>
          <Link to="/login" className="btn btn-primary font-semibold">
            Sign In
          </Link>
        </div>
      </nav>

      <div className="container p-4 mx-auto mt-8">
        <div className="w-full relative">
          <img className="w-full" src={img} />
          <div className=" absolute top-0 w-full flex flex-col gap-8 h-full justify-center">
            <h2 className="text-5xl font-bold text-primary max-w-xl">Get the best quality products at the lowest prices</h2>
            <p className=" text-xl text-gray-600">We have prepared special discouts for all your favourite products.</p>
            <Link to="/#products" className="btn btn-primary font-bold  self-start">Shop Now</Link>
          </div>
        </div>
      </div>

      {/* products list */}
      <div className="w-full bg-white py-8">
        <div className="container mx-auto" id="products">
          <h2 className="text-3xl mb-4 font-bold underline decoration-primary p-2 underline-offset-4 decoration-4">Products</h2>
          <ProductList />
        </div>
      </div>
    </main>
  );
}