export default function Forside() {
    return (
        <div className="container mt-3">
            <div className="welcome-section text-center"> <br></br> <br></br> <br></br>
                <h1 class="text-center welcome-to">Velkommen til</h1>

                <img src="images/logo.webp" width="400" className="logo-img" alt="trueweb logo" />
                <img src="images/tekst2.gif" width="1000"></img> 
       <br></br>
                <img src="images/down-arrow.png" width="50" className="mt-4" />
            </div> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>


            <section id="hvem-er-vi">
                <section className="vi-er">
                    <div class="illustration-pcpige">
                    </div>
                    <div class="vi-er-tekst">
                        <div class="container">
                            <div class="row align-items-start">
                                <div class="col">
                                    <h2>Hvem er vi?</h2> <br></br>
                                    <p>Vi er TrueWeb - et webbureau med en nytænkende og legende tilgang.
                                        Vi specialisere os særligt inden for design og er klar til at løbe stærkt for din kommende hjemmeside.
                                        <br /> <br />Vi stræber efter at lave lækre, brugervenlige hjemmesider, med en bæredygtig vinkel,
                                        så vi sammen kan bidrage til en fremtid, der udleder mindre CO2.
                                    </p> <br></br>
                                    <div class="læs-mere-knap">
                                        <a href="omos"><button id="læs-mere" className="btn read-more-button text-white">Læs mere</button></a>
                                    </div>
                                </div>
                                <div className="col">
                                    <img src="images/illustrationomos.webp" className="illustration-pc-mand" alt="tæt-på" width="450" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <br></br>

            <section id="hvem-er-vi">
                <section className="vi-er">
                    <div className="vi-er-tekst">

                        <div className="">
                            <div className="row">
                                <div className="col">
                                    <img src="images/illustration2.webp" className="illustration-pc-mand" alt="tæt-på" width="450" />
                                </div>

                                <div class="col order-1 mt-5">
                                    <h2>Lad os sammen tage et skridt tættere på en mere bæredygtig fremtid</h2> <br></br>
                                    <p>På en gennemsnitlig hjemmeside, med 10.000 besøgende om måneden, udledes over 2 tons CO2.
                                        Det svarer til at køre fra Aarhus til Rom og tilbage igen, to gange… <br></br>
                                        <br />Synes du også det lyder helt vildt?
                                        <br />Hos TrueWeb skaber vi flotte, brugervenlige OG <br />mere miljøvenlige hjemmesider.
                                        <br /><br />Det lyder ret godt ikke?
                                        <br />Tøv ikke med at kontakte os for et uforpligtende tilbud.
                                        <br /><br />Sammen tager vi et skridt tættere på
                                        <br />en mere bæredygtig fremtid.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>

            <section className="forandring-starter-her mt-5">
                <div className="forandring-tekst text-center">
                    <h1 className="mt-5">Forandring starter her!</h1>
                </div> <br></br>

                <div className="kontakt-knap text-center">
                    <a href="kontakt">< button id="kontakt" class="btn contact-button text-white">Kontakt</button></a>
                </div>
            </section>





        </div>

    )
}