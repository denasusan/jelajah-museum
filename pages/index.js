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
<<<<<<< HEAD
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
=======
            <div className='flex gap-2 justify-center mt-10 text-green-light  pb-2 lg:visible invisible absolute lg:relative'>
              <Instagram className="cursor-pointer" onClick={() => alert("Open instagram")} fontSize="large" />
              <Facebook className="cursor-pointer" onClick={() => alert("Open Facebook")} fontSize="large" />
              <div className='w-32 h-1 mt-2 bg-orange-light-DEFAUL absolute bottom-0 rounded-full shadow-2xl'></div>
            </div>
          </div>
          <div className="text-green-light text-center flex flex-col justify-center items-center lg:w-auto w-full lg:mt-10 mt-2">
            <p className="font-bold" style={{ fontSize: "72px" }}>EXPLORE</p>
            <p className="font-bold" style={{ fontSize: "64px" }}>YOUR</p>
            <p className="font-bold text-red-light" style={{ fontSize: "64px" }}>ART<span className="text-green-light">(s)</span></p>
            <p className="font-bold" style={{ fontSize: "72px" }}>WORLD</p>
          </div>
          <div className='w-full lg:w-2/5'>
            <div style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "100%" }}>
              <Image
                src={images[1]}
                id="image"
                alt={"bg-1"}
                layout='fill'
                placeholder='blur'
                blurDataURL='/'
                loading='lazy'
                objectFit='cover'
                className="rounded-full pr-4 bg-red-light"
              />
            </div>
            <div className='flex gap-2 justify-center mt-10 text-green-light  pb-2 lg:visible invisible absolute lg:relative'>
              <Twitter className="cursor-pointer" onClick={() => alert("Open Twitter")} fontSize="large" />
              <div className="cursor-pointer" onClick={() => alert("Open Path")}>
                <PathIconGreen />
              </div>
              <div className='w-32 h-1 mt-2 bg-orange-light-DEFAUL absolute bottom-0 rounded-full shadow-2xl'></div>
            </div>
          </div>
        </div>
        <CardMuseumWhite />
        <div className="section-3 bg-yellow-warm h-screen lg:flex-row flex-col flex justify-evenly items-center lg:pt-0 pt-10 lg:pb-0 pb-10">
          <div className="lg:w-4/5 w-full flex items-center relative">
            <div className='w-3/5 flex justify-center items-center flex-col gap-7 lg:visible invisible absolute lg:relative'>
              <div style={{ width: '70%', height: '40%', position: 'relative', paddingBottom: "48%" }}>
                <Image
                  src={"/images/lukisan_4.png"}
                  id="image"
                  alt={"bg-3"}
                  layout='fill'
                  placeholder='blur'
                  blurDataURL='/'
                  loading='lazy'
                  objectFit='cover'
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div style={{ width: '70%', height: '40%', position: 'relative', paddingBottom: "48%" }}>
                <Image
                  src={"/images/lukisan_6.png"}
                  id="image"
                  layout='fill'
                  placeholder='blur'
                  blurDataURL='/'
                  loading='lazy'
                  objectFit='cover'
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className='lg:w-2/5 w-full flex lg:justify-start justify-center'>
              <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "100%" }}>
                <Image
                  src={"/images/lukisan_5.png"}
                  id="image"
                  alt={"bg-3"}
                  layout='fill'
                  placeholder='blur'
                  blurDataURL='/'
                  loading='lazy'
                  objectFit='cover'
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full h-full flex flex-col justify-center items-center lg:pl-0 pl-10 pr-10 relative lg:pb-0 pb-10">
            <p className="text-green-light text-center font-bold text-24px lg:text-30px ">Les Femmes d’ Alger (Version O) oleh Pablo Picasso</p>
            <p className="font-semibold lg:text-16px text-12px">Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 ....
>>>>>>> parent of 30d22a8 (jelajah-museum v0.0.4)
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
<<<<<<< HEAD
              {
                images.map((item, index) => {
                  const image = item
                  return (
                    <SwiperSlide key={index}>
                      {
                        <div className={`pb-10 w-full`}>
                          <div className={`relative w-full`}>

                            <div style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "51%" }}>
=======
              <div className='w-full lg:w-1/3 flex justify-center items-center flex-col gap-7'>
                <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "60%" }}>
                  <Image
                    src={"/images/lukisan_8.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='cover'
                    className="rounded-3xl"
                  />
                </div>
              </div>
              <div className='w-full lg:w-1/3 flex justify-center items-center flex-col gap-7'>
                <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "60%" }}>
                  <Image
                    src={"/images/lukisan_9.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='cover'
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/12 h-full'>
              <div className='w-4 h-4 bg-green-light rounded-full mb-2'></div>
              <div className='w-4 h-4 bg-red-light rounded-full mb-2'></div>
              <div className='w-4 h-4 bg-green-light rounded-full'></div>
            </div>
          </div>
          <Link href="/recomend" className="w-full flex items-center justify-end absolute lg:bottom-10 lg:top-0 top-10 right-10 cursor-pointer">
            <div className="text-yellow-warm shadow-2xl rounded-full p-2 w-10 h-10 bg-orange-light-DEFAUL flex justify-center items-center">
              <SkipNext />
            </div>
          </Link>
        </div>
        <CardMuseumWarm />
        {/* <Swiper
          slidesPerView={1}
          // ref={swiperRef}
          
          // pagination={true}
          modules={[Pagination]}
          autoplay={{ delay: 3000 }}
          speed={1300}
          loop={true}
          spaceBetween={30}>
          {
            images.map((item, index) => {
              const image = item
              return (
                <SwiperSlide key={index}
                >
                  {
                    // <Link href={item}>
                    //   <a>
                        <div className={`pb-10`}>
                          <div className={`relative w-full ${styles.container_image}`}>
                            <div className='' style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "51%" }}>
>>>>>>> parent of 30d22a8 (jelajah-museum v0.0.4)
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
