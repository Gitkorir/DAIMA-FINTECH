import { Target, Eye, Heart, Shield, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear terms and conditions with no hidden charges',
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Lightning-fast loan approval within 15 minutes',
    },
    {
      icon: Users,
      title: 'Reliability',
      description: 'Trusted by thousands of satisfied customers',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Dedicated support team available 24/7',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Daima Limited</h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Revolutionizing digital microfinance in Kenya through innovative
              mobile-first lending solutions
            </p>
            <p className="text-sm text-emerald-100 mt-4">(Demo Educational Platform)</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Educational Demo Notice:</strong> Daima Limited is a fictional company
            created for educational and learning purposes. This website demonstrates full-stack
            web development skills including React, TypeScript, Tailwind CSS, and Supabase
            integration. No real financial services are provided.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-lg mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide accessible, fast, and transparent financial solutions to
              individuals and small businesses across Kenya. We believe everyone
              deserves access to fair financial services without the burden of
              excessive interest rates or complex requirements.
            </p>
            <p className="text-sm text-gray-500 mt-4 italic">
              (Demo mission statement for educational purposes)
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-lg mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become the leading digital microfinance platform in East Africa,
              empowering millions with instant access to financial resources
              through innovative mobile technology. We envision a future where
              financial inclusion is a reality for all.
            </p>
            <p className="text-sm text-gray-500 mt-4 italic">
              (Demo vision statement for educational purposes)
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Company Overview
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Daima Limited is a digital microfinance company that leverages mobile
                technology to provide instant loans to individuals across Kenya. Founded
                with the vision of democratizing access to financial services, we have
                helped thousands of customers meet their financial needs quickly and
                conveniently.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our innovative platform eliminates the traditional barriers to loan
                access, such as lengthy paperwork, collateral requirements, and long
                waiting periods. Through our mobile-first approach, customers can apply
                for and receive loans directly on their phones within minutes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We are committed to responsible lending practices and financial
                transparency. Our zero-interest loan model ensures that customers only
                repay what they borrow, making financial planning easier and more
                predictable.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-6">
                <p className="text-sm text-blue-800">
                  <strong>Developer Note:</strong> This company description is entirely
                  fictional and created for demonstration purposes to showcase web
                  development capabilities in building a modern, full-featured loan
                  application platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Zero-Interest Loans?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Our zero-interest loan model is built on the principle that access to
              capital should not come at an excessive cost. By eliminating interest
              charges, we help our customers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
              <li>Plan their finances more effectively with predictable repayments</li>
              <li>Avoid the debt trap that high-interest loans can create</li>
              <li>Build better financial habits and credit history</li>
              <li>Focus on growing their businesses or meeting personal needs</li>
            </ul>
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> The zero-interest model described here is a
                fictional demo scenario designed to illustrate various aspects of loan
                management systems. In reality, financial institutions must charge
                interest or fees to cover operational costs and risks.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the Daima Limited
            difference today
          </p>
          <button className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
            Apply for a Loan
          </button>
          <p className="text-sm text-emerald-100 mt-4">
            Demo project only • No real loans issued
          </p>
        </div>
      </div>
    </div>
  );
}
