import Head from 'next/head'
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import { NavigateNext, Redo } from '@material-ui/icons'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
// import "swiper/css";
SwiperCore.use([Autoplay]);


const SliderComponent = () => {

  // For Typescript!
  // const swiperRef = useRef<SwiperCore>();  


  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const swiperRef = useRef();
  const swiperRefOurCulture = useRef();
  const [images, setImages] = useState([
    "/images/2.png",
    "/images/1.png"
  ]);


  return (
    <Layout>
      <Header tabActive={1} />
      <main>
        <div>
          <Swiper
            slidesPerView={1}
            ref={swiperRef}
            breakpoints={SliderComponent}
            // pagination={true}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 10 }}
            speed={1300}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}>
            <div className='w-full text-blue-primary-light flex absolute z-10 lg:bottom-16 bottom-10 justify-between lg:px-12 opacity-50 px-2'>
              <button className='transform rotate-180 text-blue-primary' onClick={() => swiperRef.current?.slidePrev()}><Redo fontSize='' /></button>
              <button className='' onClick={() => swiperRef.current?.slideNext()}><Redo fontSize='' /></button>
            </div>
            {
              images.map((item, index) => {
                const image = item
                return (
                  <SwiperSlide key={index}>
                    {
                      <div className={`pb-10 w-full`}>
                        <div className={`relative w-full`}>

                          <div className='' style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "51%" }}>
                            <Image
                              tabIndex="0"
                              src={`${image}`}
                              alt={`slide${index}`}
                              layout='fill'
                              placeholder='blur'
                              blurDataURL='/'
                              loading='lazy'
                              objectFit='cover'
                            />
                          </div>

                        </div>
                      </div>
                    }
                  </SwiperSlide>
                );
              })
            }
          </Swiper>

          <div className='w-9/12 mx-auto lg:my-10 my-0'>
            <p className='lg:text-24px text-20px font-bold py-2 text-blue-primary '>About Us</p>
            <p className='bg-blue-light rounded-xl p-4 text-14px lg:text-16px font-medium'>Gaya Properti didirikan pada tahun 2013 yang bermula sebagai pengembang perumahan khususnya di wilayah Kota Bandung, Jawa Barat. Seiring berkembangnya waktu, Gaya Properti bertransformasi menjadi perusahaan yang bergerak di bidang Kontraktor, Arsitektur, Desain Interior dan Custom Furniture.
              <br /> <br />
              Gaya Properti bertujuan menjadi perusahaan konglomerasi properti yang dapat besaing di kancah Nasional Maupun Internasional dengan memberikan pelayanan yang terbaik untuk mitra dan klien, membangun sumber daya manusia yang berintegritas dan berkompetensi internasional serta membangun manajemen yang transparan dan profesional.
            </p>
          </div>

          <div className='w-9/12 mx-auto mt-10'>
            <p className='lg:text-24px text-20px font-bold py-2 text-blue-primary'>Our Culture</p>
            <Swiper
              slidesPerView={1}
              ref={swiperRefOurCulture}
              // breakpoints={SliderComponent}
              // pagination={true}
              modules={[Autoplay]}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              speed={1000}
              onBeforeInit={(swiper) => {
                swiperRefOurCulture.current = swiper;
              }}
              loop={true}>
              <div className='w-full text-blue-primary-light flex absolute z-10 lg:bottom-16 bottom-10 justify-between lg:px-12 opacity-50 px-2'>
                <button className='transform rotate-180 text-blue-primary' onClick={() => swiperRefOurCulture.current?.slidePrev()}><Redo fontSize='' /></button>
                <button className='' onClick={() => swiperRefOurCulture.current?.slideNext()}><Redo fontSize='' /></button>
              </div>
              {
                images.map((item, index) => {
                  const image = item
                  return (
                    <SwiperSlide key={index}>
                      {
                        <div className={`pb-10 w-full`}>
                          <div className={`relative w-full`}>

                            <div style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "51%" }}>
                              <Image
                                tabIndex="0"
                                src={`${image}`}
                                alt={`slide${index}`}
                                layout='fill'
                                placeholder='blur'
                                blurDataURL='/'
                                loading='lazy'
                                objectFit='cover'
                                className='rounded-xl'
                              />
                            </div>

                          </div>
                        </div>
                      }
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </main>
      <Footer />

    </Layout>
  )
}
