const Toy = (props) => {
  return (
    <>
      {props.toys.map(toy => 
        <p key={toy}>{props.name} loves playing with a {toy} 🚨</p>
      )}
    </>
  )
}

export default Toy