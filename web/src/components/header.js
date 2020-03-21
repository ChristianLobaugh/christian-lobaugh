import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'
import { globalHistory as history } from '@reach/router'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => {
  const { location } = history
  return (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/blog/'>Blog</Link>
          </li>
          {location.pathname.includes('/blog') && 
            <li>
              <Link to='/blog/archive/'>Archive</Link>
            </li>
          }
          <li>
            <a href="https://christianlobaugh.com/resume">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
  }

export default Header
