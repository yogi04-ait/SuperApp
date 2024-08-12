import React, { useRef, useState } from 'react';
import InputField from './InputFiled';
const LoginForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: '',
    });

    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const nameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const checkboxRef = useRef();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheck = (e) => {
        setChecked(e.target.checked);
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.userName.trim()) {
            newErrors.userName = 'Username is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is not valid';
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number should be 10 digits';
        }

        if (!checked) {
            newErrors.checked = 'You must agree to share your data to proceed';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-[50%]'>
            <InputField
                name="name"
                placeholder="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                inputRef={nameRef}
            />
            <InputField
                name="userName"
                placeholder="UserName"
                type="text"
                value={formData.userName}
                onChange={handleChange}
                error={errors.userName}
                inputRef={userNameRef}
            />
            <InputField
                name="email"
                placeholder="Email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                inputRef={emailRef}
            />
            <InputField
                name="mobile"
                placeholder="Mobile"
                type="number"
                value={formData.mobile}
                onChange={handleChange}
                error={errors.mobile}
                inputRef={mobileRef}
            />
            <InputField
                name="checkbox"
                placeholder="Share my registration data with Superapp"
                type="checkbox"
                checked={checked}
                onChange={handleCheck}
                error={formSubmitted && !checked && "You must agree to share your data to proceed"}
                inputRef={checkboxRef}
            />
            <button type="submit" className='bg-customGreen cursor-pointer mt-2 text-white font-bold text-xl px-16 py-1 rounded-2xl'>
                SIGN UP
            </button>
            <div className='flex flex-col gap-2'>
                <p className='text-customGray text-xs inline-block'>By clicking on Sign up you agree to SuperApp <span className='text-customGreen cursor-pointer'>Terms and Conditions of Use</span></p>
                <p className='text-customGray text-xs'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='text-customGreen cursor-pointer'>Privacy Policy</span></p>
            </div>
        </form>
    );
};

export default LoginForm;
