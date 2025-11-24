import { CheckCircle } from 'lucide-react';

export default function Requirements() {
  const requirements = [
    'Full Names (demo/test)',
    'Simulated ID Number (test data only)',
    'Registration Fee: Ksh 1,500 (sandbox/demo only)',
    'Active MPESA phone number (sandbox/test)',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Simple requirements for your demo loan application
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="text-lg text-gray-700">{requirement}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Demo Notice:</strong> All requirements are for
                educational purposes only. Use test/sandbox data. Do not submit
                real personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
