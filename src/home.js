const Home = () => {
    return (
        <div className="Places">
            <div className="Navbar">
                <h2 className="main-head"> My travel Journal </h2>
            </div>
            <br></br>
            <br></br>
            <div className="Box">

                <div className="Japan">
                    <div className="Box1">
                        <div className="Box11">
                            <img className="image" src="https://source.unsplash.com/WLxQvbMyfas" alt="Image"></img>
                        </div>
                        <div className="Content">
                            <p classname="Location">JAPAN  <a href="https://goo.gl/maps/K3wh4oCCNHE22nm69" target="_blank" rel="no referrer"> View on Google Maps</a></p>
                            <h1 className="Heading">Mount Fuji</h1>
                            <br></br>
                            <p className="Date"> 12 Jan,2023 to 24 Jan, 2023</p>
                            <br></br>
                            <p className="Brief">Mount Fuji, Japanese Fuji-san, also spelled Fujisan, also called Fujiyama or Fuji no Yama, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama metropolitan area. It is a volcano that has been dormant since its last eruption, in 1707, but is still generally classified as active by geologists. The mountain is the major feature of Fuji-Hakone-Izu National Park (1936), and it is at the centre of a UNESCO World Heritage site designated in 2013.</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>



                <div className="Sydney">
                    <div className="Box1">
                        <div className="Box11">
                            <img className="image" src='https://source.unsplash.com/JmuyB_LibRo' alt="Image"></img>
                        </div>
                        <div className="Content">
                            <p classname="Location">AUSTRALIA  <a href="https://goo.gl/maps/UmvenzU8RBJNHkhQ7" target="_blank" rel="no referrer"> View on Google Maps</a></p>
                            <h1 className="Heading">Sydney Opera House</h1>
                            <br></br>
                            <p className="Date"> 27 May,2022 to 8 June, 2022</p>
                            <br></br>
                            <p className="Brief">Sydney Opera House, opera house located on Port Jackson (Sydney Harbour), New South Wales, Australia. Its unique use of a series of gleaming white sail-shaped shells as its roof structure makes it one of the most-photographed buildings in the world.The Sydney Opera House is situated on Bennelong Point (originally called Cattle Point), a promontory on the south side of the harbour just east of the Sydney Harbour Bridge. It was named for Bennelong, one of two Aboriginal people (the other man was named Colebee) who served as liaisons between Australia’s first British settlers and the local population. </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
            <div className="login">
                <p className="tagline">Want to add more? </p>
                <div className="Buttons">
                    <a href="/login" target="_blank" rel="no referrer"><button className="primary-button"> SIGN IN </button></a>
                    <br></br>
                    <a href="/register" target="_blank" rel="no referrer"><button className="primary-button"> SIGN UP </button></a>
                </div>
            </div>
        </div>
    );
}

export default Home;