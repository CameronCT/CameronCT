import Navigation from '@/components/Navigation';
import { ReactNode } from 'react';

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

const Main = (props: IMainProps) => (
    <div>
        {props.meta}
        <div className="tw-container">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-x-16 gap-y-6">
                    <div className="relative col-span-full lg:col-span-1">
                        <Navigation />
                    </div>
                    <div className="col-span-full lg:col-span-2 py-10 text-center lg:text-left">
                        {props.children}
                    </div>
                </div>
            </div>
            
            {/*
            <Navigation />
            {props.children}
            */}
        </div>
    </div>
);

export { Main };
