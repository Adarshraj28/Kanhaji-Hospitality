"use client";

import { useState } from "react";
import { Send, CheckCircle, Upload } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { INDIAN_STATES, INSTITUTION_TYPES } from "@/data/constants";

interface FormData {
  organizationName: string;
  contactPerson: string;
  designation: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  institutionType: string;
  numberOfMeals: string;
  mealType: string;
  budget: string;
  expectedStartDate: string;
  message: string;
  preferredContactTime: string;
}

const initialFormData: FormData = {
  organizationName: "",
  contactPerson: "",
  designation: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  institutionType: "",
  numberOfMeals: "",
  mealType: "veg",
  budget: "",
  expectedStartDate: "",
  message: "",
  preferredContactTime: "",
};

interface LeadFormProps {
  variant?: "standard" | "minimal";
}

export default function LeadForm({ variant = "standard" }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      const { error } = await supabase.from("leads").insert([
        {
          organization_name: formData.organizationName,
          contact_person: formData.contactPerson,
          designation: formData.designation,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          state: formData.state,
          institution_type: formData.institutionType,
          number_of_meals: formData.numberOfMeals,
          meal_type: formData.mealType,
          budget: formData.budget,
          expected_start_date: formData.expectedStartDate,
          message: formData.message,
          preferred_contact_time: formData.preferredContactTime,
        },
      ]);
      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit lead:", err);
      alert("Something went wrong. Please try again or email us directly.");
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <Card className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#1f8b4c]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-[#1f8b4c]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1c1512] mb-3">
          Thank You for Your Enquiry!
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We have received your enquiry and our team will get in touch with you
          within 24 hours. A confirmation email has been sent to your email
          address.
        </p>
      </Card>
    );
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] transition-all duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";
  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Organization Name */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              placeholder="Enter your organization name"
              className={`${inputClass} ${errors.organizationName ? "border-red-300 focus:ring-red-200 focus:border-red-400" : ""}`}
            />
            {errors.organizationName && (
              <p className={errorClass}>{errors.organizationName}</p>
            )}
          </div>

          {/* Contact Person */}
          <div>
            <label className={labelClass}>
              Contact Person <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Full name"
              className={`${inputClass} ${errors.contactPerson ? "border-red-300" : ""}`}
            />
            {errors.contactPerson && (
              <p className={errorClass}>{errors.contactPerson}</p>
            )}
          </div>

          {/* Designation */}
          <div>
            <label className={labelClass}>Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Your role/title"
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={`${inputClass} ${errors.phone ? "border-red-300" : ""}`}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@organization.com"
              className={`${inputClass} ${errors.email ? "border-red-300" : ""}`}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          {/* City */}
          <div>
            <label className={labelClass}>
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className={`${inputClass} ${errors.city ? "border-red-300" : ""}`}
            />
            {errors.city && <p className={errorClass}>{errors.city}</p>}
          </div>

          {/* State */}
          <div>
            <label className={labelClass}>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select State</option>
              {INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Institution Type */}
          <div>
            <label className={labelClass}>Institution Type</label>
            <select
              name="institutionType"
              value={formData.institutionType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select type</option>
              {INSTITUTION_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Meals */}
          <div>
            <label className={labelClass}>Number of Meals Per Day</label>
            <input
              type="text"
              name="numberOfMeals"
              value={formData.numberOfMeals}
              onChange={handleChange}
              placeholder="Approximate count"
              className={inputClass}
            />
          </div>

          {/* Meal Type */}
          <div>
            <label className={labelClass}>Meal Preference</label>
            <div className="flex gap-4">
              {["veg", "both"].map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer text-sm transition-all ${
                    formData.mealType === type
                      ? "border-[#d48c2c] bg-[#d48c2c]/5 text-[#d48c2c]"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="mealType"
                    value={type}
                    checked={formData.mealType === type}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {type === "veg" ? "Only Vegetarian" : "Veg & Non-Veg"}
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className={labelClass}>Monthly Budget (₹)</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Approximate budget"
              className={inputClass}
            />
          </div>

          {/* Expected Start Date */}
          <div>
            <label className={labelClass}>Expected Start Date</label>
            <input
              type="date"
              name="expectedStartDate"
              value={formData.expectedStartDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Preferred Contact Time */}
          <div>
            <label className={labelClass}>Preferred Contact Time</label>
            <input
              type="text"
              name="preferredContactTime"
              value={formData.preferredContactTime}
              onChange={handleChange}
              placeholder="e.g. 10 AM - 2 PM"
              className={inputClass}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Message / Requirements</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your requirements, special dietary needs, or any questions..."
            className={inputClass}
          />
        </div>

        {/* File Upload */}
        <div>
          <label className={labelClass}>Upload Requirement Document (Optional)</label>
          <label className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-[#d48c2c]/50 transition-colors cursor-pointer block">
            <input
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              onChange={handleFileChange}
              className="hidden"
            />
            <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">
              Drop your file here or click to browse
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, DOC, XLS up to 10MB
            </p>
          </label>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-gray-400">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="text-[#e8751a] underline">
              Privacy Policy
            </a>
          </p>
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            loading={submitting}
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit Enquiry"}
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
}
