import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['360° Branding']);
  const [budgetTier, setBudgetTier] = useState<string>('$25k – $50k');
  const [timeline, setTimeline] = useState<string>('6 – 8 Weeks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const servicesList = [
    '360° Branding',
    'Avant-Garde UI/UX Design',
    'Full-Stack Web Development',
    'Omnichannel Digital Marketing',
    '3D & Interactive Motion'
  ];

  const budgetOptions = ['<$25,000', '$25,000 – $50,000', '$50,000 – $100,000', '$100,000+'];
  const timelineOptions = ['Urgent (3–4 Wks)', 'Standard (6–8 Wks)', 'Upcoming Quarter', 'Ongoing Partnership'];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid business email';
    }
    if (!formData.company.trim()) newErrors.company = 'Please provide your company or brand name';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#0c0c10] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 my-auto"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-neutral-900/70">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
            <span>Direct Partner Inquiry</span>
            <span aria-hidden="true">·</span>
            <span>Atelier Booking</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/10 border border-amber-300/30 flex items-center justify-center text-amber-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-amber-300 font-mono">
                Inquiry Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                Your Brief is in Our Hands
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Julian Vance (Creative Director) and Kaelen Thorne (Lead Architect) will review <strong className="text-white">{formData.company}</strong> and reply directly within 24 hours.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-neutral-900/80 border border-white/[0.06] text-left text-xs text-neutral-300 space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-neutral-400">Selected Disciplines:</span>
                <span className="text-white font-medium">{selectedServices.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Budget Bracket:</span>
                <span className="text-white font-medium">{budgetTier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Projected Timeline:</span>
                <span className="text-white font-medium">{timeline}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 to-amber-300 rounded-sm hover:brightness-110 transition-all cursor-pointer"
            >
              Return to Showcase
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Initiate Your Transformation
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                Connect directly with our 5 specialists. We accept a maximum of 3 concurrent partner commissions to ensure uncompromising devotion.
              </p>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-300/90 mb-2">
                1. Select Desired Disciplines:
              </label>
              <div className="flex flex-wrap gap-2">
                {servicesList.map((srv) => {
                  const active = selectedServices.includes(srv);
                  return (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`px-3 py-2 text-xs rounded border transition-all cursor-pointer ${
                        active
                          ? 'bg-amber-300 text-black font-semibold border-amber-300'
                          : 'bg-neutral-900 text-neutral-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-300/90 mb-2">
                  2. Targeted Investment:
                </label>
                <select
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/15 rounded p-2.5 text-xs text-white focus:outline-none focus:border-amber-300"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-300/90 mb-2">
                  3. Timeline Target:
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/15 rounded p-2.5 text-xs text-white focus:outline-none focus:border-amber-300"
                >
                  {timelineOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-300/90">
                4. Primary Contact & Company:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-neutral-900 border rounded p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-white/15 focus:border-amber-300'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-neutral-900 border rounded p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-white/15 focus:border-amber-300'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company / Brand Name *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full bg-neutral-900 border rounded p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none ${
                      errors.company ? 'border-red-500' : 'border-white/15 focus:border-amber-300'
                    }`}
                  />
                  {errors.company && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Current Website (optional)"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/15 rounded p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-300"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us about the small seed or big vision you wish to scale..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-neutral-900 border border-white/15 rounded p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-300"
                />
              </div>
            </div>

            {/* Privacy notice and Submit button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-amber-300/80 shrink-0" />
                <span>NDA & strict confidentiality guaranteed</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_-3px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Strategic Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
