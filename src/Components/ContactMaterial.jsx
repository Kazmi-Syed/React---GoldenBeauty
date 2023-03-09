import React from 'react'

function ContactMaterial() {
  function confirmSent(){
    alert("Your query has been submitted");
    }
  return (
    <>
    <main>
        <section id="contact-form">
            <div class="contact">
                <form action="https://formdump.codeinstitute.net" method="POST" class="contact-form" onsubmit="confirmSent()">
                    <h2>Get in touch</h2>

                    <label for="fname">First name</label>
                    <input type="text" id="fname" class="text-input" name="first_name" required/>

                    <label for="lname">Last name</label>
                    <input type="text" id="lname" class="text-input" name="last_name" required/>

                    <label for="email">Email address</label>
                    <input type="text" id="email" class="text-input" name="email_address" required/>

                    <fieldset>
                    <legend>Please select your query topic</legend>
                    <div class="query-options">
                    <input type="radio" name="query-topic-nails" id="nails" required/>
                    <label for="nails">Nails</label>

                    <input type="radio" name="query-topic-waxing" id="waxing" required/>
                    <label for="waxing">Waxing</label>

                    <input type="radio" name="query-topic-relaxation" id="relaxation" required/>
                    <label for="relaxation">Relaxation</label>

                </div>
                    </fieldset>

                    <label id="comment-title" for="comment-box">Query details</label>
                    <textarea name="comment-box" id="comment-box" placeholder="Please enter your query details here"></textarea>

                    <input type="submit" class="submit-button" value="Submit" aria-label="Submit your query" />

                </form>
            </div>
            
        </section>
    </main>
    </>
  )
}

export default ContactMaterial