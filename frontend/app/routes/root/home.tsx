import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
      <div className="max-w-4xl w-full text-center space-y-8 p-8 rounded-xl shadow-xl bg-white">
        <h1 className="text-5xl font-extrabold text-blue-600">StackFlow</h1>
        <p className="text-blue-500 text-sm uppercase tracking-widest">
          smart project tracking
        </p>

        <p className="text-xl text-gray-600">
          Organize, Track, and Collaborate on your projects effortlessly.
        </p>

        <div className="flex justify-center gap-6">
          <Link to="/sign-in">
            <Button className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              Login
            </Button>
          </Link>

          <Link to="/sign-up">
            <Button
              variant="outline"
              className="px-6 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Empower your team with powerful project management tools.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
