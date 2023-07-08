import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

function Item({ icon, title }: { icon: React.ReactElement; title: string }) {
    return (
        <li className="flex ">
            <i className="mr-4 text-2xl text-gray-500 dark:text-gray-400">
                {icon}
            </i>
            <span className="mb-4 text-lg break-words break-all text-ternary-dark dark:text-ternary-light">
                {title}
            </span>
        </li>
    );
}
export interface Props {
    email: string;
    address: string;
    phone: string;
}
const ContactDetails = (props: Props) => {
    return (
        <div className="max-w-xl px-4">
            <h2 className="mt-12 mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
                Contact details
            </h2>
            <ul className="font-general-regular">
                {props.email && (
                    <Item
                        icon={<FiMail />}
                        title={props.email}
                    />
                )}
                {props.address && (
                    <Item
                        icon={<FiMapPin />}
                        title={props.address}
                    />
                )}
                {props.phone && (
                    <Item
                        icon={<FiPhone />}
                        title={props.phone}
                    />
                )}
            </ul>
        </div>
    );
};

export default ContactDetails;
