import React, { FC } from "react";

type Props = {
  videoUrl: string; // This should be the Google Drive file ID
  title: string; // Title can be used for accessibility or display purposes
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
  return (
    <div
      style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}
    >
      {/* Construct the Google Drive embed URL */}
      <iframe
        src={`https://drive.google.com/file/d/${videoUrl}/preview`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        allowFullScreen={true}
        title={title} // Added title for better accessibility
      ></iframe>
    </div>
  );
};

export default CoursePlayer;
