import Toy from './Toy'

const Puppy = (props) => {
  return (
    <>
      <h3>
        {props.puppy.name} is a {props.puppy.age} year old {props.puppy.breed}.
        <Toy key={props.puppy._id} toys={props.puppy.toys} name={props.puppy.name}/>
      </h3>
    </>
  )
}

export default Puppy