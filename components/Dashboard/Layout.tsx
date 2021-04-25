import Head from 'next/head';
import { Disclosure } from '@headlessui/react';
import { XIcon, MenuIcon, ClipboardCheckIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

type BoardLayoutProps = {
    title?: string;
    boardName: string;
};

const navigation = ['Boards', 'Settings'];

export const BoardLayout: React.FC<BoardLayoutProps> = ({ title = 'Dashboard', boardName, children }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <title>{title}</title>
            </Head>
            <div className="min-h-screen bg-gray-100">
                <div className="bg-indigo-600 pb-32">
                    <Disclosure
                        as="nav"
                        className="bg-indigo-600  border-b border-indigo-300 border-opacity-25 lg:border-none"
                    >
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                                    <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                                        <div className="px-2 flex items-center lg:px-0">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="block h-8 w-8"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="hidden lg:block lg:ml-10">
                                                <div className="flex space-x-4">
                                                    {navigation.map((item, itemIdx) =>
                                                        itemIdx === 0 ? (
                                                            <Fragment key={item}>
                                                                {/* Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" */}
                                                                <a
                                                                    href="#"
                                                                    className="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium"
                                                                >
                                                                    {item}
                                                                </a>
                                                            </Fragment>
                                                        ) : (
                                                            <a
                                                                key={item}
                                                                href="#"
                                                                className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
                                                            >
                                                                {item}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex lg:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="lg:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item, itemIdx) =>
                                            itemIdx === 0 ? (
                                                <Fragment key={item}>
                                                    {/* Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" */}
                                                    <a
                                                        href="#"
                                                        className="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium"
                                                    >
                                                        {item}
                                                    </a>
                                                </Fragment>
                                            ) : (
                                                <a
                                                    key={item}
                                                    href="#"
                                                    className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
                                                >
                                                    {item}
                                                </a>
                                            )
                                        )}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-white">{boardName}</h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 relative">
                        {/* Replace with your content */}
                        {children}
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    );
};

export default BoardLayout;
