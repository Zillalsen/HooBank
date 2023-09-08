import styles from "../style"
import { discount,robot } from "../assets"
import GetStarted from "./GetStarted"

export default function Hero() {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`} id="home">
    <div className={`${styles.flexStart} flex-col flex-1 sm:px-16 xl:px-0 p-6`}>
      
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> DISCOUNT FOR {"  "} <span className='text-white'>1 MONTH</span> ACCOUNT
        </p>
      </div>
      
      <div className="flex flex-row items-center justify-between w-full ">
      <h1 className='font-poppins flex-1 text-white text-[52px] ss:text-[72px] font-semibold '>
        The Next <br className="hidden sm:block"/> <span className='text-gradient'>Generation</span>
      </h1>
      <div className="ss:flex hidden mr-0 md:mr-4">
        <GetStarted/>
      </div>
      </div>
      <h1 className='font-poppins flex-1 text-white text-[52px] ss:text-[72px] font-semibold '>
        Payment Methode
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
      We examine annual percentage rates, annual fees.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="robot" className="w-[100%] h-[100%] z-[5] object-contain relative"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
  )
}
