import Link from 'next/link';
 const linkStyle = {
     marginRight: 15
 }
const Header = ({ links }) => {
    return (
        <div>
            {
                links.map((link) => {
                   return (
                    <Link key={link.path} href={link.path}>
                    <a style={linkStyle}>{link.name}</a>
                    </Link>
                   ) 
                })
            }

        
        </div>
    )
}

export default Header;