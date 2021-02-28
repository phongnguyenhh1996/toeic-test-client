import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { Test } from "../../../utils/function";
import { TestItem as TestItemStyle } from '../style'

export const DEFAULT_AVATAR_IMG = 'https://res.cloudinary.com/easy-toeic/image/upload/v1614499684/static/default-test-image_g9x9ly.png'
interface TestItemProps {
  test?: Test
  isSkeletion?: boolean
  changeIsOpenDialog?: (test: any) => void;
}

export const TestItem: React.FC<TestItemProps> = ({test={},isSkeletion,changeIsOpenDialog = ()=> {}}) => {
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
    <TestItemStyle onClick={() => changeIsOpenDialog(test)}>
      <div className="bg-img" style={{backgroundImage:`url(${test.avatarSrc || DEFAULT_AVATAR_IMG})`}}></div>
      <div className="content-wrapper">
        <p className="title">{test.name}</p>
        <p className="author">{`By ${test.author}`} </p>
        <div className="info-wrapper">
          <div className="status-wrapper">
            <div className="status-label">Official</div>
            <div className="status-label done">Done</div>
          </div>
          <div className="viewer-wrapper">
            <div className="viewer-item">
              <FaEye className="viewer-icon" />
              <div className="viewer-count">{test.viewCount}</div>
            </div>
            <div className="viewer-item">
              <FaHeart className="viewer-icon heart" />
              <div className="viewer-count">{test.likes}</div>
            </div>
          </div>
        </div>
      </div>
    </TestItemStyle>
  );
};
