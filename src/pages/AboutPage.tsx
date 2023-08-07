import React from "react";

export function AboutPage() {
  return (
    <>
      <h1 style={{ fontWeight: "bold", color: "darkgreen", marginLeft: "8px" }}
      >Обо мне:</h1>
      <span>
        <span style={{ marginLeft: "18px" }}
        >Это страница:</span>
        <a href="https://gumirus.github.io/demo_rsschool-cv/"
          style={{ fontWeight: "bold", color: "darkblue" }}
        > моего сайта</a>
      </span>
    </>
  );
}
