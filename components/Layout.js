import Header from "./Header";

const links = [{
    path: '/',
    name: "Home"
},
{
    path: 'about',
    name: 'About'
}
];

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}
const Layout = props => {
    
    return (

        <div style={layoutStyle}>
          <Header links={links}></Header>
           {props.children}
        </div>
    )
}

export default Layout;