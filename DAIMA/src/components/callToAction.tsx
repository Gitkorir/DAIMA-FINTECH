import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onApplyClick: () => void;
}

export default function CallToAction({ onApplyClick }: CallToActionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Need Cash Fast?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50 mb-8 max-w-3xl mx-auto">
            Apply now and get approved in minutes. Simple, fast, and secure.
          </p>

          <button
            onClick={onApplyClick}
            className="inline-flex items-center px-10 py-5 bg-white text-emerald-600 rounded-lg font-bold text-xl hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
          >
            Start Application
            <ArrowRight className="ml-3 h-6 w-6" />
          </button>

          <p className="text-emerald-100 text-sm mt-6">
            Demo project • Educational purposes only • No real loans issued
          </p>
        </div>
      </div>
    </section>
  );
}
