import React from 'react';

function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className='container grid grid-cols-2 text-pink-700'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem-vindo!</h2>
            <p className='text-xl'>Compre conosco e consiga descontos magníficos</p>
            <div className="flex justify-around gap-4">
              <button className='rounded bg-pink-700 text-white py-2 px-4'>Ver produtos</button>
            </div>
          </div>
          
          {/* Imagem temática de farmácia */}
          <div className="flex justify-center">
            <img 
              src="https://img.odcdn.com.br/wp-content/uploads/2023/08/Destaque-testes-de-farmacia.jpg" // Substitua por uma URL válida
              alt="Farmácia"
              className='w-2/3' 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;