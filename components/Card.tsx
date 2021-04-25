import { ClipboardCheckIcon } from '@heroicons/react/outline';

type CardProps = {
    card?: any;
};

export const Card: React.FC<CardProps> = ({}) => {
    return (
        <div className="border-2 border-indigo-500 h-20 rounded-md flex flex-col justify-between px-4 py-2">
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
    );
};

export default Card;
