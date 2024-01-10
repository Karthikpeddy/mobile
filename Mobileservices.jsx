import React from "react";
import Nav1 from "../components/Nav1";
import ProductCard from "../components/ProductCard";
import { products, repairs } from "../constants";
import Footer1 from "./Footer1";
import Ourclients from "./Ourclients";
import TableM from "./Table";
import Aboutservices from "./about";
import FAQ from "./FAQ";


const Mobileservices = () => {
  
  return (
    <div>
      <Nav1 />
      <br />
      <h2 className="sm:text-6xl text-4xl font-bold mx-5">
        <span className="text-red-700">Mobile </span> services
      </h2>
      
      <div className="py-36">
       <TableM/></div>
     
      
  
      <div>
        <div
          id="products"
          className="max-container max-sm:mt-12 flex flex-col justify-start gap-5 mx-5"
        >
          <h1 className="sm:text-6xl text-4xl font-bold">
            <span className="text-red-700">Our </span>Repairs
          </h1>
          <p className="lg:max-w-lg mt-2 font-montserrat font-bold">
            Here are some Mobile services which can be provided
          </p>
        </div>
        <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14 sm:items-center justify-center">
          {repairs.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
        <br className="font-bold block bg-black " />
      </div>
      <br />
      <br />
      <div className="py-8"> 
      <Aboutservices/></div>
    
      <h2 className="flex justify-center sm:text-4xl text-4xl font-bold py-8">
        <span className="text-red-700">Brands </span>&nbsp;We Support
      </h2>
      
      <Ourclients/>
      <div className="flex justify-center text-4xl font-bold">FAQ's  for&nbsp; <span className="text-red-700">FABTECH</span></div>
      <FAQ/>
      <div className="bg-black text-white">
        <Footer1 />
      </div>
    </div>
  );
};

export default Mobileservices;
