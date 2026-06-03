"use client";

import React from "react";

export function Button({ children, className = "", variant, ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium focus:outline-none";
  const variants = {
    outline: "border border-slate-300 bg-transparent text-slate-800",
    default: "bg-slate-900 text-white",
  };

  const v = variant && variants[variant] ? variants[variant] : variants.default;

  return (
    <button className={`${base} ${v} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
