/* global Razorpay */
export default function RazorpayButton({ amount, address, cartItems }) {
  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = () => {
      const options = {
        key: 'rzp_test_ZOt9n5CnF4YG2Z', 
        amount: amount * 100, // in paise
        currency: 'INR',
        name: 'My E-Commerce Store',
        description: 'Order Payment',
        handler: function (response) {
          alert(`✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
          // Save order to DB here (optional)
        },
        prefill: {
          name: address?.name,
          contact: address?.phone,
        },
        notes: {
          address: `${address?.street}, ${address?.city}`,
        },
        theme: {
          color: '#1d4ed8',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };

    document.body.appendChild(script);
  };

  return (
    <button
      onClick={loadRazorpay}
      disabled={!address || cartItems.length === 0}
      className={`w-full py-2 px-6 rounded text-white font-semibold transition ${
        !address || cartItems.length === 0
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-green-600 hover:bg-green-700'
      }`}
    >
      Pay ₹{amount}
    </button>
  );
}
