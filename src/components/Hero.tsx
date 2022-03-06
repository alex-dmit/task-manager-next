import Link from 'next/link'
import styles from './Hero.module.css'
import bigMan from '/public/big_man.jpg'

const Hero = () => {
  return (
    <>
      <header>
        <div className="hero-image">
          <div className='header-layout'>
            <section className='main-header'>
              <h3>ПРИНИМАЙТЕ ГОСТЕЙ</h3>
              <h1>Сдайте жилье и расскажите миру о себе</h1>
              <p>Продуманный дизайн играет важную роль в приеме гостей. Продемонстрируйте свой уникальный стиль и получите дополнительный доход, работая по удобному графику.</p>
              <Link href='/become-a-host'>Попробовать прием гостей</Link>
            </section>
          </div>
        </div>
      </header>
      <style jsx>{`
      header {
        height: 540px;
      }
      .hero-image {
        background-image: url("${bigMan.src}");
        background-position: center;
        background-size: cover;
        height: 100%;
        
      }
      .header-layout {
        background: linear-gradient(117.94deg, #000000 2.61%, rgba(0, 0, 0, 0) 62.19%);
        color: white;
        height: 100%;
        display: flex;
        align-items: center;        
      }

      h3 {
        font-size: 18px;
      }

      h1 {
        font-size: 60px;
        line-height: 60px;
      }

      p {
        font-size: 20px;
        line-height: 30px;
      }

      .become-a-host {
        color: blue;
      }

      .main-header {
        padding-left: 2rem;
      }
    `}</style>
    </>
  )
}

export default Hero