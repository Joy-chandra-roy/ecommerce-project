import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ProductService from "../services/ProductService";
import ProductCart from "./../components/product/ProductCart";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage]=useState(1)
  const [previous, setPrevious]=useState(null)
  const [next, setNext]=useState(null)
  const [search, setSearch]=useState("")
  const [ordering, setOrdering]=useState("")



  useEffect(() => {
    loadData();
  }, [page, search,ordering]);

  const loadData = async () => {
    try {
      const res = await ProductService.getProducts(page, search, ordering);
      console.log("API Response:", res.data);

      setProducts(res.data.results || res.data);
      setNext(res.data.next);
      setPrevious(res.data.previous);


    } catch (error) {
      console.log("Error loading products:", error);
    }
  };

  const handleSearch=()=>{
    setPage(1);
   
  }

  return (
    <div>
      <div className="flex justify-between mt-15 px-5 ">
        <div>
          <h1 className="text-2xl font-bold ">All Products</h1>
        </div>

        <div>
          <label className="input input-primary rounded-2xl w-xl p-0 pl-2 outline-none ">
            <IoMdSearch className="text-2xl font-bold text-primary" />
            <input type="search" 
            placeholder="Search" 
            onChange={(e)=>{
              setSearch(e.target.value);
              setPage(1);
            }}
            onKeyDown={(e)=>{
              if(e.key==="Enter") handleSearch();
            }}
            />
            <button className="bg-primary p-2.5 rounded-r-2xl text-white font-bold  cursor-pointer hover:bg-purple-500 transition  "
              onClick={handleSearch}
            >
              Search
            </button>
          </label>
        </div>

        <div>
          <select className="select select-primary"
            value={ordering}
            onChange={(e)=>setOrdering(e.target.value)}
          >
            <option value=""> Sort by</option>
            <option value="price" onClick={handleSearch}>Price: Low to High</option>
            <option value="-price"  onClick={handleSearch}>Price: High to Low</option>
            <option value="name"  onClick={handleSearch}>Name: A to Z</option>
            <option value="-name"  onClick={handleSearch}>Name: Z to A</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-20">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>

      <div className="my-20  flex justify-center">
        <button disabled={!previous}  className="btn btn-primary" onClick={()=>setPage(page - 1)}>Prev</button>
        <span className="border-1 p-2 rounded-xl">page: {page}</span>
        <button disabled={!next} className="btn btn-primary" onClick={()=>setPage(page +1)}>Next</button>
      </div>

    </div>
  );
};

export default ProductList;
