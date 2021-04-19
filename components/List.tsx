import { ClipboardCheckIcon } from '@heroicons/react/outline';

export const List = () => {
    return (
        <div className="bg-white h-full min-w-[336px] px-5 pb-5 rounded-lg shadow-lg">
            <div className="h-full">
                <div className="bg-white px-4 py-5 border-b border-gray-200">
                    {/* Heading List  */}
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                        <div className="ml-4 mt-2">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">List Name</h3>
                        </div>
                        <div className="ml-4 mt-2 flex-shrink-0">
                            <button
                                type="button"
                                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Card
                            </button>
                        </div>
                    </div>
                    {/* End Heading List */}
                </div>
                {/* List Content */}
                <div className="mt-5">
                    <div className="border-2 border-indigo-500 h-20 rounded-md flex flex-col justify-between px-4 py-1">
                        <span className="text-sm">Card Title</span>
                        <div className="text-xs flex justify-between">
                            <div className="space-x-3">
                                <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium md:mt-2 lg:mt-0 bg-green-100 text-green-800">
                                    Front
                                </div>
                                <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium md:mt-2 lg:mt-0 bg-red-100 text-red-800">
                                    Back
                                </div>
                            </div>
                            <div>
                                <ClipboardCheckIcon className="h-5 w-5 text-gray-500 hover:text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End List Content */}
            </div>
        </div>
    );
};

export default List;
