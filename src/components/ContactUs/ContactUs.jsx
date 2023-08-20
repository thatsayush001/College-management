import React from 'react';
import "./ContactUs.css"
import { motion } from "framer-motion";

function ContactUs() {

    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63f249c931ebfa0fe7ee1c22/1gpl70eud';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
    return (
        <motion.div
        initial={{ opacity: 0, x: "-1000px",  y: "-1000px"}}
        animate={{ opacity: 1, x:"0", y: "0px" }}
        exit={{ opacity: 1, x: "100px", y: "-1000px"}}
        transition={{ duration: 0.5 }}
        >
            <div class="contact_us_6">
                <div class="responsive-container-block container">
                    <form class="form-box">
                        <div class="container-block form-wrapper">
                            <div class="mob-text">
                                <p class="text-blk contactus-head">
                                    Get in Touch
                                </p>
                                <p class="text-blk contactus-subhead">

                                </p>
                            </div>
                            <div class="responsive-container-block" id="i2cbk">
                                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                                    <p class="text-blk input-title">
                                        FIRST NAME
                                    </p>
                                    <input class="input" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
                                </div>
                                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                                    <p class="text-blk input-title">
                                        EMAIL
                                    </p>
                                    <input class="input" id="ipmgh-3" name="Email" placeholder="Please enter email..." />
                                </div>
                                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
                                    <p class="text-blk input-title">
                                        PHONE NUMBER
                                    </p>
                                    <input class="input" id="imgis-3" name="PhoneNumber" placeholder="Please enter phone number..." />
                                </div>
                                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                                    <p class="text-blk input-title">
                                        WHAT DO YOU HAVE IN MIND ?
                                    </p>
                                    <textarea class="textinput" id="i5vyy-3" placeholder="Please enter query..."></textarea>
                                </div>
                            </div>
                            <button class="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div class="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
                        <div class="map-part">
                            <p class="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
                                Reach Us At
                            </p>
                            <p class="text-blk map-contactus-subhead">
                                IIIT Lucknow
                            </p>
                            <div class="social-media-links mob">
                                <a class="social-icon-link" href="https://twitter.com/iiit_lucknow" id="ix94i-2-2">
                                    <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
                                </a>
                                <a class="social-icon-link" href="https://www.facebook.com/iiitlucknow/" id="itixd">
                                    <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
                                </a>
                                <a class="social-icon-link" href="#" id="izxvt">
                                    <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
                                </a>
                                <a class="social-icon-link" href="https://www.instagram.com/iiitlucknow/" id="izldf-2-2">
                                    <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
                                </a>
                            </div>
                            <div class=" container-block">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2278200121605!2d81.02144971170861!3d26.800873664789428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1682262539630!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='iframe-123'></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
   



}
export default ContactUs;