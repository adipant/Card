import React from "react";

const data = [
  {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww', name:"Amazon Product", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor corrupti iste", stockcheck: true},
  {image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D', name: "Coco Noir", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor corrupti iste", stockcheck: false},
  {image: 'https://images.unsplash.com/photo-1716736180285-1591a65140c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D', name: "Moto Bike", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor corrupti iste", stockcheck: false},
  // {image: 'https://images.unsplash.com/photo-1715706107718-4a0cc4f0335c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D', name: "Cruise Ship", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor corrupti iste", stockcheck: true}
];


function Card() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((elem, index)=>(
      <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img className="w-full h-full object-cover" src={elem.image} alt="" />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">{elem.name}</h2>
          <p className="mt-4 text-xs">{elem.desc}</p>
          <button className={`px-4 py-1 ${elem.stockcheck ? "bg-blue-500" : "bg-red-500"} rounded text-xs text-zinc-100 mt-3`}>
            {elem.stockcheck ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      </div>
    ))}

    </div>

    
  );
}

export default Card;
