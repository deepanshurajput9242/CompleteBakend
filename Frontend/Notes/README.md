⚛️ React Notes - Day 1
1. React Kya Hai?
React ek JavaScript Library hai.
React ka use User Interface (UI) banane ke liye hota hai.
React ko Facebook (Meta) ne banaya tha.
React reusable components ke concept par kaam karta hai.
2. React Features
Component Based Architecture
Virtual DOM
Fast Rendering
Reusable Components
One Way Data Flow
JSX Support
3. SPA (Single Page Application)

React me page reload nahi hota.

Sirf jis component me change hota hai wahi render hota hai.

Example:

Instagram
Facebook
LinkedIn
Gmail

Ye sab SPA hain.

4. Component

Component ek JavaScript function hota hai jo UI return karta hai.

Example

function Home() {
    return <h1>Hello React</h1>;
}

Ya

const Home = () => {
    return <h1>Hello React</h1>;
}
5. JSX

JSX = JavaScript + HTML

Isme hum HTML jaisa syntax JavaScript ke andar likhte hain.

Example

const element = <h1>Hello</h1>;

Browser JSX ko nahi samajhta.

Babel JSX ko JavaScript me convert karta hai.

6. Babel

Babel ek JavaScript Compiler hai.

Kaam:

JSX
↓

JavaScript
7. Virtual DOM

React pehle Virtual DOM banata hai.

Fir Real DOM se compare karta hai.

Sirf changed part update karta hai.

Isliye React fast hai.

Virtual DOM
↓

Compare

↓

Real DOM Update
8. Props

Props = Parent → Child Data

Props Read Only hote hain.

Example

function User(props){
    return <h1>{props.name}</h1>;
}

<User name="Deepanshu"/>

Output

Deepanshu
9. State

State component ka apna data hota hai.

State change hone par component dubara render hota hai.

Example

const [count,setCount]=useState(0);
10. useState()

Syntax

const [state,setState]=useState(initialValue);

Example

const [name,setName]=useState("");
11. Event Handling

Example

<button onClick={handleClick}>
Click
</button>
12. Conditional Rendering
{
isLogin ? <Home/> : <Login/>
}
13. List Rendering
const arr=["A","B","C"];

{
arr.map((item)=>(
<h1>{item}</h1>
))
}
React Router Notes
React Router

React me page reload nahi hota.

URL change hota hai aur component change hota hai.

Install

npm install react-router-dom
BrowserRouter

Ye pura application ko Router provide karta hai.

<BrowserRouter>

</BrowserRouter>
Routes

Routes ke andar saare Route likhe jaate hain.

<Routes>

</Routes>
Route

Har URL ke liye ek Route.

<Route path="/about" element={<About/>}/>
path

URL batata hai.

Example

path="/about"

URL

localhost:5173/about
element

Kaunsa component render hoga.

element={<About/>}
Multiple Routes
<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/contact" element={<Contact/>}/>

</Routes>
Navigation
import {Link} from "react-router-dom";

Example

<Link to="/">
Home
</Link>

<Link to="/about">
About
</Link>

Link page reload nahi karta.

useNavigate()

Programmatically page change karne ke liye.

Example

const navigate=useNavigate();

navigate("/about");
JSX Comments

Outside JSX

// Comment

Inside JSX

{/* Comment */}
Folder Structure
src

│

├── assets

├── components

├── pages

│      ├── Home.jsx

│      ├── About.jsx

│      └── Contact.jsx

├── App.jsx

├── main.jsx

└── index.css
Important Interview Questions
React kya hai?

React ek JavaScript Library hai jo UI banane ke liye use hoti hai.

React Library hai ya Framework?

Library.

JSX kya hai?

JavaScript + HTML syntax.

Babel kya karta hai?

JSX ko JavaScript me convert karta hai.

Virtual DOM kya hai?

Real DOM ki copy jisme React changes compare karta hai.

Props aur State me difference?

Props

Parent se data aata hai
Read Only

State

Component ka own data
Change ho sakta hai
BrowserRouter ka use?

Routing enable karta hai.

Routes ka use?

Saare Routes ko wrap karta hai.

Route ka use?

Ek URL ko ek Component se map karta hai.

Link aur <a> tag me difference?

<a> tag:

Page reload karta hai.

<Link>:

Page reload nahi karta.
SPA maintain karta hai.
Revision Shortcut
React
│
├── JSX
├── Component
├── Props
├── State
├── useState
├── Event Handling
├── Conditional Rendering
├── List Rendering
├── React Router
│      ├── BrowserRouter
│      ├── Routes
│      ├── Route
│      ├── Link
│      └── useNavigate
└── Virtual DOM