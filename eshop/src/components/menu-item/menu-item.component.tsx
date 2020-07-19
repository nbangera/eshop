import React from "react";
import "./menu-item.styles.scss";
import { ISection } from "../../models/section";
import { BackgroundImage } from "../common/backgrounImage.component";
import { useHistory, useRouteMatch } from "react-router-dom";

interface IProps {
  section: ISection;
}

const MenuItem: React.FC<IProps> = ({ section }) => {
  //console.log(section);
  const history = useHistory();
  const match = useRouteMatch()
  return (
    <div
      className={`${section.size ? section.size + " menu-item" : "menu-item"}`}
      onClick={() => history.push(`${match.url}${section.linkUrl}`)}
    >
      <div
        className={"background-image"}
        style={BackgroundImage(section.imageUrl)}
      ></div>
      <div className="content">
        <h1 className="title">{section.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
