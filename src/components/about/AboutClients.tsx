import AboutClientSingle from "./AboutClientSingle";
import { clientsData, clientsHeading } from "@/data/clientsData";

const AboutClients = () => {
    return (
        <div className="mt-10 sm:mt-20">
            <p className="text-2xl text-center font-general-medium sm:text-3xl text-primary-dark dark:text-primary-light">
                {clientsHeading}
            </p>
            <div className="grid grid-cols-2 gap-2 mt-10 sm:grid-cols-4 sm:mt-14">
                {clientsData.map((client) => (
                    <AboutClientSingle
                        title={client.title}
                        image={client.img}
                        key={client.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutClients;
