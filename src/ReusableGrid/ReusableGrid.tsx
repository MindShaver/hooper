import React from "react";
import { Link } from "react-router-dom";
import "./reusableGrid.css";

export interface IGridItem {
  imgPath: string;
  altText: string;
  title: string;
  subTitle?: string;
  linkTo?: string;
}

interface IGridProps {
  items: IGridItem[];
}

export const ReusableGrid: React.FC<IGridProps> = ({ items }) => {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <ul>
          {items.map((item: IGridItem) => {
            if (item.linkTo) {
              return (
                <li>
                  <Link className="link" to={item.linkTo}>
                    <div className="grid-item">
                      <img src={item.imgPath} alt={item.altText} />
                      <p>{item.title}</p>
                      {item.subTitle && <p>{item.subTitle}</p>}
                      {!item.subTitle && <p>&nbsp;</p>}
                    </div>
                  </Link>
                </li>
              );
            } else {
              return (
                <li>
                  <div className="grid-item">
                    <img src={item.imgPath} alt={item.altText} />
                    <p>
                      <em>{item.title}</em>
                    </p>
                    {item.subTitle && <p>{item.subTitle}</p>}
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
