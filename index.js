document.getElementById('contentheader').innerHTML =
`<a id="logo"href="#"><img src="imagens/Group.png"></a>
<nav id="nav">
    <button id="btn-mobile">
        <span id="hamburguer"></span>
    </button>

    <ul id="menu">
        <li><a href="#tres">Features</a></li>
        <li><a href="#pedaco-4">Services</a></li>
        <li><a href="#dados">Contacts</a></li>
        <li>
            <button class="botaoheader">
                <a href="#">Get a demo</a>
            </button>
        </li>                 
    </ul>

</nav>  
`

document.getElementById ('pedaco-1').innerHTML = 
`<div id="um">
    <h1 id="pri">Find the right partners to fuel your business growth</h1>
    <h1 id="seg">Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences</h1>
</div>

<div id="dois">
    <img src="imagens/PartnerHeroImageLeft.png" alt="">
    <a href=""><button>Register today</button></a>  
    <img src="imagens/PartnerHeroImageRight.png" alt="right">
</div>`



document.getElementById ('pedaco-2').innerHTML = 
`<div id="tres">
    <h1>List. Sell. Grow</h1>
</div>

<div id="quatro">
    <div class="icon">
        <img src="imagens/Ellipse 28.png">
        <p class="texticon">Be a part of the only  All-In-One platform for IT </p>
    </div>

    <div class="icon">
        <img src="imagens/icon2.png">
        <p class="texticon">Come closer to finding your next customer </p>
    </div>

    <div class="icon">
        <img src="imagens/icon3.png">
        <p class="texticon">Grow your business with a single click</p>
    </div>

</div> `

document.getElementById('pedaco-3').innerHTML = 
`<div id="cinco">
    <h1  class="tituloz">Your channel program on steroids </h1>
    <p class="texticon">Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.</p>
</div>

<div id="imagem1">
    <img src="imagens/figure1.png" alt="foto">
</div>`


document.getElementById ('pedaco-4').innerHTML =
`<div id="imagem2">
    <img  src="imagens/figure2.png" alt="foto">
</div>

<div id="seis">
    <div id="seisum">
        <h1 class="tituloz">Become the vendor everyone wants to buy from</h1>
        <p class="texticon">Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!</p>
    </div>
        

    <div id="sign">
        <h1 id="sign">Signup now</h1>
        <img id="seta" src="imagens/Right menu Arrow.png" alt="seta">
    </div>

</div> `

document.getElementById ('pedaco-5').innerHTML = 
`<div id="imagem3">
    <img  src="imagens/figure3.png" alt="foto">
</div>

<div id="sete">
    <div id="seteum">
        <h1 class="tituloz">It’s like having Your <br> best <br>
                Salesman on autopilot</h1>
        <p class="texticon">Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.</p>
    </div>

    <div id="sign">
        <h1 id="sign">Signup now</h1>
        <img id="seta" src="imagens/Right menu Arrow.png" alt="seta">
    </div>
</div>`


document.getElementById ('pedaco-6').innerHTML=
`<div id="imagem4">
    <img src="imagens/figure4.png" alt="grafico">
</div>

<div id="oito">
    <div id="oitoum">
        <h1 class="tituloz">Track your channel performance</h1>
        <p class="texticon">Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.</p>
    </div>

    <div id="sign">
        <h1 id="sign">Signup now</h1>
        <img id="seta" src="imagens/Right menu Arrow.png" alt="seta">
    </div>

</div>`

document.getElementById('dados').innerHTML = 
`
<div class="linhafooter">
    <div id="infos">
        <h1>Product</h1>
        <p>Features</p>
        <p>Pricing</p>
        <p>Integrations</p>
        <p>Product</p>
    </div>


    <div id="infos">
        <h1>Company</h1>
        <p>About us</p>
        <p>Contact us</p>
        <p>Submit a ticket</p>
        <p>Privacy policy</p>
        <p>Terms & conditions</p>
    </div>
</div>

<div class="linhafooter2">

    <div id="infos">
        <h1>Guides</h1>
        <p>MSP</p>
        <p>MSP Sales</p>
    </div>

    <div id="infos">
        <h1>Contact Us</h1>
        <p>Adress</p>
    </div>
</div>`

















const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type==='touchstart') event.preventDefault();
    const nav = document.getElementById ('nav')
    nav.classList.toggle('active');
} 

btnMobile.addEventListener ('click', toggleMenu)
btnMobile.addEventListener ('touchstart', toggleMenu)


let year = new Date().getFullYear();
document.getElementById("data").innerHTML = `© 2020-${year} Pactora Inc. All rights reserved.`