import PageHeader from "@src/components/PageHeader";
import SocialIcons from "@src/components/SocialIcons";
import Form from "@src/components/Form";
import ContactInfo from "@src/components/ContactInfo";
import { useContext } from "react";
import { Context } from "@src/context";
import {GetStaticProps } from 'next';

const Contact = () => {
    const data = useContext(Context).info;
    const name = `${data.firstName} ${data.lastName}`;
    const email = data.email;
    const location = data.address;
    return (
        <section className="contact">
            <PageHeader
                title="Contact"
                description="Get in touch"
            />
            <div className="contactWrap container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <Form />
                    </div>
                    <div className="col-12 col-lg-6">
                        <ContactInfo
                            name={name}
                            location={location}
                            email={email}
                        />
                    </div>
                </div>
            </div>
            <SocialIcons />
        </section>
    );
};


export const getStaticProps: GetStaticProps = async (ctx) =>{
    return {
        props:{

        }
    }
}

export default Contact;
