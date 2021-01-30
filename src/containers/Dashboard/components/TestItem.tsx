import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { TestItem as TestItemStyle } from '../style'


interface TestItemProps {
  title?: string,
  author?: string,
  isSkeletion?: boolean
}

export const TestItem: React.FC<TestItemProps> = (props:TestItemProps) => {
  const { title, author, isSkeletion } = props;
  if (isSkeletion) {
    return (
      <TestItemStyle>
        <Skeleton animation="wave" variant="rect" className="bg-img" />
        <div className="content-wrapper">
          <Skeleton animation="wave" width="60%" height={13} variant="rect" className="title"/>
          <Skeleton animation="wave" width="40%" height={10} variant="rect" className="author"/>
          <div className="info-wrapper">
              <Skeleton animation="wave" variant="rect" width="30%" className="viewer-wrapper"/>
          </div>
        </div>
      </TestItemStyle>
    )
  }
  
  return (
    <TestItemStyle>
      <div className="bg-img"></div>
      <div className="content-wrapper">
        <p className="title">{title}</p>
        <p className="author">{`By ${author}`} </p>
        <div className="info-wrapper">
          <div className="status-wrapper">
            <div className="status-label">Official</div>
            <div className="status-label done">Done</div>
          </div>
          <div className="viewer-wrapper">
            <div className="viewer-item">
              <FaEye className="viewer-icon" />
              <div className="viewer-count">50</div>
            </div>
            <div className="viewer-item">
              <FaHeart className="viewer-icon heart" />
              <div className="viewer-count">50</div>
            </div>
          </div>
        </div>
      </div>
    </TestItemStyle>
  );
};
