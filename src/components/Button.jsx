import React from 'react'

export default function Button({styles}) {
  return (
    <button className={`bg-blue-gradient py-4 px-6 font-medium text-[18px] outline-none rounded-xl ${styles}`}>
      Get Started
    </button>
  )
}
