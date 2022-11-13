
import { useParams } from 'react-router-dom';
import MealData from '../../../FakeData';
import FoodDetails from '../FoodDetails/FoodDetails';

const Food = () => {

    const { foodId } = useParams();
    const food = MealData.find(pd => pd.id === parseInt(foodId));


    return (
        <div>

            <FoodDetails food={food} ></FoodDetails>
        </div>
    );
};

export default Food;