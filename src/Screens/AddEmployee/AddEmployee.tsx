import React from 'react'
import Input from '../../components/Input'

import {MdOutlinePerson, MdOutlineArrowDropDown} from 'react-icons/md'
import {PiBagSimple} from 'react-icons/pi'
import { BottomSheet } from 'react-spring-bottom-sheet'
import Example from '../../components/BottomSheets'
const AddEmployee = () => {
  return (
    <main className='p-4'>
        <form className='grid gap-6' onSubmit={() => {}}>
            <Input placeholder='Joseph moaden' leftIcon={<MdOutlinePerson color="#1DA1F2" size={24} />}/>
            <Input placeholder='Fluter'  value={"22"} leftIcon={<PiBagSimple color="#1DA1F2" size={24}  />} rightIcon={<MdOutlineArrowDropDown color="#1DA1F2" size={24}  />}/>
            <Example/>
        </form>

    </main>
  )
}

export default AddEmployee