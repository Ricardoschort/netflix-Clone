import '../estilos/accounts.css'

function Accounts({ name, image }) {
  return (

    <>
      <div className="accountContainer">
        <img src={`${image}`} alt="imagen" />
        <p className='textAccount'>{name}</p>
      </div>
     
    </>

  )
}

export default Accounts