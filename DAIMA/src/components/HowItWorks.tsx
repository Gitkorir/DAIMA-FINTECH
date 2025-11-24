import { FileText, Smartphone, CreditCard, CheckCircle, Banknote } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Fill in Your Details',
      description: 'Enter your full names and basic information',
    },
    {
      icon: Smartphone,
      title: 'Submit Demo ID Number',
      description: 'Provide simulated identification (test data only)',
    },
    {
      icon: CreditCard,
      title: 'Pay Registration Fee',
      description: 'Ksh 1,500 via MPESA sandbox (demo/test)',
    },
    {
      icon: CheckCircle,
      title: 'Get Instant Approval',
      description: 'Receive demo loan approval within 15 minutes',
    },
    {
      icon: Banknote,
      title: 'Receive Demo Funds',
      description: 'Get demo confirmation of loan disbursement',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your loan in 5 simple steps. Fast, secure, and hassle-free.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 text-white rounded-full shadow-lg mb-4 relative z-10">
                      <step.icon className="h-10 w-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm shadow-md z-20">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
