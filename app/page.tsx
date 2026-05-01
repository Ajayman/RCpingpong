'use client'

import { useState } from 'react'
import { Menu, X, Trophy, Award, Users, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="fi fi-np"></span>
              {/* <Trophy className="w-6 h-6 text-primary" /> */}
              <span className="text-2xl font-bold">Rajeev Chikanbanjar</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold hover:text-primary transition-colors">ABOUT</button>
              <button onClick={() => scrollToSection('achievements')} className="text-sm font-semibold hover:text-primary transition-colors">ACHIEVEMENTS</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-semibold hover:text-primary transition-colors">GALLERY</button>
              <button onClick={() => scrollToSection('coaching')} className="text-sm font-semibold hover:text-primary transition-colors">COACHING</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold hover:text-primary transition-colors">CONTACT</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">ABOUT</button>
              <button onClick={() => scrollToSection('achievements')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">ACHIEVEMENTS</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">GALLERY</button>
              <button onClick={() => scrollToSection('coaching')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">COACHING</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-sm hover:text-primary transition-colors py-2">CONTACT</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/rajeev.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Professional Table Tennis<br />
              <span className="text-primary">Player & Coach</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated to excellence in competitive play and coaching. Building champions through technique, strategy, and dedication.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={() => scrollToSection('coaching')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Coaching
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-16">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary">15+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary">200+</div>
              <p className="text-sm text-muted-foreground">Students Coached</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary">50+</div>
              <p className="text-sm text-muted-foreground">Tournaments Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                With over 15 years of professional table tennis experience, I&apos;ve dedicated my career to mastering the sport and sharing my knowledge with the next generation of players.
              </p>
              <p className="text-lg leading-relaxed">
                My competitive journey has taken me across international tournaments, where I&apos;ve faced world-class opponents and consistently ranked in national top rankings. This experience informs every coaching session, ensuring my students benefit from proven strategies and techniques.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you&apos;re a beginner looking to learn fundamentals or an advanced player aiming for competition, I tailor my coaching approach to your specific goals and playing style.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-border rounded-lg p-6 bg-card/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Highlights
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ranked 3rd in National Championships Selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>International Ranking: Top 392</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>ITTF Level 2* Certified Coach - International Table Tennis Federation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>15+ Years Teaching Experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mentored National Championship Players</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Achievements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tournament Wins */}
            <div className="border border-border rounded-lg p-8 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Tournament Wins</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>National Championship - Recent 3rd Place</li>
                <li>Regional Open Series - 7 Titles</li>
                <li>International Invitational - 3 Titles</li>
                <li>Pro Circuit Tournaments - 12 Podium Finishes</li>
              </ul>
            </div>

            {/* Coaching Milestones */}
            <div className="border border-border rounded-lg p-8 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Coaching Success</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>200+ Students Trained</li>
                <li>5 National Championship Winners</li>
                <li>Beginner to Pro Development Programs</li>
                <li>Group Classes & Private Sessions</li>
              </ul>
            </div>

            {/* Rankings */}
            <div className="border border-border rounded-lg p-8 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Rankings</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>National Ranking: #3</li>
                <li>International Ranking: #392</li>
                <li>Career High: #8 National</li>
                <li>Consistent Top 20 (2015-Present)</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="border border-border rounded-lg p-8 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>ITTF Level 2* Coach Certification</li>
                <li>Sports Psychology</li>
                <li>Sports Nutrition Specialist</li>
                <li>Performance Analysis Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Gallery</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Large featured image */}
            <div className="md:row-span-2">
              <div className="relative rounded-lg overflow-hidden h-96 md:h-full">
                <img
                  src="/rajeev-dragons.jpg"
                  alt="Tournament champion celebration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold">Tournament Shoot</h3>
                    <p className="text-sm text-muted-foreground">Stag Team Championship</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top right image */}
            <div>
              <div className="relative rounded-lg overflow-hidden h-48 md:h-44">
                <img
                  src="/rajeev-wtt.jpg"
                  alt="Coaching instruction session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-bold">WTT Star Contender</h3>
                    <p className="text-xs text-muted-foreground">Chennei</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom right top */}
            <div>
              <div className="relative rounded-lg overflow-hidden h-48 md:h-64">
                <img
                  src="/rajeev-wtt2.jpg"
                  alt="Youth group class"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-bold"></h3>
                    <p className="text-xs text-muted-foreground">Group Training Program</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom right bottom */}
            <div>
              <div className="relative rounded-lg overflow-hidden h-48 md:h-64">
                <img
                  src="/rajeev-wtt3.jpg"
                  alt="Professional match in progress"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-bold">Tournament Play</h3>
                    <p className="text-xs text-muted-foreground">Competitive Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Services Section */}
      <section id="coaching" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Coaching Services</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Private Lessons */}
            <div className="border border-border rounded-lg p-8 bg-card/50">
              <h3 className="text-2xl font-bold mb-4">Private Lessons</h3>
              <p className="text-muted-foreground mb-6">
                Personalized one-on-one coaching tailored to your skill level and goals.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Technique & Stroke Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Match Strategy & Tactics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Mental Game Coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Equipment Selection Guide</span>
                </li>
              </ul>
              <p className="text-primary font-semibold">$60-80 per hour</p>
            </div>

            {/* Group Classes */}
            <div className="border border-border rounded-lg p-8 bg-card/50">
              <h3 className="text-2xl font-bold mb-4">Group Classes</h3>
              <p className="text-muted-foreground mb-6">
                Dynamic group coaching sessions for all skill levels.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Beginner Fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Intermediate Skill Building</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Competitive Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Friendly Match Practice</span>
                </li>
              </ul>
              <p className="text-primary font-semibold">$25-40 per session</p>
            </div>

            {/* Tournament Prep */}
            <div className="border border-border rounded-lg p-8 bg-card/50">
              <h3 className="text-2xl font-bold mb-4">Tournament Preparation</h3>
              <p className="text-muted-foreground mb-6">
                Specialized coaching for competitive players targeting tournaments.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Opponent Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Game Plan Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Match Simulation Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Performance Analytics</span>
                </li>
              </ul>
              <p className="text-primary font-semibold">Custom Packages</p>
            </div>

            {/* Youth Development */}
            <div className="border border-border rounded-lg p-8 bg-card/50">
              <h3 className="text-2xl font-bold mb-4">Youth Development</h3>
              <p className="text-muted-foreground mb-6">
                Specialized programs for young players age 6-18.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Fun Introduction to Sport</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Talent Identification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Development Pathway</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Scholastic & Competitive Goals</span>
                </li>
              </ul>
              <p className="text-primary font-semibold">$40-60 per session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-8">
                Ready to start your table tennis journey or elevate your game? I&apos;d love to discuss your goals and how I can help you achieve them.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:rajeevchikananjar@yahoo.com" className="text-primary hover:underline">
                      rajeevchikananjar@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      9849177926
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Lancha-10,<br />
                      Bhaktapur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-8 bg-card/50">
              <h3 className="text-2xl font-bold mb-6">Quick Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-md bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-md bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Tell me about your goals..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Rajeev Chikananjar - Professional Table Tennis Coach. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/athlete_rajeev/" className="text-sm text-primary hover:underline flex items-center gap-1">
              Instagram <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.facebook.com/rajeev.chikanbanjar/" className="text-sm text-primary hover:underline flex items-center gap-1">
              Facebook <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.tiktok.com/@thedragonsttclubb" className="text-sm text-primary hover:underline flex items-center gap-1">
              TikTok <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
