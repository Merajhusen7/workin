import React from 'react';
import { CalendarDays, GraduationCap, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';

function MVP() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="bg-indigo-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 mr-2" />
            <a className="text-xl font-bold" href="#home">AI Advisor</a>
          </div>
          <div className="hidden md:flex space-x-8">
            {/* <a href="#home" className="hover:text-indigo-200">Home</a> */}
            <a href="#features" className="hover:text-indigo-200">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-200">How It Works</a>
            <a href="#about" className="hover:text-indigo-200">About</a>
            <a href="#faq" className="hover:text-indigo-200">FAQ</a>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full text-white font-medium transition-colors">
            Try AI Advisor
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">AI-Powered Course Advising for Smarter Decisions</h1>
            <p className="text-xl mb-8">
              Navigate your academic journey with personalized recommendations, prerequisite mapping, and graduation path planning powered by cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-white font-medium transition-colors flex items-center justify-center">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-3 rounded-full text-white font-medium transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img 
                src="/api/placeholder/600/400" 
                alt="AI Advisor interface showing course recommendations" 
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Course Recommendations</h3>
              <p className="text-gray-600">
                Get personalized course suggestions based on your academic goals, interests, and previous coursework performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CalendarDays className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Degree Planning</h3>
              <p className="text-gray-600">
                Visualize your path to graduation with AI-powered semester planning that optimizes your course load and timeline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-900">24/7 Virtual Advising</h3>
              <p className="text-gray-600">
                Ask questions, explore options, and get guidance anytime with our AI advisor that's always available to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Connect Your Academic Data</h3>
              <p className="text-gray-600">
                Securely link your transcript, degree requirements, and academic preferences to create your profile.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Get Personalized Insights</h3>
              <p className="text-gray-600">
                Our AI analyzes your information to provide tailored course recommendations and degree planning options.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Make Informed Decisions</h3>
              <p className="text-gray-600">
                Use the interactive tools to explore options, ask questions, and confidently plan your academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About AI Advisor</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <p className="text-lg mb-6">
                AI Advisor Assistant was created by a team of education technology experts and data scientists who recognized the challenges students face when planning their academic journey.
              </p>
              <p className="text-lg mb-6">
                Our mission is to make quality academic advising accessible to every student, regardless of their institution's advisor-to-student ratio or availability constraints.
              </p>
              <p className="text-lg">
                Using advanced machine learning and natural language processing, AI Advisor provides guidance that's personalized, accurate, and available 24/7.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Team of developers behind AI Advisor" 
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-indigo-900">How accurate are the AI recommendations?</h3>
              <p className="text-gray-600">
                Our AI system is trained on extensive educational data and institutional requirements, achieving over 95% accuracy in course recommendations and prerequisite mapping.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Is my academic data secure?</h3>
              <p className="text-gray-600">
                Yes, we use enterprise-grade encryption and comply with FERPA regulations. Your data is never shared with third parties without explicit consent.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Can AI Advisor replace human advisors?</h3>
              <p className="text-gray-600">
                While AI Advisor provides valuable guidance, we view it as a complement to human advisors rather than a replacement. Complex situations may still benefit from human expertise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Which institutions support AI Advisor integration?</h3>
              <p className="text-gray-600">
                We currently integrate with over 200 colleges and universities nationwide, with new partnerships being added each semester. Contact us to check your institution's status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Academic Planning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have simplified their course selection and degree planning with AI Advisor.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-white font-medium transition-colors">
            Join Our Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">AI Advisor</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-200">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-200">Terms of Service</a>
              <a href="#" className="hover:text-indigo-200">Contact Us</a>
            </div>
          </div>
          <div className="mt-6 text-center text-indigo-300">
            <p>&copy; 2025 AI Advisor Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MVP