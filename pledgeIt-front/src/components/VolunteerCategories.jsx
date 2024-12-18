import React from 'react';

const volunteerCategories = [
    { id: 1, name: 'Health', icon: null },
    { id: 2, name: 'Animals', icon: null },
    { id: 3, name: 'Nature', icon: null },
    { id: 4, name: 'People with Disabilities', icon: null },
    { id: 5, name: 'Elderly Care', icon: null },
    { id: 6, name: 'Education', icon: null },
    { id: 7, name: 'Child Care', icon: null },
    { id: 8, name: 'Hunger', icon: null },
    { id: 9, name: 'Disaster Relief', icon: null },
];

const VolunteerCategories = () => {
    return (
        <>
        <div className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="What do you want to volunteer for?"
                className="w-full max-w-lg rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div className="flex items-center justify-center min-h-screen">
            <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3 p-4">
                {volunteerCategories.map((category) => (
                    <div key={category.id} className="group">
                        <div className="w-80 h-60 rounded-md bg-gray-200 group-hover:opacity-75 flex items-center justify-center">
                            {category.icon ? (
                                <img
                                    src={category.icon}
                                    className="h-8 w-8 object-contain"
                                    alt={category.name}
                                />
                            ) : (
                                <div className="text-gray-400 text-2xl">-</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default VolunteerCategories;