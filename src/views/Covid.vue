<template>
<main>
    <div id="topline"></div>
    <div id="topbox">
        <div id="header">
            <h3>YOU KNOW THE DRILL - BUT IN CASE YOU MISSED SOMETHING</h3>
             <h1>FACTS ABOUT COVID-19</h1>
         </div>
    </div>
     <div id="plakat">
         <div id="bobler">
             <img id="bak" src="../assets/bakterie_1.svg" alt="">
         </div>
     </div>
     <div id="facts">
         <div id="header2">
             <h1>FACTS</h1>
         </div>
         <div id="text">
             <p>The Coronavirus also known as Covid-19 is an infectious virus. The first case occured in December of 2019 in Wuhan, China. Since the first case in China, the virus has spread to all over the the world and has ended out in a pandemic. Worldwide there has been 4,89 mio cases reported and 323.000 people has died from the virus. 1,68 mio people has recovered. <br>
             <br>
                There are a few guidelines we can follow to reduce the risk of transmitting the disease: Wash your hands thoroughly, avoid physical contact, keep your space clean, cough and sneeze in your sleeve and keep a minimum distance of 1 meter.</p>
         </div>
     </div>
     <div id="piechart">
         <div id="header_pie">
             <h1>SO WHAT HAVE WE LEARNED?</h1>
         </div>
         <div id="piechartt">
             
         </div>
     </div>
    <div id="infomercial">
        <div id="header">
            <h1>INFOMERCIAL</h1>
        </div>
        <div id="video">
            <iframe width="80%" height="560"
                src="https://www.youtube.com/embed/QERZQ_L0AqM">
            </iframe>
        </div>
    </div>
     
</main>
</template>

<script>
</script>

<style lang="scss" scoped>

main {
    height: 3600px;
    display: flex;
    flex-wrap: wrap;
    background-color: #D5EDF7;
    justify-content: center;
    margin: -115px -10px -10px -10px;
}

#topline {
    height: 140px;
    width: 100%;
}

#topbox {
    height: 140px;
    width: 100%;
}

#header h3 {
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: lighter;
    font-size: 26.5px;
    margin: 0;
    color: #a11d2c;
}

#header h1 {
    margin-top: -10px;
}

#plakat {
    height: 900px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0px;
    background-image: url("../assets/bobler.svg");
    background-repeat: no-repeat;
    background-position: center;
}


#bobler {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
}

#bob {
    position: absolute;
    height: 900px;

    
}

#bak {
    position: absolute;
    height: 350px;
    -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}

#facts {
    width: 70%;
    height: 400px;
}

#text {
    text-align: justify;
    line-height: 1.6;
    padding-top: 40px;
}

#piechart {
    height: 750px;
    width: 70%;
}

#header_pie {
    margin-bottom: 90px;
}

#piechartt {
    background-image: url("../assets/piecharttttt.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 460px;
    width: 100%;
}

#infomercial {
    width: 100%;
    height: 800px;
}

#video {
    padding-top: 60px;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}


@media screen and (max-width: 600px) {

main {
    height: 2800px;
    display: flex;
    flex-wrap: wrap;
    background-color: #D5EDF7;
    margin: -115px -10px -10px -10px;
    justify-content: center;
}

#topline {
    height: 140px;
    width: 100%;
}

#topbox {
    height: 70px;
    width: 100%;
    padding-top: 0px;
}

#header h3 {
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: lighter;
    font-size: 16.5px;
    margin: 0;
    color: #a11d2c;
}

#header h1 {
    margin-top: -10px;
    font-size: 39px;
}

#plakat {
    height: 750px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0px;
    background-image: url("../assets/bobler.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}


#bobler {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
}

#bob {
    position: absolute;
    height: 350px;
    
}

#bak {
    position: absolute;
    height: 210px;
    -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}

#facts {
    width: 85%;
    height: 500px;
}

#text {
    text-align: justify;
    line-height: 1.6;
    padding-top: 20px;
}

#piechart {
    height: 720px;
    width: 70%;
}

#header_pie {
    margin-bottom: 30px;
}

#piechartt {
    background-image: url("../assets/piechartt.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 530px;
    width: 100%;
}

#infomercial {
    width: 100%;
    height: 350px;
}

#video {
    padding-top: 30px;
}

iframe {
    height: 200px;
    width: 90%;
}

}

</style>