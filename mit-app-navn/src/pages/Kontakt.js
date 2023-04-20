import phone from "../images/phone.webp";



export default function Kontakt() {
    return (
        <div className="container mt-3">
            
<section id="kontakt">
    <section class="kontakt-os">
        <h2>Kontakt os</h2>
        <br></br>
        <p> Har du spørgsmål eller ønsker du at starte et samarbejde? <br></br> 
        Kontakt os via kontaktformularen eller giv os et kald!</p> <br></br>

        <p> Vi ser frem til at møde dig!</p>
        <div class="telefon-ikon">
            <img src={phone} class="tlf" alt="tlf" width="35"></img>
        </div> <br></br>
        <p> +45 12 13 14 15</p>

<br></br>
    
<div class="kontakt-container">
    <form action="action_page.php">

        <label for="navn"></label>
        <input type="text" id="navn" name="navn" placeholder="Navn..."/> <br></br>
       
        <label for="email"></label>
        <input type="text" id="email" name="email" placeholder="Email..."/> <br></br>

        <label for="dinbesked"></label>
        <textarea id="din-besked" name="din-besked" placeholder="Skriv din besked..." ></textarea>

       <br></br> <br></br>
       <div className="kontakt-knap text-center">
                    <a href="kontakt">< button id="kontakt" class="btn contact-button text-white">Send besked</button></a>
                </div>
    </form>

</div>



    </section>
    </section>

        </div>
    )
}