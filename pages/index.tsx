import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function home() {
  return (
    <>
      <Head>
        <title>Dhn</title>
      </Head>

      <header className="head">
        <h3 className="logo">
          {" "}
          <span className="span-title"> Forto </span>{" "}
        </h3>
        <nav className=" navbar">
          <a href="#">
            {" "}
            <b> Home </b>{" "}
          </a>
          <a href="#about">
            {" "}
            <b> about me </b>{" "}
          </a>
          <a href="#edukasi">
            {" "}
            <b> Education </b>{" "}
          </a>
          <a href="#project">
            {" "}
            <b> projects </b>
          </a>
          <a href="#contact">
            {" "}
            <b> contact </b>
          </a>
        </nav>
      </header>

      <div className="banner">
        <div className="container">
          <div className="wrap">
            <div className="title">
              <h2> hello </h2>
              <h3> I'm Yoga Dhandi </h3>
              <p>--- I'm Newbie Front-end Developers --- </p>
            </div>
            <div className="btn-scroll">
              <a href="#about">
                {" "}
                <h1>V</h1>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container-about1" id="about">
          <div className="container-about">
            <div className="title-about">
              <h2> About Me </h2>
            </div>
            <div className="box-about">
              <div className="img-box">
                <Image src="/me2.jfif" width={300} height={300} alt="gambar" />
              </div>
              <div className="me-box">
                <p className="text">
                  <b>
                    {" "}
                    <i className="fa-sharp fa-solid fa-user"></i> Name
                  </b>{" "}
                  <span className="white">aaa</span> : I Putu Yoga Dhandi Wijaya
                </p>
                <p className="text">
                  <b>Study</b> <span className="white"> aaa </span> : SMK TI
                  Bali Global Badung
                </p>
                <p className="text">
                  <b>birthday</b> <span className="white"> a </span> :
                  24-09-2006
                </p>
                <p className="text">
                  <b>Hoby</b> <span className="white"> aaaa </span> : Play game,
                  watch movies
                </p>
                <p className="text">
                  <b>Location</b> <span className="white"> a </span> : Bali
                </p>

                <div className="text-me">
                  <h4>hii i'm yoga i'm newbie front-end </h4>
                  <p>
                    I'm from indonesia and i have been study at SMK TI Bali
                    Global Badung about 1 year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="edukasi" id="edukasi">
        <div className="box-container">
          <h1 className="text">Education & Abilities</h1>

          <div className="row">
            <div className="edu-kiri">
              <div className="edu-box">
                <div className="edu-content">
                  <div className="bg">
                    <div className="edu-img">
                      <Image src="/lulus.png" width={150}  height={150} alt="gambar" /></div>
                  </div>
                </div>
                <div className="text-box">
                  <div className="edu-title">
                    <h1>SD</h1>
                  </div>
                  <div className="text-edu">
                    <p>
                      Saya Menghabisakan 6 Tahun Masa Kecil Saya Di SD No 2
                      Kekeran, Di Sini Saya Menemukan Temen-Teman Masa Kecil
                      Saya
                    </p>
                  </div>
                </div>
              </div>

              <div className="edu-box">
                <div className="edu-content">
                  <div className="bg">
                    <div className="edu-img img-1">
                    <Image src="/lulus.png" width={150}  height={150} alt="gambar" />
                    </div>
                  </div>
                </div>
                <div className="text-box">
                  <div className="edu-title">
                    <h1>SMP</h1>
                  </div>
                  <div className="text-edu">
                    <p>
                      Saya Menghabiskan 1 setegah Tahun Waktu Saya di SMPN 6
                      Mengwi sisanya saya belajar di rumah karena pandemi{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="edu-box">
                <div className="edu-content">
                  <div className="bg">
                    <div className="edu-img img-2">
                    <Image src="/buku.png" width={150}  height={150} alt="gambar" />
                    </div>
                  </div>
                </div>
                <div className="text-box">
                  <div className="edu-title">
                    <h1>SMK</h1>
                  </div>
                  <div className="text-edu">
                    <p>
                      Saat Ini Saya masih menuntut ilmu di SMK TI Bali Global
                      Badung{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="edu-kanan">
              <div className="edu-box">
                <div className="edu-content">
                  <div className="bg">
                    <div className="edu-img img-1-2">
                    <Image src="/html.png" width={70}  height={70} alt="gambar" />
                    </div>
                  </div>
                </div>
                <div className="text-box">
                  <div className="edu-title">
                    <h1>HTML</h1>
                  </div>
                  <div className="text-edu">
                    <p>
                      Saya Mempelajari HTML Di Smk Dan Saya Sudah Mengetahui
                      Dasar Dari HTML
                    </p>
                  </div>
                </div>
              </div>

              <div className="edu-box">
                <div className="edu-content">
                  <div className="bg">
                    <div className="edu-img img-2-2">
                    <Image src="/css.png" width={70}  height={70} alt="gambar" />
                    </div>
                  </div>
                </div>
                <div className="text-box">
                  <div className="edu-title">
                    <h1>CSS</h1>
                  </div>
                  <div className="text-edu">
                    <p>
                      Saya Mempelajari CSS Di Smk Dan Saya Sudah Mengetahui
                      Beberapa Style Yang Ada Dalam CSS
                    </p>
                  </div>
                </div>
              </div>

              <div className="edu-box">
                <div className="edu-content">
                  <div className="bg">
                    <div className="edu-img img-3-2">
                    <Image src="/Bootstrap_logo.svg.png" width={95}  height={75} alt="gambar" />
                    </div>
                  </div>
                </div>
                <div className="text-box">
                  <div className="edu-title">
                    <h1>BOOTSTRAP</h1>
                  </div>
                  <div className="text-edu">
                    <p>
                      Saya Mengunakan Bootstrap Untuk Mengerjakan Projek-Projek
                      Yang Di Berikan Oleh Guru Saya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project">
        <div className="container-project">
          <div className="title-about">
            <h2> Project</h2>
          </div>

          <div className="box-project">
            <div className="colom">
              <div className="card">
                <div className="card-image">
                  <Image
                    src="/web2.png"
                    width={377}
                    height={200}
                    alt="gambar"
                  />
                </div>
                <div className="category">
                  {" "}
                  <h2>Project 1</h2>{" "}
                </div>
                <div className="heading"> Website E-Commerce </div>
              </div>
            </div>
            <div className="colom">
              <div className="card">
                <div className="card-image">
                  <Image src="/web.png" width={377} height={200} alt="gambar" />
                </div>
                <div className="category">
                  {" "}
                  <h2>Project 2</h2>{" "}
                </div>
                <div className="heading"> Website Metaverse </div>
              </div>
            </div>
            <div className="box-3">
              <div className="colom">
                <div className="card">
                  <div className="card-image">
                    <Image
                      src="/web3.png"
                      width={377}
                      height={200}
                      alt="gambar"
                    />
                  </div>
                  <div className="category">
                    {" "}
                    <h2>Project 3</h2>{" "}
                  </div>
                  <div className="heading">Web forum jual beli</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container-contact">
          <div className="title-about">
            <h2> Contact </h2>
          </div>
          <div className="grid-contact">
            <div className="box-contact">
              <div className="content">
                <div className="card-1">
                  <h4>
                    {" "}
                    <span className="title-contact">
                      Instagram : <br />{" "}
                    </span>{" "}
                    <a href="https://www.instagram.com/dhn.yga/">
                      {" "}
                      <span className="contact-me"> @dhn.yga</span>
                    </a>{" "}
                  </h4>
                </div>
                <div className="card-2">
                  <h4>
                    {" "}
                    <span className="title-contact"> No Handphone :</span>{" "}
                    <br /> <span className="contact-me"> 081936551232</span>
                  </h4>{" "}
                </div>
                <div className="card-3">
                  {" "}
                  <h4>
                    {" "}
                    <span className="title-contact">Alamat: </span> <br />{" "}
                    <span className="contact-me">
                      {" "}
                      Br.Delod Sema, <br /> Kekeran, Mengwi, Badung{" "}
                    </span>
                  </h4>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copy">
        <h3>© yoga_dhandi</h3>
      </div>
    </>
  );
}
