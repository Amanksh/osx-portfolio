import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactWindow() {
  const contactInfo = {
    email: "amankushwaha933@gmail.com",
    phone: "+91 8924987442",
    location: "Lucknow, Uttar Pradesh, India",
    github: "github.com/Amanksh",
    linkedin: "www.linkedin.com/in/aman-kushwaha-939b73209",
  };

  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="text-xl font-bold mb-6 text-navy-900 border-b-2 border-pink-300 pb-2">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-navy-800">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-navy-700">
                Your Name
              </label>
              <Input
                placeholder="John Doe"
                className="border-navy-200 focus:border-pink-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-navy-700">
                Your Email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="border-navy-200 focus:border-pink-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-navy-700">
                Subject
              </label>
              <Input
                placeholder="Project Inquiry"
                className="border-navy-200 focus:border-pink-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-navy-700">
                Your Message
              </label>
              <Textarea
                placeholder="I'd like to discuss a potential project..."
                className="min-h-[120px] border-navy-200 focus:border-pink-400"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-navy-600 to-pink-500 hover:from-navy-700 hover:to-pink-600">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-navy-800">
            Connect With Me
          </h3>

          <div className="bg-navy-50 rounded-lg p-4 border border-navy-100 mb-6">
            <h4 className="text-sm font-medium text-navy-800 mb-3">
              Contact Information
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center  gap-2 p-2 rounded-lg hover:bg-navy-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-navy-700" />
                </div>
                <span className="text-sm text-navy-700">
                  {contactInfo.email}
                </span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-navy-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-navy-700" />
                </div>
                <span className="text-sm text-navy-700">
                  {contactInfo.phone}
                </span>
              </a>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-navy-100 transition-colors">
                <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-navy-700" />
                </div>
                <span className="text-sm text-navy-700">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-navy-50 rounded-lg p-4 border border-navy-100">
            <h4 className="text-sm font-medium text-navy-800 mb-3">
              Social Media
            </h4>
            <div className="space-y-3">
              <a
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-navy-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                  <Github className="w-4 h-4 text-navy-700" />
                </div>
                <span className="text-sm text-navy-700">
                  {contactInfo.github}
                </span>
              </a>
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-navy-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-navy-700" />
                </div>
                <span className="text-sm text-navy-700">
                  {contactInfo.linkedin}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
