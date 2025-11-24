import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { LoanApplication } from '../types';

export default function Apply() {
  const [formData, setFormData] = useState<Partial<LoanApplication>>({
    full_name: '',
    id_number: '',
    phone_number: '',
    loan_amount: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'loan_amount' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!formData.full_name || !formData.id_number || !formData.phone_number || !formData.loan_amount) {
      setErrorMessage('Please fill in all fields');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (formData.loan_amount < 1000 || formData.loan_amount > 500000) {
      setErrorMessage('Loan amount must be between Ksh 1,000 and Ksh 500,000');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        full_name: '',
        id_number: '',
        phone_number: '',
        loan_amount: 0,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Demo Project Notice:</strong> This is an educational demo only.
                Use test data (e.g., ID: 12345678, Phone: 0700000000). No real loans are issued.
                No real payments are collected.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Loan Application
            </h1>
            <p className="text-emerald-50 text-lg">
              Complete the form below to apply for your instant loan
            </p>
          </div>

          <div className="p-8 md:p-12">
            {submitStatus === 'success' && (
              <div className="mb-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <p className="ml-3 text-emerald-700">
                    <strong>Application Submitted!</strong> Your demo loan application has been received.
                    This is a test submission only.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <p className="ml-3 text-red-700">
                    <strong>Error:</strong> {errorMessage}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID Number (Demo/Test) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="id_number"
                  value={formData.id_number}
                  onChange={handleChange}
                  placeholder="e.g., 12345678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Demo data only - do not use real ID numbers</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Demo/Test) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="e.g., 0700000000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Demo/sandbox MPESA number only</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (Ksh) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="loan_amount"
                  value={formData.loan_amount || ''}
                  onChange={handleChange}
                  placeholder="Enter amount (1,000 - 500,000)"
                  min="1000"
                  max="500000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Minimum: Ksh 1,000 | Maximum: Ksh 500,000</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Loan Details:</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Loan Limit:</strong> Up to Ksh 500,000 (demo)</p>
                  <p><strong>Interest Rate:</strong> 0% (demo scenario)</p>
                  <p><strong>Repayment Period:</strong> 24 months</p>
                  <p><strong>Processing Time:</strong> 15 minutes (demo)</p>
                  <p><strong>Registration Fee:</strong> Ksh 1,500 (sandbox/test)</p>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  I understand this is a demo/educational project. I agree to submit test data only
                  and acknowledge that no real loan will be issued. <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Eligibility Requirements:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              Must be 18 years or older
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              Kenyan citizen (demo)
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              Active MPESA sandbox account
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              Able to pay registration fee (demo/test)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
