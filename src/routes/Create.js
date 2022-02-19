// About.js
import React from "react";
import { Link } from "react-router-dom";

/**
 * 함수형 컴포넌트 스니펫입니다.
 */

const Blank = ({ px }) => {
  console.log(px);
  return <span style={{ display: "inline-block", width: px }} />;
};
Blank.defaultProps = {
  px: 5,
};

const Create = () => {
  const [name, setName] = React.useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h1>Auto Zoom Connector</h1>
      <p id="message">Add your zoom connection on Auto Zoom Connector</p>
      <p>
        <label htmlFor="add_name">저장할 이름</label>
        <Blank />
        <input
          value={name}
          type="text"
          id="add_name"
          className="create_input"
          placeholder="저장할 이름을 입력하세요"
          onChange={changeName}
        />
      </p>
      <p>
        <label htmlFor="create_id_1">회의 ID</label>
        <Blank />
        <input
          type="number"
          id="create_id_1"
          className="create_id"
          placeholder="회의 ID"
        />
        <span>-</span>
        <input
          type="number"
          id="create_id_2"
          className="create_id"
          placeholder="회의 ID"
        />
        <span>-</span>
        <input
          type="number"
          id="create_id_3"
          className="create_id"
          placeholder="회의 ID"
        />
      </p>
      <p>
        <label>회의 PASSWORD</label>
        <Blank />
        <input
          type="text"
          id="create_pw"
          className="create_input"
          placeholder="회의 비밀번호를 입력하세요"
        />
      </p>
      <button className="create_complate">COMPLATE</button>
      <Blank px={15} />
      <Link to="/" className="create_back">
        BACK
      </Link>
    </div>
  );
};

export default Create;
