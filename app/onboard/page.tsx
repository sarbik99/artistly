'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().max(200).required("Bio is required"),
  category: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one category is required")
    .required(),
  languages: yup
    .array()
    .of(yup.string().required())
    .min(1, "Select at least one language")
    .required(),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup
    .mixed<FileList>()
    .test("fileList", "Invalid file", (value) => {
      if (value == null) return true; 
      const file = value[0];
      if (!file) return true;
      return ["image/jpeg", "image/png", "image/webp"].includes(file.type);
    })
    .nullable()
    .notRequired(),
});


type FormValues = yup.InferType<typeof schema>;

export default function OnboardPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [] as string[],
      languages: [] as string[],
      fee: "",
      location: "",
      image: undefined,
    },
  });

  
  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    console.log("Form Data Submitted:", data);
    toast.success("Form submitted successfully!", {
      duration: 3000,
      position: "top-center",
    });
    reset();
    setLoading(false);
  };

  const categories = ["Singer", "Dancer", "DJ", "Speaker"];
  const languages = ["English", "Hindi", "Bengali", "Marathi"];

  return (
    <>
      <Header />
      <main className="px-4 py-10 min-h-screen bg-gradient-to-b from-[#EBECE1] to-white text-gray-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 relative"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
            Artist Onboarding Form
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input
                {...register("name")}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              />
              <p className="text-sm text-red-600">{errors.name?.message as string}</p>
            </div>

            {/* Bio */}
            <div>
              <label className="block font-medium text-gray-700">Bio</label>
              <textarea
                {...register("bio")}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                rows={3}
              />
              <p className="text-sm text-red-600">{errors.bio?.message as string}</p>
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      value={cat}
                      {...register("category")}
                    />
                    {cat}
                  </label>
                ))}
              </div>
              <p className="text-sm text-red-600">{errors.category?.message as string}</p>
            </div>

            {/* Languages */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Languages Spoken
              </label>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <label key={lang} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      value={lang}
                      {...register("languages")}
                    />
                    {lang}
                  </label>
                ))}
              </div>
              <p className="text-sm text-red-600">{errors.languages?.message as string}</p>
            </div>

            {/* Fee Range */}
            <div>
              <label className="block font-medium text-gray-700">
                Fee Range
              </label>
              <select
                {...register("fee")}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select Fee</option>
                <option value="10000-25000">₹10k - ₹25k</option>
                <option value="25000-50000">₹25k - ₹50k</option>
                <option value="50000+">₹50k+</option>
              </select>
              <p className="text-sm text-red-600">{errors.fee?.message as string}</p>
            </div>

            {/* Location */}
            <div>
              <label className="block font-medium text-gray-700">
                Location
              </label>
              <input
                {...register("location")}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              />
              <p className="text-sm text-red-600">{errors.location?.message as string}</p>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block font-medium text-gray-700">
                Profile Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                className="mt-1"
              />
              <p className="text-sm text-red-600">{errors.image?.message as string}</p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              style: {
                background: "#D1FAE5",
                color: "#065F46",
                border: "1px solid #10B981",
              },
            },
            error: {
              style: {
                background: "#FEE2E2",
                color: "#991B1B",
                border: "1px solid #EF4444",
              },
            },
          }}
        />
      </main>
    </>
  );
}
