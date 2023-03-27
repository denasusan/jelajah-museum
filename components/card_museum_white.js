import { SkipNext } from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function CardMuseumWhite() {
    return <div className="section-2 h-auto lg:h-screen flex lg:flex-row lg:py-0 py-10 flex-col lg:justify-evenly items-center">
        <div className="w-4/5  lg:pt-0 pt-4 flex items-end justify-center relative">
            <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "47%" }}>
                <Image
                    src={"/images/lukisan_3.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='cover'
                    className="pr-10 rounded-3xl bg-yellow-warm"
                />

                <div className='absolute right-3 flex flex-col justify-center h-full'>
                    <div className='w-3 h-3 bg-green-light rounded-full mb-2'></div>
                    <div className='w-3 h-3 bg-red-light rounded-full mb-2'></div>
                    <div className='w-3 h-3 bg-green-light rounded-full'></div>
                </div>
            </div>
            <div style={{ width: '54px', height: '54px', position: 'relative' }}>
                <Image
                    src={"/images/logo-icon.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='contain'
                />
            </div>
        </div>
        <div className="lg:w-1/3 w-full h-full lg:pl-0 px-8 flex flex-col justify-center lg:pr-10 relative lg:pb-0 pb-10">
            <p className="text-green-light text-center font-bold text-24px lg:text-30px">Nu Couché</p>
            <p className="font-semibold text-10px lg:text-16px">Nu Couché, lukisan terkenal dan merupakan lukisan telanjang di atas kanvas yang diciptakan oleh maestro asal Italia bernama Amedeo Modigliani pada tahun 1917. Lukisan yang berusia lebih dari seratus tahun ini, memiliki sensualitas yang mengejutkan dan menghipnotis penggemar seni ketika pertama kali dipamerkan di Paris. Nu Couché adalah karya seni Ekspresionis yang merupakan lukisan terbesar yang pernah diciptakan Amedeo Modigliani......</p>
            <Link href="/detail?slug=nu-couche"  className="w-full flex items-center justify-end absolute lg:bottom-10 lg:right-10 bottom-0 right-3">
                <p className="mr-2 lg:text-20px text-16px font-bold text-green-light">Selengkapnya</p>
                <div className="bg-yellow-warm shadow-2xl rounded-full p-2 w-10 h-10 text-orange-light-DEFAUL flex justify-center items-center">
                    <SkipNext />
                </div>
            </Link>
        </div>
    </div>
}