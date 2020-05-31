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

}



</style>
