import { useParams } from 'react-router-dom';

import RestaurantInfo from '../components/RestaurantInfo';
import ShimmerRestaurant from '../components/shimmers/ShimmerRestaurant';
import RestaurantMenu from '../components/RestaurantMenu';
import useRestaurantsMenu from '../hooks/useRestaurantsMenu';

const Restaurant = () => {
  const { id } = useParams();
  const { restaurant, isLoading } = useRestaurantsMenu(id);

  const exp = localStorage.getItem("ya-da-experiment")

  switch (exp) {
    case 1:
      ym(95214851, 'reachGoal', 'restorant_tto_b')
      break
    default:
      ym(95214851, 'reachGoal', 'restorant_tto')
      break
  }

  return (
    <div className='container-md my-8'>
      {isLoading ? (
        <ShimmerRestaurant />
      ) : (
        <>
          <RestaurantInfo info={restaurant?.cards[0]?.card?.card?.info} />
          <RestaurantMenu
            menu={
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            }
          />
        </>
      )}
    </div>
  );
};
export default Restaurant;
