import testCodeJson from '@/json/testCodeJson.json'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import TestDetailCard from '@/components/testDetailCard'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex items-start justify-center min-h-screen pt-10'>
        <div className='flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10'>
          {testCodeJson.map((item) => (
            <TestDetailCard key={item.id} props={item} />
          ))}
        </div>
      </div>
    </>
  )
}
