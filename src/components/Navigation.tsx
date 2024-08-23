"use client";
import { useState } from "react";
import { useNavigationStore } from "@/store/index";

const Navigation = () => {
  const { category, setCategory } = useNavigationStore();

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="navigation_wrap">
      <ul>
        <li>
          <button type="button" onClick={() => handleCategoryChange("all")}>
            All LIST
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleCategoryChange("react")}>
            REACT
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleCategoryChange("mySql")}>
            MY SQL
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleCategoryChange("springBoot")}
          >
            SPRING BOOT
          </button>
        </li>

        <li>
          <button type="button" onClick={() => handleCategoryChange("next")}>
            NEXT
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
