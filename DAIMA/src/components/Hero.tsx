import { ArrowRight, Smartphone } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Demo Educational Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Instant Phone Loans up to{' '}
              <span className="text-yellow-300">Ksh 500,000</span> in Just 15
              Minutes
            </h1>

            <p className="text-xl md:text-2xl text-emerald-50">
              Zero-interest loans. Repay comfortably over 2 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onApplyClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <button
                onClick={onApplyClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 bg-opacity-50 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-opacity-70 transition border-2 border-white border-opacity-30"
              >
                Check Eligibility
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-3xl opacity-10 transform rotate-6"></div>
              <div className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-30">
                <div className="flex items-center justify-center h-64">
                  <Smartphone className="h-32 w-32 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-center mt-4">
                  <p className="text-2xl font-bold">Fast & Secure</p>
                  <p className="text-emerald-100 mt-2">Instant mobile money transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
