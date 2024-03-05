import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="text-3xl py-2 mt-5">Services</h3>
        <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis eum, labore <span className="text-teal-500">voluptas</span> harum omnis odio assumenda, eos deserunt optio voluptatibus cumque dolorum consectetur earum numquam natus neque. <span className="text-teal-500">Laudantium</span>, mollitia.</p>
      </div>

      <div className="mt-2 lg:flex gap-10 ">
        <div className="text-center shadow-lg flex flex-col items-center p-10 my-10 rounded-xl">
          <img src="public\code.png" alt="" className="w-100 h-100" />
          <h3 className="text-lg font-bold py-2">React Web Development</h3>
          <ul>
            <li><p>Expert in crafting dynamic and responsive web applications using React.js.</p></li>
           
          </ul>
        </div>
        <div className="text-center shadow-lg flex flex-col items-center p-10 my-10 rounded-xl">
          <img src="public\design.png" alt="" className="w-100 h-100" />
          <h3 className="text-lg font-bold py-2">Responsive Design</h3>
          <ul>
            <li><p>Ensuring seamless user experiences across devices and screen sizes.</p></li>
            
          </ul>
        </div>
        <div className="text-center shadow-lg flex flex-col items-center p-10 my-10 rounded-xl">
          <img src="public\consulting.png" alt="" className="w-100 h-100" />
          <h3 className="text-lg font-bold py-2">State Management with Redux</h3>
          <ul>
            <li><p>Proficient implementation of Redux for efficient state management.</p></li>
          </ul>
        </div>
        
      </div>


    </>
  );
};

export default Hero;
