import React from "react";

function About() {
  return (
    <div className="max-2-[90%] lg:max-w-5xl mx-auto my-10 font-jost">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className="p-2">
          <img className="w-full h-full" src="./images/about.jpg" alt="" />
        </div>
        <div className="p-2">
          <h1 className="font-bold text-4xl mb-2"> About us </h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            consectetur illo harum voluptates inventore itaque quod soluta
            maxime! Neque cumque dignissimos animi modi eligendi quibusdam? Nam
            distinctio, mollitia quasi quis earum repellendus magni. Aspernatur
            architecto animi voluptas ipsum exercitationem laborum velit
            aliquam! Error distinctio ratione soluta facilis recusandae eaque
            qui inventore corrupti optio eveniet, corporis officiis culpa
            nesciunt praesentium porro earum, incidunt animi quo ullam fugit?
            Praesentium at consequuntur molestias nobis ipsa expedita beatae,
            quam mollitia sapiente? Eveniet consequuntur eum facilis illo cumque
            maiores, tenetur perspiciatis repellat culpa natus, sed iusto
            doloribus minus fugiat deserunt dolorum expedita ipsum earum rem?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
