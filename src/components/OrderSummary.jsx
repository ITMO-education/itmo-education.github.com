import { useSelector } from 'react-redux';
import {
	selectItemsInCart,
	selectTotalPrice,
} from '../features/cart/cartSlice';

const OrderSummary = ({}) => {
	const cartItems = useSelector(selectItemsInCart);
	const totalPrice = useSelector(selectTotalPrice);
	const discount = (totalPrice * 0.1) / 100;
	const deliveryCharges = (totalPrice * 0.05) / 100;
	const totalAmt = totalPrice / 100 + deliveryCharges - discount;

	return (
		<div className='basis-5/12 h-fit sticky top-40 p-8 rounded-md border shadow-md my-8 md:m-0'>
			<h2 className='text-xl font-bold border-b pb-4'>Order Summary</h2>

			{/* order details */}
			<div className='py-4 text-lg space-y-4 border-b'>
				<div className='flex justify-between items-center font-semibold'>
					<p className='font-normal'>Price ({cartItems.length} items)</p>
					<p>₽ {totalPrice / 100}</p>
				</div>
				<div className='flex justify-between items-center font-semibold'>
					<p className='font-normal'>Discount (10%)</p>
					<p> - ₽ {parseFloat(discount).toFixed(2)}</p>
				</div>
				<div className='flex justify-between items-center font-semibold'>
					<p className='font-normal'>Delivery charges (5%)</p>
					<p>+ ₽ {parseFloat(deliveryCharges).toFixed(2)}</p>
				</div>

				<p className='text-sm my-2'>
					You'll save ₽{parseFloat(discount).toFixed(2)} on this order 🎉
				</p>
			</div>

			<div className='py-4 border-b'>
				<div className='md:flex justify-between items-center font-bold text-lg md:text-2xl'>
					<h1>Total Amount</h1>
					<h1 className='text-orange-500'>
						₽ {parseFloat(totalAmt).toFixed(2)}
					</h1>
				</div>
			</div>

			<button
				className='w-full block mt-4 uppercase font-bold text-lg bg-orange-600 text-white text-center p-4 rounded-md'
				onClick={() => {
					const exp = localStorage.getItem("ya-da-experiment")
					switch (exp) {
						case 2:
							ym(95214851,'reachGoal','tt_order_b')
							break
						case 3:
							ym(95214851,'reachGoal','tt_order_c')
							break
						default:
							ym(95214851, 'reachGoal', 'tt_order')
					}
					alert('Заказ создан. С вашей карты уже удержано ' + parseFloat(totalAmt).toFixed(2) + '₽')
				}
				}
			>
				Заказать
			</button>
		</div>
	);
};

export default OrderSummary;
