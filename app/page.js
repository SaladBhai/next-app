import Image from "next/image";

export default function Home() {
  return (
    <section className="relative bg-cover bg-center h-screen" >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl font-extrabold">Discover Your Style</h1>
        <p className="text-gray-200 text-lg mt-4">Shop the latest fashion trends with us</p>
        <a href="/products" className="mt-6 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-300">
          Shop Now
        </a>
      </div>
    </section>    
    
  );
}
