import Card from '@components/Card';

export const List = () => {
    return (
        <div className="bg-white h-full min-w-[336px] px-5 pb-5 rounded-lg shadow-lg relative">
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
                <div className="mt-5 space-y-5">
                    {Array(3)
                        .fill(null)
                        .map((_element, index) => {
                            return <Card key={`card-${index * (Math.random() * 100)}`} />;
                        })}
                </div>
                {/* End List Content */}
            </div>
        </div>
    );
};

export default List;
