interface GreetingProps {
    name : string;
}

const Greeting = ({name} : GreetingProps) => {
  return (
    <div>
        <h1>Hello , {name}</h1>
    </div>
  )
}

export default Greeting