"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().max(200).required("Bio is required"),
  category: yup.array().min(1, "At least one category is required"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup.mixed().notRequired(),
});

export default function OnboardPage() {
  const [successMessage, setSuccessMessage] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: "",
      image: undefined,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
    setSuccessMessage(true);
    toast.success("Form submitted successfully!", {
      duration: 3000,
      position: "top-center",
    });
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
          className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8"
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
              <p className="text-sm text-red-600">{errors.name?.message}</p>
            </div>

            {/* Bio */}
            <div>
              <label className="block font-medium text-gray-700">Bio</label>
              <textarea
                {...register("bio")}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                rows={3}
              />
              <p className="text-sm text-red-600">{errors.bio?.message}</p>
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
              <p className="text-sm text-red-600">{errors.category?.message}</p>
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
              <p className="text-sm text-red-600">
                {errors.languages?.message}
              </p>
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
              <p className="text-sm text-red-600">{errors.fee?.message}</p>
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
              <p className="text-sm text-red-600">{errors.location?.message}</p>
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
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
        {successMessage ? (
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
        ) : null}
      </main>
    </>
  );
}
