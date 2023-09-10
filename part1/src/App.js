
import { useState } from "react";
import { sculpture1 } from './data.js';
import {forms} from './forms.js';
import {foods, filterItems} from './datafood.js';
import './App.css';
// import React from "react";
import Main from "./components/main.js"
import Navbar from "./components/navbar.js"


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

// const App = () => {
//   const [index, setindex] = useState(0)
//   const [showMore, setshowMore] = useState(false)
//   // const handleClick =()=>{
//   //   setindex(index +1);
//   // }
//   const handleClick = () => {
//     if (index < sculpture1.length - 1) {
//       setindex(index + 1);
//     }
//     else {
//       setindex(0);
//     }
//   }
//   const handleMoreClick = () => {
//     setshowMore(!showMore);
//   }
//   // const handlePrevClick = () =>{ setindex(index - 1);}
//   const handlePrevClick = () => { 
//     if(index > 0){
//       setindex(index - 1) }

//       else{
//         setindex(sculpture1.length-1)
//       }
//     }
//   let sculpture = sculpture1[index];
//   return (
//     <div className="box">
//       <button onClick={handleClick}> Next </button>
//       <h1>({index + 1} of {sculpture1.length})</h1>
//       <h2>{sculpture.name}</h2>
//       By
//       {sculpture.artist}
//       <br></br>
//       <br></br>
//       <button onClick={handleMoreClick}> {showMore ? 'Hide' : 'Show'}Show Details</button>
//       <br></br>
//       {showMore && <p>{sculpture.description}</p>}
//       <br></br>
//       <img src={sculpture.url}
//         alt={sculpture.alt} />
//       <br></br>
//       <br></br>
//       <button onClick={handlePrevClick}
//       >Go to previous Sculpture</button>
//     </div>


//   )

// }


//  function App() {
//   let firstName = '';
//   let lastName = '';

//   function handleFirstNameChange(e) {
//     firstName = e.target.value;
//   }

//   function handleLastNameChange(e) {
//     lastName = e.target.value;
//   }

//   function handleReset() {
//     firstName = '';
//     lastName = '';
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }


// forms in react js welcome form interactive

// const App = ()=>{
//   const [firstName, setfirstName]= useState('');
//   const [lastName, setlastName]= useState('');
//   const [isSent, setisSent]=useState('false');
//   const [message, setmessage]=useState('');


//   const handleFirstNameChange =(e)=>{
//     setfirstName(e.target.value);
//   }
//   const handlelastNameChange = (e) => {
//     setlastName(e.target.value);
//   }
//   const handleReset = ()=>{
//     setfirstName('')
//     setlastName('')
//     setmessage('')
//   }
//   if(isSent){
//     // return <h1>Thank You</h1>
//   }

//  return(
//   <div>
//      <form onSubmit={e => {
//        e.preventDefault();
//       alert(`sending: "${message}"`);
//       setisSent(true);}}>
//        <input placeholder='Enter your first name'
//         type="text"
//         value={firstName}
//         onChange={handleFirstNameChange}
//         />     <input placeholder='Enter your last name'
//         type="text" 
//         value={lastName}
//         onChange={handlelastNameChange}
//        />

//        <h1>Hi, {firstName} {lastName}</h1>
//        {/* <button onClick={handleReset}>Reset</button> */}
//       <br></br>
//       <textarea 
//       placeholder="Description about this form"
//       value ={message} 
//          onChange={e => setmessage(e.target.value)}/>
//          <br />
//        <button onClick={handleReset}>Reset</button> 
//       <button type="submit">Submit message</button>
      
//     </form>
//   </div>
// )
//  }
 
  //  message box
//  const App = () =>{
//   const [isSent, setisSent]=useState(false);
//   const [message, setmessage]=useState('');
//   if(isSent){
//     return<h1>Thank You</h1>
//   }
  

//   return(
//     <div>
//       <form onSubmit={e => {e.preventDefault();
//       alert(`sending: "${message}"`);
//       setisSent(true);}}>
//         <textarea
//          placeholder="Message"
//          value={message}
//          onChange={e => setmessage(e.target.value)}/>
//          <br />
//          <button type ="submit">Send</button>
//       </form>
//     </div>
//   )
//  }


// 

// const App = ()=>{
  
//   const handleClick = ()=>{
//     console.log('clicked the button');
//     const name=prompt('What is your name?')
//     alert(`Hello, ${name}!`);
   
//   }

// return (

//   <button onClick={handleClick}>Greet</button>
 
// );
// }

//  Under     Passing state - to child components
// Sharing state between components

// const Panel =({title, children, isActive, onShow})=>{
  
//   return(
//    <section className="Panel">
//    <h3>{title}</h3>
//    {isActive ? (
//     <p>{children}</p>
//    ) : (
//     <button onClick={onShow}>Show</button>
//    )}
//    </section>
//   );
// }
//   const App =()=>{
//     const [activeIndex, setActiveIndex] = useState(0);
//   return (
//   <>
//   <h2> 
//       Almaty, Kazakhstan
//   </h2>
//   <Panel title="About" isActive={activeIndex === 0}
//   onShow={()=>setActiveIndex(0)}>
//       With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//   </Panel>
//       <Panel title="Ethymology" isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}>
//       The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
  
//   </Panel>
//   </>)
// }


//   Challenges Synced input

// lifting state up
// Remove state from the child components.
// Pass hardcoded data from the common parent.
// Add state to the common parent and pass it down together with the event handlers.

// const SyncedInput = ({ label, value, onChange })=>{ 

//   return (
//     <>
    
//     <label>
//       {label}
//       {'  '}
//         <input 
//         value={value} 
//         onChange={onChange}
//       />
//       </label>
//       </>
//   );



// }
// const App = ()=>{

//   const [Text, setText] =useState('');
  
//   const handleChange =(e)=>{
//     setText(e.target.value)
//   }
//   return (
//     <div>

//      <h1>lifting the state up</h1>
//        <SyncedInput 
//        label="First input"
//          value={Text}
//          onChange={handleChange}
//        />

//       <SyncedInput
//         label="second input"
//         value={Text}
//         onChange={handleChange}
//          />
//     </div>
//   );
     
// }

// filtering list

// const List= ({items})=>{
  
//   return (
//   <table>
//     <tbody>
//       {items.map(food =>(
//         <tr key ={food.id}>
//           <td>{food.name}</td>
//           <td>{food.description}</td>

//         </tr>
// ))}
//     </tbody>
//   </table>
// );
  
// }

// // child
// const SearchBar =({query,onChange})=>{


 
//  return (
//   <>
//   <label>
//     Search:{' '}
//     <input 
//     value={query}
//      onChange={onChange} 
//        />
//   </label>
//   </>
//  )
 
 
// }

// // parent 
// const App =()=>{
//   const [query, setquery] = useState('');
//   const results = filterItems(foods, query);
//   const handleChange = (e) => {
//     setquery(e.target.value);
//   }
//   return(
//     <div>
//       <SearchBar 
//       query={query}
//       onChange={handleChange}/>
//       <hr />
//       <List items={results}/>
//     </div>
//   );
// }


// export default App;



// new project yeee react basic page

// const Footer =()=>{

//   return (
//     <>
//     <small className="footer">All rights are reserved to <a href="https://www.github.com/enterbrianup" target="_blank">anup</a></small>
//     </>
//   )
// }
// const Header = ()=>{

//   return(
//     <>
//     <nav className="nav">
//     <img src="./logo192.png" />
    
//     <ul className="nav_list">
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//     </nav>

//     </>
//   )
// }

// const Page =()=>{

//   return( 
//     <>
//     <div className="main_content">
//     <h1>MY React Page</h1>
//     <ol className="ordered_list" >
//       <li>I like react</li>
//       <li>I like react</li>
//       <li>I like react</li>
//       <li>I like react</li>
//     </ol>
//       </div>
//     </>
//   )
// }
// const App = ()=>{

//   return(<>
//     <Header />
//   <Page />
//   <Footer />
//   </>
//   )
// }

// export default App;



//  ***********************************************88New project practice
// const App =()=>{

//   return( 
//     <>
//     <Navbar />
    
  

//     <Main />
//     </>
//   )
// }

// export default App;

// Business id card 

// import Image from "./components_business_card/Image.js"
// import About from "./components_business_card/About.js"
// import Interest from "./components_business_card/Interest.js"
// import Footer from "./components_business_card/footer.js"
// import Clickable from "./components_business_card/Buttons.js"
// import Details from "./components_business_card/details.js"



// const App =()=>{

//   return(
//     <>
//     <div className="App_main">
//     <Image />
//    <div className="Content_">
//     <Details />

//     <Clickable />

//     <About />

//     <Interest />

//     <Footer />
//         </div>
//       </div>
//     </>
//   )
// }

// export default App;


// Airbnb experience 

import React from "react";
import Airbnbnavbar from"./airbnbexp/components/airbnbnavbar.js"
const App=()=>{

  return(
    <>
    <div>

     <Airbnbnavbar />
       
    </div>
    </>
  )
}
export default App;