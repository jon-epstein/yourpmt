import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Clock,
  Wrench,
  DollarSign,
  FileText,
  Search,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PropertyManagementSite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-slate-800">
                Your Property Management Team
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="#home"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#contact"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Your Trusted Partner in Single-Family Property Management
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Managing homes across Los Angeles with care, efficiency, and local expertise.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Get a Free Rental Analysis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-home.jpg"
                alt="Modern Los Angeles Home"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine local expertise with modern technology to deliver exceptional property management services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Local LA Experts</h3>
                <p className="text-slate-600">Deep knowledge of Los Angeles neighborhoods and rental markets</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Transparent Pricing</h3>
                <p className="text-slate-600">No hidden fees, clear pricing structure with detailed reporting</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">24/7 Tenant Support</h3>
                <p className="text-slate-600">Round-the-clock support for tenant emergencies and inquiries</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Wrench className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Maintenance Coordination</h3>
                <p className="text-slate-600">Trusted network of licensed contractors and quick response times</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Our Services</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Leasing & Marketing</h3>
                    <p className="text-slate-600">
                      Professional photography, listing optimization, and tenant screening
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Rent Collection</h3>
                    <p className="text-slate-600">Automated collection systems with late fee enforcement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Tenant Screening</h3>
                    <p className="text-slate-600">Comprehensive background, credit, and employment verification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Maintenance & Repairs</h3>
                    <p className="text-slate-600">24/7 emergency response with vetted contractor network</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Financial Reporting</h3>
                    <p className="text-slate-600">Monthly statements with detailed income and expense tracking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services-home.jpg"
                alt="Property Management Services"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Your Property Management Leaders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With decades of combined experience in Los Angeles real estate, Matt and Emily Epstein bring unparalleled
              expertise to property management
            </p>
          </div>

          {/* Matt Epstein */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <Image
                src="/images/matt-epstein.jpg"
                alt="Matt Epstein"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Matt Epstein</h3>
                <p className="text-lg text-blue-600 font-semibold">Co-Founder & Managing Partner</p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Matt began investing in and selling real estate in the Los Angeles area in the 1980's. Prior to pursuing
                a full-time career in real estate, he founded and developed one of Southern California's largest direct
                marketing and fulfillment companies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                In 1995, he sold his interest in that company to concentrate solely on property investments and real
                estate sales. Matt co-formed the real estate team that grew to be known as Powerhouse Partners, one of
                the #1 real estate teams in the San Fernando Valley.
              </p>
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-sm text-slate-600">Property Transactions</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">$600M</div>
                  <div className="text-sm text-slate-600">In Completed Sales</div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Top 1% Agent</strong> • <strong>Luxury Property Specialist</strong>
                </p>
                <p className="text-sm text-slate-500 italic">
                  <strong>Fun Fact:</strong> Matt is an avid collector of all things vintage, including an impressive
                  collection of retro radios.
                </p>
              </div>
            </div>
          </div>

          {/* Emily Rose Epstein */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 lg:order-2">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Emily Rose Epstein</h3>
                <p className="text-lg text-blue-600 font-semibold">Co-Founder & Managing Partner</p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Emily Rose, a native of Los Angeles, is a third-generation real estate agent with deep roots in the
                industry. She grew up in the San Fernando Valley and holds a BA from the University of San Francisco.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                For the past seven years, she's been working and residing in East Los Angeles, gaining valuable
                experience in diverse neighborhoods. Emily Rose specializes in unique and historical properties with a
                keen eye for preserving their character.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Third-generation real estate agent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">University of San Francisco graduate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Specialist in unique & historical properties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Expert in diverse LA neighborhoods</span>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 italic">
                  <strong>Fun Fact:</strong> Emily Rose is a talented multi-instrumentalist musician, singer,
                  songwriter, and a curator at Zebulon in Atwater Village.
                </p>
              </div>
            </div>
            <div className="relative lg:order-1">
              <Image
                src="/images/emily-epstein.jpg"
                alt="Emily Rose Epstein"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Combined Stats */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Combined Expertise</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
                  <div className="text-sm text-slate-600">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Properties Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2nd</div>
                  <div className="text-sm text-slate-600">Generation Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Trusted by property owners and tenants across Los Angeles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic">
                  "They've managed my rental property for 3 years now. Professional, responsive, and they always keep me
                  informed. My property stays rented with quality tenants."
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold text-slate-900">Sarah M.</div>
                  <div className="text-sm text-slate-500">Property Owner, Sherman Oaks </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic">
                  "As a tenant, I appreciate their quick response to maintenance requests and professional
                  communication. They make renting stress-free."
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold text-slate-900">Michael R.</div>
                  <div className="text-sm text-slate-500">Tenant, Studio City </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic">
                  "Switched to them after a bad experience with another company. Night and day difference! They actually
                  care about maximizing rental income."
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold text-slate-900">Jennifer L.</div>
                  <div className="text-sm text-slate-500">Property Owner, Encino </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Let's Maximize Your Property's Potential</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to experience stress-free property management? Get started with a free rental analysis and discover
            how we can help you maximize your investment.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Your Property Management Team</h3>
              <p className="text-slate-300">Professional property management services across Los Angeles County.</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(818) REALATOR (732-2867) </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>somatt@aol.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#services" className="block text-slate-300 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#about" className="block text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <div className="space-y-2 text-slate-300">
                <div>DRE License #01121162</div>
                <Link href="#" className="block hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Your Property Management Team. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg px-6 py-3 rounded-full font-semibold">
          Talk to an Expert
        </Button>
      </div>
    </div>
  )
}
