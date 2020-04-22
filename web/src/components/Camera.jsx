import React, { useState } from "react";
import Webcam from "react-webcam";
import { Button, Input } from "antd";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const Camera = () => {
  const webcamRef = React.useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageUrl(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <div>
        <Webcam
          audio={false}
          height={320}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          videoConstraints={videoConstraints}
        />
      </div>
      <Button onClick={capture}>Capture photo</Button>
      <p>
        <label>ImageURL:</label>
        <Input value={imageUrl} readOnly />
        <br />
        {imageUrl && <img src={imageUrl} alt="screeshot" />}
      </p>
    </>
  );
};
