import React from 'react'
import emailjs from 'emailjs-com';

import './Query.css'

import ScrollToTop from "../components/Scroll/ScrollToTop";


function Query() {

   

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(`service_2iz1tfc`, `template_t2cz6xk`, e.target, `user_rRkoNzMx64OU2XpJPrt6d`)
            .then((result) => {
                alert('query send sucessfully we will contact you soon')
                // console.log(result.text);
            }, (error) => {
                alert('some error occured')
                // console.log(error.text);
            });
        e.target.reset()
    }

  


    return (
        
        <>
        
            <ScrollToTop></ScrollToTop>
            <div className="queryContainer">

                <article className="mw6 center br3 pa3 pa4-ns mv3 "  >
                    <main className="pa4 br4 black-80" style = {{background : 'white' , boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="measure ">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <legend className="f1 fw6 ph0 mh0">YOUR DETAILS</legend>
                                    <div className="mt3">
                                        <label className="db fw7 lh-copy f6" htmlFor="name">NAME</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent  hover-black w-100" type="text" name="name" id="name"
                                                required
                                        />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw7 lh-copy f6" htmlFor="email-address">Email</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent  hover-black w-100" type="email" name="email-address" id="email-address"
                                            required
                                        />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw7 lh-copy f6" htmlFor="branch">Message</label>
                                        <textarea className=" pa2 input-reset ba bg-transparent  hover-black w-100" type="" name="message" id="branch"
                                                required
                                        />
                                    </div>

                                </fieldset>
                                <div className="">
                                    <input

                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"

                                    />
                                </div>

                            </div>
                        </form>
                    </main>

                </article>
            </div>
            

        </>
    )
}

export default Query
