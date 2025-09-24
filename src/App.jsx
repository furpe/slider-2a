import { useState } from 'react'
import './App.css'
import barriga from './assets/barriga.jpg'
import ross from './assets/bobross.jpg'
import tort from './assets/tortilha.jpg'
import amazo from './assets/amazo.svg'
import maca from './assets/apple.svg'
import gogle from './assets/google.svg'
import slider1 from './assets/1.jpg'
import slider2 from './assets/2.jpg'
import slider3 from './assets/3.jpg'
import slider4 from './assets/4.jpg'
import face from './assets/face.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slider1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider4} alt="" />
              </SwiperSlide>
            </Swiper>
        </header>
      
      <section className="produtos">
      <a href="https://youtu.be/dQw4w9WgXcQ?si=xSBKLTWsPc7jS2pJ" className='link-card'>
        <div className="card">
          <img src={barriga} alt="" className='imgcard'/>
          <h2>Pochete realista de barriga</h2>
          <p className="desc">É hora de pegar a máquina de costura e remover aqueles bolsos irritantes de literalmente todas as suas roupas, porque de agora em diante, quando se trata de carregar coisas, esta pochete realista em formato de barriga de cerveja é tudo o que você vai precisar daqui para frente.</p>
          <p className="classificacao"> <span>★ ★ ★ ★ ☆</span>(420)</p>
          <p className="preco">R$59,90</p>
          <p className="off">-15%</p>
        </div>
        </a>
        <a href="https://www.youtube.com/watch?v=mVCC0MBT6bE&pp=ygUHdGVxdWlsYQ%3D%3D" className='link-card'>
        <div className="card">
          <img src={ross} alt="" className='imgcard'/>
          <h2>Vaso Bob Ross</h2>
          <p className="desc">
          A ideia de espalhar sementes de chia sobre um molde de cerâmica sorridente de um dos pintores mais queridos do mundo te arrepia os cabelos? Então, não procure mais
</p>
          <p className="classificacao"><span>★ ★ ★ ☆ ☆ </span>(129)</p>
          <p className="preco">R$72,90</p>
          <p className="off">-10%</p>
        </div>
        </a>
        <a href="https://youtu.be/kJQP7kiw5Fk?si=1Vxdm1n4WE7zJIKm" className='link-card'>
        <div className="card">
          <img src={tort} alt="" className='imgcard'/>
          <h2>Cobertor tortilha</h2>
          <p className="desc">o maior e unico cobertor de tortilha para aqueles que amam burritos e tacos!!!
</p>
          <p className="classificacao"> <span>★ ★ ★ ★ ☆ </span>(239)</p>
          <p className="preco">R$280,99</p>
          <p className="off">-7%</p>
        </div>
        </a>
      </section>
      <section className="destaque">

      <iframe src="https://www.youtube.com/embed/RZ_0ImDYrPY?autoplay=1&mute=1&controls=0&loop=1&playlist=RZ_0ImDYrPY&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen">
      </iframe>
      </section>
      <footer>
        <img src={amazo} alt="" className='logo-footer'/>

        <div className="social-footer">
          <div className="icon-social"><a href="https://www.youtube.com/watch?v=Ct6BUPvE2sM&list=RDCt6BUPvE2sM&start_radio=1" target='blank '><img src={maca} alt="maca" /></a></div>
          <div className="icon-social"><a href="https://www.youtube.com/watch?v=xi8Z-BdLuLo" target='blank'><img src={gogle} alt="gogle" /></a></div>
          <div className="icon-social"><a href="https://www.youtube.com/watch?v=ctN0FneZHv8&list=RDctN0FneZHv8&start_radio=1" target='blank'><img src={face} alt="face" /></a></div>
          
        </div>
        <p className='txt-footer'>Condições de Uso Notificação de Privacidade Cookies Anúncios Baseados em Interesses © 2021-2025 Amazon.com, Inc. ou suas afiliadas Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03 Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP: 04543-011| Fale conosco| ajuda-amazon@amazon.com.br Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.
        </p>

      </footer>
     </main>
    </>
  )
}

export default App
