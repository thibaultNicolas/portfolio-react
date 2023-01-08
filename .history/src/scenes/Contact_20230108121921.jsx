import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import {useForm} from 'react-hook-form';

const Contact () => {
    const {
        register,
        trigger,
        formState: {error}
    } = useForm();
};

export default Contact;