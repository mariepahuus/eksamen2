<template>
  <div class="home">
   <div id="main">
     <div id="text_box">
       <div id="header_box">
         <h2>BACK TO SCHOOL WITH</h2>
         <h1 id="head_front">COVID-19</h1>
       </div>
       <div id="text1">
         <p>All the information you need to help reduce <br>
           the Covid-19 transmission at your school
         </p>
         <p id="quote">#togetherseparately</p>
       </div>
     </div>
     <div id="animation_box">
       <div id="co1">
          <img src="../assets/corona1.svg" alt="">
       </div>
       <div id="co2">
          <img src="../assets/corona2.svg" alt="">
       </div>
        <div id="co3">
          <img src="../assets/corona2.svg" alt="">
       </div>
     </div>
   </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@mixin flexCenter($direction) {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

  #main {
  background-image: url('../assets/baggrund2.svg');
  height: 100vh;
  background-repeat: no-repeat;
  margin: -110px -10px -10px -10px;
  display: flex;
  flex-direction: row;
  background-size: cover;

}

#text_box {
  width: 50%;
  height: 600px;
  @include flexCenter(column);
}

#text1 p {
  padding-top: 40px;
}

#head_front {
  font-size: 70px;
  margin-top: -15px;
}

#animation_box {
  width: 50%;
  height: 500px;
  @include flexCenter(row);
  flex-wrap: wrap;
}

#co1, #co2 {
  width: 50%;
  display: flex;
  align-items: flex-end;
  height: 100px;
}

#co1 {
  margin-left: -70px;
}

#co2 {
  padding-top: 70px;
}

#co3 {
  width: 100%;
  padding: 0 350px 0 0;
  height: 100px;
}

#co1 img {
  height: 40px;
  -webkit-animation: scale-up-center 2s ease-in-out infinite alternate both; animation: scale-up-center 2s ease-in-out infinite alternate both;
}

#co2 img {
  height: 60px;
  -webkit-animation: scale-up-center 3s ease-in-out infinite alternate both; animation: scale-up-center 3s ease-in-out infinite alternate both;
}

#co3 img {
  height: 50px;
  -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}

#quote {
  font-style: italic;
}


@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}





@media screen and (max-width: 600px) {

@mixin flexCenter($direction) {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

  #main {
  background-image: url('../assets/telebag2.svg');
  height: 850px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: -60px 0 0 -10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 110%;
}

#text_box {
  width: 100%;
  height: 360px;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

#text1 p {
  padding-top: 30px;
}

#animation_box {
  width: 100%;
  height: 300px;
  @include flexCenter(row);
  flex-wrap: wrap;
  margin-top: 40px;
}

#co1, #co2 {
  width: 40%;
  display: flex;
  align-items: flex-start;
  height: 50px;
}

#co1 {
  margin-left: 30px;
  margin-top: -170px;
}

#co2 {
  padding-top: 0px;
  margin-top: -80px;
  margin-right: -60px;
  width: 100px;
}

#co3 {
  width: 100%;
  padding: 0 50px 50px 0;
  height: 100px;
}

#co1 img {
  height: 30px;
  -webkit-animation: scale-up-center 2s ease-in-out infinite alternate both; animation: scale-up-center 2s ease-in-out infinite alternate both;
}

#co2 img {
  height: 50px;
  -webkit-animation: scale-up-center 3s ease-in-out infinite alternate both; animation: scale-up-center 3s ease-in-out infinite alternate both;
}

#co3 img {
  height: 40px;
  -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}

#quote {
  font-style: italic;
}


@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

}


@media screen and (min-width: 600px) and (max-width: 1000px) {
  @mixin flexCenter($direction) {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

  #main {
  background-image: url('../assets/ipadbagg.png');
  height: 935px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: -70px 0 0 -10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 110%;
}

#text_box {
  width: 100%;
  height: 530px;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

#head_front {
  font-size: 112px;
}

#text1 p {
  padding-top: 30px;
}

#animation_box {
  width: 100%;
  height: 400px;
  @include flexCenter(row);
  flex-wrap: wrap;
  margin-top: 40px;
}

#co1, #co2 {
  width: 40%;
  display: flex;
  align-items: flex-start;
  height: 50px;
}

#co1 {
  margin-left: 30px;
  margin-top: -170px;
}

#co2 {
  padding-top: 0px;
  margin-top: -80px;
  margin-right: -60px;
  width: 100px;
}

#co3 {
  width: 100%;
  padding: 0 50px 50px 0;
  height: 100px;
}

#co1 img {
  height: 30px;
  -webkit-animation: scale-up-center 2s ease-in-out infinite alternate both; animation: scale-up-center 2s ease-in-out infinite alternate both;
}

#co2 img {
  height: 50px;
  -webkit-animation: scale-up-center 3s ease-in-out infinite alternate both; animation: scale-up-center 3s ease-in-out infinite alternate both;
}

#co3 img {
  height: 40px;
  -webkit-animation: scale-up-center 2.5s ease-in-out infinite alternate both; animation: scale-up-center 2.5s ease-in-out infinite alternate both;
}

#quote {
  font-style: italic;
}


@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}


</style>
