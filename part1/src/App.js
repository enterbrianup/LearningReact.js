
import { useState } from "react";
import { sculpture1 } from './data.js';
import './App.css';
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// //  above this everything came with packages

// const App =()=>{
//   console.log('hello world component')
//   return(
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App =()=>{
//   const now = new Date()
//   const a=10;
//   const b=20;
//   console.log(now, a+b)
//   return(
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>{a} plus {b} is {a+b}</p>
//     </div>
//   )
// }
// ************ component

//  function Profile (){
//   return (
//     <img src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson" />
//   );
// }

// export default function Gallery(){
//   return (
//     <div>
//       <Profile/>
//       <br></br>
//       <Profile />
//       <br></br>
//       <Profile />
//     </div>
//   )
// }

// ************* making another component

// const App =()=>{

//   return(
//     <>
//     <div>
//     <h1>My photo Gallery</h1>
//       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUIcQbL5xBwSxdPI4PoF0jeCDThNva4BreEkubgtQ&s'
//       alt=" Natur is good"
//       className="Gallery"></img>
//         <br></br>
//       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUIcQbL5xBwSxdPI4PoF0jeCDThNva4BreEkubgtQ&s'
//       alt=" Natur is good"
//       className="Gallery"></img>
//         <br></br>
//       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUIcQbL5xBwSxdPI4PoF0jeCDThNva4BreEkubgtQ&s'
//           alt=" Natur is good"
//           className="Gallery"></img>
//         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUIcQbL5xBwSxdPI4PoF0jeCDThNva4BreEkubgtQ&s'
//           alt=" Natur is good"
//           className="Gallery"></img>
//     </div >
//     </>
//   )

// }
// example 
// javascript object with curly Braces

// const person = {

//   name:"Anup Kumar",
//   theme: {
//     backgroundColor: 'yellow',
//     Color: 'pink'
//   }
// };

// export default function Todolist(){
//   return(
//     <div style={person.theme}>
//       <h1>{person.name}</h1>
//       <img 
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara" />
//         <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//     </div>

//   )
// }
// {props in react}
// const Hello =(props) =>{
//   return(<div>
//     <p>Hello world I am, {props.name} completed my btech in cse.</p>
//   </div>)
// }

// const App =()=>{
//   return(
//     <div>
//       <h1>Greeting </h1>
//       <Hello name='Anup'/>
//     </div>
//   )
// }

// multiple props


// const Hello = (props) => {
// console.log(props)
// return(

//   <p>Hello world I am {props.name} Kumar and I am {props.age} years old</p>

// )
// }

// const App = () =>{
//   const name ='Anup'
//   const age=10;
//   return (
//  <>
//  <Hello name= {'enterbrianup'} age ={23}/>
//       <Hello name={name} age={age} />
//       <Footer />
//  </>
//   )
// }


// application that prints ages and name of four friend

// const App = ()=>{
//   const friends =[
//     {name: 'Anup', age: 21},
//     {name: 'yobro', age:22},
//     { name: 'Savet', age: 22 }
//   ]
//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//       <p>{friends[2].name} {friends[2].age}</p>
//     </div>
//   )
// }

// const App =()=>{
//   const friends =['Anup',' ', 'Yup']
//   console.log(friends)
//   return(
//     <div>
//       <p>{friends}</p>
//     </div>
//   )
// }



// const Hello = ({ name, age })=>{

//   // const name = props.name;
//   // // destructured the code
//   // const age = props.age;

//   // destructuring a step ahead 
//   // const {name,age}=props

//   // now we can take it a step ahead.
//   const bornYear = ()=>
//    new Date().getFullYear() - age
//   //  it automatically returning the bornyear
//   console.log(bornYear)


//   return( 
//     <div>
//       <p>
//         hello {name}, you are {age} years old
//         </p>
//         <p>you are probably born in {bornYear()}</p>
//     </div>
//   )
// }
//  const App = () =>{
//   const name= ' Anup ';
//   const age= 21;
//   console.log(name)
//   console.log(age)

//   return(
//     <div>
//       <h1>Greeting</h1>
//       <Hello name ='yes ' {21 +1} />
//       <Hello name={name} age={age} />
//       <Hello name='yummy' age={21 + 1} />
//     </div>
//   )
//  }



// Making an component that give you knowledge about vehicle.

// const Vehicle= ({name_Ofcar, Car_color, How_old})=>{

//   const How_old_car = ()=>{
//     return new Date().getFullYear()- How_old
//   };
//     console.log(How_old_car())

// return (
//   <div>
//     <p> Car name is {name_Ofcar}. old {How_old}</p>
//     <p> Car color is { Car_color} And it has been running for last{How_old_car()}</p>
//   </div>
// )
// }

// const App =(props) =>{
//   const {counter}=props;
//   const name_Ofcar='innova'
//   const Car_color= ' Blue'
//   const How_old= 23
//   console.log(name_Ofcar)

// return (
//   <div>
//     <Vehicle name_Ofcar={name_Ofcar} Car_color={Car_color} How_old={How_old} />
//     <Vehicle How_old = {87} name_Ofcar="toyota" Car_color="Red" />
//     <Vehicle How_old={7} name_Ofcar="toyota" Car_color="green" />
//     this is rendering f {counter}
//   </div>
// )
// }


// page re - rendering 

// const App=(props)=>{
//   const {counter}=props;
//   return <div>
//     {counter}
//   </div>
// }

// stateful component

// const App =() =>{

//  const [counter, setCounter]=useState(0);
// setTimeout(
//   ()=>setCounter(counter +1),1000
// )
// console.log('rendering...', counter)
// return(
//   <div>{counter}</div>

// )

// }
// event handler
// const App =()=>{
//   const [counter, setCounter] = useState(0);
//   // setTimeout(
//   //   () => setCounter(counter + 1), 10000
//   // )
//   // console.log('rendering...', counter)
//   return (
//     <>
//       <div>{counter}</div>
//     <button onClick={() => setCounter(counter +1)}>
//       Click Me</button>
//       <br></br>
//     <button onClick={() =>(setCounter(0))}> Zero</button>
//     <br></br>
//       <button onClick={() => setCounter(counter - 1)}>
//         Decrease by 1</button>
//         <br></br>
//         <button> Hello</button>
//     </>
//   )
// }

// state component practice

// const App =()=>{

//   const [index,setindex]= useState(0);
//   const [showMore, setShowMore] =useState(false)

//   let hasPrev = index >0;
//   let hasNext = index <sculpture1.length -1;


// const handlePrevClick =() =>{
//     if(hasPrev){
//       setindex(index-1)
//     }
//   }

//   const handleNextClick =() => {
//     if(hasNext)
//     {setindex(index+1);}
//     console.log('clicked')
//   }
//   const handleMoreClick =() =>{
//     setShowMore(!showMore);
//     console.log('clicked')
//   }

// const sculpture= sculpture1[index];

// return (
// <>   <button onClick={handleNextClick}>
//     Click Me

//    </button>
//    <button onClick={handlePrevClick}>
//     Previous
//    </button>
//    <h2> 
//     <i>{sculpture.name}</i>
//     <br></br>
//     By {sculpture.artist}
//     </h2>
//     <h3>({ index + 1} of {sculpture1.length})</h3>
//     <button onClick={handleMoreClick}>
//       {showMore ? 'Hide' : 'show'} details
//     </button>
//     {showMore && <p>{sculpture.description}</p>}
//     <br></br>
//     <br></br> <img 
//     src={sculpture.url}
//     alt={sculpture.alt}
//     />


//   </>

// )

// }


// Passing state - to child components


// const Panel =({title,children})=>{

// const [isActive, setisActive] = useState(false);
// return ( 
//   <section className = 'Panel'>
//     <h3> {title}
//     </h3>
//     {isActive ? (
//       <p>{children}</p>
//     ) :(
//       <button onClick={()=>setisActive(true)}> Show</button>
//     )}
//   </section>
// )
// }
// const App =()=>{
//   console.log(App)
//   return(
//     <>
//       <h2>First Header</h2>
//       <Panel title="About">
//         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel title="Etymology">
//         The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.
//       </Panel>

//       </>
//   );
// }


// const App1 = (props)=>{
//   const bornYear =()=>{
//   const yearNow= new Date().getFullYear()
//   return yearNow - props.age;
//   }

//   return (
//     <>
//       <p>Hello {props.name} age = {props.age}</p>
//       <p> so you were probably born in {bornYear()}</p>
//     </>
//   )
// }


// const App = () => {
//   const name = 'Anup';
//   const age = 34

//   return (
//     <>
//      {/* <App1 name='anup' age={22}/>  */}
//     <App1 />
//     </>
//   )
// }


// state ful components 

// const App = ()=>{

//   const [counter, setCounter] = useState(0)
//   // setTimeout ( 
//   //   () =>
//   //   setCounter(counter +1),1000
//   // )
//   const handleClick =()=>{
//     console.log("clicked")
//   }
// console.log(counter)
//   console.log('rendring...')
//   return (
//     <div>
//     {/* <button onClick = {handleClick}>
//     Show
//     </button> */}
//     <button onClick ={ ()=> setCounter(counter +1)}>
//       Change
//     </button>
//       <p>{counter}</p>
//       <button onClick ={ ()=> setCounter(0)}>
//         Back to zero
//       </button>
//       <p>{counter}</p>
//     <br></br>
//     <br>
//       </br>
//       <button onClick={() => setCounter(counter -1)}>
//         Back one by one
//       </button>
//       <p>{counter}</p>
//   </div>
//   )
// }


// lets make a stateful app that shows list of sculpture from another file

const App = () => {
  const [index, setindex] = useState(0)
  const [showMore, setshowMore] = useState(false)
  // const handleClick =()=>{
  //   setindex(index +1);
  // }
  const handleClick = () => {
    if (index < sculpture1.length - 1) {
      setindex(index + 1);
    }
    else {
      setindex(0);
    }
  }
  const handleMoreClick = () => {
    setshowMore(!showMore);
  }
  // const handlePrevClick = () =>{ setindex(index - 1);}
  const handlePrevClick = () => { 
    if(index > 0){
      setindex(index - 1) }

      else{
        setindex(sculpture1.length-1)
      }
    }
  let sculpture = sculpture1[index];
  return (
    <div className="box">
      <button onClick={handleClick}> Next </button>
      <h1>({index + 1} of {sculpture1.length})</h1>
      <h2>{sculpture.name}</h2>
      By
      {sculpture.artist}
      <br></br>
      <br></br>
      <button onClick={handleMoreClick}> {showMore ? 'Hide' : 'Show'}Show Details</button>
      <br></br>
      {showMore && <p>{sculpture.description}</p>}
      <br></br>
      <img src={sculpture.url}
        alt={sculpture.alt} />
      <br></br>
      <br></br>
      <button onClick={handlePrevClick}
      >Go to previous Sculpture</button>
    </div>


  )

}

export default App;

