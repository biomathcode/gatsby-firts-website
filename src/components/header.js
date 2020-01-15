import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (<div>
        <header className={headerStyles.header}>
            <h1 >
                <Link to="/" className={headerStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
            <ul className={headerStyles.navList}>
                <li >
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navList} to ="/">Home</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navList} to ="contact">contact</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navList} to ="about">about</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.navList} to ="blog">blog</Link>
                </li>
                
            </ul>

            </nav>
            
        </header>
           

    </div>
)}

export default Header