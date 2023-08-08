import React, { useState } from 'react'
import { TestCodeProps } from '@/utils/types'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import Link from 'next/link';
import Algorithm from '@/utils/algorithm'
import CodeString from '@/utils/codeString'

function DetailPage({props}:{props:TestCodeProps}) {
    const codeString = CodeString(props.id)
    const [copy, setCopy] = useState<boolean>(false)
    const [resultAlgorithm, setResultAlgorithm] = useState<string>('the number you type, the algorithm will decide.')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let result = false
        if(e.target.value == ''){
            setResultAlgorithm('the number you type, the algorithm will decide.')
        }else{
            result = Algorithm(props.id, e.target.value)
            if(result){
                setResultAlgorithm(e.target.value + ' is Palindrom Number.')
            }else{
                setResultAlgorithm(e.target.value + ' is not Palindrom Number.')
            }
        }
    }
  return (
    <>
        <div className="bg-base-200">
            <div className=" w-full flex gap-4 p-4 flex-col lg:flex-row">
                {/* Left Side */}
                <div className="card h-fit w-6/12 shadow-xl bg-base-300">
                    <div className='flex justify-between px-4 py-2 text-warning text-xs items-center'>
                        <p className='text-sm'>{props.test_name} Code</p>
                        {copy ? 
                            <div className="tooltip tooltip-open tooltip-right" data-tip="copied!">
                                <button className='py-1 inline-flex items-center gap-1'>
                                    <CIcon className='' icon={icon.cilCheckCircle} height={20} width={20}/>
                                </button>
                            </div>
                         : 
                            <div>
                                <button className='py-1 inline-flex items-center gap-1' onClick={() => {
                                    navigator.clipboard.writeText(codeString)
                                    setCopy(true)
                                    setTimeout(() => {
                                        setCopy(false)
                                    }, 3000)
                                }}>
                                    <CIcon className='' icon={icon.cilClipboard} height={20} width={20}/>
                                </button>
                            </div>
                        }
                    </div>
                    <SyntaxHighlighter language="javascript" style={atomOneDark} className="rounded-xl">
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                {/* Right Side */}
                <div className='flex flex-col gap-4 space-y-10 w-10/12'>
                    <div className='flex flex-row space-x-8 justify-center items-center pt-20'>
                        <input type="text" placeholder="Type here" onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }
                        }} onChange={e => handleChange(e)} className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className=''>
                        <SyntaxHighlighter language="javascript" style={atomOneDark} className="h-10 rounded-xl">
                            {resultAlgorithm}
                        </SyntaxHighlighter>
                    </div>
                    <div className='fixed bottom-8 right-8'>
                        <Link href={"/"}>
                            <button className="btn btn-warning tracking-wider hover:scale-105 ease-in duration-100"><CIcon className='' icon={icon.cilArrowCircleLeft} height={38} width={38}/> Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DetailPage