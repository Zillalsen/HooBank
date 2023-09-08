import React from 'react'
import styles, {layout} from '../style'
import { card } from '../assets'
import Button from "./Button"

export default function CardDeal() {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} font-poppins`}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className= {`max-w-[470px] mt-4 ${styles.paragraph}`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles = 'mt-6' />
      </div>
      
      <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-[100%] h-[100%] object-contain" />

      </div>
    </section>
  )
}
