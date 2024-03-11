import { useLocation } from "react-router-dom";
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";

function DetailScreen() {
    const { state } = useLocation();
    console.log("🚀 ~ DetailScreen ~ state:", state)

    return (<div>
        <Navbar />

        <div style={{ display: "flex" }}>
            <div style={{ width: '50%', border: '1px solid grey', }}>
                <img src={state.images[0]} alt=""></img>
            </div>
            <div style={{ textAlign: "Left", width: '40%', border: '1px solid grey', marginLeft: '2rem', padding: 10 }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }} >
                        <img style={{ width: 70, height: 70, borderRadius: 70 }} src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-1/361578664_1002323721201136_1222505428421872424_n.jpg?stp=c0.0.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGXfFHbUMjlO6eerAp60rteCXE7RCER214JcTtEIRHbXpjg_s8X2QyaiUOtU-WwEMADuC2muPST5tg5Bw49lXTt&_nc_ohc=K77ekPHGmAwAX8GAM3d&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfBBAmiBbXnLzuuImhfKEzQs4_w3bzO8P6_YJHKfBsqAow&oe=65A535B4" alt=""></img>
                        <p style={{ fontWeight: "bold", marginTop: 1, marginLeft: '1rem' }} >Shahmeer rizwan</p>
                    </div>
                    <div style={{ display: 'flex' }} >
                        <p style={{ marginLeft: '-5.5rem', marginTop: 30 }} >member since Jan 2023</p>
                        <h4 style={{ marginLeft: '-10.3rem', marginTop: 50 }} >see profile</h4>

                    </div>
                </div>
                <h2>{state.title}</h2>
                <h3 style={{ color: 'gray' }}>{state.description}</h3>
                <h3>Price :  Rs.{state.price}</h3>

            </div>
        </div><br /><br /><br />

        <Footer />
    </div>
    )
}

export default DetailScreen;