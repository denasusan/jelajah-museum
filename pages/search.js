import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from '@/public/svg/search_icon'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import { useEffect, useState } from 'react'
import CardMuseumWarm from '@/components/card_museum_warm'
import CardMuseumWarmSearch from '@/components/card_museum_warm_search'

export default function Search() {
    const [keyword, setKeyword] = useState("");
    const [finding, setFinding] = useState([]);
    const listContent = [
        {
            "title": "Museum Geologi Bandung",
            "description": `Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                            Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929.         Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.
                        Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                        Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929. Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.`,
            "slug": "geologi-bandung",
            "thumbnail": "/images/lukisan_10.png",
            "location": "Jl. Supratman no. 50"
        },
        {
            "title": "Nu Couché",
            "description": `Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                            Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929.         Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.
                        Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                        Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929. Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.`,
            "slug": "nu-couche",
            "thumbnail": "/images/lukisan_3.png",
            "location": "Jl. Supratman no. 48"

        },
        {
            "title": "Les Femmes d’ Alger (Version O) oleh Pablo Picasso",
            "description": `Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                            Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929.         Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.
                        Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                        Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929. Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.`,
            "slug": "les-femmes",
            "thumbnail": "/images/lukisan_5.png",
            "location": "Jl. Supratman no. 49"
        },
    ]

    useEffect(() => {
        setFinding([])
        let searching = []
        listContent.find(element => {
            const title = (element.title + "").toLowerCase()
            const key = (keyword + "").toLowerCase()
            const data = title.includes(key) ? element : ""
            if (data)
                searching.push(element)
        });
        if (searching && keyword != "") {
            setFinding(searching ? searching : [])
        } else {
            setFinding([])
        }
        // console.log("ASDSAD", finding, keyword)
    }, [keyword])

    return (
        <Layout>
            <Header isPageSearch={true} />
            <main>
                <div className='min-h-screen bg-yellow-warm'>
                    <div className=" pb-1 pt-16 flex justify-center">
                        <input type="text" value={keyword} onChange={(val) => setKeyword(val.target.value)} className='w-80 bg-yellow-warm border-b-2 focus:outline-none border-green-light pr-4 -mr-4 text-green-light placeholder:text-green-light' placeholder='Type something... (geologi bandung)' />
                        <SearchIcon />
                    </div>
                    {
                        finding.length > 0 ?
                            finding.map((item, index) => {
                                return <div key={index}>
                                    <CardMuseumWarmSearch 
                                    title={item.title}
                                    description={item.description}
                                    slug={item.slug}
                                    image={item.thumbnail}
                                    />
                                </div>
                            })
                            : keyword != "" ?
                                <div className='flex justify-center lg:flex-row flex-col pt-16'>
                                    <div className='lg:w-1/3 w-full flex justify-center items-center'>
                                        <div style={{ width: "100%", height: "50%", position: "relative", paddingBottom: "50%" }}>
                                            <Image
                                                src={"/images/search_not_found.png"}
                                                id="image"
                                                alt={"bg-1"}
                                                layout='fill'
                                                placeholder='blur'
                                                blurDataURL='/'
                                                loading='lazy'
                                                objectFit='contain'
                                            />
                                        </div>
                                    </div>
                                    <div className='lg:w-1/2 w-full px-10 flex justify-center items-center lg:mt-0 mt-4'>
                                        <p className='lg:text-24px max-w-lg text-14px lg:text-start text-center font-bold text-green-light'>
                                            Museum "{keyword}" yang kamu cari tidak ditemukan.
                                        </p>
                                    </div>
                                </div> : ""
                    }
                </div>
            </main>
            <Footer />
        </Layout>
    )
}
