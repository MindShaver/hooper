import React from "react";
import "./potteryContainer.css";
import { InterestedTag } from "../InterestedTag/InterestedTag";
import { ReusableGrid } from "../ReusableGrid/ReusableGrid";
import { PotteryDirectory } from "../SiteData/DirectoryContent/PotteryDirectory";

export const PotteryContainer = () => {
  return (
    <div className="pottery-container">
      <div className="row">
        <ReusableGrid items={PotteryDirectory} />
      </div>
      <div className="pottery-row">
        <div className="pottery-col">
          <InterestedTag />
        </div>
      </div>
    </div>
  );
};
