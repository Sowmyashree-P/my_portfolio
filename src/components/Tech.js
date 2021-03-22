import Carousel from 'react-material-ui-carousel'
import './Tech.css'

const Item = (props) => {
    const { name, description } = props.item
    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Years Of Experience</h3>
            <p>{props.item.role}</p>
        </>
    )
}

const Tech = () => {
     const items = [
        {
            name: "JavaScript",
            description: `JavaScript, often abbreviated as JS, is a programming language that 
            conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time 
            compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based 
            object-orientation, and first-class functions`,
            role:`I started my career with JS and I have overall 8+ years of experience`
        },
        {
            name: "ReactJS",
            description: `React is an open-source, front end, JavaScript library for building user interfaces or UI components. 
            It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications`,
            role: `I am using ReactJS in my current project with overall 3 years of experience`
        },
        {
            name: "Redux",
            description: `Redux is an open-source JavaScript library for managing application state. 
            It is most commonly used with libraries such as React or Angular for building user interfaces. 
            Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark`,
            role: `I am using Redux in my current project with overall 3 years of experience`
        },
        {
            name: "Redux",
            description: `Redux is an open-source JavaScript library for managing application state. 
            It is most commonly used with libraries such as React or Angular for building user interfaces. 
            Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark`,
            role: `I am using Redux in my current project with overall 3 years of experience`
        },
        {
            name: "ES6",
            description: `ECMAScript is a general-purpose programming language, standardised by Ecma 
            International according to the document ECMA-262. It is a JavaScript standard meant to 
            ensure the interoperability of Web pages across different Web browsers`,
            role: `I am using ES6 along with React in my current project with overall 3 years of experience`
        },
        {
            name: "HTML5",
            description: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. 
            It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. 
            The current specification is known as the HTML Living Standard.`,
            role: `I started working in HTML along with JS 8 yeras before.
             From then lots of new features have been added into HTML. I enjoy working with default date input field, 
             geolocation API, index db etc`
        },
        {
            name: "TypeScript",
            description: `TypeScript is a programming language developed and maintained by Microsoft.
             It is a strict syntactical superset of JavaScript and adds optional static typing to the 
             language. TypeScript is designed for the development of large applications and transcompiles to JavaScript`,
            role: `I started using typescript in my current React application. Overall experience is 2 years`
        },
        {
            name: "CSS3",
            description: `Cascading Style Sheets is a style sheet language used for describing the presentation
             of a document written in a markup language such as HTML. 
            CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript`,
            role: `I am using CSS from last 8+ year. But most of the time project includes third party css libraries
            such as bootstrap, material UI etc. So I have basic knowledge of css.`
        }
    ]

    return (
        <Carousel animation="fade" autoPlay={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Tech;