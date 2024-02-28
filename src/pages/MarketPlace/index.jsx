import React from "react";
import products from "../../mock_data/marketplace_data.json";
import CreateNft from "./CreateNft";
import MainSection from "./MainSection";

export default function MarketPlace() {
  const marketProduct = products.data;
  return (
    <>
        <CreateNft />
        <MainSection marketPlaceProduct={marketProduct} className="mb-10" />
    </>
  );
}
