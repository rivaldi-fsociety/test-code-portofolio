import React from 'react'
import { TestCodeProps } from '@/utils/types'
import Link from 'next/link'

function TestDetailCard({props}:{props:TestCodeProps}) {
  return (
    <>
        <Link href={{ pathname: '/test-detail', query: { id:props.id } }}>
            <div className="card w-96 h-48 bg-base-200 hover:bg-base-100 hover:shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{props.test_name}</h2>
                    <p>is a number (such as 121) that remains the same when its digits are reversed</p>
                </div>
            </div>
        </Link>
    </>
  )
}

export default TestDetailCard