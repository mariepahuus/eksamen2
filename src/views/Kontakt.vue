<template>
<main>  
    <div id="topline"></div>
    <div id="topbox"></div>
    <div id="kolonner">
        <div id="bakterie1">
            <div id="cor1">
                <img src="../assets/corona1.svg" alt="">
            </div>
            <div id="cor2">
                <img src="../assets/corona2.svg" alt="">
            </div>
            <div id="cor3">
                <img src="../assets/corona2.svg" alt="">
            </div>
        </div>
        <div id="plakat"></div> 
        <div id="bakterie2">
            <div id="cor2">
                <img src="../assets/corona2.svg" alt="">
            </div>
            <div id="cor3">
                <img src="../assets/corona2.svg" alt="">
            </div>
            <div id="cor2">
                <img src="../assets/corona1.svg" alt="">
            </div>
        </div>
    </div>
</main>  
</template>

<script>
    export default {
        name: "Physicalcontact",
    }
</script>

<style lang="scss" scoped>

main {
    margin-top: -150px;
    height: 1235px;
    margin-left: -10px;
    width: 102%;
    background-color: #D5EDF7;
}

#topline {
    height: 100px;
    width: 100%;
    background-color: #D5EDF7;
}

#topbox {
    height: 200px;
    width: 100%;
    background-image: url("../assets/NO3.svg");
    background-repeat: no-repeat;
    background-position: 90% 20%;
    background-size: 150px;
    margin-top: -40px;
}

#plakat {
    height: 1000px;
    width: 50%;
    background-image: url("../assets/fysiskkontakt.png");
    background-color: #D5EDF7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: -25px;
}

#kolonner {
    width: 100%;
    display: flex;
}

#bakterie1 {
    width: 25%;
    background-color: #D5EDF7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

#bakterie2 {
    width: 25%;
    background-color: #D5EDF7;
     display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
}

#cor1, #cor2, #cor3 {
  width: 80%;
  display: flex;
  height: 100px;
}

#cor1 {
    justify-content: flex-end;
    align-items: center;
}

#cor2 {
    margin-left: 70px;
    align-items: center;
}

#cor3 {
    justify-content: center;
    align-items: center;
}

#cor1 img {
  height: 50px;
  -webkit-animation: scale-up-center 2s ease-in-out infinite alternate both; animation: scale-up-center 2s ease-in-out infinite alternate both;
}

#cor2 img {
  height: 60px;
  -webkit-animation: scale-up-center 3s ease-in-out infinite alternate both; animation: scale-up-center 3s ease-in-out infinite alternate both;
}

#cor3 img {
  height: 70px;
  -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}



@media screen and (max-width: 600px) { 

main {
    margin-top: -150px;
    height: 100vh;
    width: 105%;
    background-color: #D5EDF7;
}

#topline {
    height: 100px;
    width: 100%;
    background-color: #D5EDF7;
}

#topbox {
    height: 0px;
    width: 100%;
    background-image: url("../assets/NO3.svg");
    background-repeat: no-repeat;
    background-position: 90% 20%;
    background-size: 0px;
    margin-top: 50px;

}

#plakat {
    height: 600px;
    width: 99%;
    background-image: url("../assets/fysiskkontakt.png");
    background-color: #D5EDF7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 0;
}

#kolonner {
    width: 100%;
    display: flex;
}

#bakterie1 {
    width: 0%;
    background-color: #D5EDF7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

#bakterie2 {
    width: 0%;
    background-color: #D5EDF7;
     display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
}

#cor1, #cor2, #cor3 {
  width: 80%;
  display: flex;
  height: 100px;
}

#cor1 {
    justify-content: flex-end;
    align-items: center;
}

#cor2 {
    margin-left: 70px;
    align-items: center;
}

#cor3 {
    justify-content: center;
    align-items: center;
}

#cor1 img {
  height: 0px;
  -webkit-animation: scale-up-center 2s ease-in-out infinite alternate both; animation: scale-up-center 2s ease-in-out infinite alternate both;
}

#cor2 img {
  height: 0px;
  -webkit-animation: scale-up-center 3s ease-in-out infinite alternate both; animation: scale-up-center 3s ease-in-out infinite alternate both;
}

#cor3 img {
  height: 0px;
  -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}
}

@media screen and (min-width: 600px) and (max-width: 1000px) {
main {
    margin-top: -150px;
    height: 100vh;
    width: 105%;
    background-color: #D5EDF7;
}

#topline {
    height: 100px;
    width: 100%;
    background-color: #D5EDF7;
}

#topbox {
    height: 50px;
    width: 100%;
    background-image: url("../assets/NO3.svg");
    background-repeat: no-repeat;
    background-position: 90% 20%;
    background-size: 0px;
    margin-top: 50px;

}

#plakat {
    height: 825px;
    width: 100%;
    background-image: url("../assets/fysiskkontakt.png");
    background-color: #D5EDF7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 0;
}

#kolonner {
    width: 100%;
    display: flex;
}

#bakterie1 {
    width: 0%;
    background-color: #D5EDF7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

#bakterie2 {
    width: 0%;
    background-color: #D5EDF7;
     display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
}

#cor1, #cor2, #cor3 {
  width: 80%;
  display: flex;
  height: 100px;
}

#cor1 {
    justify-content: flex-end;
    align-items: center;
}

#cor2 {
    margin-left: 70px;
    align-items: center;
}

#cor3 {
    justify-content: center;
    align-items: center;
}

#cor1 img {
  height: 0px;
  -webkit-animation: scale-up-center 2s ease-in-out infinite alternate both; animation: scale-up-center 2s ease-in-out infinite alternate both;
}

#cor2 img {
  height: 0px;
  -webkit-animation: scale-up-center 3s ease-in-out infinite alternate both; animation: scale-up-center 3s ease-in-out infinite alternate both;
}

#cor3 img {
  height: 0px;
  -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}
}
</style>