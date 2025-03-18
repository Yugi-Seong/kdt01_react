import { useState, useEffect, useRef } from 'react';
import TailButton from '../UI/TailButton'

export default function MyRef() {

    // ref 변수 선언
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refResult = useRef();
    const refSelect = useRef();

    // 계산 
    const handleCal = (e) =>{
        e.preventDefault();

        // 입력 공백 체크 
        if (refInput1.current.value == ''){
            alert('첫번째 값을 입력하세요.') ;
            refInput1.current.focus() ;
            return ;
        }
        // 입력 공백 체크 
        if (refInput2.current.value == ''){
            alert('두번째 값을 입력하세요.') ;
            refInput2.current.focus() ;
            return ;
        }
        
        let num1 = parseInt(refInput1.current.value) ;
        let num2 = parseInt(refInput2.current.value) ;

        switch (refSelect.current.value){
            case "+" :
                refResult.current.value = num1 + num2 ;
                break ;
            case "-" :
                refResult.current.value = num1 - num2 ;
                break ;
            case "*" :
                refResult.current.value = num1 * num2 ;
                break ;
            case "/" :
                refResult.current.value = num1 / num2 ;
                break ;
        }
    }
    
    // 입력 초기화 
    const handleInit = () =>{
        refInput1.current.value ='';
        refInput2.current.value ='';
        refSelect.current.value ='+';
        refResult.current.value="";
    }

    // 컴포넌트 생성시 입력 상자에 포커스 
    useEffect (()=>{
        refInput1.current.focus();
    },[]);
        
    return (
        <div className='w-full flex justify-center items-start mt-10'>
            <form className='flex w-10/12 h-20 bg-amber-100 justify-center items-center'>
                <div className="w-3/5 grid grid-cols-5 gap-4">
                    <input type='text' ref={refInput1} onClick={handleInit} className='border w-15 h-10 m-2 rounded-lg text-center bg-white'></input>
                    
                    <select className='w-15 h-10 m-2 bg-white' ref={refSelect}>
                        <option value="+" >+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">/</option>
                    </select>
                    <input type='text' className='w-15 h-10 m-2  rounded-lg text-center bg-white' ref={refInput2}></input>
                    
                    <TailButton caption="=" color="blue" onClick={handleCal} className='w-15 h-10 m-2  rounded-lg text-center'/>
                    <input type='text' className='w-15 h-10 m-2  rounded-lg text-center bg-gray-300' readOnly ref={refResult} ></input>
                </div>
            </form>
        </div>
    )
}
