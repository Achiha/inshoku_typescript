import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};
const childVariant = {
    hidden: { opacity: 0, scale: 0.9},
    visible: { opacity: 1, scale:1},
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {


    return (
        <motion.div
            variants={childVariant}
            className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
            {/* Benefit icon */}
            <div className='mb-4 flex justify-center'>
                <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                    {icon} {/* Render the icon */}
                </div>
            </div>

            {/* Benefit title */}
            <h4 className='font-bold'>{title}</h4>

            {/* Benefit description */}
            <p className='my-3'>{description}</p>

            {/* Example usage of setSelectedPage */}


            {/* AnchorLink */}
            <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                    Learn More
            </AnchorLink>
        </motion.div>
    );
};

export default Benefit;
