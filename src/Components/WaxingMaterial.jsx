import React from 'react'

function WaxingMaterial() {
  return (
    <>
       <section>
        <div class="waxing-main-image">
            <h2>Waxing</h2>

        </div>
    </section>

    <main>
        <section class="what-is-waxing">

            <p>Waxing is a complete hair removal solution suitable for both men and women. People tend to enjoy the
                benefits of waxing because they last longer than some other types of hair removal.</p>
            <p>Waxing pulls hair from the root, which means the hair takes longer to grow back and, eventually, stops
                growing altogether. Also, waxing helps remove dead skin cells along with unwanted body hair. Its like
                getting a quick exfoliation every time. </p>
            <p>Your skin stays hair-free longer with waxing, and your hair thins out over time. If you shave, the hair
                only gets thicker and grows back rapidly. The more you shave, the more you have to shave to keep it up!
            </p>
        </section>


        <section id="waxing-price-list">

            <h2>Price List</h2>

            <div id="wax-table">
                <table id="waxing-price-list">
                    <tr>
                        <th>Treatment</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td class="treatment-type">Brows</td>
                        <td class="table-price">$6</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Chin</td>
                        <td class="table-price">$6</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Brows, lip and chin</td>
                        <td class="table-price">$14</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Underarm</td>
                        <td class="table-price">$6</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Bikini line</td>
                        <td class="table-price">$10</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Brazilian</td>
                        <td class="table-price">$25</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Hollywood</td>
                        <td class="table-price">$30</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Full leg</td>
                        <td class="table-price">$20</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">3/4 leg</td>
                        <td class="table-price">$15</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">1/2 leg</td>
                        <td class="table-price">$12</td>
                    </tr>
                </table>
            </div>


        </section>

        <section id="client-testimonials">

            <div class="testimonial">
                <img src={"https://i.pravatar.cc/100?img=49"} alt="Avatar"/>
                <p><strong>xyz</strong></p>
                <p><em>golden beauty immediately puts you at ease. their waxing is the best around!</em></p>
            </div>

            <div class="testimonial">
                <img src={"https://i.pravatar.cc/100?img=43"} alt="Avatar"/>
                <p><strong>xyz</strong></p>
                <p><em>Pain free and lasts for weeks...there's nothing else to say!</em></p>
            </div>

            <div class="testimonial">
                <img src={"https://i.pravatar.cc/100?img=45"} alt="Avatar"/>
                <p><strong>xyz</strong></p>
                <p><em>golden beauty has been waxing me for years, I would never consider another beautician.</em></p>
            </div>

        </section>

        </main>
    </>
  )
}

export default WaxingMaterial