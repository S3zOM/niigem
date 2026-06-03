"use client";

import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-2xl shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;
