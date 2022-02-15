import { Helmet } from 'react-helmet'

export const Headtag = () => {
    return (
        <Helmet>
            <title>UAE - Bareburger </title>
            <meta
                name="description"
                content="All you carnivorous, vegans and gluten-haters can come hang at our place and let us serve you all the organic and sustainable burgers, shakes and salads"
            />
            <meta
                name="author"
                content="Dhairya DOshi"
            />
            <meta
                name="keywords"
                content="Organic, Burger, UAE, Bareburger"
            />
        </Helmet>
    )
}
