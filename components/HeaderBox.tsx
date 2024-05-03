import React from "react";

interface HeaderBoxProps {
  type?: "Title" | "Greeting";
  title: string;
  subtext: string;
}

const HeaderBox = ({ type = "Title", title, subtext }: HeaderBoxProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtext}</p>
    </div>
  );
};

export default HeaderBox;
