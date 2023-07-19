import React from 'react';
const Loader = () => {
    return (
        <div className="container  mx-auto">
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <progress className="progress w-56"></progress>
                </div>
            </div>
        </div>
    );
};

export default Loader;