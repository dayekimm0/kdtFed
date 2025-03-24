import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/");
  };

  return (
    <div>
      <Header
        title="새 일기 쓰기"
        leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
