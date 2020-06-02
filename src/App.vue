<template>
  <div id="app">
    <div id="nav">
      <div id="navigation">
        <ul>
          <li><router-link to="/">Home</router-link></li> 
          <li><router-link to="/covid">Covid-19</router-link></li>
          <li  @click="drawer = !drawer"><router-link to="#">Guidelines</router-link>
            <ul v-show="drawer">
             
              <li>
           
                <router-link @click="drawer = !drawer" to="/wash"> Wash your hands </router-link>
                <router-link @click="drawer = !drawer" to="/distance"> Keep your distance </router-link>
                <router-link @click="drawer = !drawer" to="/contact"> No physical contact </router-link>
                <router-link @click="drawer = !drawer" to="/clean"> Cleaning </router-link>
                <router-link @click="drawer = !drawer" to="/cough"> Cough in your sleeve </router-link>
              </li>
            </ul>
          </li>
        </ul>
       
      </div>
    </div>
    
    <router-view/>
   <footer>
      <a target="_blank" href="https://www.instagram.com/smartguidelines/?hl=da"><img src="./assets/insta_1.svg" alt=""></a> 
      <a target="_blank" href="https://www.facebook.com/Smart-Guidelines-2021385124604013/"><img src="./assets/face_1.svg" alt=""></a> 
    </footer>
  </div>
</template>


<script>
/* eslint-disable */
export default {
   data () {
    return {
      drawer: null
    }
  },
 
}
</script>

<style lang="scss">

$color-primary: #a11d2c;
$color-secondary: #000000;
$font-primary: 'PT Sans Narrow', sans-serif;
$font-secondary: 'Open Sans Condensed', sans-serif;

@mixin flexCenter($direction) {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

#app {
  text-align: center;
}

#nav {
  display: flex;
  align-items: flex-end;
  padding-left: 100px;
  height: 100px;
  width: 90%;
  position: relative;
  z-index: 999;

  a {
    font-weight: medium;
    color: $color-secondary;
    text-decoration: none;
    font-family: $font-primary;
    font-size: 25px;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}

#navigation {
  width: 40%;
}

#navigation ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}

#navigation ul li {
  transition: all 0.7s;
}
 
#navigation ul li a:hover {
   color: #a11d2c;
}

#navigation ul li ul a:hover {
  color: #a11d2c;
  transition: 0.7s;
}

#navigation ul li ul {
  display: none;
  position: absolute;
}


#navigation ul li:hover ul {
  display: block;
  background-color: #ffffff;
  width: 13%;
  padding: 10px;
  margin: 0 0 0 -7px;
}

#navigation ul li ul li a {
  display: block;
  text-align: left;
  margin-top: 10px;
  font-family: 'PT Sans Narrow', sans-serif;;
  font-weight: bold;
  font-size: 18px;
}

footer {
  height: 80px;
  margin-top: -90px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
}

footer img {
  height: 40px;
  z-index: 999;
  margin: 0 15px;
  
}

h1 {
  font-family: $font-secondary;
  color: $color-primary;
  font-size: 60px;
  margin: 0;
}

h2 {
  font-family: $font-secondary;
  color: $color-primary;
  font-size: 28px;
  margin: 0
}

p {
  font-family: $font-primary;
  color: $color-secondary;
  font-size: 22px;
  margin: 0
}


@media screen and (max-width: 600px) {
  
$color-primary: #a11d2c;
$color-secondary: #000000;
$font-primary: 'PT Sans Narrow', sans-serif;
$font-secondary: 'Open Sans Condensed', sans-serif,;

@mixin flexCenter($direction) {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

#app {
  text-align: center;
}

#nav {
  display: flex;
  align-items: flex-end;
  padding-left: 0px;
  height: 60px;
  width: 100%;
  position: relative;
  z-index: 999;

  a {
    font-weight: medium;
    color: $color-secondary;
    text-decoration: none;
    font-family: $font-primary;
    font-size: 20px;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}

#navigation {
  width: 100%;
  display: flex;
  justify-content: center;
}

#navigation ul {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}

#navigation ul li {
  transition: all 0.7s;
}
 
#navigation ul li a:hover {
   color: #a11d2c;
}

#navigation ul li ul a:hover {
  color: #a11d2c;
  transition: 0.7s;
}

#navigation ul li ul {
  // display: none;
  position: absolute;
  
}


#navigation ul li:hover ul {
  display: block;
  width: 45%;
  background-color: #ffffff;
  margin: -55px 0 0 -65px;
  padding: 50px 10px;
  height: 100vh;
}

#navigation ul li ul li a {
  display: block;
  text-align: left;
  margin-top: 25px;
  font-family: 'PT Sans Narrow', sans-serif;;
  font-weight: bold;
  font-size: 16px;
}

h1 {
  font-family: $font-secondary;
  color: $color-primary;
  font-size: 37px;
  margin: 0;
}

h2 {
  font-family: $font-secondary;
  color: $color-primary;
  font-size: 28px;
  margin: 0
}

p {
  font-family: $font-primary;
  color: $color-secondary;
  font-size: 16px;
  margin: 0
}

footer {
  height: 20px;
  margin-top: -30px;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
}

footer img {
  height: 20px;
  z-index: 999;
  margin: 0 5px;
  
}

}

@media screen and (min-width: 600px) and (max-width: 1000px) {
  $color-primary: #a11d2c;
$color-secondary: #000000;
$font-primary: 'PT Sans Narrow', sans-serif;
$font-secondary: 'Open Sans Condensed', sans-serif,;

@mixin flexCenter($direction) {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

#app {
  text-align: center;
}

#nav {
  display: flex;
  align-items: flex-end;
  padding-left: 0px;
  height: 60px;
  width: 100%;
  position: relative;
  z-index: 999;

  a {
    font-weight: medium;
    color: $color-secondary;
    text-decoration: none;
    font-family: $font-primary;
    font-size: 35px;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}

#navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
}

#navigation ul {
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}

#navigation ul li {
  transition: all 0.7s;
}
 
#navigation ul li a:hover {
   color: #a11d2c;
}

#navigation ul li ul a:hover {
  color: #a11d2c;
  transition: 0.7s;
}

#navigation ul li ul {
  // display: none;
  position: absolute;
  
}


#navigation ul li:hover ul {
  display: block;
  width: 37%;
  background-color: #ffffff;
  margin: -80px 0 0 -60px;
  padding: 70px 15px;
  height: 100vh;
}

#navigation ul li ul li a {
  display: block;
  text-align: left;
  margin-top: 25px;
  font-family: 'PT Sans Narrow', sans-serif;;
  font-weight: bold;
  font-size: 25px;
}

h1 {
  font-family: $font-secondary;
  color: $color-primary;
  font-size: 55px;
  margin: 0;
}

h2 {
  font-family: $font-secondary;
  color: $color-primary;
  font-size: 45px;
  margin: 0
}

p {
  font-family: $font-primary;
  color: $color-secondary;
  font-size: 30px;
  margin: 0
}

footer {
  height: 20px;
  margin-top: -60px;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
}

footer img {
  height: 40px;
  z-index: 999;
  margin: 0 15px;
  
}
}

</style>
