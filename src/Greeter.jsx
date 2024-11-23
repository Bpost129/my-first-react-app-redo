function Greeter(props) {
  const things = ['Water', 'Cattle', 'Gold'];
  
  return (
    <>
      <h1>Hello, {props.friend ? props.friend.name : "friend"}</h1>
      <h2>I believe in you.</h2>
      <p>Today is {new Date().getDay() === 1 ? "Monday" : "not Monday"}</p>
      <h3>Give us your: </h3>
      <ol>
        {things.map(thing => <li key={thing}>{thing}</li>)}
      </ol>

    </>
  )
}

export default Greeter