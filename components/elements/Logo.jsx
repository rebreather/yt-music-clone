'use client'

import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import IconButton from './IconButton'

const Logo = () => {

  const { push } = useRouter()

  function onClickLogo() {
    push('/')
  }

  function onClickIcon() {
    //
  }

  return <section className='flex flex-row items-center gap-3'>
    <IconButton onClickIcon={onClickIcon} icon={<RxHamburgerMenu size={24} />} />
    <div className='cursor-pointer' onClick={onClickLogo}>
      <Image alt='logo' width={100} height={30} src={'/main-logo.svg'} />
    </div>
  </section>
}

export default Logo