import React, { Component } from "react";

const Food = ({ name, image }) => {
  return (
    <div>
      <div>나는 {name}를 좋아해</div>
      <img src={image}></img>
    </div>
  );
};

const hyFood = [
  {
    name: "떡볶이",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "로제파스타",
    image: require("./images/pasta.jpeg"),
  },
];
//require("./images/pasta.jpeg")
export default class App extends Component {
  render() {
    return (
      <div>
        {hyFood.map((like) => {
          return <Food name={like.name} image={like.image}></Food>;
        })}
      </div>
    );
  }
}
