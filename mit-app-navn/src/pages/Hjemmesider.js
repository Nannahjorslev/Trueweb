import dyk from "../images/dyk.webp";
import blomster from "../images/blomster.webp";
import Byg from "../images/byg.webp";
import Toj from "../images/Toj.webp";
import Dyr from "../images/dyr.webp";
import ex from "../images/ex.webp";
import Rejse from "../images/Rejse.webp";




function Hjemmesider() {
    return (
        <div className="container mt-3">

<br></br>
            <section id="dyk-ned-i">
                <section class="cases">
                    <h2>Dyk ned i vores tidligere casess</h2>
                    <p> Psst. Her kan du se vores arbejde med andre klienter</p>

                    <div class="dykker">
                        <img src={dyk} class="dyk" alt="dyk" width="150"></img>
                    </div> 

                    <br></br><br></br> <br></br> <br></br> 

                    <div class="row">
                        <div class="column">
                        <img src={blomster} alt="sophies" width="550"></img>
                        </div>

                        <div class="column">
                            <img src={Byg} alt="rephouse" width="550"></img>
                        </div>

                        <div class="column">
                            <img src={Toj} alt="vallios" width="550" ></img>
                        </div>

                        <div class="column">
                            <img src={Dyr} alt="animal" width="550" ></img>
                        </div>

                        <div class="column">
                            <img src={ex} alt="misolo" width="550"></img>
                        </div>

                        <div class="column">
                            <img src={Rejse} alt="travelsy" width="550"></img>
                        </div>


                    </div>

                </section>
            </section>


        </div>
    )
}

export default Hjemmesider;