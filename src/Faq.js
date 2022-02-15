import React from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Helmet } from 'react-helmet'
const Styles = styled.div`
    .card{
        background-color: transparent;
        border-width: 1px 0 0 0;        
    }

    .card-header{
        background-color: transparent;
    }

    .btn-link{
        color: black;
    }

    .card-header{
        @media(min-width: 300px) and (max-width: 720px){
            text-align:center;
            padding: 0.75rem 0.25rem;
        }
    }

    .h5, h5{
        font-weight:600;

        @media(min-width: 300px) and (max-width: 768px){
            font-size: 0.75rem;
        }
    }

`;

const FaqCard = props => {
    const faqheader = props.header
    const faqEventNo = props.eventNo
    const faqBody = props.body

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={faqEventNo}>
                    <h5>{faqheader} </h5>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={faqEventNo}>
                <Card.Body>
                    {faqBody}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export const Faq = () => (
    <Styles>
        <Helmet>
            <title>Question - Bareburger</title>
            <meta
                name="description"
                content="Our sustainability efforts go beyond our food. Do you have question about our ingredients and restaurant ? Check our FAQ "
            />
            <meta
                name="author"
                content="Dhairya DOshi"
            />
            <meta
                name="keywords"
                content="Organic, Burger, UAE, Bareburger, order online, FAQ, Questions, Doubts"
            />
        </Helmet>

        <Jumbotron>

            <h1 className="display-3">FAQ</h1>
            <br />
            <h1 className="display-4">General</h1>

            <Accordion>
                <FaqCard
                    header="IS BAREBURGER 100% ORGANIC?"
                    eventNo="0"
                    body={[<p key="0" className="lead"> No, Bareburger is NOT 100% organic. However, many of our ingredients are organic whenever possible, and if they are not, they are all-natural, clean and always delicious!  For more info jump on over to the ingredients listed below on this FAQ.</p>]}
                />
                <FaqCard
                    header="DOES BAREBURGER HAVE A 100% VEGAN MENU? "
                    eventNo="1"
                    body={[<p key="1" className="lead"> YES! We proudly do. You name it and we have it to make your meal vegan as clean as it can possibly be. At this point, we are one of the largest vegan restaurants in the country. <br /> You can build over 11 million vegan burgers. What’s your combo? </p>]}
                />
                <FaqCard
                    header="WHERE CAN I FIND MORE NUTRITIONAL INFORMATION ON BAREBURGER?"
                    eventNo="2"
                    body={[<p key="2" className="lead"> Good question! We label our menus with calories, but you can also go to our On our digital menu. You look great by the way! </p>]}
                />
                <FaqCard
                    header="WHAT IF I HAVE AN ALLERGY OR DIETARY RESTRICTION?"
                    eventNo="3"
                    body={[<p key="3" className="lead"> Absolutely! Just let us know and we’ll make sure there is something for you. At Bareburger, we label our menus with V’s (vegan), GF’s (gluten-free**) & N’s (contains nuts), send alerts to the kitchen and use separate grills, fryers, gloves, containers & surfaces to ensure guests are protected against allergies or dietary restrictions.  Also, we have this pretty sweet Allergy Chart that you can look at any time. Just ask a server! <br /> <b>  NB: Bareburger foods that are labeled Gluten free are prepared in a common kitchen with the risk of gluten exposure. Therefore, Bareburger DOES NOT recommend these items for guests with celiac disease. Guests with gluten sensitivities should exercise judgment in consuming those foods.</b> </p>]}
                />
                <FaqCard
                    header="DOES BAREBURGER CATER?"
                    eventNo="4"
                    body={[<p key="4" className="lead"> Yes we sure do! You can start your next catering order at <a href="/"> Bareburger | https://www.bareburger.ae </a> or by reaching out to your local Bareburger!</p>]}
                />

                <br />
                <h1 className="display-4">Ingredients</h1>
                <FaqCard
                    header="WE ARE HAPPY TO SUPPORT LOCAL & GLOBAL FOOD ARTISANS LIKE"
                    eventNo="5"
                    body={[<p key="5" className="lead">Greenheart  | 	Beyond Meat  | 	La Brioche  | 	Rastelli Ranchers  | 	The Cut  | 	Obe Organic  | 	Organic Foods and Café  | 	Roussos  | 	Galvanina  | 	Boon Café  | 	Tawa bakery   | 	Moving Mountains  | 	KoitaMilk   </p>]}
                />
                <FaqCard
                    header="ORGANIC BEEF "
                    eventNo="6"
                    body={[<p key="6" className="lead">Origin: <b>Australia</b> <br /> Brand: <b>Obe Beef</b> <br /> 100% Certified organic chuck & Brisket, grass-fed, 85%-90% lean  </p>]}
                />
                <FaqCard
                    header="HEREFORD PRIME BEEF "
                    eventNo="7"
                    body={[<p key="7" className="lead">Origin: <b>Poland</b> <br /> Brand: <b>Rastelli Ranchers</b> <br /> all-natural, hormone-free, antibiotic-free, 80%-83% lean   </p>]}
                />
                <FaqCard
                    header="CAMEL "
                    eventNo="8"
                    body={[<p key="8" className="lead">Origin: <b>United Arab Emirates</b> <br /> hormone free, antibiotic free, 80%-85% lean  </p>]}
                />
                <FaqCard
                    header="VENISON "
                    eventNo="9"
                    body={[<p key="9" className="lead">Origin: <b>New Zealand</b> <br /> Brand: <b>First Light Foods</b> <br /> pasture raised hormone-free, antibiotic-free, 90% lean </p>]}
                />
                <FaqCard
                    header="CHICKEN"
                    eventNo="10"
                    body={[<p key="10" className="lead">Origin: <b>Belgium</b> <br /> Free range, hormone-free, antibiotic-free. </p>]}
                />
                <FaqCard
                    header="VEGAN PATTY "
                    eventNo="11"
                    body={[<p key="11" className="lead">Home made with certified Organic ingredients  </p>]}
                />
                <FaqCard
                    header="BEYOND SAUSSAGE "
                    eventNo="12"
                    body={[<p key="12" className="lead">38% less saturated fats & 43% less total fat than regular sausage, non-GMO, peas, fava bean </p>]}
                />
                <FaqCard
                    header="BEYOND BURGER "
                    eventNo="13"
                    body={[<p key="13" className="lead">20 grams of protein per 4oz serving <br /> • non-GMO • antibiotic-free • hormone-free • beets • green peas • potatoes  </p>]}
                />
                <FaqCard
                    header="VEGETABLES. "
                    eventNo="14"
                    body={[<p key="14" className="lead">Producer: <b>Greenheart</b> <br />All vegetables are organic locally sourced.  </p>]}
                />
                <FaqCard
                    header="AGED CHEDDAR CHEESES "
                    eventNo="15"
                    body={[<p key="15" className="lead">100% dairy, 8months aged with vegetable rennet. </p>]}
                />
                <FaqCard
                    header="VEGAN CHEESES "
                    eventNo="16"
                    body={[<p key="16" className="lead">100% free from GMO, preservatives, casein, lactose, whey, gluten, eggs, soy & nuts.</p>]}
                />
                <FaqCard
                    header="FETA"
                    eventNo="17"
                    body={[<p key="17" className="lead">Origin: <b>Greek </b> <br />Organic goat & sheep milk  </p>]}
                />
                <FaqCard
                    header="SAUCES - All our sauces are made with non-GMO ingredients & organic tomatoes "
                    eventNo="18"
                    body={[<p key="18" className="lead">Ketchup - Organic <br /> Buffalo Sauce – GMO free Home Made <br />Stone Mustard - Organic <br /> Smoke Sauce – GMO free   <br /> Habanero Mayo - GMO free Home Made <br /> Special Sauce – GMO free Home Made <br /> Buttermilk Ranch - GMO free Home Made  <br /> Garlic Aioli – GMO free Home Made  </p>]}
                />
                <FaqCard
                    header="BREAD & BUNS "
                    eventNo="19"
                    body={[<p key="19" className="lead">all natural, handcrafted, home made  </p>]}
                />
                <FaqCard
                    header="GLUTEN FREE BUN "
                    eventNo="20"
                    body={[<p key="20" className="lead">handcrafted, and vegan made by our friend <b>Tawa bakery </b>  </p>]}
                />
                <FaqCard
                    header="PICKLES"
                    eventNo="21"
                    body={[<p key="21" className="lead">Home made with Organic Cucumber . </p>]}
                />
                <FaqCard
                    header="BEEF BACONS "
                    eventNo="22"
                    body={[<p key="22" className="lead"> uncured smoked beef bacon, hormone-free, antibiotic-free  </p>]}
                />
                <FaqCard
                    header="SWEET FRIES "
                    eventNo="23"
                    body={[<p key="23" className="lead">all natural non-coated </p>]}
                />
                <FaqCard
                    header="FRENCH FRIES "
                    eventNo="24"
                    body={[<p key="24" className="lead">Idaho russets potato, all Natural Non-Coated </p>]}
                />
                <FaqCard
                    header="SODAS "
                    eventNo="25"
                    body={[<p key="25" className="lead">Galvanina, organic. </p>]}
                />
                <FaqCard
                    header="COFFEE "
                    eventNo="26"
                    body={[<p key="26" className="lead">Locally Roasted by Boon coffee, Organic and  fair-trade. </p>]}
                />
                <FaqCard
                    header="DESSERTS "
                    eventNo="27"
                    body={[<p key="27" className="lead">all-natural, home baked goods. </p>]}
                />
                <FaqCard
                    header="ICE CREAM  "
                    eventNo="28"
                    body={[<p key="28" className="lead">Artisanal Organic Ice cream. </p>]}
                />
            </Accordion>
        </Jumbotron>
    </Styles>
)