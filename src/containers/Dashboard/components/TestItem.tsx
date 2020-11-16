import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { TestItem as TestItemStyle } from '../style'

export const TestItem: React.FC = () => {
  return (
    <TestItemStyle>
      <div className="bg-img"></div>
      <div className="content-wrapper">
        <p className="title">ETS TOEIC 2020 Test 1</p>
        <p className="author">By Admin</p>
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
