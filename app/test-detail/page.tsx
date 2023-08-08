"use client"
import React, { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import testCodeJson from '@/json/testCodeJson.json'
import { TestCodeProps } from '@/utils/types'
import DetailPage from '@/pages/detailPage';

function TestDetail() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    useEffect(() => {
        const url = `${pathname}?${searchParams}`
    }, [pathname, searchParams])
    const id = searchParams!.get('id')
    console.log(id)
  return (
    <>
        <Navbar />
        {testCodeJson.map((item:TestCodeProps) => (
            (Number(id) === item.id) ? 
                <DetailPage key={item.id} props={item} />
            : ""
        ))}
    </>
  )
}

export default TestDetail