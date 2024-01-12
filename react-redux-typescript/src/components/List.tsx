import React from "react";
import { Product } from "../store/features/products/productsSlice";
import { useAppSelector } from "../store/store";



const List = () => {
  const products = useAppSelector((state) => state.products.products);
  return (
    <div className="rounded-md shadow border m-2 p-2">
      <p>This is List Components</p>
      <table className="rounded-md">
        <thead>
          <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white  ">
            <th className="p-2 border rounded">Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr className="even:bg-slate-50" key={product.name}>
              <td className="p-2">{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;