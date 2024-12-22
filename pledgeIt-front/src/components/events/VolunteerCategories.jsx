import React from 'react';
import { Search } from 'lucide-react';

const volunteerCategories = [
    { id: 1, name: 'Health', icon: 'medical_services' },
    { id: 2, name: 'Animals', icon: 'pets' },
    { id: 3, name: 'Nature', icon: 'forest' },
    { id: 4, name: 'People with Disabilities', icon: 'accessible' },
    { id: 5, name: 'Elderly Care', icon: 'elderly' },
    { id: 6, name: 'Education', icon: 'menu_book' },
    { id: 7, name: 'Child Care', icon: 'child_care' },
    { id: 8, name: 'Hunger', icon: 'restaurant' },
    { id: 9, name: 'Disaster Relief', icon: 'emergency' },
];

const VolunteerCategories = () => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />

            <div className="flex flex-col items-center justify-center min-h-screen">

                <div className="w-full max-w-md mt-6 px-4 relative ">
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-600">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="What do you want to volunteer?"
                        className="bg-gray-200 w-full px-12 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-lg"
                    />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4 mt-4">
                    {volunteerCategories.map((category) => (
                        <div key={category.id} className="group relative">
                            <div className="w-80 h-60 rounded-xl bg-cream group-hover:opacity-75 flex items-center justify-center relative overflow-hidden">

                                <div className="absolute top-3 left-3 text-gray-800 font-semibold text-lg z-10">
                                    {category.name}
                                </div>

                                <div className="flex flex-col items-center justify-center rotate-[30deg] absolute bottom-3 right-0 overflow-hidden">
                                    <span className="material-icons text-pledgIt-red" style={{ fontSize: '180px', opacity: 0.7 }}>
                                        {category.icon}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VolunteerCategories;
