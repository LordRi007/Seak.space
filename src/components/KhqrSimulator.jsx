import React, { useState, useEffect } from 'react';
import { 
  QrCode, 
  CheckCircle2, 
  Loader2, 
  RefreshCw, 
  Sparkles, 
  ShoppingCart, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  ExternalLink,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { simulatorProducts } from '../data/portfolioData';

export default function KhqrSimulator() {
  const [selectedProduct, setSelectedProduct] = useState(simulatorProducts[0]);
  const [quantity, setQuantity] = useState(1);
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'KHR'
  const [exchangeRate] = useState(4100); // 1 USD = 4,100 KHR
  
  // Payment lifecycle: 'idle' | 'generating' | 'awaiting_payment' | 'verifying' | 'success'
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [txHash, setTxHash] = useState('');
  const [pollCountdown, setPollCountdown] = useState(0);

  const calculateTotalUSD = () => {
    return (selectedProduct.price * quantity).toFixed(2);
  };

  const calculateTotalKHR = () => {
    return Math.round(selectedProduct.price * quantity * exchangeRate).toLocaleString();
  };

  const generateKHQR = () => {
    setPaymentStatus('generating');
    // Generate simulated dynamic hash
    const fakeHash = '00020101021229' + Math.random().toString(36).substring(2, 10).toUpperCase() + 'KHQR' + Date.now().toString(36);
    setTxHash(fakeHash);

    setTimeout(() => {
      setPaymentStatus('awaiting_payment');
    }, 600);
  };

  // Simulate payment completion
  const handleSimulatePayment = () => {
    setPaymentStatus('verifying');
    setPollCountdown(3);

    const interval = setInterval(() => {
      setPollCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setPaymentStatus('success');

          // Trigger confetti burst
          try {
            confetti({
              particleCount: 80,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#06b6d4', '#10b981', '#6366f1', '#fbbf24']
            });
          } catch (err) {
            // fallback
          }
          return 0;
        }
        return prev - 1;
      });
    }, 700);
  };

  const handleReset = () => {
    setPaymentStatus('idle');
    setTxHash('');
  };

  return (
    <section id="simulator" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Signature Demo</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            NBC Bakong KHQR &amp; POS Simulator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test the real-time dynamic KHQR payment flow engineered for <strong className="text-cyan-400">AuraPOS</strong>. Select an item, generate the cryptographic QR, and simulate instant settlement.
          </p>
        </div>

        {/* Simulator Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: POS Terminal Order Selector */}
          <div className="lg:col-span-6 rounded-2xl glass-panel border border-white/10 p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">POS Cashier Checkout</h3>
                  <span className="text-[11px] font-mono text-slate-400">AuraPOS Core Engine v2.1</span>
                </div>
              </div>

              {/* Currency Toggle */}
              <div className="flex items-center bg-slate-900/80 p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 text-xs font-mono rounded ${
                    currency === 'USD'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrency('KHR')}
                  className={`px-2.5 py-1 text-xs font-mono rounded ${
                    currency === 'KHR'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  KHR (៛)
                </button>
              </div>
            </div>

            {/* Product selection grid */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Select Retail / Demo Item:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {simulatorProducts.map((p) => {
                  const isSelected = selectedProduct.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedProduct(p);
                        if (paymentStatus !== 'idle') handleReset();
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-500/15 shadow-sm shadow-cyan-500/20'
                          : 'border-white/5 bg-slate-900/40 hover:bg-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl">{p.icon}</span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                          {p.category}
                        </span>
                      </div>
                      <div className="font-semibold text-xs text-white truncate">{p.name}</div>
                      <div className="text-cyan-400 font-mono text-xs mt-1">
                        ${p.price.toFixed(2)} USD
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity and subtotal */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                        if (paymentStatus !== 'idle') handleReset();
                      }
                    }}
                    className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono text-sm font-bold text-white w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                      if (paymentStatus !== 'idle') handleReset();
                    }}
                    className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Total Payable Amount</span>
                  <div className="text-lg font-heading font-extrabold text-white">
                    {currency === 'USD' ? `$${calculateTotalUSD()} USD` : `${calculateTotalKHR()} ៛ KHR`}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-500 block">Bakong Merchant</span>
                  <span className="text-xs font-mono text-cyan-400">Sath Chhunseak Store</span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            {paymentStatus === 'idle' ? (
              <button
                onClick={generateKHQR}
                className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <QrCode className="w-4 h-4" />
                <span>Generate Dynamic Bakong KHQR</span>
              </button>
            ) : paymentStatus === 'awaiting_payment' ? (
              <div className="space-y-2">
                <button
                  onClick={handleSimulatePayment}
                  className="w-full py-3 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Simulate Customer Scan &amp; Pay</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full py-2 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Cancel / Reset Order
                </button>
              </div>
            ) : paymentStatus === 'verifying' ? (
              <div className="w-full py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2 text-sm font-mono">
                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                <span>Asynchronous MD5 Verification Polling ({pollCountdown}s)...</span>
              </div>
            ) : (
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Create Another Transaction</span>
              </button>
            )}
          </div>

          {/* Right Column: Visual KHQR Mockup Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-white text-slate-900 shadow-2xl p-6 relative overflow-hidden transition-all duration-300">
              
              {/* NBC Bakong Red Header Banner */}
              <div className="bg-[#e11d48] -mx-6 -mt-6 px-6 py-3.5 flex items-center justify-between text-white mb-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-[#e11d48] font-black text-xs">
                    KH
                  </div>
                  <span className="font-heading font-black tracking-wider text-sm">KHQR BAKONG</span>
                </div>
                <span className="text-[10px] font-mono tracking-tight bg-white/20 px-2 py-0.5 rounded">
                  NBC COMPLIANT
                </span>
              </div>

              {/* Merchant Title */}
              <div className="text-center mb-4">
                <h4 className="font-bold text-slate-800 text-sm">CHHUNSEAK POS STORE</h4>
                <p className="text-[11px] text-slate-500 font-mono">Bakong ID: chhunseak@nbc</p>
                <div className="mt-2 text-2xl font-black text-slate-900 font-heading">
                  {currency === 'USD' ? `$${calculateTotalUSD()}` : `${calculateTotalKHR()} ៛`}
                </div>
              </div>

              {/* QR Code Container */}
              <div className="relative mx-auto w-56 h-56 rounded-xl border-2 border-slate-200 p-3 bg-white flex items-center justify-center shadow-inner">
                {paymentStatus === 'idle' && (
                  <div className="text-center p-4 text-slate-400">
                    <QrCode className="w-16 h-16 mx-auto stroke-[1.2] text-slate-300 mb-2" />
                    <p className="text-xs">Select product and click Generate</p>
                  </div>
                )}

                {paymentStatus === 'generating' && (
                  <div className="text-center text-slate-600">
                    <Loader2 className="w-10 h-10 animate-spin text-[#e11d48] mx-auto mb-2" />
                    <span className="text-xs font-mono">Encoding Bakong CRC...</span>
                  </div>
                )}

                {(paymentStatus === 'awaiting_payment' || paymentStatus === 'verifying') && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Simulated SVG QR Matrix */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900">
                      {/* Corner 1 */}
                      <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="11" width="13" height="13" fill="currentColor" />
                      {/* Corner 2 */}
                      <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="76" y="11" width="13" height="13" fill="currentColor" />
                      {/* Corner 3 */}
                      <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="76" width="13" height="13" fill="currentColor" />
                      {/* Random aesthetic QR data blocks */}
                      <rect x="36" y="8" width="6" height="6" fill="currentColor" />
                      <rect x="48" y="12" width="10" height="6" fill="currentColor" />
                      <rect x="35" y="35" width="30" height="30" rx="4" fill="#e11d48" opacity="0.1" />
                      <rect x="42" y="42" width="16" height="16" rx="3" fill="#e11d48" />
                      {/* Pattern dots */}
                      <rect x="8" y="38" width="8" height="6" fill="currentColor" />
                      <rect x="20" y="48" width="8" height="8" fill="currentColor" />
                      <rect x="75" y="38" width="12" height="6" fill="currentColor" />
                      <rect x="45" y="75" width="8" height="8" fill="currentColor" />
                      <rect x="70" y="70" width="14" height="6" fill="currentColor" />
                      <rect x="82" y="82" width="8" height="8" fill="currentColor" />
                    </svg>

                    {/* Laser Scanline when verifying */}
                    {paymentStatus === 'verifying' && (
                      <div className="absolute inset-x-0 h-1 bg-[#e11d48] shadow-lg shadow-red-500/80 animate-bounce top-1/2" />
                    )}
                  </div>
                )}

                {paymentStatus === 'success' && (
                  <div className="text-center p-3 text-emerald-600 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-2 text-emerald-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h5 className="font-bold text-sm text-slate-800">Payment Approved!</h5>
                    <p className="text-[11px] text-slate-500 font-mono mt-1">
                      Bakong Settled instantly
                    </p>
                  </div>
                )}
              </div>

              {/* KHQR Footer notes */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <span className="text-[10px] text-slate-400 font-mono block">
                  {txHash ? `Hash: ${txHash.substring(0, 20)}...` : 'National Bank of Cambodia Standard'}
                </span>
              </div>
            </div>

            {/* Live production link badge */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <span>See this live in production at:</span>
              <a
                href="https://aurapos.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 underline"
              >
                aurapos.store <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Technical Architecture Bar */}
        <div className="mt-10 p-5 rounded-2xl glass-panel border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block font-semibold mb-0.5">Dynamic CRC-16 Encoding</strong>
              <p className="text-slate-400 leading-relaxed">
                Calculates strict EMVCo compliant payloads with merchant ID, currency (840 for USD / 116 for KHR), and CRC checksums.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block font-semibold mb-0.5">Cryptographic MD5 Verification</strong>
              <p className="text-slate-400 leading-relaxed">
                Polls Bakong settlement endpoints using secret salt hashes to prevent transaction forgery or spoofed status receipts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block font-semibold mb-0.5">Instant Inventory Deduction</strong>
              <p className="text-slate-400 leading-relaxed">
                Once webhook confirms payment, database triggers decrement stock units and print thermal cashier receipts automatically.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
