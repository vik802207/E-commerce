import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import RazorpayButton from '../components/RazorpayButton'; // We'll make this
import AddressForm from '../components/AddressForm';       // We'll make this too

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon === 'WELCOME100') {
      setDiscount(100);
    } else {
      alert('Invalid Coupon');
      setDiscount(0);
    }
  };

  const totalAfterDiscount = cartTotal - discount;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Address Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold text-gray-800">Shipping Address</h2>
    <button
      onClick={() => setShowAddressForm(true)}
      className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
    >
      {selectedAddress ? 'Edit Address' : 'Add Address'}
    </button>
  </div>

  {selectedAddress ? (
    <div className="space-y-1 text-gray-700 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
      <p className="font-medium text-base">{selectedAddress.name}</p>
      <p>{selectedAddress.street}</p>
      <p>
        {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.zip}
      </p>
      <p>📞 {selectedAddress.phone}</p>
    </div>
  ) : (
    <div className="text-sm text-gray-500 italic">No address selected. Please add one to proceed.</div>
  )}
</div>

        {/* Order Summary */}
 <div>
          <h2 className="text-xl font-semibold mb-4">Review your cart</h2>
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={item.image} className="w-14 h-14 object-contain rounded" />
                  <div className="text-sm">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500">x{item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-700">
                  ₹{Math.round(item.price * 80 * item.quantity)}
                </p>
              </div>
            ))}

            {/* Coupon Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Discount code"
                className="border flex-1 px-4 py-2 rounded text-sm"
              />
              <button
                onClick={applyCoupon}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                Apply
              </button>
            </div>

            <hr />

            {/* Summary */}
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹50</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Discount</span>
                  <span>- ₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-base mt-2">
                <span>Total</span>
                <span>₹{totalAfterDiscount}</span>
              </div>
            </div>

            {/* Pay Button */}
            <div className="mt-4">
              <RazorpayButton
                amount={totalAfterDiscount}
                address={selectedAddress}
                cartItems={cartItems}
              />
            </div>

            {/* Secure Note */}
            <div className="text-xs text-gray-500 flex items-center gap-2 mt-3">
              🔒 <span>Secure Checkout – SSL Encrypted</span>
            </div>
          </div>
        </div>
      </div>
  
      {/* Address Form Modal */}
      {showAddressForm && (
        <AddressForm
          onClose={() => setShowAddressForm(false)}
          onSave={(data) => {
            setSelectedAddress(data);
            setShowAddressForm(false);
          }}
        />
      )}
    </div>
  );
}
