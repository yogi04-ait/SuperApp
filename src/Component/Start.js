import Card from './Card';
import Selected from './Selected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../features/categorySlice';
import categoriesType from '../utlis/categories'; // Import the categories data
import { IoIosWarning } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Start() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    useEffect(() => {
        if (Object.keys(userData).length === 0) {
            // If userData is empty, redirect to home page
            navigate('/');
        }

    }, [userData, navigate])

    const selectedCategories = useSelector((state) => state.categories)

    const handleAddCategory = (category) => {
        dispatch(addCategory(category));
    };

    const handleRemoveCategory = (category) => {
        dispatch(removeCategory(category));
    };

    const nextpage = () => {
        if (selectedCategories.length < 3) return;
        navigate('/homepage');
    };

    return (
        <div className='flex bg-black h-screen'>
            <div className='w-[40%] flex flex-col align-middle p-10 pl-20 gap-5'>
                <h1 className='text-customGreen text-5xl mt-5 font-singleDay'>Super app</h1>
                <p className='font-roboto font-bold leading-tight inline-block mt-5 w-[300px] text-5xl text-white'>
                    Choose your entertainment category
                </p>
                <div className='flex gap-5 mt-3 flex-wrap'>
                    {selectedCategories.map(cat => (
                        <Selected key={cat} text={cat} removeCategory={handleRemoveCategory} />
                    ))}
                </div>
                {selectedCategories.length > 0 && selectedCategories.length < 3 && (
                    <div className='text-warRed flex items-center gap-2'>
                        <IoIosWarning />
                        <p>Minimum 3 categories required</p>
                    </div>
                )}
            </div>
            <div className='w-[60%] p-10 ml-32 flex flex-col gap-6 max-h-60'>
                <div className='flex flex-wrap gap-6'>
                    {categoriesType.map(({ title, img, color }) => (
                        <Card
                            key={title}
                            title={title}
                            img={img}
                            color={color}
                            addCategory={handleAddCategory}
                            removeCategory={handleRemoveCategory}
                        />
                    ))}
                </div>
                <div className='flex justify-end mr-36 mt-5'>
                    <button
                        onClick={nextpage}
                        className={`p-2 px-8 bg-customDarkGreen text-white text-sm font-semibold rounded-3xl ${selectedCategories.length < 3 ? 'cursor-not-allowed' : ''}`}
                        disabled={selectedCategories.length < 3}
                    >
                        Next Page
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Start;
