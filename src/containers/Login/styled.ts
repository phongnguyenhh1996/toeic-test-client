import styled from "styled-components"
import loginSideImg from '../../assets/images/login-side-img.jpg'
import { theme } from "../../utils/theme"
import TextField from '@material-ui/core/TextField';
export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Inner = styled.div`
  width: 1000px;
  height: 600px;
  background: #FFFFFF;
  box-shadow: 0px 30px 71px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`

export const LeftContent = styled.div`
  background-image: url(${loginSideImg});
  background-size: cover;
  height: 100%;
  display: flex;
  align-items:flex-end;
  padding:0 0 65px 65px;
  position: relative;
  &::after{
    position: absolute;
    content:"";
    height:100%;
    width:100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const LeftInner = styled.div`
  position: relative;
  z-index:10;
`;

export const Heading = styled.h1`
  font-weight: 900;
  font-size: 25px;
  color: ${props => props.color};
  strong {
    font-size: 60px;
    line-height: 90px;
  }
`

export const SubHeading = styled.h2`
  font-size: 18px;
  line-height: 35px;
  color: ${props => props.color};
`

export const RightContent = styled.div`
  display: flex;
  height: 100%;
  padding: 60px;
  flex-direction: column;
  position: relative;
`

export const RegisterSuggest = styled.div`
  font-size: 16px;
  color: ${theme.textDarkPrimary};
  line-height: 19px;
  a {
    text-decoration: none;
    color: ${theme.textPrimary2};
  }
`;

export const ContainerForm = styled.div`
    margin-top:35px;
    .btnLogin{
      float:right;
      padding:5px 35px;
    }
`;
export const TextFieldLogin = styled(TextField)`
    margin-bottom:20px;
    display: block;
    .MuiFormLabel-root.Mui-focused{
      color:${theme.backgroundSecondary};
    }
    .MuiInputLabel-formControl{
      top: -16px;
    }
    .MuiInputBase-root{
      display: block;
    }
    .MuiInput-underline::after{
        border-bottom: 2px solid ${theme.backgroundSecondary};
      }
      .MuiInput-underline::before{
        border-bottom: 2px solid ${theme.backgroundPaginationBtn};
      }
     
.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${theme.backgroundSecondary};
}
`;
export const SocialsBtnGround = styled.div`
  margin-top:20px;

  .btnLoginIcon{
    margin-right:5px;
    padding:3px 20px;
    
  }
`;
export const RightContentBottom = styled.div`
 
    position:absolute;
    bottom:60px;
`;