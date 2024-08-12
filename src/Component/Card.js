import { useSelector } from 'react-redux';

const Card = ({ title, img, color, addCategory, removeCategory }) => {
    // State to manage border toggle
    const selectedCategories = useSelector((state) => state.categories)
    const isBorderActive = selectedCategories.includes(title);

    // Toggle border style
    const toggleBorder = () => {
        if (isBorderActive === false) {
            addCategory(title);
        } else {
            removeCategory(title)
        }

    };

    return (
        <div
            className={`flex flex-col cursor-pointer ${color} rounded-xl w-40 h-[135px] p-2 gap-2 text-xl ${isBorderActive ? 'border-4 border-green-600' : ''}`}
            onClick={toggleBorder} // Toggle border on click
        >
            <p className='text-white font-dmsans text-base'>{title}</p>
            <img src={img} alt={`${title}Image`} className='h-full' />
        </div>
    );
};

export default Card;
