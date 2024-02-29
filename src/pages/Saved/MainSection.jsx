import React from "react";
import ProductCardStyleOne from "../../components/cards/ProductCardStyleOne";
import DataIteration from "../../components/helpers/DataIteration";

export default function MainSection({ products }) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-6">
      <DataIteration
        datas={products}
        startLength={0}
        endLength={products.length}
      >
        {({ datas }) => (
          <div key={datas.id + Math.random()} className="item">
            <ProductCardStyleOne datas={datas} />
          </div>
        )}
      </DataIteration>
    </div>
  );
}
