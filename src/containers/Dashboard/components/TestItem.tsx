import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { TestItem as TestItemStyle } from '../style'


interface TestItemProps {
  title?:string,
  author?:string,
}

export const TestItem: React.FC<TestItemProps> = (props:TestItemProps) => {
  const {title,author} = props;
  return (
    <TestItemStyle>
      <div className="bg-img"></div>
      <div className="content-wrapper">
        <p className="title">{title}</p>
        <p className="author">{`By Admin ${author}`} </p>
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
