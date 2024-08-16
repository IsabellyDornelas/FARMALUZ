import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react'

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent

  if(usuario.token !== "") {
    navbarComponent = (
   <div className='w-full bg-gradient-to-r from-gray-800  to-slate-500  text-white flex justify-center py-4'>
    
      <div className='w-full bg-red-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>Farmacoles - Você em primeiro lugar</div>
          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Início</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/Categorias'className='hover:underline'>Categorias</Link>
            <Link to='/cadastrocategoria'className='hover:underline'>Cadastrar categoria de produto</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
      </div>
  
  )
}
return (
<>
  {navbarComponent}
</>
)
}

export default Navbar