import styles from "./style"
import {Navbar,Hero,Stats,Billing,Business,CTA,CardDeal,Clients,Testimonials,Footer,} from "./components"

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      {/* this is a navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    
    {/* Hero section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    {/*Other sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

    </div>
  )


export default App