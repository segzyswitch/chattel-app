<template>
	<title>Chattel - Partner with us to drive your own livelihood & more</title>
	
  <div>
    <!-- TOP HEADER -->
    <header class="navbar navbar-expand-sm">
      <div class="container">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="tel:+2348171878521"><i class="fa fa-mobile"></i> +234(817)1878 521</a></li>
          <li class="nav-item"><a class="nav-link" href="mailto:Info@chattel.com"><i class="fa fa-envelope-o"></i> Info@chattel.com</a></li>
        </ul>
      </div>
    </header>
        
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-sm sticky-top">
      <div class="container">
        <div class="navbar-header">
            <router-link class="navbar-brand" to="/"><img src="assets/images/logo.png" /></router-link>
            <a class="navbar-toggle" href="#Navbar" data-toggle="collapse">
              <span class="icon-bar"></span>  
              <span class="icon-bar"></span>  
              <span class="icon-bar"></span>  
            </a>
        </div>
        <div class="collapse navbar-collapse" id="Navbar">
            <ul class="navbar-nav ml-auto mr-auto">
              <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/services">Our Services</router-link></li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><router-link class="btn btn-block btn-login btn-sm" to="/login">Login</router-link></li>
              <li class="nav-item mr-3"></li>
              <li class="nav-item"><router-link class="btn btn-block btn-primary btn-sm" to="/sign-in">Sign Up Now</router-link></li>
            </ul>
          </div>
      </div>
    </nav>
        
    <div class="container home-slider">
      <div class="blob"></div>
      <div class="home-circle"></div>
      <img src="assets/images/delivery01.png" class="home-delivery">
      <div class="row" style="margin:auto 0;width:100%">
        <div class="home-header">
            <div class="col-md-6">
              <h1>Chattel Logistics</h1> 
              <p>Partner with us to drive your own <br /> livelihood & more</p>
              <router-link to="/sign-in" class="btn btn-primary">Sign Up Now</router-link>
            </div>
            <div class="col-md-6"></div>
        </div>
      </div>
    </div>
        
    <section class="container">
        <article class="how-it-works">
          <h4 class="section-heading"><span>How it works</span></h4>
          <div class="row">
            <div class="col-md-3">
              <div class="how-items-header">
                <img />
                <h6>Book in just 2 Tabs</h6>
              </div>
              <div class="how-items-body has-arrow">
                You need to deliver anything to anyone within 1/2 days, we are here to do that for you.
              </div>
            </div>  
            <div class="col-md-3">
              <div class="how-items-header">
                <img />
                <h6>Get a Rider</h6>
              </div>
              <div class="how-items-body has-arrow">
                Immediately your order has been processed we will get a rider to get your goods and get it delivered on time.
              </div>
            </div>  
            <div class="col-md-3">
              <div class="how-items-header">
                <img />
                <h6>Track your Goods</h6>
              </div>
              <div class="how-items-body has-arrow">
                The rider will keep you in touch of your goods till is delivered.
              </div>
            </div>  
            <div class="col-md-3">
              <div class="how-items-header">
                <img />
                <h6>Accept Goods</h6>
              </div>
              <div class="how-items-body">
              You will notified if your goods have been delivered.
              </div>
            </div>  
          </div>
        </article>
    </section>
        
    <section class="about-us">
      <div class="container">
        <h4 class="section-heading"><span>About Us</span></h4>
        <div class="row">
          <div class="col-md-7">
            <h5>Trusted Logistics Service within Nigeria</h5>
            <p>Chattel logistics is a logistics company that leverages technology to help people move tangible goods seamlessly across Lagos and other states in Nigeria. With the app, users can book dispatch service from their phones and get a rider assigned to them in record time. With just a phone number, name and password (face recognition, BVN Verification and any means of identification), you can sign up on the chattel appp and staret booking.</p>
              
            <h5 style="margin-top:30px;">Mission Statement</h5>
            <p>From inception, chattel’s mission has been to ensure that the process of logistics is a seamless and stree-free as possible. This process began with phone calls connecting people who needed to move goods with dispatch rider who could help them do it.</p>
          </div>
          <div class="col-md-5 bike-image"></div>
        </div>
      </div>
    </section>
        
    <section class="container services">
      <h4 class="section-heading text-center"><span>Our Services</span></h4>
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4 service-item">
              <div class="well text-center">
                <div class="well-auto">
                  <img src="assets/images/services/delivery.png" />
                  <h6>Delivery</h6>
                  <p>Available to deliver for you anytime.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 service-item">
              <div class="well text-center">
                <div class="well-auto">
                  <img src="assets/images/services/cable.png" />
                  <h6>TV Cable Subscription</h6>
                  <p>You can pay for your Tv Subscription at the confort of your home.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 service-item">
              <div class="well text-center">
                <div class="well-auto">
                  <img src="assets/images/services/conversion.png" />
                  <h6>Airtime2Cash</h6>
                  <p>You can sell your airtime to get cash from our site anytime.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 service-item">
              <div class="well text-center">
                <div class="well-auto">
                  <img src="assets/images/services/data-bundle.png" />
                  <h6>Data Bundle</h6>
                  <p>Buy data bundle to browse your favourite websites at affordable price.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 service-item">
              <div class="well text-center">
                <div class="well-auto">
                  <img src="assets/images/services/electricity.png" />
                  <h6>Electricity Bills</h6>
                  <p>Pay for your electricity bills without leaving the comfort of your home.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 service-item">
              <div class="well text-center">
                <div class="well-auto">
                  <img src="assets/images/services/buy-airtime.png" />
                  <h6>Airtime</h6>
                  <p>Top up your mobile airtime balance online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 service-item">
          <div class="well text-center">
            <div class="well-auto">
              <img src="assets/images/services/buy-airtime.png" />
              <h6>Ticketing: booking of flight ticket (local and international)</h6>
              <p>You can book your flight ticket both local and international easily.</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
        
    <section class="download-app">
      <router-linkrticle class="container">
        <div class="row" style="display:flex;">
          <div class="col-md-4">
            <img src="assets/images/iPhone11.png" class="download-phone" />
          </div>  
          <div class="col-md-7" style="padding:30px 0;display:flex;">
            <div class="well-auto" style="padding:15px;">
              <h4 class="text-primary" style="margin-bottom:15px;">Download the Chattel mobile application</h4> 
              <p>This is the application that allows both iPhone and Android users to request for delivery services in a matter of few clicks. This app will be available for download on iOS apple store and Google PlayStore.</p>
                
              <div class="btn-group download-btn">
                <router-link to="/" class="btn"><img src="assets/images/get-ios.png" /></router-link>
                <router-link to="/" class="btn"><img src="assets/images/get-apk.png" /></router-link>
              </div>
            </div>
          </div>
        </div>
      </router-linkrticle>    
    </section>
           
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-2 footlinks">
            <h6>Useful links</h6>
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/">About us</router-link>
            <router-link class="links" to="/">Our services</router-link>
          </div>
          <div class="col-md-2 footlinks">
            <h6>Legal</h6>
            <router-link class="links" to="/">Terms & Conditions</router-link>
            <router-link class="links" to="/">Help</router-link>
            <router-link class="links" to="/">Privacy policy</router-link>
            <router-link class="links" to="/">Cookies policy</router-link>
          </div>
          <div class="col-md-4 footlinks">
            <h6>Contact us</h6>
            <router-link class="links" to="/">Plot 58a, Block 1, Omorinre Johnson, Lekki</router-link>
            <router-link class="links" to="/">Phone Number: (+234) 817 1878 521</router-link>
            <router-link class="links" to="/">Email Address: Chattel@gmail.com</router-link>
          </div>
          <div class="col-md-4 footlinks">
            <h6>Get Our Mobile App</h6>
            <div class="row">
              <div class="col-md-6">
                <router-link to="/" class="img-link"><img src="assets/images/get-ios.png" /></router-link>  
              </div>
              <div class="col-md-6">
                <router-link to="/" class="img-link"><img src="assets/images/get-apk.png" /></router-link>  
              </div>
            </div>
            <a class="btn btn-black">Become a Rider</a>
            <a class="btn btn-black">Ride with Chattel</a>
          </div>
        </div>  
      </div>    
    </footer>
    
    
  </div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	components: {
		
	}
}
</script>