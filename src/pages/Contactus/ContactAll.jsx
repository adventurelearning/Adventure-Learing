import Connect from "../../components/Connect";
import Contact from "../../components/Contact";
import ContactForm from "../../components/ContactForm";
import { Helmet } from "react-helmet";

function ContactAll() {
    return (
        <>
            <Helmet>
                <title>Contact Us | Get in Touch with Adventure Learning</title>
                <meta
                    name="description"
                    content="Get in touch with Adventure Learning, Coimbatore. Contact us for IT courses, training details, admissions, and placement support. We’re here to help you"
                />
                <meta
                    property="og:title"
                    content="Connect with Adventure Learning – We're Here to Help"
                />
                <meta
                    property="og:description"
                    content="Reach out to our team for assistance with course details, training programs, or partnership opportunities. Let’s build your learning journey together."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.adventurelearning.in/contact"
                />
                <meta property="og:image" content="/assets/logo-dark-BujUEHab.svg" />
                <meta
                    property="og:image:alt"
                    content="Adventure Learning Contact Page"
                />
            </Helmet>
            <Connect />
            <ContactForm />
            <Contact />


        </>
    )
}
export default ContactAll;