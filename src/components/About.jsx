import React from "react";

const About = () => {
  return (
    <div name="about"
    className=" w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div 
      className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p 
          className=" text-4xl font-bold inline border-b-4 border-gray-500"
          >About</p>
          <p className=" text-xl mt-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            tempore pariatur quas beatae dignissimos? Incidunt voluptatem fugiat
            nobis explicabo vel dignissimos commodi illum iste suscipit culpa.
            Facilis, molestiae voluptatum! Cumque, minima sit quos assumenda
            unde maiores ullam error commodi! Earum odit nam architecto incidunt
            rem tempora quas odio consectetur sed.
          </p>
          <br />
          <p className=" text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quos nobis quam alias id quas eos blanditiis, mollitia ipsum,
            exercitationem non. Nulla voluptatem voluptas amet excepturi error
            magni, temporibus, itaque sunt, deleniti maxime minima architecto in
            reprehenderit modi? Sint unde velit accusamus vitae placeat eveniet
            molestiae ratione nemo qui et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
