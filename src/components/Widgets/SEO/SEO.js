import React from "react";
import Head from "next/head";

const SEO = (props) => {
    
    const { title, description, image, children } = props;
    return (
        <Head>
            <title>{title || "Dođi na bakset"}</title>
            <meta name="description" content={description || `"Dođi na basket - K3" je kreativni i inovativni 3x3 turnir koji želi da unapredi sportsku scenu u Zaječaru.`} />
            <meta itemProp="name" content={title || "Dođi na bakset"} />
            <meta name="author" content="Zdravković Nikola, Aleksa Arsić" />
            <meta name="keywords" content="Basket, Kosarka, Košarka, Ključ 3, Kljuc 3, Kljuc, Ključ, Turnir, Nagrade"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta itemProp="description" content={description || `"Dođi na basket - K3" je kreativni i inovativni 3x3 turnir koji želi da unapredi sportsku scenu u Zaječaru.`} />
            <meta itemProp="image" content={image || "/images/dodjinabasket.png"} />
            
            {/* <!-- Geo Positioning Meta Tags. --> */}
            <meta name="geo.position"  content="43.910107;22.267103" />
            <meta name="geo.region"    content="RS" />
            <meta name="geo.placename" content="Zaječar, Serbia" />
            <meta name="ICBM"          content="43.910107, 22.267103" />
            <meta name="DC.title"      content="Zajecar" />

            {/* <!-- Open Graph eta Tags (ogp.me) --> */}
            <meta property="og:image"            content="/images/dodjinabasket.png"/>
            <meta property="og:image"            content="/images/dodjinabasket.png"/>
            <meta property="og:site_name"        content="Dođi na basket"/>
            <meta property="og:title"            content="Dođi na basket"/>
            <meta property="og:description"      content={`"Dođi na basket - K3" je kreativni i inovativni 3x3 turnir koji želi da unapredi sportsku scenu u Zaječaru.`}/>
            <meta property="og:type"             content="website"/>
            <meta property="og:url"              content="https://dodjinabakset.com" />
            <meta property="og:locale"           content="sr_RS"/>
            <meta property="og:locale:alternate" content="sr_RS"/>
            <meta property="og:latitude"         content="43.910107"/>
            <meta property="og:longitude"        content="22.267103"/>
            <meta property="og:street-address"   content="Požarevačka, Zaječar"/>
            <meta property="og:locality"         content="Zaječar"/>
            <meta property="og:region"           content="Zaječar"/>
            <meta property="og:postal-code"      content="11000"/>
            <meta property="og:country-name"     content="RS"/>
            <meta property="og:email"            content="dodjinabasket23@gmail.com"/>

            {/* <!-- Twitter Meta Tags. --> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="dodjinabasket.com" />
            <meta name="twitter:url" content="https://dodjinabasket.com" />
            <meta name="twitter:title" content="Dođi na basket" />
            <meta name="twitter:description" content={`"Dođi na basket - K3" je kreativni i inovativni 3x3 turnir koji želi da unapredi sportsku scenu u Zaječaru.`} />
            <meta name="twitter:image" content="/images/dodjinabasket.png" />

            {children}
        </Head>
    );
};

export default SEO;