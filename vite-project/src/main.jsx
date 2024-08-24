import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react'

function MyApp() {
    return(
        <>
        <h2>Hello MyApp! bro</h2>
        </>

    )
}
// const ReactElement = {
//     type:'a',
//     props: {
//         href: 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit google'
// }

const AnotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)
const anotherUser = "Chai aur react"
const ReactElement = React.createElement(
    'a',
    {href:'https://google.com',target : '_blank'},
    'Click me to visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App/>
    // <MyApp />
    // MyApp()
    // AnotherElement
    ReactElement
)
