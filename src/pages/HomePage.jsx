import "../styles/HomePage.css";
import profilePic from "../assets/images/profile.JPG";
import addTextIcon from "../assets/images/addTextIcon.png";
import addImageIcon from "../assets/images/addImageIcon.png";
import sendButtonIcon from "../assets/images/sendButtonIcon.png";
import backButtonIcon from "../assets/images/backButtonIcon.png";
import { useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export const HomePage = () => {
  const [text, setText] = useState("");
  const [addTextClicked, setAddTextClicked] = useState(false);
  const [addImageClicked, setAddImageClicked] = useState(false);
  const [contentList, setContentList] = useState([
    { content: "", type: "TEXT" },
  ]);
  const [showAddContentButtons, setShowAddContentButtons] = useState(true);
  const inputText = useRef();

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.style.height = "42px";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setText(textarea.value);
  };

  const addTextButtonHandler = () => {
    setAddTextClicked((prev) => !prev);
    setShowAddContentButtons(false);
  };

  const sendButtonHandler = () => {
    setAddTextClicked(false);
    setShowAddContentButtons(true);
    console.log(inputText.current.value);
    setContentList([
      ...contentList,
      { content: inputText.current.value, type: "TEXT" },
    ]);
    setText("");
  };

  const addImageHandler = () => {
    setAddImageClicked(true);
    setAddTextClicked(false);
    setShowAddContentButtons(false);
  };

  const backButtonClickHandler = () => {
    setAddTextClicked(false);
    setShowAddContentButtons(true);
    setAddImageClicked(false);
  };

  const handleSubmittedImage = (e) => {
    setContentList([...contentList, { content: e.target.files[0] }]);
    setAddImageClicked(false);
    setShowAddContentButtons(true);
  };

  return (
    <>
      <div className="home-outermost-container">
        <ScrollToBottom className="home-scroll-to-bottom">
          <div className="profile-main-container">
            <div className="flx">
              <div>
                <img alt="profile" className="profileImage" src={profilePic} />
              </div>
              <div className="profile-name-container">
                <span>Ajay Kumar</span>
                <span className="flx dot">.</span>
                <span style={{ color: "green" }}>Follow</span>
              </div>
            </div>
          </div>
          <div className="home-outer-container-content">
            {contentList.map((item, index) => {
              if (item.type === "TEXT") {
                return (
                  <p
                    key={index}
                    type="text"
                    className="home-paragraph-container"
                    id="txtArea"
                  >
                    {item.content}
                  </p>
                );
              } else {
                return (
                  <img
                    key={index}
                    src={URL.createObjectURL(item.content)}
                    alt="content"
                    className="home-blog-content-img"
                  />
                );
              }
            })}
          </div>
        </ScrollToBottom>
      </div>

      {/* lower input */}
      <div className="home-outer-container">
        {!showAddContentButtons && (
          <img
            src={backButtonIcon}
            alt="back button"
            className="home-back-button"
            onClick={backButtonClickHandler}
          />
        )}
        {showAddContentButtons && (
          <div className="flx">
            <div>
              <img
                onClick={addTextButtonHandler}
                src={addTextIcon}
                alt="add text"
                className="add-button-img"
              />
              <img
                src={addImageIcon}
                onClick={addImageHandler}
                alt="add img"
                className="add-img-icon"
              />
            </div>
          </div>
        )}
        {addTextClicked && (
          <>
            <textarea
              type="text"
              className="home-blog-content"
              id="txtArea"
              placeholder="Tell Your Story ..."
              value={text}
              onChange={handleTextareaChange}
              ref={inputText}
            />

            <button className="home-send-button">
              <img
                src={sendButtonIcon}
                alt="send button"
                className="sendButtonIcon"
                onClick={sendButtonHandler}
              />
            </button>
          </>
        )}
        {addImageClicked && (
          <input type="file" onChange={handleSubmittedImage} />
        )}
      </div>
    </>
  );
};
