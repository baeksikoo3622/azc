import React from "react";
import { Link } from "react-router-dom";

/**
 * 함수형 컴포넌트 스니펫입니다.
 */

const Home = () => {
  return (
    <div>
      <h1>Auto Zoom Connector</h1>
      <div className="list" id="list"></div>
      <Link className="create" to="/create">
        Add +
      </Link>
      <div id="snackbar">복사완료</div>
    </div>
  );
};

export default Home;
