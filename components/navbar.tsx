import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
        <div className="navbar bg-base-300">
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">
                Test Code Portofolio
            </Link>
        </div>
    </>
  )
}

export default Navbar