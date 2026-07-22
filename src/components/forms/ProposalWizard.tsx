"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Building2,
  MapPin,
  Users,
  UtensilsCrossed,
  Clock,
  IndianRupee,
  Contact2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { INSTITUTION_TYPES, INDIAN_STATES } from "@/data/constants";

interface StepProps {
  data: any;
  update: (data: any) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const steps = [
  { id: "institution", label: "Institution", icon: Building2 },
  { id: "location", label: "Location", icon: MapPin },
  { id: "people", label: "People Count", icon: Users },
  { id: "meals", label: "Meal Types", icon: UtensilsCrossed },
  { id: "frequency", label: "Frequency", icon: Clock },
  { id: "budget", label: "Budget", icon: IndianRupee },
  { id: "contact", label: "Contact", icon: Contact2 },
];

export default function ProposalWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    institutionType: "",
    location: { city: "", state: "" },
    peopleCount: "",
    mealTypes: [] as string[],
    frequency: "",
    budget: "",
    contact: { name: "", phone: "", email: "" },
  });
  const [submitted, setSubmitted] = useState(false);

  const updateData = (update: any) => {
    setData((prev) => ({ ...prev, ...update }));
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-[#1f8b4c]/10 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-[#1f8b4c]" />
        </div>
        <h3 className="text-3xl font-bold text-[#1c1512] mb-4">
          Proposal Request Submitted!
        </h3>
        <p className="text-gray-500 max-w-lg mx-auto">
          Thank you for your interest in Kanhaji Hospitality. Our team will
          review your requirements and send you a customized proposal within 48
          hours.
        </p>
      </div>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <StepInstitution
            data={data}
            update={updateData}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <StepLocation
            data={data}
            update={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 2:
        return (
          <StepPeople
            data={data}
            update={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 3:
        return (
          <StepMeals
            data={data}
            update={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 4:
        return (
          <StepFrequency
            data={data}
            update={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 5:
        return (
          <StepBudget
            data={data}
            update={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 6:
        return (
          <StepContact
            data={data}
            update={updateData}
            onSubmit={handleSubmit}
            onPrev={handlePrev}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  i <= step
                    ? "bg-[#d48c2c] text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <s.icon className="h-4 w-4" />
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-8 md:w-16 h-1 mx-1 rounded ${
                    i < step ? "bg-[#d48c2c]" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((s, i) => (
            <span
              key={s.id}
              className={`text-xs font-medium hidden md:block ${
                i <= step ? "text-[#d48c2c]" : "text-gray-400"
              }`}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8 md:p-10">
        {renderStep()}
      </div>
    </div>
  );
}

function StepInstitution({ data, update, onNext }: StepProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c1512] mb-2">
        What type of institution?
      </h3>
      <p className="text-gray-500 mb-6">Select your institution category</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {INSTITUTION_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => {
              update({ institutionType: type });
              onNext?.();
            }}
            className={`p-4 rounded-xl border text-left transition-all ${
              data.institutionType === type
                ? "border-[#e8751a] bg-[#d48c2c]/5 text-[#d48c2c]"
                : "border-gray-200 hover:border-gray-300 text-gray-700"
            }`}
          >
            <span className="font-medium">{type}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepLocation({ data, update, onNext, onPrev }: StepProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c1512] mb-2">
        Where are you located?
      </h3>
      <p className="text-gray-500 mb-6">Tell us about your location</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            City
          </label>
          <input
            type="text"
            value={data.location.city}
            onChange={(e) =>
              update({ location: { ...data.location, city: e.target.value } })
            }
            placeholder="Enter city"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            State
          </label>
          <select
            value={data.location.state}
            onChange={(e) =>
              update({ location: { ...data.location, state: e.target.value } })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
          >
            <option value="">Select State</option>
            {INDIAN_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={onPrev} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors">
          Back
        </button>
        <Button onClick={onNext} variant="primary">
          Continue <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function StepPeople({ data, update, onNext, onPrev }: StepProps) {
  const counts = ["Under 100", "100 – 500", "500 – 1000", "1000 – 5000", "5000 – 10000", "10000+"];
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c1512] mb-2">
        How many people to serve?
      </h3>
      <p className="text-gray-500 mb-6">Approximate number of meals per day</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {counts.map((count) => (
          <button
            key={count}
            onClick={() => {
              update({ peopleCount: count });
            }}
            className={`p-4 rounded-xl border text-center transition-all ${
              data.peopleCount === count
                ? "border-[#e8751a] bg-[#d48c2c]/5 text-[#d48c2c] font-medium"
                : "border-gray-200 hover:border-gray-300 text-gray-700"
            }`}
          >
            {count}
          </button>
        ))}
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={onPrev} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors">
          Back
        </button>
        <Button onClick={onNext} variant="primary" disabled={!data.peopleCount}>
          Continue <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function StepMeals({ data, update, onNext, onPrev }: StepProps) {
  const mealOptions = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "snacks", label: "Evening Snacks" },
  ];

  const toggleMeal = (id: string) => {
    const meals = data.mealTypes.includes(id)
      ? data.mealTypes.filter((m: string) => m !== id)
      : [...data.mealTypes, id];
    update({ mealTypes: meals });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c1512] mb-2">
        Meal types required?
      </h3>
      <p className="text-gray-500 mb-6">Select all that apply</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {mealOptions.map((meal) => (
          <button
            key={meal.id}
            onClick={() => toggleMeal(meal.id)}
            className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
              data.mealTypes.includes(meal.id)
                ? "border-[#e8751a] bg-[#d48c2c]/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                data.mealTypes.includes(meal.id)
                  ? "border-[#e8751a] bg-[#d48c2c]"
                  : "border-gray-300"
              }`}
            >
              {data.mealTypes.includes(meal.id) && (
                <Check className="h-3 w-3 text-white" />
              )}
            </div>
            <span className="font-medium text-gray-700">{meal.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={onPrev} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors">
          Back
        </button>
        <Button onClick={onNext} variant="primary" disabled={data.mealTypes.length === 0}>
          Continue <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function StepFrequency({ data, update, onNext, onPrev }: StepProps) {
  const frequencies = [
    { value: "daily", label: "Daily", desc: "7 days a week" },
    { value: "weekdays", label: "Weekdays Only", desc: "Monday – Friday" },
    { value: "six-days", label: "6 Days a Week", desc: "Monday – Saturday" },
    { value: "custom", label: "Custom Schedule", desc: "As per your needs" },
  ];
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c1512] mb-2">
        Service frequency?
      </h3>
      <p className="text-gray-500 mb-6">How often do you need service?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {frequencies.map((f) => (
          <button
            key={f.value}
            onClick={() => {
              update({ frequency: f.value });
            }}
            className={`p-5 rounded-xl border text-left transition-all ${
              data.frequency === f.value
                ? "border-[#e8751a] bg-[#d48c2c]/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="font-medium text-gray-800">{f.label}</div>
            <div className="text-sm text-gray-500 mt-1">{f.desc}</div>
          </button>
        ))}
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={onPrev} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors">
          Back
        </button>
        <Button onClick={onNext} variant="primary" disabled={!data.frequency}>
          Continue <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function StepBudget({ data, update, onNext, onPrev }: StepProps) {
  const budgets = [
    "Under ₹50,000/month",
    "₹50,000 – ₹1,00,000/month",
    "₹1,00,000 – ₹5,00,000/month",
    "₹5,00,000 – ₹10,00,000/month",
    "₹10,00,000 – ₹50,00,000/month",
    "Above ₹50,00,000/month",
  ];
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c1512] mb-2">
        Your estimated budget?
      </h3>
      <p className="text-gray-500 mb-6">Monthly catering budget range</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {budgets.map((b) => (
          <button
            key={b}
            onClick={() => {
              update({ budget: b });
            }}
            className={`p-4 rounded-xl border text-center transition-all ${
              data.budget === b
                ? "border-[#e8751a] bg-[#d48c2c]/5 text-[#d48c2c] font-medium"
                : "border-gray-200 hover:border-gray-300 text-gray-700"
            }`}
          >
            {b}
          </button>
        ))}
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={onPrev} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors">
          Back
        </button>
        <Button onClick={onNext} variant="primary" disabled={!data.budget}>
          Continue <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function StepContact({ data, update, onSubmit, onPrev }: any) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c1512] mb-2">
        Your contact details
      </h3>
      <p className="text-gray-500 mb-6">
        Where should we send the proposal?
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={data.contact.name}
            onChange={(e) =>
              update({ contact: { ...data.contact, name: e.target.value } })
            }
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            value={data.contact.phone}
            onChange={(e) =>
              update({ contact: { ...data.contact, phone: e.target.value } })
            }
            placeholder="10-digit mobile number"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={data.contact.email}
            onChange={(e) =>
              update({ contact: { ...data.contact, email: e.target.value } })
            }
            placeholder="email@organization.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={onPrev} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors">
          Back
        </button>
        <Button onClick={onSubmit} variant="secondary" size="lg">
          Submit Proposal Request <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
