import React from 'react'

function RelaxingMaterial() {
  return (
    <>
     <section>
        <div class="relaxation-main-image">

            <h2>Relaxation</h2>

        </div>
    </section>

    <main>
        <section class="relaxation-explanation">

            <p>Practicing ‘relaxation’ is paramount to managing stress. When we relax, the flow of blood increases around our body giving us more energy. It helps us to have a calmer and clearer mind which aids positive thinking, concentration, memory and decision making.</p>
            <p>Relaxation slows our heart rate, reduces our blood pressure and relieves tension. It also aids digestion as we absorb essential nutrients more efficiently when relaxed, which helps to fight off disease and infection.</p>
            <p>At Emma's Beauty Parlour we offer a range of relaxation therapies to help reduce stress levels and give your energy levels a boost.</p>

        </section>


        <section id="relaxation-price-list">

            <h2>Price List</h2>

            <div id="relaxation-table">
                <table id="relaxation-price-list">
                    <tr>
                        <th>Treatment</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td class="treatment-type">Microdermabrasion</td>
                        <td class="table-price">$40</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Aroma facial</td>
                        <td class="table-price">$35</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Reflexology</td>
                        <td class="table-price">$30</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Back massage</td>
                        <td class="table-price">$25</td>
                    </tr>
                    <tr>
                        <td class="treatment-type">Full body massage</td>
                        <td class="table-price">$35</td>
                    </tr>
                </table>
            </div>

        </section>


        <section id="client-testimonials">

            <div class="testimonial">
                <img src={"https://i.pravatar.cc/100?img=16"} alt="Avatar"/>
                <p><strong>xyz</strong></p>
                <p><em>After a long day at work, there is nothing more satisfying than an hour long massage at golden beauty to destress and forget about your troubles for a moment.</em></p>
            </div>

            <div class="testimonial">
                <img src={"https://i.pravatar.cc/100?img=5"} alt="Avatar"/>
                <p><strong>xyz</strong></p>
                <p><em>After a microdermabrasion treatment my family and friends could not get over how rejuvenated I looked...and even better I felt it as well!</em></p>
            </div>

            <div class="testimonial">
                <img src={"https://i.pravatar.cc/100?img=9"} alt="Avatar"/>
                <p><strong>xyz</strong></p>
                <p><em>The first thing I do every payday is get booked in for some well needed reflexolgy with golden beauty. If only I could do it every day!</em></p>
            </div>

        </section>

    </main>

    </>
  )
}

export default RelaxingMaterial