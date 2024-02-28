import React from "react";
import collectionData from "../../mock_data/collectionplan_data.json";
import MainSection from "./MainSection";

export default function MyCollection() {
  return (
    <>
        <div className="mycollection-wrapper">
          <div className="main-wrapper">
            {/* heading */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-26 font-bold   text-dark-gray dark:text-white">
                  <span>My Collection</span>
                </h1>
              </div>
            </div>
            <MainSection
              className="mb-10"
              collectionData={collectionData.data}
            />
          </div>
        </div>
    </>
  );
}