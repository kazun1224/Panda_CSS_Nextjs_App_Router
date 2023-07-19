import Link from 'next/link'
import React from 'react'
import { css } from '../../../styled-system/css'

export const Header = () => {
  return (
    <header
    className={css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0 auto",
      maxWidth: '1200px',
      p: { base: '20px 40px', md:'20px' },
    })}
  >
    <h1>Panda Css Next App</h1>
    <nav>
      <ul
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      })}
      >
        <li>
          <Link href={"/"}>main</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}
