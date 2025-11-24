import { Clock, DollarSign, Calendar, Shield, Users, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: 'Instant Approval',
      description: 'Get approved within 15 minutes',
    },
    {
      icon: DollarSign,
      title: 'Up to Ksh 500,000',
      description: 'High loan limits for your needs',
    },
    {
      icon: Zap,
      title: '0% Interest',
      description: 'Repay only what you borrow (demo)',
    },
    {
      icon: Calendar,
      title: 'Flexible 24-Month Terms',
      description: 'Comfortable repayment period',
    },
    {
      icon: Shield,
      title: 'No Collateral',
      description: 'Quick loans without security',
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: '24/7 dedicated support team',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Daima Limited?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide fast, reliable, and transparent loan services designed
            for your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 text-emerald-600 rounded-lg mb-4">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}