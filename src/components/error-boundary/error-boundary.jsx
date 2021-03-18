import React from "react";
import styled from "styled-components";



class ErrorBoundary extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { hasError: false };
  }

  static getDerivedStateFromError( error ) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    console.log( error );
    return { hasError: true };
  }

  componentDidCatch( error, errorInfo ) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.log( error, errorInfo );
  }

  render() {
    if ( this.state.hasError ) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <ErrorContainer>
        <h3>Wrong...</h3>
        <img src="https://i.pinimg.com/originals/6b/9e/56/6b9e568c5bac49ddf0205d682e3078a3.png"/>
      </ErrorContainer>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children; 
  }
}

const ErrorContainer = styled.div`
  width:100vw;
  height:100vh;
  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  img{
    width:400px;
    height:400px;
  }
`;
export default ErrorBoundary;