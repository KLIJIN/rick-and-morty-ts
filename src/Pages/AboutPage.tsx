import React from "react";

const About: React.FC = () => {
  let style = {
    display: "block",
    width: "100%",
    height: "1px",
    backgroundColor: "#476a2e",
    margin: "20px 1px"
  };

  return (
    <section className="section about-section">
      <h1 className="section">about</h1>
      <span style={style}></span>
      <p className="section">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
        delectus. Asperiores repudiandae quod architecto ea sunt voluptatem
        doloribus enim eaque, exercitationem voluptatum facilis iusto iste,
        accusantium eum officiis dignissimos tempora id suscipit ab esse
        quibusdam fugit, aperiam natus accusamus. Blanditiis temporibus eaque
        repellat sapiente, provident error! Placeat doloribus quia beatae.
      </p>
      <span style={style}></span>
    </section>
  );
};

export default About;
