import {useState} from 'react'
const Home = () => {
    const[name, setName] = useState('Amarachi')
    const[age, setAge] = useState(28)
    const title ="Welcome to the GirlsInTech";
    const handleClick = () => {
        alert('hello ladies');
        setName('Olivia');
        setAge(25)
    }
    // const myHome = "Homepage";
    return ( 
        <div className="home">
            <h2><a href="/home">{title}</a> </h2>
            <p>{name} is {age} years</p>
            <button onClick={handleClick}>Click me</button>
            {/* <p>{myHome}</p> */}
        </div>
     );
}
 
export default Home;