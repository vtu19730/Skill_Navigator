import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import RecommendationForm from './RecommendationForm';
import JobRecommendations from './JobRecommendations';
const Button = ({ onClick, children, variant, size, ...props }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded";
  const variantStyles = variant === "secondary" ? "bg-gray-500 text-white" : "bg-blue-500 text-white";
  const sizeStyles = size === "sm" ? "text-sm" : "text-base";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};
const Tabs = ({ value, onValueChange, children }) => (
  <div>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, { activeTab: value, onTabChange: onValueChange });
    })}
  </div>
);

const TabsList = ({ children, className }) => (
  <div className={`flex justify-center w-full ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ value, activeTab, onTabChange, children }) => (
  <button
    className={`mx-2 px-4 py-2 rounded-full border transition-all duration-200 ${
      activeTab === value
        ? "bg-blue-500 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
    onClick={() => onTabChange(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, activeTab, children }) => (
  <div className={activeTab === value ? "block" : "hidden"}>
    {children}
  </div>
);
const CareerNavigator = () => {
  const [activeTab, setActiveTab] = useState('job-roles');

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="flex items-center justify-between p-4 text-white">
        <h1 className="text-2xl font-bold">Skill Navigator</h1>
        <nav className="flex items-center space-x-4">
          <span className="font-medium">Naveen</span>
          <Button variant="secondary" size="sm">Profile</Button>
        </nav>
      </header>
      <div className="tabs-container py-4 ">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="max-w-lg mx-auto">
            <TabsTrigger value="job-roles" activeTab={activeTab} onTabChange={setActiveTab}>
              Job Role Recommendations
            </TabsTrigger>
            <TabsTrigger value="skill-navigator" activeTab={activeTab} onTabChange={setActiveTab}>
              Skill Navigator
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <main className="flex-grow p-6 ">
        <section className=" mx-auto">
          <TabsContent value="job-roles" activeTab={activeTab}>
          <JobRecommendations />
          </TabsContent>
          <TabsContent value="skill-navigator" activeTab={activeTab}>
          <RecommendationForm />
          </TabsContent>
        </section>
      </main>
    </div>
  );
};

export default CareerNavigator;
